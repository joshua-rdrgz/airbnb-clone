import { cva } from 'class-variance-authority';
import { Heading } from '@ui/Heading';
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

export const DescriptionStep = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading>
        <Heading.Title>How would you describe your place?</Heading.Title>
        <Heading.Subtitle>Short and sweet works best!</Heading.Subtitle>
      </Heading>
      <div className='w-full relative'>
        <Form.Input id='title' styles={inputStyles} />
        <Form.Label styles={labelStyles} htmlFor='title'>
          Title
        </Form.Label>
      </div>
      <hr />
      <div className='w-full relative'>
        <Form.Input id='description' styles={inputStyles} />
        <Form.Label styles={labelStyles} htmlFor='description'>
          Description
        </Form.Label>
      </div>
    </div>
  );
};
