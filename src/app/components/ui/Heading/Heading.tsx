'use client';

interface HeadingProps {
  children: React.ReactNode;
  center?: boolean;
}

interface TitleProps {
  children: string;
}

interface SubtitleProps {
  children: string;
}

export const Heading = ({ children, center }: HeadingProps) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>{children}</div>
  );
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return <div className='text-2xl font-bold'>{children}</div>;
};

const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <div className='font-light text-neutral-500 mt-2'>{children}</div>;
};

Heading.Title = Title;
Heading.Subtitle = Subtitle;
