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
