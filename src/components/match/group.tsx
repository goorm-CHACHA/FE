import MatchCard from '../card/match-card';
import Filter from '~/components/match/filter';
import { mockUserData } from '../mypage/mock-user-data';
const GroupMatching = ({ profiles }: { profiles: typeof mockUserData }) => {
  return (
    <div className="flex flex-col items-center">
      <Filter />
      {profiles.map((profile) => (
        <MatchCard
          userData={profile}
          key={profile.id}
          isGroup={true}
          inMyPage={false}
          alignedOne={true}
        />
      ))}
    </div>
  );
};

export default GroupMatching;
