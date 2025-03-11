import React from 'react';
import ProfileForm from '~/components/register/profile-form';
import RegisterTemplete from '~/components/register/register-templete';

const RegisterPage = () => {
  return (
    <RegisterTemplete
      title="프로필을 입력해주세요."
      subtitle="해당 정보는 온라인 명함에 반영됩니다."
    >
      <ProfileForm />
    </RegisterTemplete>
  );
};

export default RegisterPage;
