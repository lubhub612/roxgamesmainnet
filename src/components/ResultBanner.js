import { useState } from "react";
import { useTranslation } from "react-i18next";
import Switch from "react-switch";
import NoResultFound from "./NoResultFound";
import ResultTable from "./ResultTable";
export default function ResultBanner({ active, setActive }) {
  const [races, setRaces] = useState();
  const { t } = useTranslation();
  const [wow, setWow] = useState();
  return (
    <>
      <div className="result-banner">
        <div className="result-banner-area">
          <div className="container">
            <div className="result-banner-inner">
              <h2>{t("RESULTS")}</h2>
              <div className="result-banner-count">
                <span>
                  {races} <strong>{t("RACES")}</strong>
                </span>
                <span>
                  <span className="primary-color">${wow} USD</span>
                  <strong>{t("WON")}</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className="tournament-event">
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
          </div> */}
          {/* {!active ? (
            <ResultTable setRaces={setRaces} setWow={setWow} />
          ) : (
            <NoResultFound />
          )} */}
          <ResultTable
            setRaces={setRaces}
            setWow={setWow}
            active={active}
            setActive={setActive}
          />
        </div>
      </div>

      <style jsx>
        {`
          .result-banner {
            background: var(--background);
            padding: 0 0 60px;
          }
          .result-banner-area {
            background: url(/images/tournaments-banner.png) no-repeat center
              center/cover;
            padding: 60px 0 120px;
          }

          .result-banner-inner {
            color: var(--colorWhite);
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .result-banner-count {
            background: var(--resultBtnBg);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 30px;
            min-width: 430px;
            font-weight: 600;
            position: relative;
          }

          .result-banner-count strong {
            color: var(--colorWhite);
            margin-left: 10px;
          }
          .result-banner-count:before {
            background: url("/images/to-horse.svg") no-repeat center center /
              cover;
            bottom: 0;
            content: "";
            left: 0;
            position: absolute;
            top: 0;
            width: 100px;
            filter: var(--resultBtnImg);
          }
          .primary-color {
            color: #f0b90c;
          }

          .result-banner-inner h2 {
            display: flex;
            align-items: center;
            gap: 20px;
            font-size: 32px;
            color: #fff;
          }
          .result-banner-inner h2 span {
            border: 1px solid #32363d;
            padding: 8px 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }

          .result-banner-inner h2 span svg {
            width: 24px;
            height: 24px;
          }
          .tournament-event {
            display: flex;
            align-items: center;
            gap: 20px;
            color: var(--colorWhite);
            font-weight: 500;
            font-size: 14px;
            margin: 50px 0;
          }
          @media screen and (max-width: 991px) {
            .result-banner-inner {
              display: grid;
              gap: 20px;
              text-align: center;
              justify-content: center;
            }
            .result-banner {
              padding: 50px 0;
            }
            .result-banner-count {
              min-width: unset;
              gap: 40px;
            }
            .result-banner-inner h2 {
              justify-content: center;
            }
            .tournament-event {
              margin: 50px 0;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
}
