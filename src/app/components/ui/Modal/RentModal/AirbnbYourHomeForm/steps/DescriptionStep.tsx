import { Heading } from '@/app/components/ui/Heading';
import { TextInput } from '@/app/components/ui/TextInput';

export const DescriptionStep = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Heading>
        <Heading.Title>How would you describe your place?</Heading.Title>
        <Heading.Subtitle>Short and sweet works best!</Heading.Subtitle>
      </Heading>
      <TextInput
        inputId='title'
        addInputProps={{ required: true }}
        label='Title'
      />
      <hr />
      <TextInput
        inputId='description'
        addInputProps={{ required: true }}
        label='Description'
      />
    </div>
  );
};
