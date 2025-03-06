'use client';

import Link from 'next/link';
import React from 'react';

const Page = () => {
  const signOutHandler = () => {
    console.log('hello ');
  };
  return (
    <div>
      <div>내 정보 수정</div>
      {/* ⬆️ 아코디언 */}
      <div>내 명함 수정</div>
      {/* ⬆️ 아코디언 */}
      <div>
        <Link href="/mypage/name-card-list">저장한 명함 목록</Link>
      </div>
      <div>
        <Link href="/qr-reader">QR</Link>
      </div>
      <div onClick={signOutHandler}> 로그아웃</div>
    </div>
  );
};

export default Page;
