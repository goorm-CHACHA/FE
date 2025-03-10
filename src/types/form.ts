export interface ProfileFormType {
  name?: string;
  id?: string;
  password?: string;
  email?: string;
}

export interface JobFormType {
  job?: { category: string; value: string; label: string };
  career?: { value: string; label: string };
}

export interface JobFormTransformedType {
  job?: { category: string; value: string };
  career?: string;
}

export interface InterestFormType {
  interest?: string[];
}

// interface는 union 정의 불가
export type PrevFormDataType = ProfileFormType | JobFormType | InterestFormType;

// interface는 & 사용 불가
export type FormDataType = ProfileFormType &
  JobFormTransformedType &
  InterestFormType;
