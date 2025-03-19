'use client';

import { useState } from 'react';

const API_URL = 'http://3.37.80.119:80/chats/private-chatroom'; // 실제 API 주소로 설정

interface ChatRoom {
  id: string;
  name: string;
  // 기타 필요한 속성들...
}

const TestAPIRequest = () => {
  const [responseData, setResponseData] = useState<ChatRoom[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchChatRooms = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error('API 요청 오류:', errorMessage);
        setError(`API 요청 실패: ${errorMessage}`);
        return;
      }

      const data = await response.json();
      console.log('API 요청 성공:', data);
      setResponseData(data); // 응답 데이터를 상태에 저장
    } catch (err) {
      console.error('네트워크 오류:', err);
      setError('네트워크 오류가 발생했습니다.');
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  return (
    <div className="text-white">
      <h1>API 요청 테스트</h1>
      <button onClick={fetchChatRooms} disabled={loading}>
        {loading ? '요청 중...' : 'API 요청 테스트 버튼'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {responseData ? (
        <div>
          <h2>응답 데이터:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      ) : (
        !loading && (
          <p>응답이 아직 없습니다. 버튼을 눌러 API 요청을 해주세요.</p>
        )
      )}
    </div>
  );
};

export default TestAPIRequest;
