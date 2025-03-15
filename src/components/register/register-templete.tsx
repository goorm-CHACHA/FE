import React from 'react';

interface RegisterProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const RegisterTemplete = ({ title, subtitle, children }: RegisterProps) => {
  return (
    <div className="flex flex-col w-full h-[684px]">
      <div className="h-[100px] text-left">
        <p className="font-bold text-xl text-white">{title}</p>
        <p className="text-sm mt-2 whitespace-pre-line text-gray-neutral-400 leading-5">
          {subtitle}
        </p>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default RegisterTemplete;
