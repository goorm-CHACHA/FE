import React from 'react';
import InterestForm from '~/components/register/interest-form';
import RegisterTemplete from '~/components/register/register-templete';

const RegisterInterest = () => {
  return (
    <RegisterTemplete
      title="관심사를 입력하세요"
      subtitle="네트워킹을 위해 관심사를 3개 이상 입력해주세요"
      form={<InterestForm />}
    />
  );
};

export default RegisterInterest;
