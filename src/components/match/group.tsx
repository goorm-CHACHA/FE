import Profile from '../common/profile';
import Filter from '~/components/match/filter';

const GroupMatching = ({
  profiles,
}: {
  profiles: React.ComponentProps<typeof Profile>[];
}) => {
  return (
    <div className="flex flex-col items-center">
      <Filter />
      {profiles.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default GroupMatching;
