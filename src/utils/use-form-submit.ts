import { usePathname, useRouter } from 'next/navigation';
import { useFormStore } from '~/stores/use-form-store';
import { PartialFormDataType } from '~/types/form';

function useFormSubmit(redirectUrl: string) {
  const router = useRouter();
  const path = usePathname();

  const { setFormData, setQRData } = useFormStore();

  return (data: PartialFormDataType) => {
    if (path === '/register/job') {
      const random = Math.floor(1 + Math.random() * 1000);
      const nickname = `${data.job?.category}${random}`;
      setFormData({ ...data, nickname });
      setQRData({
        job: data.job,
      });
    } else {
      setFormData(data);

      if (path === '/register') {
        setQRData({
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      }

      if (path === '/register/interest') {
        setQRData({ purpose: data.purpose });
      }
    }
    router.push(redirectUrl);
  };
}

export default useFormSubmit;
