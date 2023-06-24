'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonIcon } from './ButtonIcon';
import type { IconType } from 'react-icons';

/**
 * BUTTON PROPS
 */
interface ButtonProps extends VariantProps<typeof buttonStyles> {
  /** The content of the button. */
  label: string;

  /** Function to be assigned to the HTML button's "onClick" attribute. */
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;

  /** Whether or not the HTML button is disabled to the user.
   * @default false
   */
  disabled?: boolean;

  /** Defines styling for Primary CTAs and Secondary CTAs
   * @default primary
   */
  intent?: 'primary' | 'secondary';

  /** Defines the size of the button on the page.
   * @default large
   */
  size?: 'small' | 'large';

  /** Define a React-Icon here to replace text with a React-Icon. */
  icon?: IconType;

  /** Defines if the button is meant to be an input of type submit. */
  typeSubmit?: boolean;
}

/**
 * BUTTON STYLES
 */
const buttonStyles = cva(
  'relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full',
  {
    variants: {
      intent: {
        primary: 'bg-rose-500 border-rose-500 text-white',
        secondary: 'bg-white border-black text-black',
      },
      size: {
        small: 'py-1 text-sm font-light border-[1px]',
        large: 'py-3 text-md font-semibold border-2',
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'large',
    },
  }
);

/**
 * Button UI Component
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  intent,
  size,
  icon,
  typeSubmit,
}) => {
  if (typeSubmit) {
    return (
      <input
        type='submit'
        value={label}
        className={buttonStyles({ intent, size })}
      />
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles({ intent, size })}
    >
      {icon && <ButtonIcon icon={icon} />}
      {label}
    </button>
  );
};
