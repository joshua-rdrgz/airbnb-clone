import { useContext, type LabelHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormContext, FormContextProps } from '../Form';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  styles: string | ((props: { [key: string]: any }) => string);

  /** If currency is involved with the input / label duo */
  formatPrice?: boolean;

  /** Native to Label element, but is required */
  htmlFor: string;
}

const isSelectedField = (currentField: string, watching: any[] | undefined) => {
  const isSelected = watching?.find(
    (fieldToWatch) => fieldToWatch === currentField
  );

  return isSelected ? true : false;
};

export const Label: React.FC<LabelProps> = ({
  children,
  styles,
  formatPrice,
  htmlFor,
}) => {
  const {
    formState: { errors },
  } = useFormContext();
  const { watching } = useContext(FormContext) as FormContextProps;

  const stylesIsCva = typeof styles !== 'string';

  const selected = isSelectedField(htmlFor, watching);

  return (
    <label
      className={
        stylesIsCva
          ? styles?.({
              selected,
              formatPrice,
              hasErrors: errors?.[htmlFor] && true,
            })
          : styles
      }
    >
      {children}
    </label>
  );
};
