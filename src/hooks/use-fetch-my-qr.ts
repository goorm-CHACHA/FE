'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFormStore } from '~/stores/use-form-store';

function getAccessTokenFromCookie(): string | null {
  // 이 부분도 수정
  const match = document.cookie.match(/(?:^|;\s*)access_token=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}

export default function FetchMyQR() {
  const { fetchMyQRData } = useFormStore();
  const router = useRouter();

  useEffect(() => {
    const token = getAccessTokenFromCookie();

    if (!token) {
      router.replace('/');
    } else {
      fetchMyQRData();
    }
  }, [fetchMyQRData, router]);

  return null;
}
