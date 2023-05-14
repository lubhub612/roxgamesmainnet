import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import LoadMoreButton from "./LoadMoreButton";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

export default function Stud() {
  const { handleAllHorse, allHorse } = useContext(GlobalContext);
  const { t } = useTranslation();
  const [horseInfo, setHorseInfo] = useState(false);
  const [horseInfoData, setHorseInfoData] = useState();
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    handleAllHorse();
  }, []);

  return (
    <>
      {horseInfo && (
        <div className="horse-info-box-main roster-hours-main">
          <div
            className="event-records-bg"
            onClick={() => {
              setHorseInfo(false);
              setCopy(false);
            }}
          ></div>
          <div className="container">
            <div className="roster-details ">
              <div
                className="close-icon"
                onClick={() => {
                  setHorseInfo(false);
                  setCopy(false);
                }}
              >
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
              </div>
              <div className="roster-content">
                <Link href={`/racehorse?id=${horseInfoData?.horse_id}`}>
                  <div className="roster-horse">
                    <img
                      src={horseInfoData?.img_url}
                      alt="horse"
                      width={1024}
                      height={1024}
                    />
                  </div>
                </Link>

                <div className="roster-info">
                  <div className="roster-info-title">
                    <div>
                      <h2>{horseInfoData?.name}</h2>
                      <h3>
                        {t("Born:")}{" "}
                        {moment(horseInfoData?.born_date).format(
                          "DD/MMM/YYYY, HH:mm"
                        )}{" "}
                      </h3>
                    </div>
                    <h3 className="copy-h3">
                      <Link
                        href={`https://polygonscan.com/tx/${horseInfoData?.tx}`}
                      >
                        <a target="_blank">
                          <span>{horseInfoData?.tx.slice(0, 15) + "...."}</span>
                        </a>
                      </Link>
                      <span>
                        <CopyToClipboard
                          text={`https://polygonscan.com/tx/${horseInfoData?.tx}`}
                          onCopy={() => setCopy(true)}
                        >
                          <div className="roster-info-share">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-files"
                              viewBox="0 0 16 16"
                            >
                              <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                            </svg>
                            <span>{copy ? "Copied!" : "Share"}</span>
                          </div>
                        </CopyToClipboard>
                      </span>
                      {/* {t("Share")} */}
                    </h3>
                  </div>
                  <ul>
                    <li>
                      <strong>{t("GEN")}</strong>
                      <span>
                        {horseInfoData?.genotype} <span>{t("Exclusive")}</span>
                      </span>
                    </li>
                    <li>
                      <strong>{t("BLOODLINE")}</strong>{" "}
                      <span>{horseInfoData?.bloodline}</span>
                    </li>
                    <li>
                      <strong>{t("GENDER")}</strong>{" "}
                      <span>{horseInfoData?.gender}</span>
                    </li>
                    <li>
                      <strong>{t("COAT")}</strong>
                      <span>{horseInfoData?.color}</span>
                    </li>
                    <li>
                      <strong>{t("RACES")}</strong>
                      <span>{horseInfoData?.number_of_races}</span>
                    </li>
                    <li>
                      <strong>{t("CAREER")}</strong>
                      <span>
                        {horseInfoData?.won_career_first}/
                        {horseInfoData?.won_career_second}/
                        {horseInfoData?.won_career_third}
                      </span>
                    </li>
                    <li>
                      <strong>{t("WIN RATE")}</strong>
                      <span>{horseInfoData?.win_rate}%</span>
                    </li>
                    <li>
                      <strong>{t("OFFSPRING")}</strong>
                      <span>0 3 of 3 left</span>
                    </li>
                    <li>
                      <strong>{t("BREEDING DECAY")}</strong>
                      <span>
                        {t("Level 0")} <span>24 of 24 left</span>
                      </span>
                    </li>
                    <li>
                      <strong>{t("BREED TYPE")}</strong>
                      <span>{horseInfoData?.breed_type}</span>
                    </li>
                    <li>
                      <strong>{t("CLASS")}</strong>
                      <span>{horseInfoData?.class}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="stud">
        <div className="container">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            {t("In Stud")}
          </span>
          <div className="stud-area">
            {allHorse &&
              allHorse.map((item, index) => {
                return (
                  item.is_in_studfarm === "1" && (
                    <>
                      <div
                        key={index}
                        className="stud-item"
                        onClick={() => {
                          setHorseInfo(true), setHorseInfoData(item);
                        }}
                      >
                        <div className="stud-item-img">
                          <Image
                            src="/images/horse/1.png"
                            alt="horse"
                            width={512}
                            height={512}
                          />
                        </div>
                        <h2>
                          {item?.name} <strong>{item?.stable_id?.title}</strong>
                        </h2>
                        <h3>
                          ${item.stud_fee} <strong>USD</strong>
                        </h3>
                      </div>
                    </>
                  )
                );
              })}
          </div>
          <LoadMoreButton>
            <Link href="/stud">{t("More Breeding")}</Link>
          </LoadMoreButton>
        </div>
      </div>

      <style jsx>
        {`
          .roster-info-share {
            display: flex;
          }
          .roster-info-share span {
            margin-left: 10px;
            font-size: 12px !important;
          }
          .copy-h3 {
            display: flex;
            cursor: pointer;
          }
          .copy-h3 a {
            margin-right: 10px;
          }
          .copy-h3 span {
            margin-right: 6px;
          }
          .stud {
            background: var(--background);
            padding: 0 0 50px;
          }
          .horse-info-box-main {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 9999;
          }
          .roster-hours-main {
            display: flex;
            z-index: 9999;
            align-items: center;
          }
          .event-records-bg {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100vh;
            width: 100%;
            background: #0000008c;
            z-index: 1;
          }
          .roster-details {
            background: var(--studListBg);
            margin: 20px 0;
            padding: 20px;
            position: relative;
            z-index: 9999;
          }

          .roster-content {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 20px;
          }
          .roster-info-title {
            display: flex;
            justify-content: space-between;
            padding-right: 100px;
          }
          .roster-info-title h3 span {
            display: block;
            font-size: 10px;
          }

          .roster-info-title h3 {
            font-size: 12px;
            font-weight: 500;
            color: var(--eventButtonColor);
          }
          .roster-info ul {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .roster-info ul li strong {
            display: block;
            margin-top: 8px;
          }

          .roster-info ul li span {
            color: var(--eventButtonColor);
            font-size: 12px;
          }
          .roster-info-title {
            margin-bottom: 20px;
          }
          .roster-info-title {
            display: flex;
            justify-content: space-between;
            padding-right: 100px;
          }
          .roster-info-title h3 span {
            display: block;
            font-size: 10px;
          }

          .roster-info-title h3 {
            font-size: 12px;
            font-weight: 500;
            color: var(--eventButtonColor);
          }
          .roster-info-title {
            margin-bottom: 20px;
          }
          .stud span {
            color: var(--colorWhite);
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            font-weight: 600;
            font-size: 18px;
            letter-spacing: 1px;
            gap: 10px;
          }

          .stud-item {
            background-color: var(--studListBg);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
            cursor: pointer;
            display: grid;
            grid-template-columns: 4fr 1fr;
            position: relative;
            padding: 15px;
            overflow: hidden;
            transition: 0.3s;
          }
          .stud-item:hover {
            background-color: var(--hoverBg);
            box-shadow: var(--hoverShadow);
          }
          .stud-item-img {
            width: 51px;
            height: 51px;
            position: absolute;
            bottom: 0;
          }

          .stud-area {
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 25px;
            row-gap: 15px;
          }

          .stud-item h2 {
            color: var(--colorWhite);
            font-weight: 500;
            font-size: 14px;
            margin-left: 65px;
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .stud-item h2 strong {
            color: var(--titleColor);
            font-weight: 400;
          }

          .stud-item h3 {
            color: var(--colorWhite);
            font-weight: 500;
            color: #f0b90c;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .stud-item h3 strong {
            font-weight: 400;
            color: var(--titleColor);
            font-size: 14px;
          }
          @media screen and (max-width: 991px) {
            .stud-area {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
}
