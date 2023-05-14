import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
export default function TournamentsStandings() {
  const [infoBox, setInfoBox] = useState(false);
  const {t}=useTranslation()
  return (
    <>
      {infoBox && (
        <div className="horse-info-box">
          <span className="close-icon" onClick={() => setInfoBox(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </span>
          <div className="horse-info-heading">
            <div className="horse-info-heading-img">
              <Image
                src="/images/horse/1.png"
                alt="horse"
                width={54}
                height={54}
              />
            </div>
            <div className="horse-info-heading-content">
              <h2>Sluz bucket</h2>
              <span>Z2 Nakamoto - Legendary - Mare</span>
            </div>
          </div>
          <div className="horse-info-area">
            <div className="horse-info-area-chart">
              <h2>{t("WIN")}</h2>
              <span>{t("PLACE")}</span>
            </div>
            <div className="horse-info-area-content">
              <ul>
                <li>
                  <span>{t("Prize Money")}</span>
                  <strong className="green">
                    $2,31278 <span>USD</span>
                  </strong>
                </li>
                <li>
                  <span>{t("Win")}</span> <strong>16%</strong>
                </li>
                <li>
                  <span>{t("PLace")}</span> <strong>43%</strong>
                </li>
                <li>
                  <span>{t("Overall")}</span> <strong>945 153-143</strong>
                </li>
                <li>
                  <span>{t("Last")}</span> <strong>6-2-4-12-3</strong>
                </li>
                <li>
                  <span>{t("Class")}</span> <strong>I</strong>
                </li>
              </ul>
              <Link href="#">
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                    />
                  </svg>
                  {t("Details")}
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="tournaments-standings">
        <div className="container">
          <div className="tournaments-standings-inner">
            <h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bar-chart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
              </svg>
              {t("STANDINGS")}
            </h2>

            <div className="tournaments-list">
              <ul>
                <li className="active">
                  <button>{t("Sprinter")}</button>
                </li>
                <li>
                  <button>{t("Midrunner")}</button>
                </li>
                <li>
                  <button>{t("Marathoner")}</button>
                </li>
              </ul>
              <div className="tournaments-list-details">
                <ul>
                  <li>
                    {t("Last updated:")} <strong>May 14th 5:55</strong>
                  </li>
                  <li>
                    {t("Cut line:")}
                    <strong>
                      {t("A")} <span>3.60</span> {t("B")} <span>2.00</span>
                    </strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tournaments-table">
              <div className="races-table">
                <table>
                  <thead>
                    <tr>
                      <th>{t("PLACE")}</th>
                      <th>{t("RACEHORSE")}</th>
                      <th>{t("RACES")}</th>
                      <th>{t("AVG POINTS")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onClick={() => setInfoBox(true)}>
                      <td>
                        <span className="number">
                          <strong>{t("1")}</strong>
                          <Image
                            src="/images/horse/2.png"
                            alt="horse"
                            width={78}
                            height={78}
                          />
                        </span>
                      </td>
                      <td className="racehorse">
                        <strong>
                          {t("Slow Horse")} <span>1478.54</span>
                        </strong>
                        <span>{t("New Close Racing")}</span>
                      </td>
                      <td>{t("5")}</td>
                      <td className="point">89.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .green {
            color: #28b18a;
          }
          .close-icon {
            position: absolute;
            right: 20px;
            top: 20px;
          }

          .close-icon svg {
            width: 22px;
            height: auto;
            cursor: pointer;
          }
          .horse-info-box {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: hidden;
            background: var(--bigCtaBg);
            width: 650px;
            padding: 10px 10px 10px 0;
            border-radius: 5px;
            z-index: 99999;
          }

          .horse-info-heading {
            display: flex;
            gap: 15px;
            align-items: center;
          }

          .horse-info-heading-content h2 {
            font-weight: 500;
            font-size: 18px;
          }

          .horse-info-heading-content span {
            font-size: 14px;
            color: var(--titleColor);
          }

          .horse-info-area {
            display: grid;
            grid-template-columns: 1fr 2fr;
            padding: 35px 35px 10px;
            gap: 50px;
          }

          .horse-info-area-chart {
            border: 10px solid #336f64;
            border-radius: 50%;
            display: grid;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 150px;
            padding: 47px;
            text-align: center;
            color: #28b18a;
          }

          .horse-info-area-chart h2 {
            font-size: 14px;
            font-weight: 500;
          }

          .horse-info-area-chart span {
            font-size: 10px;
          }

          .horse-info-area-content ul {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 30px;
          }

          .horse-info-area-content ul li strong {
            display: block;
          }

          .horse-info-area-content ul li span {
            text-transform: uppercase;
            color: var(--titleColor);
            font-weight: 600;
            font-size: 12px;
          }

          .horse-info-area-content a {
            border: 1px solid var(--colorWhite);
            border-radius: 5px;
            padding: 8px 20px;
            color: var(--colorWhite);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            max-width: max-content;
            font-weight: 600;
            margin-top: 50px;
          }
          .tournaments-standings-inner {
            margin-top: 50px;
          }
          .tournaments-standings-inner h2 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #5b6068;
            font-weight: 500;
            font-size: 18px;
          }
          .tournaments-list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 40px;
          }

          .tournaments-list ul {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .tournaments-list ul button {
            background: #656a71;
            padding: 8px 20px;
            border-radius: 50px;
            color: #b6bfc5;
            border: none;
            cursor: pointer;
          }

          .tournaments-list-details {
            background: var(--bigCtaBg);
            padding: 10px 20px;
            border-radius: 5px;
          }

          .tournaments-list-details li {
            color: #686e75;
          }

          .tournaments-list-details li strong {
            color: #a7aeb6;
            margin: 0 5px;
          }

          .tournaments-list-details li span {
            margin: 0 5px;
            color: #686e75;
          }
          .tournaments-list .active button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
          }
          .races-table {
            overflow-x: auto;
          }
          .races-table table {
            width: 100%;
            color: #fff;
            border-collapse: collapse;
            min-width: max-content;
          }

          .races-table th {
            text-align: left;
            padding: 0 20px;
            color: #656a71;
            font-weight: 600;
            font-size: 10px;
            border-bottom: 1px solid var(--borderColor);
            height: 30px;
          }
          .races-table tbody td {
            padding: 20px;
            border-bottom: 15px solid var(--studListBorder);
            font-weight: 600;
            background: var(--studListBg);
            color: var(--colorWhite);
          }
          .races-table tbody tr {
            transition: 0.3s;
          }
          .races-table tbody tr:hover {
            cursor: pointer;
            background: var(--studListHover);
          }
          .number {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .number strong {
            background: #f0b90c;
            color: #000;
            font-weight: 600;
            width: 24px;
            height: 24px;
            text-align: center;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .racehorse strong {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
          }

          .racehorse span {
            color: #6a6f76;
            font-weight: 500;
          }

          .racehorse strong span {
            background: #66513f;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
            margin-left: 5px;
            font-weight: 500;
            font-size: 12px;
          }

          .point {
            text-align: right;
          }

          .races-table thead th:last-child {
            text-align: right;
          }
          .tournaments-table {
            margin: 50px 0;
          }
          @media screen and (max-width: 991px) {
            .tournaments-list {
              display: grid;
              justify-content: center;
              gap: 30px;
            }
            .horse-info-box {
              width: 90vw;
            }
            .horse-info-area-content a {
              margin: auto;
              margin-top: 50px;
            }
            .horse-info-area {
              grid-template-columns: 1fr;
              gap: 50px;
            }
            .tournaments-list ul {
              justify-content: center;
            }
            .horse-info-area-chart {
              margin: auto;
            }
            .tournaments-standings-inner h2 {
              justify-content: center;
            }

            .tournaments-list-details ul {
              display: grid !important;
              padding: 5px 0;
            }
          }
        `}
      </style>
    </>
  );
}
