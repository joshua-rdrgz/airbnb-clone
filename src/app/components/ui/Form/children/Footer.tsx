interface FooterProps {
  children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row items-center gap-4 w-full'>{children}</div>
    </div>
  );
};
