import { cva } from 'class-variance-authority';
import { Form } from '../../Form';
import { categoriesList } from '../../Navbar/Categories';
import { FieldValues } from 'react-hook-form';

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

export const AirbnbYourHomeForm = () => {
  const onFormSubmit = async (data: FieldValues) => {
    console.log('form submitted, here is the data: ', data);
  };
  return (
    <Form
      onSubmit={onFormSubmit}
      defaultValues={{
        category: '',
      }}
      watch={['category']}
      numberOfSteps={6}
    >
      <Form.Step step={1}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto'>
          {categoriesList.map((currentCategory) => {
            const { icon: Icon } = currentCategory;
            return (
              <div key={currentCategory.label} className='col-span-1'>
                <Form.Label
                  htmlFor={currentCategory.label}
                  styles={labelStyles}
                >
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
      </Form.Step>
    </Form>
  );
};
