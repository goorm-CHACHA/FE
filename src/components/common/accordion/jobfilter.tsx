import { useFilterStore } from '~/stores/use-filter-store';
import { AccordionItem, AccordionTrigger, AccordionContent } from './accordion';
import { Accordion } from 'radix-ui';

import { useFormContext } from 'react-hook-form';
import { FormValues } from '~/components/match/one-to-one';

const jobCategories = [
  {
    category: '소프트웨어 개발',
    subcategories: ['프론트엔드', '백엔드', '풀스택', '모바일', '임베디드/IoT'],
  },
  {
    category: '데이터&AI',
    subcategories: [
      '데이터 엔지니어',
      '데이터 분석가',
      'AI/머신러닝 엔지니어',
      'MLOps 엔지니어',
      '데이터 사이언티스트',
    ],
  },
  {
    category: '클라우드&인프라',
    subcategories: [
      '클라우드 엔지니어',
      'DevOps 엔지니어',
      'SRE',
      '네트워크 엔지니어',
      '보안 엔지니어',
      '블록체인 엔지니어',
    ],
  },
  {
    category: '기획',
    subcategories: ['PM', 'PO', '사업 기획', '콘텐츠 기획', 'UX 기획'],
  },
  {
    category: '운영',
    subcategories: [
      '서비스 운영',
      '커뮤니티 매니저',
      '플랫폼 운영',
      '고객 지원',
    ],
  },

  {
    category: 'UI/UX 디자인',
    subcategories: ['UX/UI 디자이너', 'UX 리서처', '인터랙션 디자이너'],
  },
  {
    category: '그래픽 디자인',
    subcategories: [
      '그래픽 디자이너',
      '모션 그래픽 디자이너',
      '일러스트레이터',
      '3D 디자이너',
    ],
  },
  {
    category: '마케팅',
    subcategories: [
      '디지털 마케터',
      '퍼포먼스 마케팅',
      '브랜드 마케팅',
      'SEO/콘텐츠 마케팅',
      'CRM 마케팅',
    ],
  },
  {
    category: '세일즈&비즈니스',
    subcategories: ['B2B 영업', 'B2C 영업', '파트너십 매니저', '사업 개발'],
  },
  {
    category: '투자&VC',
    subcategories: ['VC 투자자', '엑셀러레이터', '엔젤 투자자'],
  },
  {
    category: '연구&교육',
    subcategories: ['AI 연구원', 'IT 강사/교수', '테크니컬 라이터'],
  },
];

const JobFilter = () => {
  const { jobs, setFilter } = useFilterStore();
  const { setValue } = useFormContext<FormValues>();

  const handleJobFilterChange = (job: string) => {
    const updatedJobs = jobs.includes(job)
      ? jobs.filter((item) => item !== job)
      : [...jobs, job];

    setFilter('jobs', updatedJobs);
    setValue('jobs', updatedJobs, { shouldValidate: true });
  };

  return (
    <Accordion.Item value="job">
      <Accordion.Trigger>직무/직책</Accordion.Trigger>
      <Accordion.Content>
        {jobCategories.map((category) => (
          <div key={category.category} className="mb-4">
            <h4 className="text-white font-semibold mb-2">
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.map((job) => (
                <button
                  key={job}
                  onClick={() => handleJobFilterChange(job)}
                  className={`px-3 py-1 rounded-full ${
                    jobs.includes(job)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-600 text-gray-200'
                  }`}
                >
                  {job}
                </button>
              ))}
            </div>
          </div>
        ))}
      </Accordion.Content>
    </Accordion.Item>
  );
};

export default JobFilter;
