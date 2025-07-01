// components/steps/Step3.tsx
import React from 'react';
import { FormData } from '../../types/FormData';

interface StepProps {
  nextStep: () => void;
  prevStep?: () => void;
  formData: FormData;
  handleChange: (field: keyof FormData, value: string) => void;
}

const Step2: React.FC<StepProps> = ({
  nextStep,
  prevStep,
  formData,
  handleChange,
}) => {
  return (
    <div className="multistep">
      <div className="mutlistep-item">
        <h2 className="text-xl mb-4">Your position into the race</h2>
        <input
          type="text"
          value={formData.Position}
          onChange={(e) => handleChange('Position', e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div className="mutlistep-nav">

        <button
          onClick={prevStep}
          className="mt-4 bg-blue-600 text-white p-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={nextStep}
          className="mt-4 bg-blue-600 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
