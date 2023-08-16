'use client';

import { useRouter } from 'next/navigation';
import { signIn, SignInResponse } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form';
import { Heading } from '@/app/components/ui/Heading';
import { Form } from '@/app/components/ui/Form';
import { SocialSignUpOrIn } from '../SocialSignUpOrIn';
import { TextInput } from '@/app/components/ui/TextInput';

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
            <TextInput
              inputId='email'
              addInputProps={{ required: true }}
              label='Email'
            />
            <p>DEMO USER: demouser@email.com</p>
            <TextInput
              inputId='password'
              addInputProps={{
                type: 'password',
                required: true,
              }}
              label='Password'
            />
            <p>DEMO PASSWORD: pass1234</p>
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
