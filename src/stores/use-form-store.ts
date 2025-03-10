import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
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

export const useFormStore = create<FormStoreType>()(
  persist(
    (set) => ({
      formData: {} as FormDataType,
      qrData: {} as ProfileFormType,
      setQRData: (data) => set((state) => ({ ...state, qrData: data })),
      setFormData: (data) =>
        set((state) => {
          const transformedData: PartialFormDataType = {
            ...state.formData,
            ...data,
            career:
              data.career !== undefined && typeof data.career === 'object'
                ? data.career.value
                : state.formData.career,
          };
          return { formData: transformedData };
        }),
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
