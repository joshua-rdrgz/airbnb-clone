import { Heading } from '@ui/Heading';
import { TextInput } from '@ui/TextInput';

export const PriceStep = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading>
        <Heading.Title>Now, set your price</Heading.Title>
        <Heading.Subtitle>How much do you charge per night?</Heading.Subtitle>
      </Heading>
      <TextInput
        inputId='price'
        addInputProps={{
          formatPrice: true,
          type: 'number',
        }}
        label='Price'
      />
    </div>
  );
};
