// components/steps/Step1.tsx
import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { calculateOptimalPitWindow } from '../../hooks/useAnalyzer';
import 'swiper/css';

import { FormData } from '../../types/FormData';
import ButtonPrev from '../Button/ButtonPrev';

interface StepProps {
  prevStep: () => void;
  formData: FormData;
}

// Helper to format seconds into mm:ss
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
};

const Final: React.FC<StepProps> = ({ formData, prevStep }) => {
  const suggestions = useMemo(() => calculateOptimalPitWindow(formData), [formData]);

  const goodTimes = suggestions.filter(s => s.trafficLevel === 'groen');
  const moderateTimes = suggestions.filter(s => s.trafficLevel === 'oranje');
  const badTimes = suggestions.filter(s => s.trafficLevel === 'rood');

  return (
    <div className='multistep-slider flex-row-align justify-center align-center w-100'>
      <Swiper spaceBetween={0} slidesPerView={1.5}>
        <SwiperSlide>
          <div className="multistep-slide flex-colomn-align align-center">
            <h2 className="text-xl mb-4">✅ Goede pitstop-tijden</h2>
            <div className="pitstop-times flex-row flex-wrap">
              {goodTimes.length > 0 ? goodTimes.map((s, i) => (
                <div key={i} className='pitstop-time pitstop-time-go w-100'>
                  {formatTime(s.suggestedTime)}
                </div>
              )) : <p>Geen goede momenten gevonden.</p>}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="multistep-slide flex-colomn-align align-center">
            <h2 className="text-xl mb-4">⚠️ Matige pitstop-tijden</h2>
            <div className="pitstop-times flex-row flex-wrap">
              {moderateTimes.length > 0 ? moderateTimes.map((s, i) => (
                <div key={i} className='pitstop-time pitstop-time-risky w-100'>
                  {formatTime(s.suggestedTime)}
                </div>
              )) : <p>Geen matige momenten gevonden.</p>}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="multistep-slide flex-colomn-align align-center">
            <h2 className="text-xl mb-4">❌ Slechte pitstop-tijden</h2>
            <div className="pitstop-times flex-row flex-wrap">
              {badTimes.length > 0 ? badTimes.map((s, i) => (
                <div key={i} className='pitstop-time pitstop-time-cancel w-100'>
                  {formatTime(s.suggestedTime)}
                </div>
              )) : <p>Geen slechte momenten gevonden.</p>}
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
