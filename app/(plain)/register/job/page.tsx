'use client';
import React from 'react';
import JobForm from '~/components/register/job-form';
import RegisterTemplete from '~/components/register/register-templete';

const RegisterJob = () => {
  return (
    <RegisterTemplete
      title="어떤 직무에 종사중이신가요? 관심이 있는 직무를 알려주셔도 좋아요"
      subtitle="입력하신 데이터는 네트워크 매칭에 이용됩니다."
      form={<JobForm />}
    />
  );
};

export default RegisterJob;
