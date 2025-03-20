import { usePathname, useRouter } from 'next/navigation';
import { useFormStore } from '~/stores/use-form-store';
import { PartialFormDataType } from '~/types/form';
import axios from 'axios';
import { formatFormData } from '~/utils/format-form-data';

function useFormSubmit(redirectUrl: string) {
  const router = useRouter();
  const path = usePathname();
  const { setFormData, setQRData, formData, clearformData } = useFormStore();

  return async (data: PartialFormDataType) => {
    const updatedData = { ...data };

    if (path === '/register/job') {
      const random = Math.floor(1 + Math.random() * 1000);
      updatedData.nickname = `${data.job?.category}${random}`;

      setQRData({
        affiliation: data.affiliation,
        job: data.job,
      });
    } else if (path === '/register') {
      setQRData({
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
    }

    setFormData(updatedData);

    if (path === '/register/network') {
      try {
        const formattedData = formatFormData({ ...formData, ...updatedData });
        console.log(formattedData);
        await axios.post('/api/users/signup', formattedData);
        clearformData();
      } catch (error) {
        console.error(error);
      }
    }
    router.push(redirectUrl);
  };
}

export default useFormSubmit;
