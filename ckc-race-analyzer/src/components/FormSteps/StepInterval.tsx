import React from 'react';
import { FormData } from '../../types/FormData';
import Button from '../Button/Button';
import ButtonPrev from '../Button/ButtonPrev';

interface StepIntervalsProps {
  nextStep: () => void;
  prevStep: () => void;
  formData: FormData;
  handleChangeIntervals: (index: number, value: number) => void;
}

const StepIntervals: React.FC<StepIntervalsProps> = ({
  nextStep,
  prevStep,
  formData,
  handleChangeIntervals,
}) => {
  return (
    <div className="multistep">
      <h2 >Interval per team from leader</h2>
      <div className="multistep-timetable">
        {Array.from({ length: formData.totalTeams }).map((_, index) => (
          <div className="multistep-time" key={index} >
            <label className=" mb-1">Team {index + 1}</label>
            <input
              type="text"
              className="input p-1 w-full"
              value={formData.Interval[index] ?? ''}
              onChange={(e) =>
                handleChangeIntervals(index, parseFloat(e.target.value) || 0)
              }
              placeholder={`e.g. +${(index + 1) * 1.2}s`}
            />
          </div>
        ))}
      </div>
      <div className="flex-row space-between multistep-nav">
        <ButtonPrev onClick={prevStep} />
        <Button text="Volgende" onClick={nextStep} />
      </div>
    </div>
  );
};

export default StepIntervals;
