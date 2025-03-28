import api from './api';

export async function requestTable(chatRoomId: number) {
  try {
    await api.post(`/api/networking-table/apply/${chatRoomId}`);
  } catch (error) {
    console.log(error);
  }
}

export async function cancelTable(chatRoomId: number) {
  try {
    await api.post(`/api/networking-table/apply/${chatRoomId}`);
  } catch (error) {
    console.log(error);
  }
}

export async function startNetworking(userId: number, tableNumber: string) {
  try {
    await api.post('/api/networking-table/start', {
      userId,
      tableNumber,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function endsNetwork(userId: number, tableNumber: string) {
  try {
    await api.post('/api/networking-table/end', {
      userId,
      tableNumber,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function reserveTable() {
  try {
    await api.post('/api/reservation/create');
  } catch (error) {
    console.log(error);
  }
}

export async function consentReservation(chatRoomId: number, userId: number) {
  try {
    await api.post('/api/reservation/consent', {
      chatRoomId,
      userId,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getWaitTime(chatRoomId: number): Promise<number> {
  try {
    const response = await api.get(`/api/reservation/wait-time/${chatRoomId}`);
    console.log('✅ waitTime 응답 성공:', response.data); // 여기서 응답 확인
    return response.data.waitTime; // <- 백엔드 응답 구조에 맞게 조정!
  } catch (error) {
    console.error('⛔️ waitTime 요청 실패:', error);
    return 0; // 실패 시 기본값
  }
}
