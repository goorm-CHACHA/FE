import React from 'react';
import ProfileForm from '~/components/register/profile-form';
import RegisterTemplete from '~/components/register/register-templete';

const RegisterPage = () => {
  return (
    <RegisterTemplete
      title="🎉 컨퍼런스 사전 등록"
      subtitle={`안녕하세요, 이번 컨퍼런스에 참가하시는 여러분을 환영합니다. 행사 기간 동안 세션 출입, 네트워킹, 온라인 명함 교환 등 다양한 활동을 원활하게 이용하시려면 사전 등록이 필요합니다. \n✅ 사전 등록을 완료하시면 행사 참가를 위한 개인 QR 코드가 발급됩니다.`}
    >
      <ProfileForm />
    </RegisterTemplete>
  );
};

export default RegisterPage;
