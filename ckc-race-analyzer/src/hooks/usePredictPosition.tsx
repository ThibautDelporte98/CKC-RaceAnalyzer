import { useMemo } from 'react';

export type Team = {
  id: number;
  name: string;
  intervalInSec: number; // seconden achter leider
};

export type Position = {
  lapsDone: number;
  distInLap: number;
};

const TRACK_LENGTH = 1000; // meters

const leader = {
  lapsDone: 12,
  lapTime: 90,
};


const leaderSpeed = TRACK_LENGTH / leader.lapTime; // m/s

const PIT_EXIT_START = 900;
const PIT_EXIT_END = 1000;

export type TrafficLevel = 'groen' | 'oranje' | 'rood';


export function useRaceAnalyzer(teams: Team[], pitWindowDurationSec: number) {
  // Bereken positie van een team op tijdstip (sec)
  function predictPositionFromLeader(timeAfterNowSec: number, team: Team): Position {
    const leaderDistanceNow = leader.lapsDone * TRACK_LENGTH + leaderSpeed * timeAfterNowSec;
    const teamDistanceNow = leaderDistanceNow - team.intervalInSec * leaderSpeed;

    const lapsDone = Math.floor(teamDistanceNow / TRACK_LENGTH);
    const distInLap = teamDistanceNow % TRACK_LENGTH;

    return { lapsDone, distInLap };
  }


  // Bereken verkeersdrukte rond pituitrit op bepaald tijdstip
  function trafficScore(timeSec: number, teamStopping: Team): TrafficLevel {
    let countNearPit = 0;

    teams.forEach((team) => {
      if (team.id === teamStopping.id) return;

      const pos = predictPositionFromLeader(timeSec, team);
      if (pos.distInLap >= PIT_EXIT_START && pos.distInLap <= PIT_EXIT_END) {
        countNearPit++;
      }
    });

    if (countNearPit === 0) return 'groen';
    if (countNearPit <= 2) return 'oranje';
    return 'rood';

  }

  const timeRange = useMemo(() => Array.from({ length: pitWindowDurationSec }, (_, i) => i).filter(i => i % 60 === 0), [pitWindowDurationSec]);


  const kartSwapData = useMemo(() => {
    const data: Record<number, Record<number, TrafficLevel>> = {};
    const delay = 70;

    teams.forEach(team => {
      data[team.id] = {};
      timeRange.forEach(timeSec => {
        const delayedTime = timeSec + delay;

        if (delayedTime >= 0 && delayedTime <= pitWindowDurationSec) {
          data[team.id][timeSec] = trafficScore(delayedTime, team);
        } else {
          data[team.id][timeSec] = 'rood'; // buiten bereik → risico
        }
      });
    });
    return data;
  }, [teams, timeRange]);


  // Precompute voor elk team per tijdstip (elke minuut)

  const trafficData = useMemo(() => {
    const data: Record<number, Record<number, TrafficLevel>> = {};
    // data[teamId][timeSec] = TrafficLevel
    teams.forEach(team => {
      data[team.id] = {};
      timeRange.forEach(timeSec => {
        data[team.id][timeSec] = trafficScore(timeSec, team);
      });
    });
    return data;
  }, [teams, timeRange]);

  return { trafficData, timeRange, kartSwapData };

}
