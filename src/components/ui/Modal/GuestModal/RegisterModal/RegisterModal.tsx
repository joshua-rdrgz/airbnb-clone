'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { SocialSignUpOrIn } from '@ui/Modal/GuestModal/SocialSignUpOrIn';

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
          <Form onSubmit={onFormSubmit}>
            <Form.Input id='email' label='Email' required />
            <Form.Input id='name' label='Name' required />
            <Form.Input
              id='password'
              label='Password'
              type='password'
              required
            />
            <Form.Footer>
              <Form.Submit>Continue</Form.Submit>
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
