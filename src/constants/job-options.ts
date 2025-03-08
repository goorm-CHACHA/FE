import { GroupBase } from 'react-select';

export interface GroupedJobOption {
  label: string;
  value: string;
}

export const groupedJobOptions: GroupBase<GroupedJobOption>[] = [
  {
    label: '개발자 & 엔지니어',
    options: [
      { value: 'frontend', label: '프론트엔드 개발자' },
      { value: 'backend', label: '백엔드 개발자' },
      { value: 'fullstack', label: '풀스택 개발자' },
      { value: 'mobile', label: '모바일 개발자' },
      { value: 'ai-engineer', label: 'AI 엔지니어' },
      { value: 'data-engineer', label: '데이터 엔지니어' },
      { value: 'cloud-engineer', label: '클라우드 엔지니어' },
    ],
  },
  {
    label: '디자이너',
    options: [
      { value: 'ux-ui-designer', label: 'UX/UI 디자이너' },
      { value: 'brand-designer', label: '브랜드 디자이너' },
      { value: 'product-designer', label: '프로덕트 디자이너' },
    ],
  },
  {
    label: '기획 & 운영',
    options: [
      { value: 'product-manager', label: '프로덕트 매니저 (PM)' },
      { value: 'product-owner', label: '프로덕트 오너 (PO)' },
      { value: 'service-planner', label: '서비스 기획자' },
      { value: 'content-operator', label: '콘텐츠 운영' },
    ],
  },
  {
    label: '비즈니스 & 마케팅',
    options: [
      { value: 'sales', label: '세일즈' },
      { value: 'marketing', label: '마케팅' },
      { value: 'investment', label: '투자유치' },
      { value: 'partnership', label: '파트너십 기획' },
    ],
  },
  {
    label: '스타트업 & 창업자',
    options: [
      { value: 'startup-founder', label: '초기 스타트업 창업자' },
      { value: 'investor', label: '투자자' },
      { value: 'accelerator', label: '액셀러레이터' },
    ],
  },
  {
    label: '기타 전문직',
    options: [
      { value: 'researcher', label: '연구원' },
      { value: 'educator', label: '교육자' },
      { value: 'consultant', label: '컨설턴트' },
    ],
  },
];

export interface CareerOption {
  label: string;
  value: string;
}

export const careerOptions: CareerOption[] = [
  { label: '학생', value: 'student' },
  { label: '신입 (1년 이하)', value: 'entry' },
  { label: '주니어 (1 ~ 3년)', value: 'junior' },
  { label: '미드 (4 ~ 7년)', value: 'mid' },
  { label: '시니어 (8년 이상)', value: 'senior' },
  { label: '창업자 / 임원', value: 'executive' },
];
