// components/steps/Step1.tsx
import React from 'react';
import { FormData } from '../../types/FormData';

interface StepProps {
  nextStep: () => void;
  formData: FormData;
  handleChange: (field: keyof FormData, value: string) => void;
}

const Step1: React.FC<StepProps> = ({ nextStep, formData, handleChange }) => {
  return (
    <div className="multistep">
      <div className="mutlistep-item">
        <h2 className="text-xl mb-4">avg Lap Time Leader</h2>
        <input
          type="text"
          value={formData.avgLapTime}
          onChange={(e) => handleChange('avgLapTime', e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      
      <div className="mutlistep-nav">
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

export default Step1;
