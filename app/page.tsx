import Button from '~/components/common/button';
import ChatBubble from '~/components/common/chatButton';
import ModalOneBtn from '~/components/common/modalOneBtn';
import ModalTwoBtn from '~/components/common/modalTwoBtn';

export default function Home() {
  return (
    <div>
      <ChatBubble variant="sender" message="안녕하세요! 개발자로 오신걸까요?" />
      <ChatBubble
        variant="receiver"
        message="안녕하세요! 넵 맞습니다. 네트워킹 너무 기대되네요!"
      />
      <ChatBubble
        variant="system"
        size="small"
        message="사용자가 입장했습니다."
      />
      <ChatBubble variant="sender" message="테이블 예약을 할까요?" />
      <ChatBubble variant="receiver" message="넵 좋습니다! 바로 입장할게요" />

      <Button text="BUTTON" size={'sm'} />
      <Button text="BUTTON" variant={'outline'} />
      <Button text="BUTTON" variant={'red'} size={'lg'} />
      <Button text="BUTTON" size={'full'} />
      <Button text="BUTTON" size={'full'} className="rounded-full" />
      <ModalOneBtn text={`채팅방이 개설되지 못했어요. \n 다음에 봬요ㅠ`} textTitle="참가자선택" textBtn="알겠어요" variant="btn"/>
      <ModalTwoBtn text={`홍길동 님에게 \n 매칭을 신청하시겠습니까?`} textTitle="참가자선택" textLBtn="아니오" textRBtn="네" variant="btn"/>
    </div>
  );
}
