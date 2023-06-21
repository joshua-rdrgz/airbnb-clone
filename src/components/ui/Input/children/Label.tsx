import { useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { InputContext } from '../Input';

/**
 * LABEL CHILD COMPONENT
 */

interface LabelProps extends VariantProps<typeof labelStyles> {
  children: string;
}

/** Label Styles */
const labelStyles = cva(
  'absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4',
  {
    variants: {
      formatPrice: {
        true: 'left-9',
        false: 'left-4',
      },
      errors: {
        true: 'text-rose-500',
        false: 'text-zinc-400',
      },
    },
    defaultVariants: {
      formatPrice: false,
      errors: false,
    },
  }
);

/**
 * Label Component
 * @required
 */
export const Label: React.FC<LabelProps> = ({ children }) => {
  const { id, formatPrice, errors } = useContext(InputContext);
  return (
    <label
      className={labelStyles({ formatPrice, errors: errors?.[id] && true })}
    >
      {children}
    </label>
  );
};
