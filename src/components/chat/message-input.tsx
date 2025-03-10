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
      <form onSubmit={onSubmit} className="p-4 border-t flex">
        <Input
          name="message"
          placeholder="메시지를 입력하세요..."
          className="flex-1 rounded-l"
        />
        <Button type="submit" size="sm" className="rounded-l-none">
          전송
        </Button>
      </form>
    </FormProvider>
  );
};

export default MessageInput;
