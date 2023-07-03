'use client';

import { Form } from '@ui/Form';
import { FieldValues } from 'react-hook-form';
import { CategoryStep, LocationStep } from './steps';

export const AirbnbYourHomeForm = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log('form submitted, here is the data: ', data);
  };
  return (
    <Form
      onSubmit={onFormSubmit}
      defaultValues={{
        category: '',
        location: '',
      }}
      watch={['category', 'location']}
      numberOfSteps={6}
    >
      <Form.Step step={1}>
        <CategoryStep />
      </Form.Step>
      <Form.Step step={2}>
        <LocationStep />
      </Form.Step>
    </Form>
  );
};
