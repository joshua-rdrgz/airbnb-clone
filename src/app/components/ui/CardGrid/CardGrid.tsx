'use client';

import { Container } from '../Container';
import { Heading } from '../Heading';

interface CardGridProps {
  title: string;
  subtitle: string;
  data: any[];
  render(dataUnit: any): JSX.Element;
}

export const CardGrid: React.FC<CardGridProps> = ({
  title,
  subtitle,
  data,
  render,
}) => {
  return (
    <Container>
      <Heading>
        <Heading.Title>{title}</Heading.Title>
        <Heading.Subtitle>{subtitle}</Heading.Subtitle>
      </Heading>
      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
        {data.map(render)}
      </div>
    </Container>
  );
};
