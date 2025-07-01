import {
  useRaceAnalyzer,
  Team,
  TrafficLevel,
} from '../../hooks/usePredictPosition';

const teamsData: Team[] = [
  { id: 1, name: 'ABMS1', intervalInSec: 0 },
  { id: 2, name: 'ABMS3', intervalInSec: 1.796 },
  { id: 3, name: 'DELPRACING 1', intervalInSec: 2.134 },
  { id: 4, name: 'Kartje Kilo', intervalInSec: 5.33 },
  { id: 5, name: 'AETC', intervalInSec: 6.347 },
  { id: 6, name: 'VERHULST.', intervalInSec: 6.952 },
  { id: 7, name: 'ABMS2', intervalInSec: 10.975 },
  { id: 8, name: 'DMC RACING', intervalInSec: 16.675 },
  { id: 9, name: 'LAU-EURONAV', intervalInSec: 17.344 },
  { id: 10, name: 'DRONES AND LIGHTS', intervalInSec: 18.036 },
  { id: 11, name: 'RRJ RACING', intervalInSec: 66.801 },
  { id: 12, name: 'SKEYES.', intervalInSec: 80.755 },
  { id: 13, name: 'DELPRACING 2', intervalInSec: 85 },
  { id: 14, name: 'SKEYES.', intervalInSec: 150 },
];


const colorMap: Record<TrafficLevel, string> = {
  groen: 'lightgreen',
  oranje: 'orange',
  rood: 'red',
};


export function RaceAnalyzer() {
  const PIT_WINDOW_DURATION_SEC = 3600; // 60 minuten
  const { trafficData, timeRange, kartSwapData  } = useRaceAnalyzer(
    teamsData,
    PIT_WINDOW_DURATION_SEC,
  );
  const isInPitWindow = (sec: number) => sec >= 900 && sec <= 2700;

  return (
    <div style={{ padding: 20 }}>
      <h2>Race Analyzer - Ideale pitstop momenten</h2>
      <table
        border={1}
        cellPadding={5}
        style={{ borderCollapse: 'collapse', fontSize: 12 }}
      >
        <thead>
          <tr>
            <th>Team</th>
            {timeRange.map((sec) => (
              <th key={sec}>{`+${Math.floor(sec / 60)}m`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teamsData.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              {timeRange.map((sec) => {
                const level = trafficData[team.id][sec];
                const bgColor = colorMap[level] || '#ccc';
                const opacity = isInPitWindow(sec) ? 1 : 0.4;

                return (
                  <td
                    key={sec}
                    style={{
                      backgroundColor: bgColor,
                      opacity,
                      width: 20,
                      height: 20,
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                    title={`Tijd +${Math.floor(sec / 60)}m, Verkeersdrukte: ${level}`}
                  >
                    &nbsp;
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ marginTop: 40 }}>Kartwissel - Simulatie (+70s delay)</h3>
      <table
        border={1}
        cellPadding={5}
        style={{ borderCollapse: 'collapse', fontSize: 12 }}
      >
        <thead>
          <tr>
            <th>Team</th>
            {timeRange.map((sec) => (
              <th key={sec}>{`+${Math.floor(sec / 60)}m`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teamsData.map((team) => (
            <tr key={team.id}>
              <td>{team.name}</td>
              {timeRange.map((sec) => {
                const level = kartSwapData[team.id][sec];
                const bgColor = colorMap[level] || '#ccc';
                const opacity = isInPitWindow(sec) ? 1 : 0.4;

                return (
                  <td
                    key={sec}
                    style={{
                      backgroundColor: bgColor,
                      opacity,
                      width: 20,
                      height: 20,
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: 'black',
                    }}
                    title={`Tijd +${Math.floor(sec / 60)}m, Verkeersdrukte na kartwissel: ${level}`}
                  >
                    &nbsp;
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>



      <p style={{ marginTop: 20 }}>
        <b>Legenda:</b>{' '}
        <span style={{ backgroundColor: 'lightgreen', padding: '0 8px' }}>
          Groen (weinig verkeer)
        </span>{' '}
        <span style={{ backgroundColor: 'orange', padding: '0 8px' }}>
          Oranje (matig verkeer)
        </span>{' '}
        <span style={{ backgroundColor: 'red', padding: '0 8px' }}>
          Rood (druk verkeer)
        </span>
      </p>
    </div>
  );
}
