export interface ProfileFormType {
  name: string;
  id: string;
  password: string;
  email: string;
}

export interface JobFormType {
  job: { category: string; value: string };
  career: { value: string } | string;
  purpose: { category: string; value: string };
}

export interface InterestFormType {
  interest: string[];
}

export interface QRCodeType extends ProfileFormType {
  id: string;
  name: string;
  email: string;
  job: { category: string; value: string };
  purpose: { category: string; value: string };
}

export type FormDataType = ProfileFormType & JobFormType & InterestFormType;
export type PartialFormDataType = Partial<FormDataType>;
export type PartialQRCodeType = Partial<QRCodeType>;
