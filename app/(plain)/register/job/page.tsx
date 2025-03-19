'use client';
import React from 'react';
import JobSelect from '~/components/register/job-form';
import RegisterTemplete from '~/components/register/register-templete';

const RegisterJob = () => {
  return (
    <RegisterTemplete
      title="프로필을 입력해주세요."
      subtitle="해당 정보는 온라인 명함에 반영됩니다."
    >
      <JobSelect />
    </RegisterTemplete>
  );
};

export default RegisterJob;
