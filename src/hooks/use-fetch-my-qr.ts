'use client';

import { useEffect } from 'react';
import { useFormStore } from '~/stores/use-form-store';

export default function FetchMyQR() {
  const { fetchMyQRData, qrData } = useFormStore();

  useEffect(() => {
    if (qrData.username === '') {
      fetchMyQRData();
    }
  }, [qrData, fetchMyQRData]);

  return null;
}
