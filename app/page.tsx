import Button from '~/components/common/button';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '~/components/common/card';
import ChatBubble from '~/components/common/chat-bubble';
import Profile from '~/components/common/profile';

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p>Chat Bubble</p>
        <ChatBubble
          variant="sender"
          message="안녕하세요! 개발자로 오신걸까요?"
        />
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
      </div>

      <div>
        <p>Button</p>
        <Button size={'sm'}>Button</Button>
        <Button variant={'outline'}>Button</Button>
        <Button variant={'red'} size={'lg'}>
          Button
        </Button>
        <Button size={'full'}>Button</Button>
        <Button size={'full'} className="rounded-full">
          Button
        </Button>
      </div>
      <div className="py-10 flex flex-col justify-center">
        <p>Card</p>
        <Card className="w-1/2">
          <CardHeader>채팅방1</CardHeader>
          <CardBody className="leading-6">
            <p>~에 대해서 대화를 나누는 중이에요</p>
            <p>#AI #알고리즘 #비즈니스</p>
          </CardBody>
          <CardFooter>
            <Button size="full">참여하기</Button>
          </CardFooter>
        </Card>
      </div>
      <Profile name="홍길동" info1='1년차' info2='프론트엔드 개발자'/>
    </div>
  );
};

export default Home;
