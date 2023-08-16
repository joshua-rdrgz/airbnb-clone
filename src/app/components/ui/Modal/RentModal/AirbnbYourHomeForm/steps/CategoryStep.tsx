'use client';

import { cva } from 'class-variance-authority';
import { categoriesList } from '@/app/components/ui/Navbar/Categories';
import { Form } from '@/app/components/ui/Form';
import { Heading } from '@/app/components/ui/Heading';

const labelStyles = cva(
  'rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer',
  {
    variants: {
      selected: {
        true: 'border-black',
        false: 'border-neutral-200',
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

export const CategoryStep = () => {
  return (
    <>
      <Heading>
        <Heading.Title>Which of these best describes your place?</Heading.Title>
        <Heading.Subtitle>Pick a category</Heading.Subtitle>
      </Heading>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
        {categoriesList.map((currentCategory) => {
          const { icon: Icon } = currentCategory;
          return (
            <div key={currentCategory.label} className='col-span-1'>
              <Form.Label htmlFor={currentCategory.label} styles={labelStyles}>
                <Icon size={30} />
                <Form.Input
                  id={currentCategory.label}
                  type='radio'
                  name='category'
                  value={currentCategory.label}
                  styles='hidden'
                />
                {currentCategory.label}
              </Form.Label>
            </div>
          );
        })}
      </div>
    </>
  );
};
