import Button from '~/components/common/button';

export default function Home() {
  return (
    <div>
      <Button text="BUTTON" size={'sm'} />
      <Button text="BUTTON" variant={'outline'} />
      <Button text="BUTTON" variant={'red'} size={'lg'} />
      <Button text="BUTTON" size={'full'} />
      <Button text="BUTTON" size={'full'} className="rounded-full" />
    </div>
  );
}
