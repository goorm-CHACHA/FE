import React from 'react';

interface RegisterProps {
  title: string;
  subtitle: string;
  form: React.ReactNode;
}

const RegisterTemplete = ({ title, subtitle, form }: RegisterProps) => {
  return (
    <div className="flex flex-col w-full h-[684px]">
      <div className="h-[100px] text-left">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-sm mt-2 whitespace-pre-line text-zinc-500 leading-5">
          {subtitle}
        </p>
      </div>
      <div className="flex-1">{form}</div>
    </div>
  );
};

export default RegisterTemplete;
