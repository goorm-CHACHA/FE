'use client';

import { useMatchModalStore } from '~/stores/use-match-modal-store';
import Modal, { ModalContent } from '~/components/common/modal';
import Button from '~/components/common/button';
import type {
  MatchModalType,
  MatchModalData,
} from '~/stores/use-match-modal-store';
import { Card } from '../common/card';
import ProfileImportant from '../common/profile-important';
import { useUserStore } from '~/stores/use-user-store';
import { UserData } from '~/types/user.types';
import BadgesAligned from '../common/badges-aligned';
import Image from 'next/image';
import { useEffect } from 'react';
import axios from 'axios';

type ExtendedModalContent = ModalContent & { customContent?: React.ReactNode };

const getModalContent = (
  modalType: MatchModalType,
  openModal: (modal: MatchModalType, data?: MatchModalData) => void,
  closeModal: () => void,
  modalData: MatchModalData | null,
  userData?: UserData | null,
): ExtendedModalContent | null => {
  switch (modalType) {
    case 'profile':
      return {
        buttons: [
          {
            label: '네트워킹 신청',
            variant: 'primary',
            actionType: 'action',
            onClick: () => {
              console.log('신청버튼눌리고 열림?');
              openModal('request-sent', {
                id: userData!.id, // 실제 닉네임으로 교체
                isNotificationOn: false, // ✅ 실제 알림 상태로 교체
              });
            },
          },
        ],
        customContent: userData ? (
          <Card>
            <ProfileImportant userData={userData} layout="horizontal" />
            <BadgesAligned items={userData.interests} />
            <div className="flex !items-center !text-orange-500 gap-[6px]">
              <Image
                src="/assets/svgs/bookmark.svg"
                alt="bookmark"
                width={12}
                height={14}
              />
              <BadgesAligned
                items={[userData.participationPurpose]}
                userInfoColor={true}
                noneChip={true}
              />
            </div>
          </Card>
        ) : null,
      };

    case 'request-sent':
      console.log('이거 됀냐며요');
      return {
        title: `${modalData?.id ?? '[닉네임]'} 님에게 네트워킹을 신청할까요?`,
        subText: '상대방이 3분 안에 확인하지 않으면\n요청이 자동 취소돼요.',
        buttons: [
          {
            label: '아니오',
            variant: 'black/50',
            actionType: 'action',
            onClick: closeModal,
          },
          {
            label: '신청하기',
            variant: 'primary',
            actionType: 'action',
            onClick: () => {
              openModal('request-confirm', {
                isNotificationOn: modalData?.isNotificationOn ?? false,
              });
            },
          },
        ],
      };

    case 'request-confirm': {
      const isNotificationOn = modalData?.isNotificationOn ?? false;

      return {
        title: '네트워킹이 신청되었어요',
        subText: '요청 수락 시 알림으로 알려드릴게요!',
        buttons: [
          ...(isNotificationOn
            ? []
            : [
                {
                  label: '괜찮아요',
                  variant: 'black/50',
                  actionType: 'action',
                  onClick: closeModal,
                } as const,
              ]),
          {
            label: isNotificationOn ? '확인' : '알림받기',
            variant: 'primary',
            actionType: 'action',
            onClick: closeModal,
          },
        ],
      };
    }

    default:
      return null;
  }
};

const NetworkingModalFlow = () => {
  const { currentModal, modalData, openModal, closeModal } =
    useMatchModalStore();
  console.log('CurrentModal:', currentModal, 'modalData', modalData);

  const { selectedUser } = useUserStore();
  const modalContent = getModalContent(
    currentModal,
    openModal,
    closeModal,
    modalData,
    selectedUser,
  );

  useEffect(() => {
    const fetchUser = async () => {
      if (!modalData?.id) return;
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/${modalData.id}`,
        );
        useUserStore.getState().setSelectedUser(res.data); // zustand로 유저 정보 저장
      } catch (error) {
        console.error('유저 정보 가져오기 실패', error);
      }
    };

    fetchUser();
  }, [modalData?.id]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Button onClick={() => openModal('profile')}>신청하기</Button>

      {modalContent && (
        <Modal
          isOpen={!!currentModal}
          onOpenChange={(open) => {
            if (!open) closeModal();
          }}
          title={modalContent.title}
          subText={modalContent.subText}
          buttons={modalContent.buttons}
          customContent={modalContent.customContent}
        />
      )}
    </div>
  );
};

export default NetworkingModalFlow;
