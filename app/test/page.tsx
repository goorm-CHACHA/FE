import React from 'react';
import PushNotification from '~/components/push-notification';
import Modal, { ButtonProps } from '~/components/common/modal';
import NotificationButton from '~/components/notification-button';

const buttons: ButtonProps[] = [
  {
    label: '닫기',
    variant: 'secondary',
    actionType: 'action',
  },
  {
    label: '다음 단계',
    variant: 'primary',
    actionType: 'trigger',
    nextModalContent: {
      title: '다음 모달 제목',
      subText: '이전 내용이 사라지고 새로운 내용이 표시됩니다.',
      buttons: [{ label: '닫기', variant: 'secondary' }],
    },
  },
];

const page = () => {
  return (
    <>
      <div className="h-screen flex flex-col content-center justify-center text-center">
        <div className="text-lg mb-3">Push Notification</div>
        <div className="mx-auto">
          <NotificationButton />
          <Modal
            title="모달 테스트"
            buttons={buttons}
            triggerButtonLabel="모달창입니다."
          />
        </div>
      </div>

      <PushNotification />
    </>
  );
};

export default page;
