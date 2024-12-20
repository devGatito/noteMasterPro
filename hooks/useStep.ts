import { useState } from 'react';

export const useStep = (initialStep: number, steps: number) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => setCurrentStep((step) => Math.min(step + 1, steps - 1));
  const prevStep = () => setCurrentStep((step) => Math.max(step - 1, 0));

  return { currentStep, nextStep, prevStep };
};
