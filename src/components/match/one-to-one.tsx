import Profile from '../common/profile';

const OneToOneMatching = ({
  profiles,
}: {
  profiles: React.ComponentProps<typeof Profile>[];
}) => {
  return (
    <div>
      <h2>1:1 매칭</h2>
      {profiles.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default OneToOneMatching;
