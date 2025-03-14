'use client';

import { useState } from 'react';

const API_URL = 'http://3.37.80.119:80/chats/private-chatroom'; // 실제 API 주소로 설정

const TestAPIRequest = () => {
  const [responseData, setResponseData] = useState<any>(null); // 응답 데이터를 저장
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

// 'use client';

// import { useState } from 'react';

// const TestPrivateChatRequest = () => {
//   const [responseData, setResponseData] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChatRequest = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch(
//         // NEXT_PUBLIC_WS_API_URL=3.37.80.119:80
//         // http://3.37.80.119:80/chats/private-chatroom
//         `${process.env.NEXT_PUBLIC_API_URL}/chats/private-chatroom/request`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             senderId: 1, // 테스트용 또는 로그인된 사용자 ID
//             receiverId: 2, // 상대 유저 ID
//           }),
//         },
//       );

//       if (!response.ok) {
//         const errorMessage = await response.text();
//         setError(`요청 실패: ${errorMessage}`);
//         return;
//       }

//       const data = await response.json();
//       setResponseData(data);
//     } catch (err) {
//       console.error('요청 오류:', err);
//       setError('네트워크 오류가 발생했습니다.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">1:1 채팅 요청 테스트</h1>

//       <button
//         onClick={handleChatRequest}
//         disabled={loading}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         {loading ? '요청 중...' : '채팅 요청 보내기'}
//       </button>

//       {error && (
//         <p className="mt-4 text-red-500 font-semibold">오류: {error}</p>
//       )}

//       {responseData && (
//         <div className="mt-6">
//           <h2 className="text-lg font-semibold mb-2">응답 결과:</h2>
//           <pre className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap">
//             {JSON.stringify(responseData, null, 2)}
//           </pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TestPrivateChatRequest;
