'use client';

import { createContext } from 'react';
import { FieldErrors } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';
import { InputTag, Label } from './children';

/**
 * INPUT COMPOUND COMPONENT TYPES
 */
type FormatPrice = boolean;
type Errors = FieldErrors | undefined;
type Id = string;

interface InputContextType {
  id: Id;
  formatPrice: FormatPrice;
  errors: Errors;
}

interface InputProps {
  children: React.ReactNode;
  id: Id;
  formatPrice?: FormatPrice;
  errors: Errors;
}

/**
 * CREATE INPUTCONTEXT
 */
export const InputContext = createContext<InputContextType>({
  formatPrice: false,
  errors: undefined,
  id: '',
});

/**
 * PARENT COMPONENT
 */
export const Input = ({
  children,
  id,
  formatPrice = false,
  errors,
}: InputProps) => {
  return (
    <InputContext.Provider value={{ id, formatPrice, errors }}>
      <div className='w-full relative'>
        {formatPrice && (
          <BiDollar
            size={24}
            className='text-neutral-700 absolute top-5 left-2'
          />
        )}
        {children}
      </div>
    </InputContext.Provider>
  );
};

/** ASSIGN CHILDREN COMPONENTS TO PARENT */
Input.InputTag = InputTag;
Input.Label = Label;
