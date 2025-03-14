import React, { useEffect, useState } from 'react';
import InputField from './input-field';
import { UserData } from '~/types/user.types';

interface InfoRequiredProps {
  userData: {
    profileImage: string;
    name: string;
    position: string;
    joinedAt: string;
    interest: string[];
    email: string;
    id: string;
    password: string;
    introduce: string;
    contact: string;
    purpose: string[];
  };
  onUserDataChange: (key: keyof UserData, value: string | string[]) => void;
}

const InfoRequired = ({ userData, onUserDataChange }: InfoRequiredProps) => {
  const [localUserData, setLocalUserData] =
    useState<Record<string, string | string[]>>(userData);

  useEffect(() => {
    setLocalUserData(userData);
  }, [userData]);

  console.log('localUserData :', localUserData);
  if (!userData) {
    return <div>사용자 데이터를 찾을 수 없습니다.</div>;
  }

  const dataEntries = Object.entries(localUserData)
    .filter(
      ([key]) =>
        key !== 'profileImage' && key !== 'introduce' && key !== 'contact',
    )
    .map(([key, value]) => [String(key), value]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof UserData,
    index?: number,
  ) => {
    const newValue = e.target.value;

    onUserDataChange(key, newValue);

    setLocalUserData((prevData) => {
      const updatedData = { ...prevData };

      if (Array.isArray(updatedData[key])) {
        // 배열 데이터일 경우 특정 index의 값만 변경
        const updatedArray = [...(updatedData[key] as string[])];
        if (index !== undefined) {
          updatedArray[index] = newValue;
        }
        updatedData[key] = updatedArray;
        onUserDataChange(key, updatedArray);
      } else {
        // 일반 string 값일 경우
        updatedData[key] = newValue;
        onUserDataChange(key, newValue);
      }

      return updatedData;
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {dataEntries.map(([key, value]) => {
        if (Array.isArray(value)) {
          console.log('Rendering Key for Array', key, 'value: ', value);
          return (
            <div key={String(key)} className="flex flex-col gap-2">
              <label className="font-bold">{key}</label>
              {value.map((item, index) => (
                <InputField
                  key={`${key}-${index}`}
                  // label={`${key} ${index + 1}`}
                  value={item}
                  onChange={(e) =>
                    handleChange(e, key as keyof UserData, index)
                  }
                  className="w-fit p-0"
                  readOnly
                />
              ))}
            </div>
          );
        } else {
          console.log('Rendering Key for Array', key, 'value: ', value);
          return (
            <InputField
              key={String(key)}
              label={String(key)}
              value={String(value)} // 문자열 변환
              readOnly={key === 'name'}
              onChange={(e) => handleChange(e, key as keyof UserData)}
            />
          );
        }
      })}
    </div>
  );
};

export default InfoRequired;
