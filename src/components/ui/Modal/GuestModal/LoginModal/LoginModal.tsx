'use client';

import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { Button } from '@ui/Button';
import { SocialSignUpOrIn } from '../SocialSignUpOrIn';

interface LoginModalProps {
  /** closeModal is received from Modal.Window */
  closeModal?(): Promise<void>;
}

export const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
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
          <Form onSubmit={onFormSubmit}>
            <Form.Input id='email' label='Email' required />
            <Form.Input
              id='password'
              label='Password'
              type='password'
              required
            />
            <Form.Footer>
              <Form.Submit>Login</Form.Submit>
            </Form.Footer>
          </Form>
        </div>
      </div>
      <SocialSignUpOrIn closeModal={closeModal} />
    </>
  );
};
