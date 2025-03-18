const API_URL = `http://${process.env.NEXT_PUBLIC_API_URL}/chats/private-chatroom/request`; // Spring Boot API 서버

export const sendChatRequestAPI = async (
  requesterId: number,
  receiverId: number,
) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        requesterId: requesterId.toString(),
        receiverId: receiverId.toString(),
      }),
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // 에러 메시지 출력
      console.error('Response Error:', errorMessage);
      throw new Error('채팅 요청 실패');
    }

    alert('✅ 채팅 요청이 전송되었습니다!');
  } catch (error: any) {
    // console.error('⚠️ Error sending chat request:', error);
    console.error('Error details:', error.message);

    alert('❌ 채팅 요청 실패');
  }
};

// 채팅 수락 요청 함수
export const acceptChatRequestAPI = async (
  requesterId: number,
  receiverId: number,
) => {
  try {
    const response = await fetch(
      'http://3.37.80.119:8081/chats/private-chatroom/accept',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          requesterId,
          receiverId,
        }),
      },
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error('Error accepting chat request:', errorMessage);
      throw new Error('채팅 수락 실패');
    }

    const data = await response.json();
    console.log('채팅 수락 후 데이터:', data); // chatRoomId 확인
    return data; // chatRoomId 반환
  } catch (error) {
    console.error('채팅 수락 실패:', error);
    throw new Error('채팅 수락 실패');
  }
};
