'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues } from 'react-hook-form';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { Button } from '@ui/Button';

interface RegisterModalProps {
  /** closeModal is received from Modal.Window */
  closeModal?(): Promise<void>;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ closeModal }) => {
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
      <div className='flex flex-col gap-4 mt-3 p-6'>
        <hr />
        <Button
          intent='secondary'
          label='Continue with Google'
          icon={FcGoogle}
          onClick={() => {}}
        />
        <Button
          intent='secondary'
          label='Continue with Github'
          icon={AiFillGithub}
          onClick={() => {}}
        />
        <div className='justify-center text-neutral-500 mt-4 font-light'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <div>Already have an account?</div>
            <div
              className='text-neutral-800 cursor-pointer hover:underline'
              onClick={closeModal}
            >
              Log in
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
