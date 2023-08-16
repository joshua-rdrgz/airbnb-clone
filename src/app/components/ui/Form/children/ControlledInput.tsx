import { cloneElement } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface ControlledInputProps {
  children: React.ReactElement;
  name: string;
}

export const ControlledInput: React.FC<ControlledInputProps> = ({
  children,
  name,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) =>
        cloneElement(children, { onChange, value })
      }
    />
  );
};
