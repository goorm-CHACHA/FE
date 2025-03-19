import Image from 'next/image';

interface CheckboxItemProps {
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  label,
  isChecked,
  onChange,
}) => {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        className="hidden"
        id={`checkbox-${label}`}
      />
      <label
        htmlFor={`checkbox-${label}`}
        className="flex items-center cursor-pointer"
      >
        <Image
          src={
            isChecked
              ? '/assets/svgs/checkbox-checked.svg'
              : '/assets/svgs/checkbox-unchecked.svg'
          }
          alt={isChecked ? 'Checked' : 'Unchecked'}
          width={21}
          height={20}
          className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
        />
        <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-[#dedede] ml-2">
          {label}
        </p>
      </label>
    </div>
  );
};

export default CheckboxItem;
