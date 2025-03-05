import RadixTabs from '~/components/common/radix-tabs';
import FindIdForm from '~/components/account/find-id-form';
import FindPasswordForm from '~/components/account/find-password-form';
import Link from 'next/link';

const Page = () => {
  const tabLabels = ['아이디찾기', '비밀번호 찾기'];
  const tabContents = [
    <FindIdForm key="findIdForm" />,
    <FindPasswordForm key="findPasswordForm" />,
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen w-full items-center pt-52">
        <div className="w-full md:max-w-md px-6">
          <RadixTabs
            tabLabels={tabLabels}
            tabContents={tabContents}
          ></RadixTabs>
          <div className="text-right text-xs px-6 text-gray-600">
            <Link href="/account/login">로그인 페이지로 가기</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
