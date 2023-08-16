import { useContext, type InputHTMLAttributes } from 'react';
import { FormContext, FormContextProps } from '../Form';
import { useFormContext } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  styles?: string | ((props: { [key: string]: any }) => string);

  /** If currency is involved with input / label duo */
  formatPrice?: boolean;

  /** Natvie to HTML input element, but need to be required */
  id: string;
}

export const Input: React.FC<InputProps> = ({
  styles,
  formatPrice,
  id,
  required,
  name,
  ...restProps
}) => {
  const { isLoading } = useContext(FormContext) as FormContextProps;
  const methods = useFormContext();

  const stylesIsCva = typeof styles !== 'string';

  return (
    <>
      {formatPrice && (
        <BiDollar
          size={24}
          className='text-neutral-700 absolute top-5 left-2'
        />
      )}
      <input
        {...methods.register(name ? name : id, { required })}
        id={id}
        disabled={isLoading}
        className={
          stylesIsCva
            ? styles?.({
                formatPrice,
                hasErrors: methods.formState.errors[id] && true,
              })
            : styles
        }
        {...restProps}
      />
    </>
  );
};
