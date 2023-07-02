'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form';
import { cva } from 'class-variance-authority';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { SocialSignUpOrIn } from '@ui/Modal/GuestModal/SocialSignUpOrIn';

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

interface RegisterModalProps {
  /** closeModal is received from Modal.Window */
  closeModal?(): Promise<void>;
  toggleModal?(modalToOpen: string): void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  closeModal,
  toggleModal,
}) => {
  const onFormSubmit = async (data: FieldValues) => {
    try {
      axios.post('/api/register', data);
      toast.success('Registered!');
      closeModal?.();
    } catch (err) {
      toast.error('Something went wrong.... 🤔');
    }
  };

  return (
    <>
      <div className='relative p-6 flex-auto'>
        <div className='flex flex-col gap-4'>
          <Heading>
            <Heading.Title>Welcome to Airbnb</Heading.Title>
            <Heading.Subtitle>Create an account!</Heading.Subtitle>
          </Heading>
          <Form
            onSubmit={onFormSubmit}
            defaultValues={{
              email: '',
              name: '',
              password: '',
            }}
          >
            <div className='w-full relative'>
              <Form.Input id='email' styles={inputStyles} required />
              <Form.Label htmlFor='email' styles={labelStyles}>
                Email
              </Form.Label>
            </div>
            <div className='w-full relative'>
              <Form.Input id='name' styles={inputStyles} required />
              <Form.Label htmlFor='name' styles={labelStyles}>
                Name
              </Form.Label>
            </div>
            <div className='w-full relative'>
              <Form.Input
                id='password'
                type='password'
                styles={inputStyles}
                required
              />
              <Form.Label htmlFor='password' styles={labelStyles}>
                Password
              </Form.Label>
            </div>
            <Form.Footer>
              <Form.Submit>Register</Form.Submit>
            </Form.Footer>
          </Form>
        </div>
      </div>
      <SocialSignUpOrIn
        toggleModal={() => toggleModal?.('login_modal')}
        footerLabel='Already have an account?'
        footerButtonContent='Log in'
      />
    </>
  );
};
