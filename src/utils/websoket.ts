let socket: WebSocket | null = null;
let onMessageCallback: ((message: string) => void) | null = null;

// WebSocket 연결 함수
export const connectWebSocket = (
  chatRoomId: number,
  onReady?: (chatRoomId: number) => void, // WebSocket 연결 완료 후 콜백
  onMessage?: (message: string) => void, // 메시지 수신 처리 콜백
) => {
  socket = new WebSocket(
    `ws://${process.env.NEXT_PUBLIC_WS_API_URL}/chats?chatRoomId=${chatRoomId}`,
  );

  // 메시지 수신 콜백 설정
  if (onMessage) {
    onMessageCallback = onMessage;
  }

  socket.onopen = () => {
    console.log(`✅ WebSocket Connected to chat room ${chatRoomId}`);
    if (onReady) {
      onReady(chatRoomId); // 연결 후 콜백 호출
    }
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    console.log('📩 메시지 수신:', data);

    if (onMessageCallback) {
      onMessageCallback(event.data); // 기존 콜백 유지
    }

    // messageType 분기
    switch (data.messageType) {
      case 'request':
        console.log(`🔔 채팅 요청 도착 from User ${data.requesterId}`);
        // → 이 부분에서 알림 UI 상태 업데이트 (ex. setNotificationVisible(true))
        break;

      case 'accept':
        console.log(`✅ 채팅 수락 완료 → 채팅방 ID: ${data.chatRoomId}`);
        break;

      case 'message':
        console.log(`💬 메시지 도착: ${data.message}`);
        break;

      default:
        console.warn('알 수 없는 messageType:', data.messageType);
    }
  };

  socket.onclose = () => {
    console.log('WebSocket Disconnected');
  };

  socket.onerror = (error) => {
    console.error('WebSocket Error', error);
  };
};

// 채팅 수락 API 호출 및 WebSocket 연결
// 채팅 수락 시, 이미 채팅방에 소속되어 있으면 그냥 연결 처리
export const acceptChat = async (requesterId: number, receiverId: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_API_URL}/chats/private-chatroom/accept`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requesterId, receiverId }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      if (data.code === 'ALREADY_IN_CHAT') {
        console.log(
          '이미 채팅방에 소속되어 있습니다. 채팅방에 바로 연결합니다.',
        );
        // 이미 채팅방에 소속되어 있으면 WebSocket 연결만 처리
        connectWebSocket(data.privateChatRoomId, () => {
          console.log('✅ WebSocket 연결 성공');
        });
        return;
      }
      console.error('채팅 수락 오류:', data);
      throw new Error(`채팅 수락 실패: ${data.message || '알 수 없는 오류'}`);
    }

    const chatRoomId = data.privateChatRoomId;
    console.log('✅ 채팅방 ID:', chatRoomId);

    // WebSocket 연결
    connectWebSocket(
      chatRoomId,
      () => {
        console.log('✅ WebSocket 연결 성공');
      },
      (message) => {
        console.log('📩 메시지 수신:', message);
      },
    );
  } catch (error) {
    console.error('채팅 수락 실패:', error);
  }
};

// 채팅 요청 API 호출
export const requestChat = async (requesterId: number, receiverId: number) => {
  try {
    // 채팅 요청 API 호출
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_API_URL}/chats/private-chatroom/request`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ requesterId, receiverId }),
      },
    );

    const data = await response.json();
    const chatRoomId = data.privateChatRoomId; // 채팅방 ID 받아옴
    console.log('채팅방 ID:', chatRoomId);

    // WebSocket 연결
    connectWebSocket(
      chatRoomId,
      () => {
        console.log('✅ WebSocket 연결 성공');
      },
      (message) => {
        console.log('📩 메시지 수신:', message); // 수신된 메시지 처리
      },
    );
  } catch (error) {
    console.error('채팅 요청 실패:', error);
  }
};

// 1. 채팅방 존재 여부 확인 함수
export const checkExistingChatRoom = async (
  requesterId: number,
  receiverId: number,
): Promise<number | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HTTP_API_URL}/chats/private-chatroom/check`, // <== 여기는 백엔드 확인 필요
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requesterId, receiverId }),
      },
    );

    if (!response.ok) return null;

    const data = await response.json();
    return data.privateChatRoomId || null;
  } catch (error) {
    console.error('채팅방 존재 확인 실패:', error);
    return null;
  }
};

// 2. 통합 처리 함수 (체크 + accept + 연결)
export const handleChatAcceptFlow = async (
  requesterId: number,
  receiverId: number,
) => {
  try {
    // 1. 채팅방 존재 확인
    const existingChatRoomId = await checkExistingChatRoom(
      requesterId,
      receiverId,
    );

    if (existingChatRoomId) {
      console.log('💬 기존 채팅방 존재:', existingChatRoomId);
      connectWebSocket(existingChatRoomId);
    } else {
      console.log('✅ 채팅방 없음 → 채팅 수락 진행');
      await acceptChat(requesterId, receiverId);
    }
  } catch (error) {
    console.error('handleChatAcceptFlow 오류:', error);
  }
};

// 메시지 전송 함수
export const sendMessage = (message: string) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(message);
    console.log('📤 Message sent:', message);
  } else {
    console.error('❌ WebSocket is not open or socket is null');
  }
};

// WebSocket 연결 종료
export const disconnectWebSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};
