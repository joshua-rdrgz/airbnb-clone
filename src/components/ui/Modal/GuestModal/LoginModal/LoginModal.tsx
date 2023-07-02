'use client';

import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form';
import { cva } from 'class-variance-authority';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { SocialSignUpOrIn } from '../SocialSignUpOrIn';

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

interface LoginModalProps {
  /** closeModal is received from Modal.Window */
  closeModal?(): Promise<void>;
  toggleModal?(modalToOpen: string): void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  closeModal,
  toggleModal,
}) => {
  const router = useRouter();

  const onFormSubmit = async (data: FieldValues) => {
    let error: SignInResponse['error'];
    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (res?.error) {
        error = res.error;
        throw new Error(res.error);
      }
      if (res?.ok) {
        toast.success('Logged in!');
        router.refresh();
        closeModal?.();
      }
    } catch (err: any) {
      toast.error(err.message as string);
    }
  };

  return (
    <>
      <div className='relative p-6 flex-auto'>
        <div className='flex flex-col gap-4'>
          <Heading>
            <Heading.Title>Welcome back</Heading.Title>
            <Heading.Subtitle>Login to your account!</Heading.Subtitle>
          </Heading>
          <Form
            onSubmit={onFormSubmit}
            defaultValues={{
              email: '',
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
              <Form.Submit>Login</Form.Submit>
            </Form.Footer>
          </Form>
        </div>
      </div>
      <SocialSignUpOrIn
        toggleModal={() => toggleModal?.('sign_up_modal')}
        footerLabel='First time using Airbnb?'
        footerButtonContent='Create an account'
      />
    </>
  );
};
