import { useContext } from 'react';
import { FormContext, FormContextProps } from '../Form';
import { Button } from '@/app/components/ui/Button';

interface SubmitProps {
  children: string;
}

export const Submit: React.FC<SubmitProps> = ({ children }) => {
  const { isLoading } = useContext(FormContext) as FormContextProps;

  return <Button typeSubmit label={children} disabled={isLoading} />;
};
