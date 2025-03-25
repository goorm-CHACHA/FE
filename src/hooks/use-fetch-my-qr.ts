'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormStore } from '~/stores/use-form-store';

export default function FetchMyQR() {
  const { fetchMyQRData, qrData } = useFormStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // qrData.name이 undefined면 '/'로 이동
    if (qrData.name === undefined) {
      router.replace('/');
      return;
    }

    // qrData.name이 falsy하고, 현재 경로가 '/'가 아닐 경우만 fetch
    if (!qrData.name && pathname !== '/') {
      fetchMyQRData().catch(() => {
        router.replace('/home');
      });
    }
  }, [qrData.name, fetchMyQRData, router, pathname]);

  return null;
}
