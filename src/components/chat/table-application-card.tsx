import React from 'react';
import Modal, { ModalProps } from '../common/modal';

interface TableApplicationCardProps {
  variant: 'apply' | 'waiting' | 'assigned';
  tableNumber?: number; // assigned 상태일 때 필요
  waitTime?: number; // waiting 상태일 때 필요
  onConfirm?: () => void;
  onCancel?: () => void;
}

const TableApplicationCard: React.FC<TableApplicationCardProps> = ({
  variant,
  tableNumber,
  waitTime,
  onConfirm,
  onCancel,
}) => {
  const renderButtons = () => {
    if (variant === 'apply') {
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
        triggerButtonLabel: '테이블 신청',
        triggerButtonVariant: 'primary',
      };

      return (
        <div className="flex justify-start items-center w-[335px] gap-1.5">
          <Modal {...modalProps} />
        </div>
      );
    }

    if (variant === 'waiting') {
      return (
        <div className="flex justify-start items-center w-[335px] gap-1.5">
          <button
            className="flex-grow px-4 py-2.5 rounded-lg bg-black/50 text-sm font-semibold text-[#dedede]"
            onClick={onCancel}
          >
            네트워킹 취소
          </button>
          <button
            className="flex-grow px-4 py-2.5 rounded-lg bg-[#07ca7f] text-sm font-semibold text-[#fefefe]"
            onClick={onConfirm}
          >
            예약 동의
          </button>
        </div>
      );
    }

    if (variant === 'assigned') {
      return (
        <div className="flex justify-start items-center w-[335px] gap-1.5">
          <button className="flex-grow px-4 py-2.5 rounded-lg bg-black/50 text-sm font-semibold text-[#dedede]">
            위치 안내
          </button>
          <button className="flex-grow px-4 py-2.5 rounded-lg bg-[#07ca7f] text-sm font-semibold text-[#fefefe]">
            QR 등록 00:00
          </button>
        </div>
      );
    }
  };

  const getTitle = () => {
    if (variant === 'apply') return '테이블을 신청해볼까요?';
    if (variant === 'waiting') return `예상 대기 시간: ${waitTime ?? '-'}분`;
    if (variant === 'assigned') return `${tableNumber ?? '-'}번 테이블`;
  };

  const getDescription = () => {
    if (variant === 'apply')
      return '테이블을 신청하면 네트워킹 존을 이용할 수 있어요.';
    if (variant === 'waiting')
      return '지금은 모든 테이블이 사용 중이에요.\n예약에 동의하시면 테이블을 예약 후 이용할 수 있어요!';
    if (variant === 'assigned')
      return '테이블이 배정되었어요.\n네트워킹 존으로 이동해서 테이블 QR을 등록해주세요!';
  };

  return (
    <div className="flex flex-col justify-center items-center w-[375px] gap-4 px-5 pt-5 pb-4 bg-[#3a3a3a]/60 backdrop-blur-[5px] rounded-xl">
      {/* 아이콘 + 제목 */}
      <div className="flex flex-col justify-start items-center self-stretch gap-2.5">
        <div className="flex justify-center items-center self-stretch gap-1.5 px-1">
          <div className="flex justify-start items-center relative gap-2">
            <div className="w-6 h-6 relative bg-[#02e473]/25">
              <div className="w-5 h-5 absolute left-px top-px rounded-sm border border-[#02e473]/70 border-dashed"></div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-0.5">
            <p className="text-lg font-semibold text-center text-[#fefefe]">
              {getTitle()}
            </p>
          </div>
        </div>

        {/* 설명 */}
        <div className="flex flex-col justify-center items-start self-stretch relative gap-1 pl-1.5">
          <p className="self-stretch w-[329px] text-sm text-center text-[#a6a6a6] whitespace-pre-line">
            {getDescription()}
          </p>
        </div>
      </div>

      {/* 버튼 영역 */}
      {renderButtons()}
    </div>
  );
};

export default TableApplicationCard;
