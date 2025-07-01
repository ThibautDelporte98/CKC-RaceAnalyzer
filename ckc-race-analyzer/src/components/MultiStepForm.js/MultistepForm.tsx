// components/MultiStepForm.tsx
import React, { useState } from 'react';
import { FormData } from '../../types/FormData';
import Step1 from '../FormSteps/Step1';
import Step2 from '../FormSteps/Step2';
import Step3 from '../FormSteps/Step3';
import Step4 from '../FormSteps/Step4';
import Step5 from '../FormSteps/Step5';



import Final from '../FormSteps/final';

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    teams: '',
    avgLapTime: 0,
    Position: 0,
    TimeInToTheRace: 0,
    Interval: 0,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (field: keyof FormData, value: string | number) => {
    setFormData({ ...formData, [field]: value });
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          formData={formData}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleChange={handleChange}
        />
      );
      case 4:
        return (
          <Step4
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            handleChange={handleChange}
          />
        );
        case 5:
            return (
              <Step5
                nextStep={nextStep}
                prevStep={prevStep}
                formData={formData}
                handleChange={handleChange}
              />
            );

    case 6:
      return <Final prevStep={prevStep} formData={formData} />;
    default:
      return <div>Error: Unknown step</div>;
  }
};

export default MultiStepForm;
