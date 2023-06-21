'use client';

import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRegisterModal } from '@hooks/useRegisterModal';
import { Modal } from '@ui/Modal';
import { Heading } from '@ui/Heading';
import { Input } from '@ui/Input';
import { Button } from '@ui/Button';
import { toast } from 'react-hot-toast';

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((err) => {
        toast.error('something went wrong.... 🤔');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading center>
        <Heading.Title>Welcome to Airbnb</Heading.Title>
        <Heading.Subtitle>Create an account!</Heading.Subtitle>
      </Heading>
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
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
      <div className='justify-center text-neutral-500 text-center mt-4 font-light'>
        <div className='flex flex-row items-center gap-2'>
          <div>Already have an account?</div>
          <div
            className='text-neutral-800 cursor-pointer hover:underline'
            onClick={registerModal.onClose}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
