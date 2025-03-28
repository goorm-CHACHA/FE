'use client';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '~/components/common/button';
import SliderCareer from '~/components/match/career-slider';
import ToggleField from '~/components/register/toggle-field';
import {
  interestOptions,
  jobOptions,
  purposeOptions,
} from '~/constants/create-group';
import { useState } from 'react';
import axios from 'axios';

interface GroupChatsFormValues {
  job: string[];
  career: number; // Slider 값
  interests: string;
  participationPurpose: string;
}

const Page: React.FC = () => {
  const methods = useForm<GroupChatsFormValues>();
  const { control, handleSubmit } = methods;
  const [response, setResponse] = useState<any>(null);
  const router = useRouter();
  const onSubmit = async (data: GroupChatsFormValues) => {
    // API 호출을 위해 data를 적절히 변환
    const groupChatsRequestDto = {
      job: data.job || [], // job이 없으면 빈 배열
      career: '상관없음', // career 슬라이더 값을 직역: 예시로 "2-3"
      interests: data.interests || '상관없음', // interests가 없으면 "상관없음"
      participationPurpose: data.participationPurpose || '상관없음', // 기본값 설정
    };
    console.log('📤 Sending Data:', groupChatsRequestDto);
    try {
      const result = await axios.post(
        'api/chats/group-chatroom/create',
        groupChatsRequestDto,
      );
      setResponse(result.data);
      router.push('/home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ToggleField
          label="직무/직책"
          name="job"
          control={control}
          options={jobOptions}
          maxSelection={3} // jobOptions 정의 필요
        />
        <ToggleField
          label="관심분야"
          name="interests"
          control={control}
          options={interestOptions}
          maxSelection={1} // interestOptions 정의 필요
        />
        <SliderCareer name="career" label="경력" />

        <ToggleField
          label="참여목적"
          name="participationPurpose"
          control={control}
          options={purposeOptions}
          maxSelection={1} // purposeOptions 정의 필요
        />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Page;
