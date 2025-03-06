import React from 'react';
import ProfileForm from '~/components/pre-register/profile-form';

const PreRegisterPage = () => {
  return (
    <div className="w-full text-left">
      <p className="font-bold text-xl">프로필을 입력해주세요.</p>
      <p className="text-sm mt-2 whitespace-pre-line text-zinc-500 leading-5">
        해당 정보는 온라인 명함에 반영됩니다.
      </p>
      <ProfileForm />
    </div>
  );
};

export default PreRegisterPage;
