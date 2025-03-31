'use client';

import { Control } from 'react-hook-form';
import JobFilter from '../common/accordion/jobfilter';
import ToggleField from '~/components/register/toggle-field';
import SliderCareer from '~/components/match/career-slider';
import * as Accordion from '@radix-ui/react-accordion';
import { interestOptions, purposeOptions } from '~/constants/create-group';
import { useFilterStore } from '~/stores/use-filter-store';

export interface FormValues {
  jobs: string[];
  interests: string[];
  participationPurpose: string[];
  career: number[];
}

interface FilterProps {
  applyFilters?: () => void; // ✅ 추가된 prop 타입
  control: Control<FormValues>;
}

const handleInterestChange = (interest: string) => {
  const { interests, setFilter } = useFilterStore.getState();

  const updatedInterests = interests.includes(interest)
    ? interests.filter((item) => item !== interest)
    : [...interests, interest];

  // interests 값을 업데이트
  setFilter('interests', updatedInterests);
};

const Filter = ({ applyFilters, control }: FilterProps) => {
  return (
    <div className="w-full mb-4">
      {/* 아코디언 루트 */}
      <Accordion.Root type="multiple" className="w-full">
        {/* 직무 필터 */}
        <JobFilter />

        {/* 관심분야 필터 */}
        <Accordion.Item value="interest">
          <Accordion.Trigger className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer">
            관심분야
          </Accordion.Trigger>
          <Accordion.Content className="px-4 py-2 bg-gray-700 rounded-md">
            <ToggleField<FormValues>
              name="interests"
              control={control}
              options={interestOptions}
              maxSelection={3}
              onChange={(interest: string) => handleInterestChange(interest)}
            />
          </Accordion.Content>
        </Accordion.Item>

        {/* 경력 필터 */}
        <Accordion.Item value="career">
          <Accordion.Trigger className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer">
            경력
          </Accordion.Trigger>
          <Accordion.Content className="px-4 py-2 bg-gray-700 rounded-md">
            <SliderCareer name="career" />
          </Accordion.Content>
        </Accordion.Item>

        {/* 참여목적 필터 */}
        <Accordion.Item value="purpose">
          <Accordion.Trigger className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer">
            참여목적
          </Accordion.Trigger>
          <Accordion.Content className="px-4 py-2 bg-gray-700 rounded-md">
            <ToggleField<FormValues>
              name="participationPurpose"
              control={control}
              options={purposeOptions}
              maxSelection={3}
            />
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>

      {/* 필터 적용 버튼 */}
      <button
        type="button"
        onClick={applyFilters}
        className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
      >
        필터 적용
      </button>
    </div>
  );
};

export default Filter;
