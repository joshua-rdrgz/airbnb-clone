'use client';

import Select from 'react-select';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';
import { useCountries } from '@hooks/useCountries';

export const LocationStep = () => {
  const { getAll } = useCountries();
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
    </>
  );
};
