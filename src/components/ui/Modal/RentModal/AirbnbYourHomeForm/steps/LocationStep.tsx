'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import Select from 'react-select';
import { useCountries } from '@hooks/useCountries';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { Loader } from '@ui/Loader';

interface LocationStepProps {
  /** Can receive from Form.Feature */
  value?: {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
  };
}

export const LocationStep: React.FC<LocationStepProps> = ({
  value: location,
}) => {
  const { getAll } = useCountries();

  const Map = useMemo(
    () =>
      dynamic(
        async () => {
          const mod = await import('@ui/Map');
          return mod.Map;
        },
        { loading: () => <Loader size={50} height='small' />, ssr: false }
      ),
    [location]
  );

  return (
    <>
      <Heading>
        <Heading.Title>Where is your place located?</Heading.Title>
        <Heading.Subtitle>Help guests find you!</Heading.Subtitle>
      </Heading>
      <Form.ControlledInput name='location'>
        <Select
          placeholder='Anywhere'
          isClearable
          options={getAll()}
          // value given by Form.ControlledInput
          // onChange given by Form.ControlledInput
          formatOptionLabel={(option: any) => (
            <div className='flex flex-row items-center gap-3'>
              <div>{option.flag}</div>
              <div>
                {option.label},{' '}
                <span className='text-neutral-500 ml-1'>{option.region}</span>
              </div>
            </div>
          )}
          classNames={{
            control: () => 'p-3 border-2',
            input: () => 'text-lg',
            option: () => 'text-lg',
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 6,
            colors: {
              ...theme.colors,
              primary: 'black',
              primary25: '#ffe4e6',
            },
          })}
        />
      </Form.ControlledInput>
      <Map center={location?.latlng} />
    </>
  );
};
