'use client';

interface MenuItemProps {
  onClick?: () => void;
  children: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
    >
      {children}
    </button>
  );
};
