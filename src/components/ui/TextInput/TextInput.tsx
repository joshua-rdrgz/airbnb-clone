import { cva } from 'class-variance-authority';
import { Form } from '@ui/Form';

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

interface TextInputProps {
  inputId: string;
  inputProps: {};
  label: string;
}

/** *Must be used inside Form Compound Component* */
export const TextInput: React.FC<TextInputProps> = ({ inputId, inputProps, label }) => {
  return (
    <div className='w-full relative'>
      <Form.Input id={inputId} styles={inputStyles} {...inputProps} />
      <Form.Label styles={labelStyles} htmlFor={inputId}>
        {label}
      </Form.Label>
    </div>
  );
};
