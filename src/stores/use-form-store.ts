import { create } from 'zustand';
import {
  FormDataType,
  PartialFormDataType,
  ProfileFormType,
} from '~/types/form';

interface FormStoreType {
  formData: PartialFormDataType;
  qrData: PartialFormDataType;
  setQRData: (data: PartialFormDataType) => void;
  setFormData: (data: PartialFormDataType) => void;
}

export const useFormStore = create<FormStoreType>((set) => ({
  formData: {} as FormDataType,
  qrData: {} as ProfileFormType,
  setQRData: (data) => set((state) => ({ ...state, qrData: data })),
  setFormData: (data) =>
    set((state) => {
      console.log('Received career:', data.career); // 값 확인
      const transformedData: PartialFormDataType = {
        ...state.formData,
        ...data,
        career:
          data.career !== undefined && typeof data.career === 'object'
            ? data.career.value
            : state.formData.career,
      };

      console.log('Transformed career:', transformedData.career); // 변환된 값 확인
      return { formData: transformedData };
    }),
}));
