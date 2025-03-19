export interface ProfileFormType {
  name: string;
  id: string;
  email: string;
  password: string;
  phone: string;
}

export interface JobFormType {
  affiliation: string;
  job: { category: string; value: string };
  career: { value: string } | string;
  nickname: string;
}

export interface NetworkFormType {
  purpose: { value: string };
  interestJob: { category: string; value: string };
  interest: string[];
}

export interface QRCodeType {
  name: string;
  id: string;
  email: string;
  phone: string;
  affiliation: string;
  job: { category: string; value: string };
}

export type FormDataType = ProfileFormType & JobFormType & NetworkFormType;
export type PartialFormDataType = Partial<FormDataType>;
export type PartialQRCodeType = Partial<QRCodeType>;
