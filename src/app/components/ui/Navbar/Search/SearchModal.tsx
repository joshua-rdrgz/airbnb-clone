'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { formatISO } from 'date-fns';
import queryString from 'query-string';
import { FieldValues } from 'react-hook-form';
import { Form } from '@/app/components/ui/Form';
import { LocationStep } from '@/app/components/ui/Modal/RentModal/AirbnbYourHomeForm/steps';
import { Heading } from '../../Heading';
import { Calendar } from '../../Calendar';
import { Info } from '@/app/components/ui/Modal/RentModal/AirbnbYourHomeForm/steps';
import { Range } from 'react-date-range';

interface SearchModalProps {
  closeModal?(): Promise<void>;
}

export const SearchModal = ({ closeModal }: SearchModalProps) => {
  const router = useRouter();
  const params = useSearchParams();

  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const onSubmit = useCallback(
    async (data: FieldValues) => {
      let currentQuery = {};

      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        ...data,
        locationValue: data?.location.value,
      };
      delete updatedQuery.location;

      if (dateRange.startDate) {
        updatedQuery.startDate = formatISO(dateRange.startDate);
      }
      if (dateRange.endDate) {
        updatedQuery.endDate = formatISO(dateRange.endDate);
      }

      const url = queryString.stringifyUrl(
        {
          url: '/',
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
      closeModal?.();
    },
    [params, router, dateRange.startDate, dateRange.endDate, closeModal]
  );

  return (
    <div className='relative p-6 flex-auto'>
      <div className='flex flex-col gap-8'>
        <Form
          onSubmit={onSubmit}
          defaultValues={{
            location: '',
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
          }}
          watch={['location', 'guestCount', 'roomCount', 'bathroomCount']}
          numberOfSteps={3}
          lastStepBtnContent='Search'
        >
          <Form.Step step={1}>
            <Form.Feature name='location'>
              <LocationStep
                title='Where do you wanna go?'
                subtitle='Find the perfect location!'
              />
            </Form.Feature>
          </Form.Step>
          <Form.Step step={2}>
            <Heading>
              <Heading.Title>When do you plan to go?</Heading.Title>
              <Heading.Subtitle>Make sure everyone is free!</Heading.Subtitle>
            </Heading>
            <Calendar
              value={dateRange}
              onChange={(value) => setDateRange(value.selection)}
            />
          </Form.Step>
          <Form.Step step={3}>
            <Heading>
              <Heading.Title>More information</Heading.Title>
              <Heading.Subtitle>Find your perfect place!</Heading.Subtitle>
            </Heading>
            <Info
              controlledInputName='guestCount'
              title='Guests'
              subtitle='How many guests are coming?'
            />
            <br />
            <Info
              controlledInputName='roomCount'
              title='Rooms'
              subtitle='How many rooms do you need?'
            />
            <br />
            <Info
              controlledInputName='bathroomCount'
              title='Bathrooms'
              subtitle='How many bathrooms do you need?'
            />
            <br />
          </Form.Step>
        </Form>
      </div>
    </div>
  );
};
