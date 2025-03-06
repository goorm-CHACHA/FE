import Profile from '../common/profile';

const GroupMatching = ({
  profiles,
}: {
  profiles: React.ComponentProps<typeof Profile>[];
}) => {
  return (
    <div>
      <h2>그룹 매칭</h2>
      {profiles.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default GroupMatching;
