import React from 'react';

interface InputFieldProps {
  value: string;
  children?: React.ReactNode;
  label?: string;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField = ({
  value,
  label,
  readOnly,
  onChange,
  className,
}: InputFieldProps) => {
  return (
    <div
      className={`flex gap-2 justify-start items-center bg-gray-400/50 p-1 px-2 rounded-md ${className}`}
    >
      {label ? <p className="font-bold">{label}</p> : null}
      <input
        type="text"
        className="bg-transparent p-1 px-2 rounded-md outline-none"
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default InputField;
