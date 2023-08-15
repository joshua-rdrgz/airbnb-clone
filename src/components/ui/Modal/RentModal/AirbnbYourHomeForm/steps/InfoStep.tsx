'use client';

import { Counter } from '@ui/Counter';
import { Heading } from '@ui/Heading';
import { Form } from '@ui/Form';

interface InfoProps {
  controlledInputName: string;
  title: string;
  subtitle: string;
}

export const Info: React.FC<InfoProps> = ({
  controlledInputName,
  title,
  subtitle,
}) => {
  return (
    <Form.ControlledInput name={controlledInputName}>
      <Counter>
        <Counter.Heading title={title} subtitle={subtitle} />
        <Counter.Content>
          <Counter.Button type='reduce' />
          <Counter.Count />
          <Counter.Button type='add' />
        </Counter.Content>
      </Counter>
    </Form.ControlledInput>
  );
};

export const InfoStep = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading>
        <Heading.Title>Share some basics about your place</Heading.Title>
        <Heading.Subtitle>What amenities do you have?</Heading.Subtitle>
      </Heading>
      <Info
        controlledInputName='guestCount'
        title='Guests'
        subtitle='How many guests do you allow?'
      />
      <br />
      <Info
        controlledInputName='roomCount'
        title='Rooms'
        subtitle='How many rooms do you have?'
      />
      <br />
      <Info
        controlledInputName='bathroomCount'
        title='Bathrooms'
        subtitle='How many bathrooms do you have?'
      />
      <br />
    </div>
  );
};
