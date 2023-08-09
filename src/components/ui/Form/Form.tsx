import React, { createContext, useMemo, useState } from 'react';
import { useForm, FormProvider, type FieldValues } from 'react-hook-form';
import {
  Action,
  Footer,
  Input,
  Label,
  Submit,
  Step,
  ControlledInput,
  Feature,
} from './children';

export interface FormContextProps {
  isLoading: boolean;
  watching: any[] | undefined;

  /** For Multi-Step Forms */
  multiStepForm: {
    step: number;
    onBack(): void;
    onNext(): void;
    backButtonContent: 'Back' | undefined;
    nextButtonContent: 'Create' | 'Next';
  };
}

export const FormContext = createContext<FormContextProps | null>(null);

interface FormProps<DefaultValues> {
  children: React.ReactNode;
  /** MUST throw Error in catch block or form will reset! */
  onSubmit(data: FieldValues): Promise<void>;
  defaultValues: DefaultValues;
  watch?: string[];
  numberOfSteps?: number;
}

export const Form = <DV extends object>({
  children,
  onSubmit,
  defaultValues,
  watch,
  numberOfSteps,
}: FormProps<DV>) => {
  /** General Form State */
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm({ defaultValues } as DV);

  /** Multi-Step Form State */
  const [step, setStep] = useState(1);
  console.log('step from Form: ', step);

  /** Set up watching if provided */
  const watching = watch && methods.watch(watch);
  console.log('watching from Form: ', watching);

  /** Multi-Step Form Functionality */
  const onBack = () => {
    setStep((step) => step - 1);
  };

  const onNext = async () => {
    const allowedToProceed = await methods.trigger();
    if (!allowedToProceed) return;
    setStep((step) => step + 1);
  };

  const backButtonContent = useMemo(() => {
    if (step === 1) return undefined;
    return 'Back';
  }, [step]);

  const nextButtonContent = useMemo(() => {
    if (step === numberOfSteps) return 'Create';
    return 'Next';
  }, [step, numberOfSteps]);

  /** Form Submit Functions */
  const onSubmitWrapper = (
    data: FieldValues,
    onFormSubmit: FormProps<DV>['onSubmit']
  ) => {
    setIsLoading(true);

    onFormSubmit(data)
      .then(() => {
        methods.reset();
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <FormContext.Provider
      value={{
        isLoading,
        watching,
        multiStepForm: {
          step,
          onBack,
          onNext,
          backButtonContent,
          nextButtonContent,
        },
      }}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={
            /** Check if Multi-Step Form */
            numberOfSteps
              ? /** Check if on the last step of the form */
                step === numberOfSteps
                ? /** Submit the Form */
                  methods.handleSubmit((data) =>
                    onSubmitWrapper(data, onSubmit)
                  )
                : /** If not on the last step of the form, don't let anything happen */
                  (e) => e.preventDefault()
              : /** If not a Multi-Step Form */
                methods.handleSubmit((data) => onSubmitWrapper(data, onSubmit))
          }
          className='flex flex-col gap-4'
        >
          {children}
        </form>
      </FormProvider>
    </FormContext.Provider>
  );
};

/** Append Child Elements */
Form.Input = Input;
Form.Label = Label;
Form.Footer = Footer;
Form.Action = Action;
Form.Submit = Submit;
Form.Step = Step;
Form.ControlledInput = ControlledInput;
Form.Feature = Feature;
