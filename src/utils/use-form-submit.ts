import { usePathname, useRouter } from 'next/navigation';
import { useFormStore } from '~/stores/use-form-store';
import { PartialFormDataType } from '~/types/form';

function useFormSubmit(redirectUrl: string) {
  const router = useRouter();
  const path = usePathname();

  const { setFormData, setQRData } = useFormStore();

  return (data: PartialFormDataType) => {
    if (path === '/register') {
      setQRData(data);
    }

    setFormData(data);
    router.push(redirectUrl);
  };
}

export default useFormSubmit;
