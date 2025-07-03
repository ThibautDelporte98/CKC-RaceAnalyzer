// components/steps/Step1.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { FormData } from '../../types/FormData';
import ButtonPrev from '../Button/ButtonPrev';

interface StepProps {
  prevStep: () => void;
  formData: FormData;
}

const Final: React.FC<StepProps> = ({ prevStep, formData }) => {
  console.log(formData);

  return (
    <div className='multistep-slider flex-row-align justify-center align-center w-100' >
      <Swiper spaceBetween={0} slidesPerView={1.5}>
        <SwiperSlide>
          <div className="multistep-slide flex-colomn-align align-center">
              <h2 className="text-xl mb-4">PitStops
              </h2>
            <div className="pitstop-times flex-row">
              <div className='pitstop-time  pitstop-time-go w-100'>17-19</div>
              <div className='pitstop-time pitstop-time-risky'>21-22</div>
              <div className='pitstop-time pitstop-time-cancel'>23-25</div>
              <div className='pitstop-time pitstop-time-cancel'>23-25</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="multistep-slide flex-colomn-align align-center">
              <h2 className="text-xl mb-4">KartStops
              </h2>
              <div className="pitstop-times flex-row">
              <div className='pitstop-time  pitstop-time-go w-100'>17-19</div>
              <div className='pitstop-time pitstop-time-risky'>21-22</div>
              <div className='pitstop-time pitstop-time-cancel'>23-25</div>
              <div className='pitstop-time pitstop-time-cancel'>23-25</div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
      <div className="flex-row space-between multistep-nav">
        <ButtonPrev onClick={prevStep} />
      </div>
    </div>
  );
};

export default Final;
