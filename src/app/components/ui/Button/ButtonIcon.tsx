'use client';

import type { IconType } from 'react-icons';

interface ButtonIconProps {
  icon: IconType;
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ icon: Icon }) => {
  return <Icon size={24} className='absolute left-4 top-3' />;
};
