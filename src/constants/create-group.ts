interface Options {
  value: string;
}

export const jobOptions: Options[] = [
  { value: '상관없음' },
  { value: '기획 & 운영' },
  { value: '개발자 & 엔지니어' },
  { value: '스타트업 & 창업자' },
  { value: '비즈니스 & 마케팅' },
  { value: '디자이너' },
  { value: '기타 전문직' },
];

export const interestOptions: Options[] = [
  { value: '상관없음' },
  { value: '소프트웨어 개발' },
  { value: '데이터&AI' },
  { value: '클라우드&인프라' },
  { value: '엔터테인먼트&미디어' },
  { value: '보안&블록체인' },
  { value: '핀테크&금융' },
  { value: '헬스케어&바이오' },
  { value: '스타트업&창업' },
];

export const experienceOptions: Options[] = [
  { value: '상관없음' },
  { value: '학생' },
  { value: '신입(1년 이하)' },
  { value: '주니어(1~3년)' },
  { value: '미드 레벨(4~9년)' },
  { value: '시니어 (10년이상)' },
];

export const purposeOptions: Options[] = [
  { value: '상관없음' },
  { value: '정보 교류' },
  { value: '협업/프로젝트 팀원 찾기' },
  {
    value: '멘토링/조언 받기',
  },
  {
    value: '취업/이직',
  },
  { value: '채용' },
  { value: '투자/비즈니스 파트너 찾기' },
  { value: '네트워킹/인맥 확장' },
];
