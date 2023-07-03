import { useContext } from 'react';
import { Form, FormContext, type FormContextProps } from '../Form';

interface StepProps {
  children: React.ReactNode;
  step: number;
}

export const Step = ({ children, step: currentStep }: StepProps) => {
  const { multiStepForm } = useContext(FormContext) as FormContextProps;

  return (
    <>
      {multiStepForm.step === currentStep && children}
      {multiStepForm.step === currentStep && <StepFooter />}
    </>
  );
};

const StepFooter = () => {
  const { multiStepForm } = useContext(FormContext) as FormContextProps;

  return (
    <Form.Footer>
      {multiStepForm.backButtonContent && (
        <Form.Action onClick={multiStepForm.onBack} intent='secondary'>
          {multiStepForm.backButtonContent}
        </Form.Action>
      )}
      {multiStepForm.nextButtonContent === 'Create' ? (
        <Form.Submit>{multiStepForm.nextButtonContent}</Form.Submit>
      ) : (
        <Form.Action onClick={multiStepForm.onNext}>
          {multiStepForm.nextButtonContent}
        </Form.Action>
      )}
    </Form.Footer>
  );
};
