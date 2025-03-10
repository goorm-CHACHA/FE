import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { PartialFormDataType, PartialQRCodeType } from '~/types/form';

interface FormStoreType {
  formData: PartialFormDataType;
  qrData: PartialQRCodeType;
  setFormData: (data: PartialFormDataType) => void;
  setQRData: (data: PartialQRCodeType) => void;
  clearStore: () => void;
}

export const useFormStore = create<FormStoreType>()(
  persist(
    (set) => ({
      formData: {},
      qrData: {},
      setQRData: (data) =>
        set((state) => ({ qrData: { ...state.qrData, ...data } })),

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

      clearStore: () => {
        set(() => ({
          formData: {},
          qrData: {},
        }));
      },
    }),
    {
      name: 'form-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
