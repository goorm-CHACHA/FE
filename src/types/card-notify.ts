interface CardNotifyProps {
  message: string;
  subMessage: string;
  timeStamp?: number;
  onAccept?: () => void; // "수락" 버튼 클릭 핸들러
  requester?: string;
}

export default CardNotifyProps;
