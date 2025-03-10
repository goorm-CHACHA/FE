export interface PurposeOption {
  category: string;
  value: string;
}

export const purposeOptions: PurposeOption[] = [
  { category: '멘토링 & 커리어 성장', value: '업계 전문가 멘토 찾기' },
  { category: '멘토링 & 커리어 성장', value: '경력 상담' },
  {
    category: '기술 & 코드리뷰',
    value: '특정 기술에 대한 코드 리뷰 및 기술 공유',
  },
  {
    category: '협업 & 프로젝트',
    value: '해커톤/사이드 프로젝트 팀원 찾기',
  },
  { category: '채용 & 구인', value: '기업 채용 담당자' },
  { category: '채용 & 구인', value: '스타트업 구직 희망자' },
  { category: '비즈니스 파트너십', value: '공동 프로젝트' },
  { category: '비즈니스 파트너십', value: '스타트업 협업 가능성 탐색' },
];
