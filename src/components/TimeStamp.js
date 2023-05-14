import moment from "moment";
import React, { useEffect, useState } from "react";

export default function TimeStamp({ time_stamp, horse_ids }) {
  const [time, setTime] = useState();
  const [timer, setTimer] = useState();

  useEffect(() => {
    if (time_stamp) {
      setTime(
        moment(time_stamp).add("72", "hour").format("DD/MMM/YYYY, HH:mm:ss")
      );
    }
  }, [time_stamp]);

  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (time && time_stamp) {
        if (horse_ids < 12) {
          const startTime = moment();
          const endTime = moment(time);
          const duration = moment.duration(endTime.diff(startTime));
          if (duration.get("millisecond") > 0) {
            const day = parseInt(duration.asDays());
            const hours = parseInt(duration.asHours()) % 24;
            const minutes = parseInt(duration.asMinutes()) % 60;
            const seconds = parseInt(duration.asSeconds()) % 60;
            setTimer(`${day}d ,${hours}h,${minutes}m,${seconds}s`);
            setTime(moment(time).subtract("1", seconds));
          } else {
            setTimer(`00:00:00`);
            if (horse_ids < 12) {
              const Time = moment(time).add("72", "hour");

              setTime(moment(time).add("72", "hour"));

              let timer2 = setTimeout(() => {
                const startTime = moment();
                const endTime = moment(time);
                const duration = moment.duration(endTime.diff(startTime));
                if (duration.get("millisecond") > 0) {
                  const day = parseInt(duration.asDays());
                  const hours = parseInt(duration.asHours()) % 24;
                  const minutes = parseInt(duration.asMinutes()) % 60;
                  const seconds = parseInt(duration.asSeconds()) % 60;
                  setTimer(`${day}d ,${hours}h,${minutes}m,${seconds}s`);
                  setTime(moment(time).subtract("1", seconds));
                } else {
                  setTime("00:00:00");
                }
              });
            }
          }
        }
      }
    }, 1000);
    return () => {
      clearTimeout(timer1);
    };
  }, [time]);
  return <span>{timer}</span>;
}
