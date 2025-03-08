import { useRouter } from 'next/navigation';

function useFormSubmit(redirectUrl: string) {
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (data: any) => {
    console.log(data);
    router.push(redirectUrl);
  };
}

export default useFormSubmit;
