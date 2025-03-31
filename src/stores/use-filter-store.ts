import { create } from 'zustand';

// 타입 정의
type FilterCategory = 'jobs' | 'interests' | 'careers' | 'purposes';

export interface FilterState {
  jobs: string[];
  interests: string[];
  careers: number[];
  purposes: string[];
  setFilter: (category: FilterCategory, values: string[]) => void;
  toggleFilter: (category: FilterCategory, value: number) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  // 초기 상태
  jobs: [],
  interests: [],
  careers: [],
  purposes: [],

  // 필터 설정 함수
  setFilter: (category, values) =>
    set((state) => ({ ...state, [category]: values })),

  // 필터 토글 함수
  toggleFilter: (category, value) =>
    set((state) => {
      const currentValues = state[category as keyof FilterState] as (
        | string
        | number
      )[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return { ...state, [category]: newValues };
    }),

  // 필터 초기화 함수
  resetFilters: () =>
    set(() => ({
      jobs: [],
      interests: [],
      careers: [],
      purposes: [],
    })),
}));
