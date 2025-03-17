'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

import ToggleSwitch from '~/components/common/switch';
import { useNetworkStore } from '~/stores/use-network-store';
import { getTopNavType } from '~/utils/get-top-nav-type';

const TopNavigation = () => {
  const { isConnect, setIsConnect } = useNetworkStore();
  const pathname = usePathname();
  const { type, title } = getTopNavType(pathname);
  const router = useRouter();

  return (
    <div>
      <div className="fixed z-10 top-0 flex justify-between items-center w-full max-w-[768px] h-[55px] px-5 py-3.5 bg-gray-neutral-900">
        {type === 'quick-network' && (
          <>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-dashed border-[#02e473]" />
              <p className="text-lg font-semibold text-white">퀵네트워크</p>
              <ToggleSwitch toggle={isConnect} setToggle={setIsConnect} />
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => router.push('/qr-reader')}>
                <Image
                  src="/assets/svgs/qr-code.svg"
                  alt="qr code"
                  width={32}
                  height={32}
                />
              </button>
              <div className="w-6 h-6 border border-dashed border-[#02e473]" />
            </div>
          </>
        )}

        {type === 'default' && (
          <>
            <div className="flex gap-2">
              {pathname === '/create-group' && (
                <button onClick={() => router.back()}>
                  <Image
                    src="/assets/svgs/BackArrow.svg"
                    alt="뒤로가기"
                    width={24}
                    height={24}
                  />
                </button>
              )}
              <p className="text-lg font-semibold text-white">{title}</p>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 border border-dashed border-[#02e473]" />
              <div className="w-6 h-6 border border-dashed border-[#02e473]" />
            </div>
          </>
        )}

        {type === 'chat-room' && (
          <>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/svgs/ExitIcon.svg"
                alt="Exit Icon"
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold text-white">채팅방</p>
            </div>
            <Image
              src="/assets/svgs/Scanner.svg"
              alt="Scanner Icon"
              width={24}
              height={24}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;
