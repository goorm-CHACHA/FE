import React from 'react';
import InterestForm from '~/components/register/interest-form';
import RegisterTemplete from '~/components/register/register-templete';

const RegisterInterest = () => {
  return (
    <RegisterTemplete
      title="관심 분야를 선택하세요"
      subtitle="관심분야를 선택하세요. (최대 3개)"
      form={<InterestForm />}
    />
  );
};

export default RegisterInterest;
