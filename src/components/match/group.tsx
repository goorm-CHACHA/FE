import Filter from '~/components/match/filter';
import Button from '../common/button';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import api from '~/utils/api/api';
interface GroupChatRoomResponseDto {
  id: number;
  job: string[];
  members: number;
  career: string;
  interests: string;
  participationPurpose: string;
}
const GroupMatching = () => {
  const [groups, setGroups] = useState<GroupChatRoomResponseDto[]>([]); // 그룹 데이터를 위한 상태
  const router = useRouter();

  useEffect(() => {
    // 그룹 API 데이터를 가져오는 함수
    const fetchGroups = async () => {
      try {
        const response = await api.get('api/chats/group-chatroom'); // API URL

        console.log(response);
        // 그룹 데이터를 상태에 저장
        setGroups(response.data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };

    fetchGroups(); // 컴포넌트 마운트 시 데이터 가져오기
  }, []);
  const handleJoinGroup = async (chatRoomId: number) => {
    try {
      const response = await api.post('/api/chats/group-chatroom/join', {
        chatRoomId: chatRoomId, // 요청 데이터
      });

      console.log('참여 성공:', response.data);
      alert('그룹에 참여하였습니다!');

      // 필요 시 해당 그룹 채팅방으로 이동
      // router.push(`/chat/${chatRoomId}`);
    } catch (error) {
      console.error('그룹 참여 실패:', error);
      alert('그룹 참여에 실패했습니다.');
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* 필터 컴포넌트 */}
      <Filter />

      {/* 그룹 데이터 렌더링 */}
      {groups.length > 0 ? (
        groups.map((group) => (
          <div
            key={group.id}
            className="mb-4 p-4 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
            onClick={() => handleJoinGroup(group.id)}
          >
            <p>
              <strong>직업:</strong> {group.job.join(', ')}
            </p>
            <p>
              <strong>경력:</strong> {group.career}
            </p>
            <p>
              <strong>관심사:</strong> {group.interests}
            </p>
            <p>
              <strong>멤버수:</strong> {group.members}
            </p>
            <p>
              <strong>참여 목적:</strong> {group.participationPurpose}
            </p>
          </div>
        ))
      ) : (
        <p>그룹 데이터가 없습니다.</p>
      )}

      {/* 그룹 생성 버튼 */}
      <Button
        size={'full'}
        onClick={(e) => {
          e.stopPropagation();
          router.push('/create-group');
        }}
      >
        그룹 만들기
      </Button>
    </div>
  );
};

export default GroupMatching;
