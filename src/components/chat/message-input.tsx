import React, { useState } from 'react';
import Button from '../common/button';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 border rounded-l px-2 py-1"
        placeholder="메시지를 입력하세요..."
      />
      <Button type="submit" size="sm" className="rounded-l-none">
        전송
      </Button>
    </form>
  );
};

export default MessageInput;
