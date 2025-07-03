import React from 'react';
import { FormData } from '../../types/FormData';
import Button from '../Button/Button';
import ButtonPrev from '../Button/ButtonPrev';
import Pitstop from '../../assets/svg/player.svg';
import Kartstop from '../../assets/svg/formula.svg';

interface StepIntervalsProps {
  nextStep?: () => void;
  prevStep?: () => void;
  handleSubmit?: () => void;

  formData: FormData;
  handleChangeIntervals: (index: number, value: string) => void;
}

const StepIntervals: React.FC<StepIntervalsProps> = ({
  nextStep,
  prevStep,
  handleSubmit,
  formData,
  handleChangeIntervals,
}) => {



  return (
    <div className="multistep">
      <h2>Interval per team from leader</h2>
      <ol className="multistep-timetable">
        {Array.from({ length: formData.totalTeams }).map((_, index) => (
          <li className="multistep-time p-1" key={index}>
            <div className="flex-row w-100 justify-center">
              <div className="multistep-interval">
                <label className="mb-1"></label>
                <input
                  type="text"
                  className="input p-1 w-full"
                  value={
                    index === 0
                      ? formData.timeLeader.toString()
                      : formData.Interval[index] ?? ''
                  }
                  onChange={(e) =>
                    index !== 0 && handleChangeIntervals(index, e.target.value)
                  }
                  placeholder={index === 0 ? undefined : `e.g. +74s`}
                  disabled={index === 0}
                />
              </div>
              <div className="stops flex-row-align gap-2">
                <div className={`rounded-square pitstop ${index === 0 ? 'disabled' : ''}`}>
                  <img src={Pitstop} alt="" />
                </div>
                <div className={`rounded-square pitstop ${index === 0 ? 'disabled' : ''}`}>
                  <img src={Pitstop} alt="" />
                </div>
                <div className={`rounded-square pitstop ${index === 0 ? 'disabled' : ''}`}>
                  <img src={Kartstop} alt="" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="flex-row space-between multistep-nav">
        {prevStep && <ButtonPrev onClick={prevStep} />}
        {nextStep && (
          <>
            <Button text="Volgende" onClick={nextStep} />
          </>
        )}
        {handleSubmit &&      <Button text="Analyze Race" onClick={handleSubmit} />
}


      </div>
    </div>
  );
};

export default StepIntervals;
