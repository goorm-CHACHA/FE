import { useRouter } from 'next/navigation';
import { useFormStore } from '~/stores/use-form-store';
import { PrevFormDataType } from '~/types/form';

function useFormSubmit(redirectUrl: string) {
  const router = useRouter();
  const { formData, setFormData } = useFormStore();

  return (data: PrevFormDataType) => {
    setFormData(data);
    router.push(redirectUrl);
    console.log(formData);
  };
}

export default useFormSubmit;
