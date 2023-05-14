import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import GlobalContext from "../contexts/GlobalContext";

export default function RaceResult({ hide, RacInfoData }) {
  const [showRace, setShowRace] = useState(true);
  const [horseInfo, setHorseInfo] = useState(false);
  const [horseData, setHorseData] = useState();
  const [copy, setCopy] = useState(false);

  const { t } = useTranslation();
  const {
    invokeServer,
    handelHorseOwner,
    horseIdData,
    setHorseIdData,
    stableName,
    handleOwner,
    gateHorseIdData,
    setGateHorseIdData,
    data,
    winners,
    winner,
  } = useContext(GlobalContext);

  useEffect(() => {
    if (RacInfoData?.horse_winners) {
      const winData = {
        winID: RacInfoData?.horse_winners,
      };
      const data = winners(winData);
    }
  }, [RacInfoData?.horse_winners]);
  useEffect(() => {
    if (RacInfoData?.horse_ids) {
      handelHorseOwner(RacInfoData?.horse_ids);
    }
  }, [RacInfoData]);

  useEffect(() => {
    if (RacInfoData) {
      let data = [];
      winner?.forEach((win) => {
        data.push(RacInfoData);
        const oldIndex = horseIdData?.findIndex(
          (number) => number.horse_id == win.horse_id
        );
        win.winHorseIndex = oldIndex + 1;
      });
    }
  }, [winner]);

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
                className="close-icons"
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
                <Link href={`/racehorse?id=${horseData?.horse_id}`}>
                  <div className="roster-horse">
                    <img
                      src={horseData?.img_url}
                      alt="horse"
                      width={1024}
                      height={1024}
                    />
                  </div>
                </Link>
                <div className="roster-info">
                  <div className="roster-info-title">
                    <div>
                      <h2>{horseData?.name}</h2>
                      <h3>
                        {t("Born:")}{" "}
                        {moment(horseData?.born_date).format(
                          "DD/MMM/YYYY, HH:mm"
                        )}{" "}
                      </h3>
                    </div>
                    <h3 className="copy-h3">
                      <Link
                        href={`https://polygonscan.com/tx/${horseData?.tx}`}
                      >
                        <a target="_blank">
                          <span>{horseData?.tx.slice(0, 15) + "...."}</span>
                        </a>
                      </Link>
                      <span>
                        <CopyToClipboard text={`https://polygonscan.com/tx/${horseData?.tx}`}>
                          <div
                            className="roster-info-share"
                            onClick={() => setCopy(true)}
                          >
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
                        {horseData?.genotype} <span>{t("Exclusive")}</span>
                      </span>
                    </li>
                    <li>
                      <strong>{t("BLOODLINE")}</strong>{" "}
                      <span>{horseData?.bloodline}</span>
                    </li>
                    <li>
                      <strong>{t("GENDER")}</strong>{" "}
                      <span>{horseData?.gender}</span>
                    </li>
                    <li>
                      <strong>{t("COAT")}</strong>
                      <span>{horseData?.color}</span>
                    </li>
                    <li>
                      <strong>{t("RACES")}</strong>
                      <span>{horseData?.number_of_races}</span>
                    </li>
                    <li>
                      <strong>{t("CAREER")}</strong>
                      <span>
                        {horseData?.won_career_first}/
                        {horseData?.won_career_second}/
                        {horseData?.won_career_third}
                      </span>
                    </li>
                    <li>
                      <strong>{t("WIN RATE")}</strong>
                      <span>{horseData?.win_rate}%</span>
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
                      <span>{horseData?.breed_type}</span>
                    </li>
                    <li>
                      <strong>{t("CLASS")}</strong>
                      <span>{horseData?.class}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="race-view">
        <div className="race-view-banner">
          <span className="close-icon" onClick={hide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </span>
          <div className="race-view-banner-content">
            <h2>
              {RacInfoData.rcourse_id.RaceCourses}{" "}
              <span>
                {RacInfoData.rcourse_id.Country} ∙{" "}
                {RacInfoData.rcourse_id.Location}
              </span>
              <svg
                height="22"
                viewBox="0 0 19 22"
                width="19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m20 21h-11v-14h11m0-2h-11c-1.1045695 0-2 .8954305-2 2v14c0 1.1045695.8954305 2 2 2h11c1.1045695 0 2-.8954305 2-2v-14c0-1.1045695-.8954305-2-2-2m-3-4h-12c-1.1045695 0-2 .8954305-2 2v14h2v-14h12z"
                  fill="#f0f8ff"
                  fillRule="evenodd"
                  transform="translate(-3 -1)"
                />
              </svg>
            </h2>
            <ul>
              <li>
                {t("Event Type")}{" "}
                <span className="race-number">{RacInfoData?.class?.Class}</span>
              </li>
              <li>
                {t("Distance")}{" "}
                <span>
                  {RacInfoData.distance.Distance}
                  {t("m")}
                </span>
              </li>
              <li>
                {t("Status")} <span>Finished</span>
              </li>
              <li>
                {t("Ran At")}{" "}
                <span>{new Date(RacInfoData?.finish_time).toUTCString()}</span>
              </li>
              <li>
                {t("Time Elapsed")} <span>10:47s</span>
              </li>
            </ul>
          </div>
        </div>
        {!showRace && (
          <div className="race-live-list">
            {winner &&
              winner.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      onClick={() => {
                        // key={index}
                        setHorseInfo(true);
                        setHorseData(item);
                      }}
                      className="race-live-item"
                    >
                      <div className="race-live-title">
                        <span>
                          {index + 1}
                          {index === 0
                            ? "st"
                            : index === 1
                            ? "nd"
                            : index === 2
                            ? "rd"
                            : "th"}
                        </span>{" "}
                        <strong>{item.last_stud_duration}s</strong>
                      </div>
                      <div className="race-live-power">
                        🔥 <span>{item.winHorseIndex}</span>
                      </div>
                      <h2>{item.name}</h2>
                      <p>
                        {item.gender} . {item.genotype} . {item.bloodline}{" "}
                        <br /> {item.stable_id.title}
                      </p>
                      <div className="race-live-horse">
                        <Image
                          src="/images/horse/1.png"
                          alt="horse"
                          width="127"
                          height="127"
                        />
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        )}
        {showRace && (
          <>
            <div className="result-inner">
              <div className="result-item">
                <div className="result-item-img">
                  <Image src="/images/result-2d.jpg" alt="2d" layout="fill" />
                </div>
                <div className="result-item-content">
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="replay-icon"
                  >
                    <path d="M31.789011,0.140659341 C49.2307692,0.140659341 63.4373626,14.3472527 63.4373626,31.789011 C63.4373626,48.9026835 49.7602048,62.9017556 32.7697611,63.4223732 L32.8798645,63.4183404 C32.8149629,63.4308254 32.747945,63.4373626 32.6794003,63.4373626 C32.0967703,63.4373626 31.6244552,62.9650476 31.6244552,62.3824176 L31.6244552,60.2725275 C31.6244552,59.6898974 32.0967703,59.2175824 32.6794003,59.2175824 C32.718534,59.2175824 32.75717,59.2197133 32.7951987,59.2238652 L32.8076831,59.2096627 L32.8375968,59.197796 C47.4747884,58.6445325 59.2175824,46.5588053 59.2175824,31.789011 C59.2175824,16.6681319 46.9098901,4.36043956 31.789011,4.36043956 C16.6681319,4.36043956 4.36043956,16.6681319 4.36043956,31.789011 C4.36043956,39.4654945 7.62467397,46.7339487 13.0831994,51.8557154 L13.3626374,52.1142857 L16.9926393,48.4842838 C17.198982,48.2779411 17.4643926,48.1408826 17.7520984,48.0920977 C18.4831917,47.9681297 19.1780799,48.4322956 19.3526953,49.1408895 L19.3740489,49.2437428 L21.3303548,60.7809318 C21.3567489,60.9365893 21.3567489,61.0955796 21.3303548,61.2512371 C21.2063868,61.9823305 20.5390952,62.4853628 19.8125477,62.4166283 L19.7084043,62.4028823 L8.17121533,60.4465764 C7.88350959,60.3977914 7.61809892,60.2607329 7.41175631,60.0543903 C6.89135838,59.5339924 6.86396902,58.7072782 7.32958818,58.1546365 L7.41175631,58.0651668 L10.4087912,55.0681319 C3.93846154,49.1604396 0.140659341,40.7208791 0.140659341,31.789011 C0.140659341,14.3472527 14.3472527,0.140659341 31.789011,0.140659341 Z M25.2294247,22.2071629 C25.6212818,21.5363957 26.482709,21.3102944 27.1534761,21.7021515 L27.1534761,21.7021515 L43.4181675,31.2038613 C43.6282054,31.3265639 43.8028322,31.5016393 43.9249954,31.7119913 C44.3151301,32.3837617 44.0868192,33.2446058 43.4150489,33.6347405 L43.4150489,33.6347405 L27.1503574,43.0805579 C26.9357916,43.2051682 26.6920814,43.2708034 26.443956,43.2708034 C25.667116,43.2708034 25.0373626,42.6410501 25.0373626,41.86421 L25.0373626,41.86421 L25.0373626,22.9166828 C25.0373626,22.6673333 25.1036467,22.4224652 25.2294247,22.2071629 Z"></path>
                  </svg>
                  <h2>{t("Replay")}</h2>
                  <h3>{t("2D")}</h3>
                </div>
              </div>
              <div className="result-item">
                <div className="result-item-img">
                  <Image src="/images/result-3d.jpg" alt="2d" layout="fill" />
                </div>
                <div className="result-item-content">
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 64 64"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="replay-icon"
                  >
                    <path d="M31.789011,0.140659341 C49.2307692,0.140659341 63.4373626,14.3472527 63.4373626,31.789011 C63.4373626,48.9026835 49.7602048,62.9017556 32.7697611,63.4223732 L32.8798645,63.4183404 C32.8149629,63.4308254 32.747945,63.4373626 32.6794003,63.4373626 C32.0967703,63.4373626 31.6244552,62.9650476 31.6244552,62.3824176 L31.6244552,60.2725275 C31.6244552,59.6898974 32.0967703,59.2175824 32.6794003,59.2175824 C32.718534,59.2175824 32.75717,59.2197133 32.7951987,59.2238652 L32.8076831,59.2096627 L32.8375968,59.197796 C47.4747884,58.6445325 59.2175824,46.5588053 59.2175824,31.789011 C59.2175824,16.6681319 46.9098901,4.36043956 31.789011,4.36043956 C16.6681319,4.36043956 4.36043956,16.6681319 4.36043956,31.789011 C4.36043956,39.4654945 7.62467397,46.7339487 13.0831994,51.8557154 L13.3626374,52.1142857 L16.9926393,48.4842838 C17.198982,48.2779411 17.4643926,48.1408826 17.7520984,48.0920977 C18.4831917,47.9681297 19.1780799,48.4322956 19.3526953,49.1408895 L19.3740489,49.2437428 L21.3303548,60.7809318 C21.3567489,60.9365893 21.3567489,61.0955796 21.3303548,61.2512371 C21.2063868,61.9823305 20.5390952,62.4853628 19.8125477,62.4166283 L19.7084043,62.4028823 L8.17121533,60.4465764 C7.88350959,60.3977914 7.61809892,60.2607329 7.41175631,60.0543903 C6.89135838,59.5339924 6.86396902,58.7072782 7.32958818,58.1546365 L7.41175631,58.0651668 L10.4087912,55.0681319 C3.93846154,49.1604396 0.140659341,40.7208791 0.140659341,31.789011 C0.140659341,14.3472527 14.3472527,0.140659341 31.789011,0.140659341 Z M25.2294247,22.2071629 C25.6212818,21.5363957 26.482709,21.3102944 27.1534761,21.7021515 L27.1534761,21.7021515 L43.4181675,31.2038613 C43.6282054,31.3265639 43.8028322,31.5016393 43.9249954,31.7119913 C44.3151301,32.3837617 44.0868192,33.2446058 43.4150489,33.6347405 L43.4150489,33.6347405 L27.1503574,43.0805579 C26.9357916,43.2051682 26.6920814,43.2708034 26.443956,43.2708034 C25.667116,43.2708034 25.0373626,42.6410501 25.0373626,41.86421 L25.0373626,41.86421 L25.0373626,22.9166828 C25.0373626,22.6673333 25.1036467,22.4224652 25.2294247,22.2071629 Z"></path>
                  </svg>
                  <h2>{t("Replay")}</h2>
                  <h3>{t("3D")}</h3>
                </div>
              </div>
            </div>
            <div className="result-placeholder-view">
              <Image
                src="/images/result-placeholder.png"
                alt="placeholder"
                layout="fill"
              />
              <div className="result-more">
                <button onClick={() => setShowRace(false)}>
                  {t("Show Results")}
                </button>
                <p>
                  {t("Race without prize money for statistics improvement.")}{" "}
                  <br />
                  {t("Congratulations to all winners!")}
                </p>
              </div>
            </div>
          </>
        )}
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
          .races-table {
            overflow-x: auto;
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
          .close-icons {
            position: absolute !important;
            right: 5px !important;
            top: 12px !important;
            cursor: pointer !important;
          }

          .close-icons svg {
            width: 30px;
            height: 30px;
            color: #676666;
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
          .race-view {
            background: var(--raceViewBg);
            border: unset;
            box-shadow: 0 2px 2px 0 rgb(0 0 0 / 12%);
            padding: 0;
            position: relative;
            border-top: 2px solid #f0b90c;
          }
          .race-view-banner {
            padding: 30px 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
          }
          .race-view-banner ul li {
            display: inline-block;
            margin-right: 20px;
            color: var(--titleColor);
            font-weight: 500;
            margin-top: 21px;
          }

          .race-view-banner ul li span {
            color: var(--colorWhite);
            margin-left: 10px;
          }

          .race-view-banner h2 {
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .race-view-banner h2 span {
            color: #5b646b;
            font-style: italic;
          }

          .race-view-banner h2 svg {
            cursor: pointer;
          }
          .race-view-banner-content-button {
            display: flex;
            align-items: center;
            gap: 30px;
          }
          .race-view-banner-content-button {
            display: flex;
            align-items: center;
            gap: 30px;
          }
          .race-view-banner-content-button {
            display: flex;
            align-items: center;
            gap: 30px;
          }
          .close-icon {
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
          }

          .close-icon svg {
            width: 40px;
            height: 40px;
            color: #676666;
          }

          .race-number {
            background: #563d6d;
            padding: 4px 8px;
            border-radius: 5px;
          }
          .race-number {
            background: #563d6d;
            padding: 4px 8px;
            border-radius: 5px;
          }

          .result-inner {
            display: grid;
            padding: 40px 40px 30px;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            border-top: 1px solid #393939;
          }

          .result-item-img {
            width: 100%;
            position: relative;
            height: 150px;
            filter: grayscale(1);
            border-radius: 5px;
            transition: 0.3s;
          }
          .result-item:hover .result-item-img {
            filter: grayscale(0);
          }
          .result-item {
            position: relative;
            border: 2px solid #f0b90c;
            border-radius: 5px;
            cursor: pointer;
          }

          .result-item-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          .result-item-content svg {
            width: 40px;
            height: 40px;
          }

          .result-item-content svg path {
            fill: #f0b90c;
          }

          .result-item-content h2 {
            color: #5f6163;
            font-weight: 600;
          }

          .result-item-content h3 {
            font-size: 20px;
          }
          .result-placeholder-view {
            position: relative;
            width: -webkit-fill-available;
            height: 370px;
            margin: 0 40px;
          }
          .result-more {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
          }

          .result-more p {
            margin-top: 20px;
          }

          .result-more button {
            border: 1px solid #fff;
            background: transparent;
            color: #fff;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
          }
          .race-live-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 20px;
            padding: 40px 40px 40px;
            border-top: 1px solid #343432;
          }

          .race-live-item {
            background: var(--studListBg);
            position: relative;
            overflow: hidden;
            padding: 25px;
            border-radius: 5px;
          }
          .race-live-item:nth-child(1) .race-live-title span,
          .race-live-item:nth-child(2) .race-live-title span,
          .race-live-item:nth-child(3) .race-live-title span {
            background: #f0b90c;
          }
          .race-live-power {
            position: absolute;
            right: 10px;
            top: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            color: #fff;
          }

          .race-live-horse {
            position: absolute;
            right: 0;
            bottom: -6px;
            transform: scaleX(-1);
          }

          .race-live-power span {
            width: 25px;
            height: 25px;
            background: #1034a6;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
          }

          .race-live-item h2 {
            font-size: 16px;
            font-weight: 500;
            color: var(--colorWhite);
            margin: 8px 0;
          }

          .race-live-item p {
            color: #61666e;
            font-size: 14px;
          }

          .race-live-title {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #fff;
          }

          .race-live-title span {
            background: #42464e;
            padding: 4px 10px;
            border-radius: 5px;
          }

          .race-live-title strong {
            color: #61666e;
            font-weight: 600;
          }
          @media screen and (max-width: 991px) {
            .race-view-banner {
              display: grid;
              gap: 40px;
            }
            .result-placeholder-view {
              position: relative;
              width: -webkit-fill-available;
              height: 220px;
              margin: 0 40px;
            }
            .race-live-list {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  );
}
