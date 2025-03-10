import React, { useEffect, useState } from 'react';
import InputField from './input-field';

interface UserData {
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
}

interface InfoOptionalProps {
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

const InfoOptional = ({ userData, onUserDataChange }: InfoOptionalProps) => {
  const [inputValue, setInputValue] = useState(userData.introduce);
  const [contactValue, setContactValue] = useState(userData.contact);
  // const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // userData가 변경되면 상태 업데이트
    setInputValue(userData.introduce);
    setContactValue(userData.contact);
  }, [userData]);

  // 👀 버튼 통해서 수정한다는 가정 하에..
  // useEffect(()=>{
  //   if(isEditing){
  //     const inputEl = document.querySelector<HTMLInputElement>('input[data-editable');
  //     if (inputEl) inputEl.focus();
  //     setInputValue("")
  //   }
  // },[isEditing])

  // 상위에서 받아오기
  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof UserData,
  ) => {
    setInputValue(e.target.value);
    onUserDataChange(key, e.target.value);
  };
  const handleChangeTextArea = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    key: keyof UserData,
  ) => {
    setContactValue(e.target.value);
    onUserDataChange(key, e.target.value);
  };

  // 👀 버튼.. 혹시 모름
  // const handleToggleEdit = () => {
  //   setIsEditing((prev) => !prev);
  // };

  if (!userData) {
    return <div>사용자 데이터를 찾을 수 없습니다.</div>;
  }

  // const dataEntries = Object.entries(userData).filter(([key]) =>
  //   key === "introduce" || key === "contact"
  // );

  return (
    <form className="flex flex-col gap-2">
      <div className="flex relative w-full">
        <InputField
          label="자기소개"
          key={userData.id}
          value={inputValue}
          onChange={(e) => handleChangeInput(e, 'introduce')}
          data-editable
        />
        {/* <span 
        className="absolute cursor-pointer -right-2 top-1/2 -translate-y-1/2" 
        onClick={handleToggleEdit}
      >
        {isEditing ? "✔" : "✏️"}
      </span> */}
      </div>
      <label className="text-sm font-medium">연락수단</label>
      <div className="relative">
        <textarea
          className="bg-gray-400/50 p-2 rounded-md w-full min-h-[100px] outline-none"
          value={contactValue}
          onChange={(e) => handleChangeTextArea(e, 'contact')}
        />
        {/* <span 
        className="absolute cursor-pointer -right-4 top-1/2 -translate-y-1/2" 
        onClick={handleToggleEdit}
      >
        {isEditing ? "✔" : "✏️"}
      </span> */}
      </div>
    </form>
  );
};

export default InfoOptional;
