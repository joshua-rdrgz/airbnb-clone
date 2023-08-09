import { Heading } from '@ui/Heading';
import { TextInput } from '@ui/TextInput';

export const DescriptionStep = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading>
        <Heading.Title>How would you describe your place?</Heading.Title>
        <Heading.Subtitle>Short and sweet works best!</Heading.Subtitle>
      </Heading>
      <TextInput inputId='title' label='Title' />
      <hr />
      <TextInput inputId='description' label='Description' />
    </div>
  );
};