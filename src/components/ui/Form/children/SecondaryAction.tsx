import { useContext } from 'react';
import { FormContext, type FormContextProps } from '../Form';
import { Button } from '@ui/Button';

interface SecondaryActionProps {
  children: string;
  onClick(): void;
}

export const SecondaryAction: React.FC<SecondaryActionProps> = ({
  children,
  onClick,
}) => {
  const { isLoading } = useContext(FormContext) as FormContextProps;

  return (
    <Button
      label={children}
      onClick={onClick}
      intent='secondary'
      disabled={isLoading}
    />
  );
};
