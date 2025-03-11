import { usePathname, useRouter } from 'next/navigation';
import { useFormStore } from '~/stores/use-form-store';
import { PartialFormDataType } from '~/types/form';

function useFormSubmit(redirectUrl: string) {
  const router = useRouter();
  const path = usePathname();

  const { setFormData, setQRData } = useFormStore();

  return (data: PartialFormDataType) => {
    if (path === '/register') {
      setQRData({
        id: data.id || '',
        email: data.email || '',
      });
    }

    if (path === '/register/job') {
      const random = Math.floor(1 + Math.random() * 1000);
      const NickName = `${data.job?.value}${random}`;
      setQRData({
        name: NickName,
        job: data.job,
        purpose: data.purpose,
      });
    }

    setFormData(data);
    router.push(redirectUrl);
  };
}

export default useFormSubmit;
