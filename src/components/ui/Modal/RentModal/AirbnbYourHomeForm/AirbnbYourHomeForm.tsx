'use client';

import axios from 'axios';
import { FieldValues } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import {
  CategoryStep,
  LocationStep,
  InfoStep,
  ImageStep,
  DescriptionStep,
  PriceStep,
} from './steps';
import { Form } from '@ui/Form';

interface AirbnbYourHomeFormProps {
  closeModal?(): Promise<void>;
}

export const AirbnbYourHomeForm = ({ closeModal }: AirbnbYourHomeFormProps) => {
  const router = useRouter();

  const onFormSubmit = async (data: FieldValues) => {
    try {
      await axios.post('/api/listings', data);
      toast.success('Listing created!');
      closeModal?.();
      router.refresh();
    } catch (error: any) {
      toast.error('Something went wrong.');
      throw new Error(error.message);
    }
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
        imageSrc: '',
        title: '',
        description: '',
        price: 1,
      }}
      watch={[
        'category',
        'location',
        'guestCount',
        'roomCount',
        'bathroomCount',
        'imageSrc',
        'title',
        'description',
        'price',
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
      <Form.Step step={4}>
        <ImageStep />
      </Form.Step>
      <Form.Step step={5}>
        <DescriptionStep />
      </Form.Step>
      <Form.Step step={6}>
        <PriceStep />
      </Form.Step>
    </Form>
  );
};
