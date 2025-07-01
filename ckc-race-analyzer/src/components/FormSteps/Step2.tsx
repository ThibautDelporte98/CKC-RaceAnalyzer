import React from 'react';
import { FormData, StepInputField } from '../../types/FormData';
import Button from '../Button/Button';
import ButtonPrev from '../Button/ButtonPrev';

interface StepInputProps {
  nextStep: () => void;
  prevStep?: () => void;
  formData: FormData;
  handleChange: (field: StepInputField, value: string) => void;
  field: StepInputField;
  label: string;
  placeholder?: string;
  buttonDisabled?: boolean;
}


const StepInput: React.FC<StepInputProps> = ({
  nextStep,
  prevStep,
  formData,
  handleChange,
  field,
  label,
  placeholder,
  buttonDisabled,
}) => {
  return (
    <div className="multistep">
      <div className="multistep-item">
        <h2 className="text-xl mb-4">{label}</h2>
        <input
          type="text"
          value={
            typeof formData[field] === 'number' ||
            typeof formData[field] === 'string'
              ? formData[field]
              : ''
          }
          onChange={(e) => handleChange(field, e.target.value)}
          className="input p-1"
          placeholder={placeholder}
        />
      </div>

      <div className="flex-row space-between multistep-nav">
        <ButtonPrev disabled={buttonDisabled} onClick={prevStep} />
        <Button text="Volgende" onClick={nextStep} />
      </div>
    </div>
  );
};

export default StepInput;
