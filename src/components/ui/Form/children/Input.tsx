import { useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { BiDollar } from 'react-icons/bi';
import { FormContext, type FormContextProps } from '../Form';

/**
 * TYPES
 */

interface InputProps
  extends VariantProps<typeof inputStyles & typeof labelStyles> {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  formatPrice?: boolean;
}

/**
 * STYLES
 */
const inputStyles = cva(
  'peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed',
  {
    variants: {
      formatPrice: {
        true: 'pl-9',
        false: 'pl-4',
      },
      hasErrors: {
        true: 'border-rose-500 focus:border-rose-500',
        false: 'border-neutral-300 focus:border-black',
      },
    },
    defaultVariants: {
      formatPrice: false,
      hasErrors: false,
    },
  }
);

const labelStyles = cva(
  'absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
  {
    variants: {
      formatPrice: {
        true: 'left-9',
        false: 'left-4',
      },
      hasErrors: {
        true: 'text-rose-500',
        false: 'text-zinc-400',
      },
    },
    defaultVariants: {
      formatPrice: false,
      hasErrors: false,
    },
  }
);

/**
 * COMPONENTS
 */

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  required,
  formatPrice,
}) => {
  const { isLoading, register, errors } = useContext(
    FormContext
  ) as FormContextProps;

  return (
    <div className='w-full relative'>
      {formatPrice && (
        <BiDollar
          size={24}
          className='text-neutral-700 absolute top-5 left-2'
        />
      )}
      <input
        id={id}
        disabled={isLoading}
        {...register(id, { required })}
        placeholder=' '
        type={type}
        className={inputStyles({
          formatPrice,
          hasErrors: errors?.[id] && true,
        })}
      />
      <label
        className={labelStyles({
          formatPrice,
          hasErrors: errors?.[id] && true,
        })}
      >
        {label}
      </label>
    </div>
  );
};
