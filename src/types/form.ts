export interface ProfileFormType {
  name: string;
  id: string;
  password: string;
  email: string;
  purpose: { category: string; value: string };
}

export interface JobFormType {
  job: { category: string; value: string };
  career: { value: string } | string;
}

export interface InterestFormType {
  interest: string[];
}

export type FormDataType = ProfileFormType & JobFormType & InterestFormType;
export type PartialFormDataType = Partial<FormDataType>;
