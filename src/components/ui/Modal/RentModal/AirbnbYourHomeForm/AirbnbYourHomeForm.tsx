'use client';

import { Form } from '@ui/Form';
import { FieldValues } from 'react-hook-form';
import { CategoryStep, LocationStep, InfoStep } from './steps';

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
        guestCount: 1,
        roomCount: 1,
        bathroomCount: 1,
      }}
      watch={[
        'category',
        'location',
        'guestCount',
        'roomCount',
        'bathroomCount',
      ]}
      numberOfSteps={6}
    >
      <Form.Step step={1}>
        <CategoryStep />
      </Form.Step>
      <Form.Step step={2}>
        <Form.Feature name='location'>
          <LocationStep />
        </Form.Feature>
      </Form.Step>
      <Form.Step step={3}>
        <InfoStep />
      </Form.Step>
    </Form>
  );
};
