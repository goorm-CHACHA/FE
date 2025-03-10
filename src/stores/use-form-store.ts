import { create } from 'zustand';
import { PrevFormDataType, FormDataType } from '~/types/form';

interface FormStoreType {
  formData: FormDataType;
  setFormData: (data: PrevFormDataType) => void;
}

export const useFormStore = create<FormStoreType>((set) => ({
  formData: {} as FormDataType,
  setFormData: (data) =>
    set((state) => {
      // job , career 데이터 형식 변환
      const transformedData: Partial<FormDataType> = {
        ...state.formData,
        ...data,
        job:
          'job' in data
            ? {
                category: data.job?.category ?? '',
                value: data.job?.value ?? '',
              }
            : undefined,
        career: 'career' in data ? (data.career?.value ?? '') : undefined,
      };

      return { formData: transformedData };
    }),
}));
