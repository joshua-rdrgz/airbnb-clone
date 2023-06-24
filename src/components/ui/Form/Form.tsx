'use client';

import { createContext, useState } from 'react';
import {
  FieldValues,
  UseFormRegister,
  useForm,
  type FieldErrors,
} from 'react-hook-form';
import { Input, Footer, SecondaryAction, Submit } from './children';

/**
 * CREATE FORMCONTEXT
 */
export interface FormContextProps {
  isLoading: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

export const FormContext = createContext<FormContextProps | null>(null);

/**
 * FORM COMPONENT
 */
interface FormProps {
  children: React.ReactNode;
  onSubmit(data: FieldValues): Promise<void>;
}

export const Form = ({ children, onSubmit }: FormProps) => {
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

  const onSubmitWrapper = (
    data: FieldValues,
    onFormSubmit: FormProps['onSubmit']
  ) => {
    setIsLoading(true);

    onFormSubmit(data).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <FormContext.Provider value={{ isLoading, errors, register }}>
      <form
        onSubmit={handleSubmit((data) => onSubmitWrapper(data, onSubmit))}
        className='flex flex-col gap-4'
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

/** ASSIGN CHILDREN COMPONENTS TO PARENT */
Form.Input = Input;
Form.Footer = Footer;
Form.SecondaryAction = SecondaryAction;
Form.Submit = Submit;
