import { GroupBase } from 'react-select';

export interface GroupedJobOption {
  category?: string;
  value: string;
}

export const groupedJobOptions: GroupBase<GroupedJobOption>[] = [
  {
    label: '개발자 & 엔지니어',
    options: [
      { category: '개발자 & 엔지니어', value: '프론트엔드 개발자' },
      { category: '개발자 & 엔지니어', value: '백엔드 개발자' },
      { category: '개발자 & 엔지니어', value: '풀스택 개발자' },
      { category: '개발자 & 엔지니어', value: '모바일 개발자' },
      { category: '개발자 & 엔지니어', value: 'AI 엔지니어' },
      { category: '개발자 & 엔지니어', value: '데이터 엔지니어' },
      { category: '개발자 & 엔지니어', value: '클라우드 엔지니어' },
    ],
  },
  {
    label: '디자이너',
    options: [
      { category: '디자이너', value: 'UX/UI 디자이너' },
      { category: '디자이너', value: '브랜드 디자이너' },
      { category: '디자이너', value: '프로덕트 디자이너' },
    ],
  },
  {
    label: '기획 & 운영',
    options: [
      { category: '기획 & 운영', value: '프로덕트 매니저 (PM)' },
      { category: '기획 & 운영', value: '프로덕트 오너 (PO)' },
      { category: '기획 & 운영', value: '서비스 기획자' },
      { category: '기획 & 운영', value: '콘텐츠 운영' },
    ],
  },
  {
    label: '비즈니스 & 마케팅',
    options: [
      { category: '비즈니스 & 마케팅', value: '세일즈' },
      { category: '비즈니스 & 마케팅', value: '마케팅' },
      { category: '비즈니스 & 마케팅', value: '투자유치' },
      { category: '비즈니스 & 마케팅', value: '파트너십 기획' },
    ],
  },
  {
    label: '스타트업 & 창업자',
    options: [
      { category: '스타트업 & 창업자', value: '초기 스타트업 창업자' },
      { category: '스타트업 & 창업자', value: '투자자' },
      { category: '스타트업 & 창업자', value: '액셀러레이터' },
    ],
  },
  {
    label: '기타 전문직',
    options: [
      { category: '기타 전문직', value: '연구원' },
      { category: '기타 전문직', value: '교육자' },
      { category: '기타 전문직', value: '컨설턴트' },
    ],
  },
];

export interface CareerOption {
  value: string;
}

export const careerOptions: CareerOption[] = [
  { value: '학생' },
  { value: '신입 (1년 이하)' },
  { value: '주니어 (1~3년)' },
  { value: '미드 (4~7년)' },
  { value: '시니어 (8년 이상)' },
  { value: '창업자 / 임원' },
];
