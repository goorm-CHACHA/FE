'use client';

import { useForm, FormProvider } from 'react-hook-form';
import MatchCard from '../card/match-card';
import { UserData } from '~/types/user.types';
import NetworkingModalFlow from './modal-for-match';
import { useState, useEffect } from 'react';
import { useMatchModalStore } from '~/stores/use-match-modal-store';
import FilterWrapper from './filter-wrapper';

interface OneToOneMatchingProps {
  profiles: UserData[];
}

export interface FormValues {
  jobs: string[];
  interests: string[];
  participationPurpose: string[];
  career: number[];
}

// 1. 참여 목적 데이터 정규화 (배열 형식 보장)
const normalizeProfileData = (profiles: UserData[]): UserData[] => {
  return profiles.map((profile) => ({
    ...profile,
    jobCategory: Array.isArray(profile.jobCategory)
      ? profile.jobCategory.filter(Boolean).map((job) => String(job).trim())
      : profile.jobCategory
        ? [String(profile.jobCategory).trim()] // 문자열을 배열로 변환
        : [],
    participationPurpose: Array.isArray(profile.participationPurpose)
      ? profile.participationPurpose.filter(Boolean).map((p) => p.trim())
      : [profile.participationPurpose?.trim() ?? ''],
    interests: Array.isArray(profile.interests)
      ? profile.interests.filter(Boolean).map((i) => i.trim())
      : profile.interests != null // ✅ null/undefined 체크
        ? [String(profile.interests).trim()] // ✅ 문자열 강제 변환 + trim
        : [],
  }));
};

const OneToOneMatching = ({ profiles }: OneToOneMatchingProps) => {
  const methods = useForm<any>({
    defaultValues: {
      interests: [], // 빈 배열로 초기화
      participationPurpose: [], // 빈 배열로 초기화
      career: [0, 4], // 경력 필터 초기화
    },
  });
  const [filteredProfiles, setFilteredProfiles] =
    useState<UserData[]>(profiles);
  const [, setSelectedUser] = useState<UserData | null>(null);
  const { requestedUserIds } = useMatchModalStore();

  // 필터 값 안전하게 처리
  const cleanFilters = (filters: FormValues): FormValues => ({
    interests: typeof filters.interests === 'string' ? [filters.interests] : [], // 문자열이면 배열로 처리
    participationPurpose:
      typeof filters.participationPurpose === 'string'
        ? [filters.participationPurpose]
        : [], // 문자열이면 배열로 처리
    career: Array.isArray(filters.career)
      ? filters.career.filter((c): c is number => typeof c === 'number')
      : [0, 4], // 배열이 아니면 기본값 [0, 4] 처리
    jobs: Array.isArray(filters.jobs) ? filters.jobs : [],
  });

  const filterProfiles = (profiles: UserData[], filters: FormValues) => {
    return profiles.filter((profile) => {
      // 직무 필터링 (정확한 문자열 일치)
      const jobMatch = filters.jobs?.length
        ? filters.jobs.some((job) => {
            const jobCategories = Array.isArray(profile.jobCategory)
              ? profile.jobCategory
              : profile.jobCategory
                ? [profile.jobCategory] // 문자열을 배열로 변환
                : []; // undefined/null이면 빈 배열 처리
            return jobCategories.some(
              (profileJob) => profileJob.trim() === job.trim(),
            );
          })
        : true;

      // interestMatch: 관심사 필터 (trim 적용)
      const interestMatch =
        (filters.interests ?? []).length > 0
          ? (filters.interests ?? []).some((interest) =>
              profile.interests?.some((profileInterest: string) =>
                profileInterest.trim().includes(interest.trim()),
              ),
            )
          : true;

      // purposeMatch: 참여 목적 필터 (trim 적용)
      const purposeMatch =
        (filters.participationPurpose ?? []).length > 0
          ? (filters.participationPurpose ?? []).some((purpose) =>
              Array.isArray(profile.participationPurpose)
                ? profile.participationPurpose.some((profilePurpose: string) =>
                    profilePurpose.trim().includes(purpose.trim()),
                  )
                : typeof profile.participationPurpose === 'string' &&
                  profile.participationPurpose.trim().includes(purpose.trim()),
            )
          : true;

      // careerMatch: 경력 필터
      const careerMatch = (() => {
        const [minCareer, maxCareer] = filters.career ?? [0, 4]; // 기본값 설정

        if (typeof profile.career === 'string') {
          if (profile.career.includes('신입')) {
            return minCareer <= 0; // 신입이 포함되어 있으면 career 필터가 0에 포함되어야 함
          } else if (profile.career.includes('경력')) {
            const careerYears = parseInt(profile.career.replace(/[^0-9]/g, '')); // 숫자만 추출
            return careerYears >= minCareer && careerYears <= maxCareer; // 경력 연차를 필터와 비교
          }
        }
        return false;
      })();

      return interestMatch && purposeMatch && careerMatch && jobMatch;
    });
  };

  useEffect(() => {
    const normalizedProfiles = normalizeProfileData(profiles);
    setFilteredProfiles(normalizedProfiles);
  }, [profiles]);

  useEffect(() => {
    const subscription = methods.watch((filters) => {
      const cleanedFilters = cleanFilters(filters);
      setFilteredProfiles(
        filterProfiles(normalizeProfileData(profiles), cleanedFilters),
      );
    });
    return () => subscription.unsubscribe();
  }, [methods.watch, profiles]);

  const sortedProfiles = [...filteredProfiles].sort((a, b) => {
    const aRequested = requestedUserIds.includes(a.id ?? -1);
    const bRequested = requestedUserIds.includes(b.id ?? -1);
    return aRequested === bRequested ? 0 : aRequested ? -1 : 1;
  });

  return (
    <div className="flex flex-col items-center w-full">
      <FormProvider {...methods}>
        <FilterWrapper />
      </FormProvider>

      {sortedProfiles.map(
        (profile) =>
          profile.id && (
            <div
              className="w-full"
              key={profile.id}
              onClick={() => setSelectedUser(profile)}
            >
              <MatchCard
                userData={profile}
                inMyPage={false}
                alignedOne={true}
              />
            </div>
          ),
      )}

      <NetworkingModalFlow />
    </div>
  );
};

export default OneToOneMatching;
