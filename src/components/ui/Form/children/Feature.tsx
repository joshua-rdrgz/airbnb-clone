import { cloneElement } from 'react';
import { useFormContext } from 'react-hook-form';

interface FeatureProps<T> {
  children: React.ReactElement<{ value: T }>;
  name: string;
}

export const Feature = <T extends any>({ children, name }: FeatureProps<T>) => {
  const methods = useFormContext();

  return <>{cloneElement(children, { value: methods.getValues()?.[name] })}</>;
};
