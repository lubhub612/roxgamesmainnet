import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";

export default function EventCountdown({ active, setActive }) {
  const [showTimer, setShowTimer] = useState(false);
  // const [active, setActive] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    setShowTimer(true);
  }, []);

  if (!showTimer) {
    return null;
  }
  return (
    <>
      <div className="event-countdown">
        <div className="container">
          <div className="event-countdown-inner">
            <p>
              🏆 &nbsp;&nbsp; {t("The")}
              <strong> {t("Keep On Winning - Tuesday is now live.")} </strong>
              {t(
                "Only free racing events count towards qualification.Ends in:"
              )}
              &nbsp;&nbsp;
              <strong>
                <Countdown date={Date.now() + 5555555} />
              </strong>
            </p>

            {/* <button>{t("Learn More here")}</button> */}
            <div className="tournament-event">
              <Switch
                onChange={() => setActive(() => !active)}
                checked={active}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#f0b90c"
                height={10}
                width={40}
                handleDiameter={25}
              />
              {t("Earth Races")}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tournament-event {
          display: flex;
          align-items: center;
          gap: 20px;
          color: #fff;
          font-weight: 500;
          font-size: 14px;
        }
        .event-countdown {
          background: #8e2de2;
          background: linear-gradient(to right, #4a00e0, #8e2de2);
        }
        .event-countdown-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
          color: #fff;
          font-weight: 400;
        }

        .event-countdown-inner strong {
          font-weight: 600;
        }

        .event-countdown-inner p {
          font-size: 13px;
        }
        .event-countdown-inner button {
          border: 1px solid #fff;
          background: transparent;
          border-radius: 5px;
          padding: 8px 20px;
          color: #fff;
        }
        @media screen and (max-width: 991px) {
          .event-countdown-inner button {
            display: none;
          }
          .event-countdown-inner {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
