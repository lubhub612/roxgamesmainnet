import React from 'react';

const WinnerHorses = [1, 8, 7, 5, 11, 4, 3, 12, 2, 6];
const TotalDistance = 1000;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function generateSpeeds(intervals) {
  let speeds = [];
  let lastSpeed = 0;
  const maxSpeedChanges = Math.floor(intervals.length / 2);
  let speedChanges = 0;
  for (let i = 0; i < intervals.length; i++) {
    let currentSpeed = Math.random() * 29 + 60;
    if (speedChanges < maxSpeedChanges) {
      if (Math.random() < 0.2) {
        currentSpeed = Math.random() * 39 + 51;
        speedChanges++;
      }
    }
    let distance = intervals[i];
    let time = distance / ((lastSpeed + currentSpeed) / 7200);
    speeds.push({
      distance: distance,
      speed: currentSpeed,
      time: time
    });
    lastSpeed = currentSpeed;
  }
  return speeds;
}

export default function RaceData() {
  const horseData = React.useMemo(() => {
    const numIntervals = Math.floor(Math.random() * 10) + 5;
    const maxInterval = Math.floor(TotalDistance / numIntervals);
    let horseData = {};

    for (let i = 1; i <= 12; i++) {
        let intervals = [];
        let remainingDistance = TotalDistance;
        for (let j = 0; j < numIntervals - 1; j++) {
            const interval = Math.floor(Math.random() * maxInterval) + 1;
            if (remainingDistance - interval < 0) {
                intervals.push(remainingDistance);
                break;
            } else {
                intervals.push(interval);
                remainingDistance -= interval;
            }
        }
        intervals.push(remainingDistance);
        shuffleArray(intervals);
        intervals.sort((a, b) => a - b); // Sort intervals in ascending order
        let speeds = generateSpeeds(intervals);
        horseData[`gate${i}`] = {
            horse_id: i,
            intervals: intervals,
            speeds: speeds,
            winner: WinnerHorses[i - 1]
        };
}
    return horseData;
  }, []);

  return (
    <div>
      {Object.keys(horseData).map(gate => (
          <div key={gate}>
          <h3>Gate {horseData[gate].winner}:</h3>
          <p>Winner: Horse {horseData[gate].winner}</p>
          <p>Horse ID: {horseData[gate].horse_id}</p>
          <p>Speed intervals: {horseData[gate].intervals.join(', ')}</p>
          <p>Speeds:</p>
          {horseData[gate].speeds.map(speed => (
            <p key={speed.distance}>
              Distance: {speed.distance}m, Speed: {speed.speed.toFixed(2)} km/h, Time:{' '}
              {speed.time.toFixed(2)} seconds
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}