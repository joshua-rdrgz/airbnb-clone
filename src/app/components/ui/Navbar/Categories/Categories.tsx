'use client';

import { Container } from '@/app/components/ui/Container';
import { CategoryBox } from '@/app/components/ui/CategoryBox';
import { categoriesList } from './categoriesList';
import { usePathname, useSearchParams } from 'next/navigation';

interface CategoriesProps {}

export const Categories: React.FC<CategoriesProps> = () => {
  const params = useSearchParams();
  const selectedCategory = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) return null;

  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categoriesList.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            selected={selectedCategory === category.label}
            icon={category.icon}
          />
        ))}
      </div>
    </Container>
  );
};
