import React from 'react';
import { FormData, StepInputField } from '../../types/FormData';
import Button from '../Button/Button';
import ButtonPrev from '../Button/ButtonPrev';
import { secondsToTimeString } from '../..//utils/formatTimeInput';
import InputMask from 'react-input-mask';

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

const StepTimeRace: React.FC<StepInputProps> = ({
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
        <InputMask
          mask="99:99"
          value={
            field === 'TimeInToTheRace' && typeof formData[field] === 'number'
              ? secondsToTimeString(formData[field] as number)
              : formData[field]
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

export default StepTimeRace;
