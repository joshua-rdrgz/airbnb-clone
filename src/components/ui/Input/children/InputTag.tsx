import { useContext } from "react";
import { cva, type VariantProps } from 'class-variance-authority';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { InputContext } from "../Input";

/**
 * INPUTTAG CHILD COMPONENT
 */

interface InputTagProps extends VariantProps<typeof inputTagStyles> {
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  type?: string;
}

/** InputTag Styles */
const inputTagStyles = cva(
  'peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed',
  {
    variants: {
      formatPrice: {
        true: 'pl-9',
        false: 'pl-4',
      },
      errors: {
        true: 'border-rose-500 focus:border-rose-500',
        false: 'border-neutral-300 focus:border-black',
      },
    },
    defaultVariants: {
      formatPrice: false,
      errors: false,
    },
  }
);
/**
 * InputTag Component
 * @required
 */
export const InputTag: React.FC<InputTagProps> = ({
  disabled,
  required,
  register,
  type,
}) => {
  const { id, formatPrice, errors } = useContext(InputContext);
  return (
    <input
      id={id}
      disabled={disabled}
      {...register(id, { required })}
      placeholder=' '
      type={type}
      className={inputTagStyles({ formatPrice, errors: errors?.[id] && true })}
    />
  );
};