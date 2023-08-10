'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { SocialSignUpOrIn } from '@ui/Modal/GuestModal/SocialSignUpOrIn';
import { TextInput } from '@ui/TextInput';

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
      toggleModal?.('login_modal');
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
            <TextInput
              inputId='email'
              addInputProps={{ required: true }}
              label='Email'
            />
            <TextInput
              inputId='name'
              addInputProps={{ required: true }}
              label='Name'
            />
            <TextInput
              inputId='password'
              addInputProps={{
                type: 'password',
                required: true,
              }}
              label='Password'
            />
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
