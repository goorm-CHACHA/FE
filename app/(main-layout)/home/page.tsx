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
    { id: '1', name: '김중환', info1: '백엔드 개발자', info2: 'Java, Python' },
    {
      id: '2',
      name: '황신혜',
      info1: 'UX/UI 디자이너',
      info2: 'Figma, Adobe XD',
    },
    {
      id: '3',
      name: '박지윤',
      info1: '프론트엔드 개발자',
      info2: 'Node.js, React',
    },
    {
      id: '4',
      name: '최현우',
      info1: '프로덕트 매니지먼트',
      info2: 'Notion, Jira',
    },
  ];

  const tabContents = [
    <OneToOneMatching key="one-to-one" profiles={Profiles} />,
    <GroupMatching key="group" profiles={Profiles} />, // profiles 전달
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen w-full items-center pt-5">
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
