import React from "react";

export default function Speed() {
  // const winnerHorses = process.argv.slice(2);
  // const totalDistance = 1000;

  // const intervals = [
  //   10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  //   180, 190, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440,
  //   460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740,
  //   760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000,
  // ];
  // let horseData = {};

  // for (let i = 1; i <= 12; i++) {
  //   shuffleArray(intervals);
  //   horseData[`gate${i}`] = {
  //     horse_id: i,
  //     speeds: intervals,
  //     winner: winnerHorses[i - 1],
  //   };
  // }

  // function shuffleArray(arr) {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //   }
  // }

  // for (let i = 1; i <= 12; i++) {
  //   let speeds = [];
  //   let lastSpeed = 0;
  //   for (let j = 0; j < intervals.length; j++) {
  //     let currentSpeed = Math.random() * 29 + 60; // generate random speed
  //     // between 60 and 89 km/h
  //     let distance = intervals[j] - (j > 0 ? intervals[j - 1] : 0); //
  //     // calculate distance for current interval
  //     let time = distance / ((lastSpeed + currentSpeed) / 7200); //
  //     // calculate time for current interval
  //     speeds.push({
  //       distance: distance,
  //       speed: currentSpeed,
  //       time: time,
  //     });
  //     lastSpeed = currentSpeed;
  //   }
  //   horseData[`gate${i}`] = {
  //     horse_id: i,
  //     speeds: speeds,
  //     winner: winnerHorses[i - 1],
  //     speed_intervals: intervals,
  //   };
  // }
  // const raceEvent = {
  //   gate1: horseData.gate1,
  //   gate2: horseData.gate2,
  //   gate3: horseData.gate3,
  //   gate4: horseData.gate4,
  //   gate5: horseData.gate5,
  //   gate6: horseData.gate6,
  //   gate7: horseData.gate7,
  //   gate8: horseData.gate8,
  //   gate9: horseData.gate9,
  //   gate10: horseData.gate10,
  //   gate11: horseData.gate11,
  //   gate12: horseData.gate12,
  // };
  // const raceEvents = [
  //   { gate1: horseData.gate1 },
  //   { gate2: horseData.gate2 },
  //   { gate3: horseData.gate3 },
  //   { gate4: horseData.gate4 },
  //   { gate5: horseData.gate5 },
  //   { gate6: horseData.gate6 },
  //   { gate7: horseData.gate7 },
  //   { gate8: horseData.gate8 },
  //   { gate9: horseData.gate9 },
  //   { gate10: horseData.gate10 },
  //   { gate11: horseData.gate11 },
  //   { gate12: horseData.gate12 },
  // ];

  const winnerHorses = [1, 8, 7, 5, 11, 4, 3, 12, 2, 6];
  const totalDistance = 1000;

  // Set the distance intervals for modifying speed
  const maxInterval = Math.floor(totalDistance / 5);
  const numIntervals = Math.floor(Math.random() * 10) + 5; // generate a random number between 5 and 14
  const intervals = [];

  const intervalss = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
    180, 190, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440,
    460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740,
    760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000,
  ];
  intervals.sort((a, b) => a - b);

  let remainingDistance = totalDistance;
  for (let i = 0; i < numIntervals - 1; i++) {
    const data = Math.floor(Math.random() * intervalss.length) + 1;
    const interval = intervalss[data]
    if (remainingDistance - interval < 0) {
      intervals.push(remainingDistance);
      break;
    } else {
      intervals.push(interval);
      remainingDistance -= interval;
    }
  }
  console.log(remainingDistance,"remainingDistance");
  intervals.push(remainingDistance); // add the remaining distance as the last interval

  // Shuffle the intervals for each horse
  let horseData = {};
  for (let i = 1; i <= 12; i++) {
    shuffleArray(intervals);
    horseData[`gate${i}`] = {
      horse_id: i,
      speeds: intervals,
      winner: winnerHorses[i - 1],
    };
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Generate random speeds for each horse at each interval
  const maxSpeedChanges = Math.floor(numIntervals / 2); // limit the number of speed changes to half the number of intervals
  for (let i = 1; i <= 12; i++) {
    let speeds = [];
    let lastSpeed = 0;
    let speedChanges = 0;
    for (let j = 0; j < intervals.length; j++) {
      let currentSpeed = Math.random() * 29 + 60; // generate random speed between 60 and 89 km/h
      if (speedChanges < maxSpeedChanges) {
        if (Math.random() < 0.2) {
          // 20% chance of changing speed
          currentSpeed = Math.random() * 39 + 51; // generate random speed between 51 and 89 km/h
          speedChanges++;
        }
      }
      let distance = intervals[j]; // use the entire interval distance
      let time = distance / ((lastSpeed + currentSpeed) / 7200); // calculate time for current interval
      speeds.push({
        distance: distance,
        speed: currentSpeed,
        time: time,
      });
      lastSpeed = currentSpeed;
    }
    horseData[`gate${i}`].speeds = speeds;
  }

  let Area = [];
  for (let i = 1; i <= 12; i++) {
    console.log(`Gate ${i}:`);
    const gate = `Gate ${i}:`;
    console.log(`Horse ID: ${horseData[`gate${i}`].horse_id}`);

    const Horse = `Horse ID: ${horseData[`gate${i}`].horse_id}`;
    console.log(`Speed intervals: ${intervals}`);

    const interval = `Speed intervals: ${intervals.sort((a, b) => a - b)}`;

    console.log(`Speeds:`);

    horseData[`gate${i}`].speeds.forEach((speed) => {
      const Speed = `Distance: ${speed.distance}m, Speed: ${speed.speed.toFixed(
        2
      )} km/h, Time: ${speed.time.toFixed(2)} seconds`;

      Area.push([gate, Horse, interval, Speed]);
      console.log(
        ` Distance: ${speed.distance}m, Speed: ${speed.speed.toFixed(
          2
        )} km/h, Time: ${speed.time.toFixed(2)} seconds`
      );
    });
  }

  console.log(Area, "Area");

  return (
    <>
      <div>
        {Area.map((item) => {
          return (
            <>
              <h3>{item[0]}</h3>
              <h4>{item[1]}</h4>
              <h5>{item[2]}</h5>
              <h>{item[3]}</h>
            </>
          );
        })}
      </div>
    </>
  );
}
