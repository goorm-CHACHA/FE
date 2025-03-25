import { QRCodeType } from '~/types/form';
import api from '~/utils/api/api';
import { formatFromQRList, formatToQRDB } from '~/utils/format-form-data';

export async function addCard(data: QRCodeType) {
  try {
    const formatted = formatToQRDB(data);
    const res = await api.post('/api/business-cards', formatted);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCard() {
  try {
    const res = await api.get('/api/business-cards', undefined);
    const formatted = formatFromQRList(res.data);
    return formatted;
  } catch (error) {
    console.error(error);
  }
}
