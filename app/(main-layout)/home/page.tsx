import RadixTabs from '~/components/common/radix-tabs';
import GroupMatching from '~/components/match/group';
import OneToOneMatching from '~/components/match/one-to-one';

const Page = () => {
  const tabLabels = ['1:1 매칭', '그룹 매칭'];

  // 샘플 profiles 데이터
  const Profiles: {
    id: string;
    name: string;
    info1: string;
    info2: string;
  }[] = [
    { id: '1', name: '홍길동', info1: 'Developer', info2: 'React' },
    { id: '2', name: '김길동', info1: 'Designer', info2: 'Figma' },
  ];

  const tabContents = [
    <OneToOneMatching key="one-to-one" profiles={Profiles} />,
    <GroupMatching key="group" profiles={Profiles} />, // profiles 전달
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen w-full items-center pt-52">
        <div className="w-full md:max-w-md px-6">
          <RadixTabs
            tabLabels={tabLabels}
            tabContents={tabContents}
          ></RadixTabs>
        </div>
      </div>
    </>
  );
};

export default Page;
