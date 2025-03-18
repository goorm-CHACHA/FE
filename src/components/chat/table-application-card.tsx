import React from 'react';
import Modal, { ModalProps } from '../common/modal';

interface TableApplicationCardProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const TableApplicationCard: React.FC<TableApplicationCardProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
}) => {
  const modalProps: ModalProps = {
    title: '테이블을 신청하시겠어요?',
    subText: '신청 즉시 배정되므로,\n구성원의 동의 후에 신청해주세요!',
    buttons: [
      {
        label: '아니요',
        variant: 'black-transparent',
        actionType: 'action',
        onClick: onCancel,
      },
      {
        label: '네',
        variant: 'green',
        actionType: 'action',
        onClick: onConfirm,
      },
    ],
    triggerButtonLabel: '테이블 신청', // 트리거 버튼 텍스트
    triggerButtonVariant: 'primary',
  };

  return (
    <div className="flex flex-col justify-center items-center w-[375px] gap-4 px-5 pt-5 pb-4 bg-[#3a3a3a]/60 backdrop-blur-[5px]">
      {/* 아이콘 + 제목 영역 */}
      <div className="flex flex-col justify-start items-center self-stretch gap-2.5">
        <div className="flex justify-center items-center self-stretch gap-1.5 px-1">
          <div className="flex justify-start items-center relative gap-2">
            <div className="w-6 h-6 relative bg-[#02e473]/25">
              <div className="w-5 h-5 absolute left-px top-px rounded-sm border border-[#02e473]/70 border-dashed"></div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-0.5">
            <p className="text-lg font-semibold text-center text-[#fefefe]">
              {title}
            </p>
          </div>
        </div>

        {/* 설명 영역 */}
        <div className="flex flex-col justify-center items-start self-stretch relative gap-1 pl-1.5">
          <p className="self-stretch w-[329px] text-sm text-center text-[#a6a6a6]">
            {description}
          </p>
        </div>
      </div>

      {/* 모달 트리거 버튼 영역 */}
      <div className="flex justify-start items-center w-[335px] gap-1.5">
        <Modal {...modalProps} />
      </div>
    </div>
  );
};

export default TableApplicationCard;
