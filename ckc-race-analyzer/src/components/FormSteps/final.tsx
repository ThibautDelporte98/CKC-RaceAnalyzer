
// components/steps/Step1.tsx
import React from 'react';
import { FormData } from '../../types/FormData';

interface StepProps {
    prevStep: () => void;
    formData: FormData;
  }
  
  const Final: React.FC<StepProps> = ({ prevStep, formData }) => {
    const handleSubmit = () => {
      console.log('Final Data:', formData);
      alert('Form submitted!');
    };
  
    return (
      <div className=' multistep'>
        <h2 className="text-xl mb-4">Review Input</h2>
        <p><strong>Name:</strong> {formData.Position}</p>
        <button onClick={prevStep} className="mt-4 mr-2 bg-gray-400 text-white p-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="mt-4 bg-green-600 text-white p-2 rounded">
          Submit
        </button>
      </div>
      
    );
  };
  

  export default Final;
