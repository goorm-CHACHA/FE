'use client';

import { useForm, FormProvider } from 'react-hook-form';
import Input from '../common/input';
import Button from '../common/button';

interface MessageFormData {
  message: string;
}

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const methods = useForm<MessageFormData>({
    mode: 'onSubmit',
  });

  const onSubmit = methods.handleSubmit((data) => {
    if (data.message.trim()) {
      onSendMessage(data.message);
      methods.reset(); // 입력 초기화
    }
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className="fixed bottom-0 left-0 w-full bg-[#1a1a1a] border-t border-[#3a3a3a] p-3 gap-3 flex justify-start items-center"
      >
        {/* 메시지 입력 영역 */}
        <Input
          name="message"
          placeholder="메시지를 입력하세요..."
          inputSize="full" // full 사이즈로 확장
          className="bg-[#2C2C2C] text-[#909090] focus:ring-0 focus:outline-none border-none rounded-full text-white"
        />

        {/* 전송 아이콘 버튼 */}
        <Button
          type="submit"
          size="sm"
          className="w-12 h-12 bg-transparent flex items-center justify-center" // 크기 조정
        >
          {/* 전송 버튼 SVG 아이콘 */}
          <svg
            width="40" // 크기 증가
            height="40" // 크기 증가
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#858585] transform transition-transform duration-300 hover:rotate-45" // 회전 애니메이션 추가
          >
            <g clipPath="url(#clip0_1583_1190)">
              <path
                d="M5.14135 25.0201L6.00466 17.2503H14.6667C15.0809 17.2503 15.4167 16.9145 15.4167 16.5003C15.4167 16.0861 15.0809 15.7503 14.6667 15.7503H6.00466L5.14135 7.98046C5.03327 7.00777 6.03435 6.29379 6.91881 6.71275L25.1965 15.3706C26.1497 15.8221 26.1497 17.1784 25.1965 17.63L6.91881 26.2878C6.03435 26.7068 5.03327 25.9928 5.14135 25.0201Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_1583_1190">
                <rect
                  width="32"
                  height="32"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </form>
    </FormProvider>
  );
};

export default MessageInput;
