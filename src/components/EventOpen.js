import { useState } from "react";
import { useTranslation } from "react-i18next";
import RaceTable from "./RaceTable";

export default function EventOpen({
  setShowHorse,
  showHorse,
  active,
  setActive,
}) {
  const [classRaces, setClassRaces] = useState("");
  const { t } = useTranslation();
  return (
    <>
      <div className="event-open">
        <div className="container">
          <div className="event-open-inner">
            <h2>{t("Races Open")}</h2>
            <div className="event-open-select">
              <button className="active" onClick={() => setClassRaces("All")}>
                {t("All")}
              </button>
              <button
                className="classvii"
                onClick={() => setClassRaces("Class 7")}
              >
                {t("Class VII")}
              </button>
              <button
                className="classvi"
                onClick={() => setClassRaces("Class 6")}
              >
                {t("Class VI")}
              </button>
              <button
                className="classv"
                onClick={() => setClassRaces("Class 5")}
              >
                {t("Class V")}
              </button>
              <button
                className="classiv"
                onClick={() => setClassRaces("Class 4")}
              >
                {t("Class IV")}
              </button>
              <button
                className="classiii"
                onClick={() => setClassRaces("Class 3")}
              >
                {t("Class III")}
              </button>
              <button
                className="classii"
                onClick={() => setClassRaces("Class 2")}
              >
                {t("Class II")}
              </button>
              <button
                className="classi"
                onClick={() => setClassRaces("Class 1")}
              >
                {t("Class I")}
              </button>
              <button className="classg3" onClick={() => setClassRaces("G3")}>
                {t("G3")}
              </button>
              <button className="classg2" onClick={() => setClassRaces("G2")}>
                {t("G2")}
              </button>
              <button className="classg1" onClick={() => setClassRaces("G1")}>
                {t("G1")}
              </button>
            </div>
          </div>
          <RaceTable
            classRaces={classRaces}
            setShowHorse={setShowHorse}
            showHorse={showHorse}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
      <style jsx>
        {`
          .event-open {
            background: var(--background);
            padding: 30px 0;
          }
          .classvii:hover {
            background: #dfff00 !important;
          }
          .classvi:hover {
            background: #ffbf00 !important;
          }
          .classv:hover {
            background: #ff7f50 !important;
          }

          .classiv:hover {
            background: #de3163 !important;
          }
          .classiii:hover {
            background: #9fe2bf !important;
          }
          .classii:hover {
            background: #40e0d0 !important;
          }
          .classi:hover {
            background: #6495ed !important;
          }
          .classg3:hover {
            background: #ccccff !important;
          }
          .classg2:hover {
            background: #0000ff !important;
            color: #fff !important;
          }
          .classg1:hover {
            background: #000000 !important;
            color: #fff !important;
          }
          .event-open-inner {
            display: flex;
            align-items: center;
            color: #5b6068;
            margin-bottom: 30px;
            gap: 30px;
            grid-template-columns: 1fr 8fr;
          }

          .event-open-inner h2 {
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 500;
          }

          .event-open-select button {
            background: var(--eventButtonBg);
            border: none;
            border-radius: 50px;
            padding: 8px 20px;
            color: var(--eventButtonColor);
            margin: 5px 10px;
            cursor: pointer;
          }
          .event-open-select button.active {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
          }
          @media screen and (max-width: 991px) {
            .event-open-inner {
              display: grid;
              grid-template-columns: 1fr;
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
          }
        `}
      </style>
    </>
  );
}
