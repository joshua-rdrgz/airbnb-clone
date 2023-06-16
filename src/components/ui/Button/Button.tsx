'use client';

import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonIcon } from '@ui/Button/ButtonIcon';
import type { IconType } from 'react-icons';

/**
 * BUTTON PROPS
 */
interface ButtonProps extends VariantProps<typeof buttonStyles> {
  label: string;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  disabled?: boolean;
  intent?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  icon?: IconType;
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
 * BUTTON COMPONENT
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  intent,
  size,
  icon,
}) => {
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
