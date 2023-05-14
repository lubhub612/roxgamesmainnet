import { useState } from "react";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";
import NextRaceTable from "./NextRaceTable";
import NoResultFound from "./NoResultFound";

export default function UpcomingTable({ active, setActive }) {
  // const [active, setActive] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="event-open">
        <div className="event-open-banner">
          <div className="container">
            <h2>{t("NEXT TO RUN")}</h2>
          </div>
        </div>
        <div className="container">
          {/* <div className="event-open-inner">
            <span>
              <Switch
                onChange={() => setActive((e) => !e)}
                checked={active}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#f0b90c"
                height={10}
                width={40}
                handleDiameter={25}
              />
              {t("Tournament Events")}
            </span>
          </div> */}
          {/* {!active ? <NextRaceTable /> : <NoResultFound />} */}
          <NextRaceTable active={active} setActive={setActive} />
        </div>
      </div>
      <style jsx>
        {`
          .event-open {
            background: var(--background);
            padding: 0 0 60px;
          }
          .event-open-banner {
            background: url(/images/tournaments-banner.png) no-repeat center
              center/cover;
            padding: 60px 0 120px;
          }
          .event-open-inner {
            display: flex;
            align-items: center;
            color: #5b6068;
            gap: 30px;
            margin-bottom: 30px;
            margin: 50px 0;
          }

          .event-open-banner h2 {
            text-transform: uppercase;
            font-size: 32px;
            color: #fff;
          }

          .event-open-select button {
            background: #656a71;
            border: none;
            border-radius: 50px;
            padding: 8px 20px;
            color: #b6bfc5;
            margin: 0 10px;
            cursor: pointer;
          }
          .event-open-select button.active {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
          }

          .event-open-inner span {
            display: flex;
            align-items: center;
            gap: 32px;
            font-size: 14px;
            color: var(--colorWhite);
            font-weight: 500;
          }

          @media screen and (max-width: 991px) {
            .event-open-inner {
              display: flex;
              gap: 20px;
            }

            .event-open {
              padding: 40px 0;
            }

            .event-open-select {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 14px;
            }

            .event-open-select button {
              margin: 0;
            }
            .event-open-inner {
              display: grid;
              align-items: center;
              justify-content: center;
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
}
