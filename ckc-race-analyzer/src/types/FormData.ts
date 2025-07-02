// types/FormData.ts (or wherever you define FormData)
export interface FormData {
  totalTeams: number;
  timeLeader: number;
  Position: number;
  TimeInToTheRace: number;
  Interval: string[];  // <-- store as strings for input
}

  
  // Define allowed keys for StepInput component (exclude Interval)
  export type StepInputField = Exclude<keyof FormData, 'Interval'>;
  