import { useContext } from 'react';
import { FormContext, type FormContextProps } from '../Form';
import { Button, type ButtonProps } from '@ui/Button';

interface ActionProps {
  children: string;
  onClick(): void;
  intent?: ButtonProps['intent'];
}

export const Action: React.FC<ActionProps> = ({
  children,
  onClick,
  intent = 'primary',
}) => {
  const { isLoading } = useContext(FormContext) as FormContextProps;

  return (
    <Button
      label={children}
      onClick={onClick}
      intent={intent}
      disabled={isLoading}
    />
  );
};
