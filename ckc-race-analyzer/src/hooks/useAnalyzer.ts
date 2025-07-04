import { FormData } from "../types/FormData";


export type Team = {
  id: number;
  name: string;
  intervalInSec: number; // seconden achter leider
};


export type TrafficLevel = 'groen' | 'oranje' | 'rood';


type PitstopSuggestion = {
    suggestedTime: number; // seconds into race
    trafficLevel: TrafficLevel;
  };
  
  export function calculateOptimalPitWindow(formData: FormData): PitstopSuggestion[] {
    const raceDuration = 3600; // totale duur in seconden
    const trackLength = 1000; // meters

  
    const {
      timeLeader,
      Position,
      TimeInToTheRace,
      totalTeams,
      Interval,
    } = formData;
  
    const intervalInSec = Interval.map((i) => parseFloat(i));
    const leaderSpeed = trackLength / timeLeader; // m/s
  
    const blackZoneEnd = 900; // 15 min
    const blackZoneStart2 = raceDuration - 900; // laatste 15 min
  
    const safeWindowStart = Math.max(blackZoneEnd, TimeInToTheRace); // pas pitstop toe na blackzone én na huidige tijd
    const safeWindowEnd = blackZoneStart2;
  
    const stepSize = 60;
    const result: PitstopSuggestion[] = [];


  
    for (let t = safeWindowStart; t <= safeWindowEnd; t += stepSize) {
      // const yourInterval = intervalInSec[Position - 1] || 0;
      const yourExitTime = t;
      let conflictCount = 0;
    
      for (let i = 0; i < totalTeams; i++) {
        if (i === Position - 1) continue; // sla jezelf over
    
        const teamInterval = intervalInSec[i] ?? 0;
    
        // Check positie van elk team van t - 3s tot t + 3s
        for (let delta = -3; delta <= 3; delta++) {
          const checkTime = yourExitTime + delta;
          if (checkTime < 0) continue;
    
          const teamDistance = ((checkTime - teamInterval) * leaderSpeed) % trackLength;
    
          // Als team zich in de buurt van de pit-exit bevindt
          if (teamDistance >= 880 && teamDistance <= 1020) {
            conflictCount++;
            break; // 1 conflict is genoeg
          }
        }
      }
    
      let trafficLevel: TrafficLevel = 'groen';
      if (conflictCount >= 3) trafficLevel = 'rood';
      else if (conflictCount >= 1) trafficLevel = 'oranje';
    
      result.push({
        suggestedTime: t,
        trafficLevel,
      });
    }
    
  
    return result;
  }
  
  