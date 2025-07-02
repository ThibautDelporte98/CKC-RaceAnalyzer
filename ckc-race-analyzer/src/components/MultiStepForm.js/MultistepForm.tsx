// components/MultiStepForm.tsx
import React, { useState } from 'react';
import { FormData } from '../../types/FormData';
import StepInput from '../FormSteps/Step2';
import StepIntervals from '../FormSteps/StepInterval';
import Final from '../FormSteps/final';
import { timeStringToSeconds } from '../../utils/formatTime'; // adjust path if needed
import StepTimeRace from '../FormSteps/StepTimeRace';


const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    totalTeams: 0,
    timeLeader: 73.333,
    Position: 3,
    TimeInToTheRace: 0,
    Interval: [], 
  });
  

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);


  const handleChange = (field: keyof FormData, value: string | number) => {
    let updatedValue: string | number = value;
  
    if (field === 'TimeInToTheRace' && typeof value === 'string') {
      const converted = timeStringToSeconds(value);
      if (converted !== null) {
        updatedValue = converted;
      } else {
        // optionally handle invalid format here
        console.warn('Invalid time format (expected mm:ss)');
      }
    }
  
    setFormData({ ...formData, [field]: updatedValue });
  };
  
  

  const handleChangeIntervals = (index: number, value: string) => {
    const newIntervals = [...formData.Interval];
    newIntervals[index] = value;
    setFormData({ ...formData, Interval: newIntervals });
  };
  
  

  
  

  switch (step) {
    case 1:
      return (
        <StepInput
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleChange={handleChange}
          field="timeLeader"
          label="Lap Time Leader"
          placeholder="Example. 74.324"
          buttonDisabled
        />
      );
    case 2:
      return (
        <StepInput
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleChange={handleChange}
          field="Position"
          label="Your position into the race"
          placeholder="e.g. 1st"
        />
      );
    case 3:
      return (
        <StepTimeRace 
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        handleChange={handleChange}
        field="TimeInToTheRace"
        label="How long are you in the race?"
        placeholder="e.g. 14:37"
        
        />
      );
    case 4:
      return (

        <StepInput
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          handleChange={handleChange}
          field="totalTeams"
          label="Amount of teams"
          placeholder="e.g 14"
        />
      );
    case 5:
      return (
        <StepIntervals
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        handleChangeIntervals={handleChangeIntervals} 
        />
      );
    case 6:
      return <Final prevStep={prevStep} formData={formData} />;
    default:
      return <div>Error: Unknown step</div>;
  }
};

export default MultiStepForm;
