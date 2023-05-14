import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import dynamic from "next/dynamic";
import Link from "next/link";
const InfiniteScroll = dynamic(() => import("react-infinite-scroller"), {
  ssr: false,
});
import CopyToClipboard from "react-copy-to-clipboard";
import moment from "moment";
import TimeStamp from "./TimeStamp";
import Wallet from "./Wallet";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function RaceTable({
  classRaces,
  setShowHorse,
  showHorse,
  active,
  setActive,
}) {
  const walletSessionKey = "walletHyperXV1";
  const router = useRouter();
  const { id } = router.query;

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
  } = useContext(GlobalContext);

  const [racetable, setRacetable] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const [paginationTotal, setPaginationTotal] = useState();
  const [eventRecord, setEventRecord] = useState(false);
  const [eventRecordData, setEventRecordData] = useState({});
  const { t } = useTranslation();
  const [infoBox, setInfoBox] = useState(false);
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [horseInfo, setHorseInfo] = useState(false);
  const [horseInfoData, setHorseInfoData] = useState();
  const [quickEnter, setQuickEnter] = useState(false);
  const [emptyEvent, setEmptyEvent] = useState({});
  const [stable, setStable] = useState(false);
  const [gateId, setgateId] = useState({});
  const [AddressData, setAddressData] = useState("");
  const [copy, setCopy] = useState(false);
  const [randomColor, setRandomColor] = useState("");

  useEffect(() => {
    if (id) {
      const data = racetable.filter((x) => {
        return x._id == id;
      });
      handleOwner();
      setEventRecordData({ ...data[0] });
      if (data) {
        setEventRecord(true);
      } else {
        setEventRecord(false);
      }
    }
  }, [id, data]);
 
  const eventData = async () => {
   await invokeServer("get", `/api/event?page=${page}`).then((result) => {
      let dataObjectOne = {};
      let dataObjectTwo = {};
      let dataArr = racetable;
      [...dataArr, ...result.data.data, ...racetable, ...showHorse].forEach(
        (item) => {
          if (item.horse_ids.split(",").length === 12) {
            dataObjectOne[item.idx] = item;
          } else {
            dataObjectTwo[item.idx] = item;
          }
        }
      );
      setShowHorse(Object.values(dataObjectTwo));
      const data = Object.values(dataObjectTwo).filter((item) => {
        if (!active) {
          return item;
        } else if (active && item?.rcourse_id.Country === "Earth") {
          return item;
        }
      });
      setRacetable(data);
      setPaginationTotal(result.data.total);
      setLoader(false);
    });
  };

  const loadMore = async () => {
    if (page + 1 <= paginationTotal && !loader ) {
      setPage(page + 1);
      setLoader(true);
    }
  };

  const giveClassNames = (name) => {
    let className;
    if (name === "Class 7") {
      className = "Class_7";
    } else if (name === "Class 6") {
      className = "Class_6";
    } else if (name === "Class 5") {
      className = "Class_5";
    } else if (name === "Class 4") {
      className = "Class_4";
    } else if (name === "Class 3") {
      className = "Class_3";
    } else if (name === "Class 2") {
      className = "Class_2";
    } else if (name === "Class 1") {
      className = "Class_1";
    } else if (name === "G3") {
      className = "Class_G3";
    } else if (name === "G2") {
      className = "Class_G2";
    } else if (name === "G1") {
      className = "G1";
    }
    return className;
  };

  const color = [
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
    "#8B00FF",
    "#FF1493",
    "#FF69B4",
    "#800000",
    "#008080",
    "#808080",
  ];
  let newColor = [];
  useEffect(() => {
    let mainString = [];
    let gate = [];
    let gate1 = [];
    Object.keys(eventRecordData).forEach((key) => {
      if (key.includes("gate") && eventRecordData[key] !== "") {
        const result = color.filter((colorkey, index) => {
          return colorkey === eventRecordData[key].color;
        });
        newColor.push(...result);
      }
      const filteredColor = color.filter((c) => !newColor.includes(c));
      const newRandomNumber = Math.floor(Math.random() * filteredColor.length);
      setRandomColor(filteredColor[newRandomNumber]);

      if (key.includes("gate") && eventRecordData[key] !== "") {
        console.log(key, eventRecordData[key].horse_id);
        mainString.push(eventRecordData[key].horse_id);
        gate.push({ gate: key, horse: eventRecordData[key].horse_id });
        setgateId(gate);
      }
      if (key.includes("gate") && eventRecordData[key] === "") {
        console.log(key.replace(/^gate+/i, "key"));
        gate1.push(key.replace(/^gate+/i, ""));
        setEmptyEvent(gate1);
      }
    });
    handelHorseOwner(mainString.join(","));
  }, [eventRecordData]);

  const NewGateId = (_id) => {
    const idData = gateId?.find((data) => data.horse === _id);
    let gate = idData?.gate;
    return gate?.replace(/^gate+/i, "");
  };

  const handleForGate = (
    gateid = Math.floor(Math.random() * (12 - 1 + 1)) + 1
  ) => {
    let gate = `gate${gateid}`;
    const horseindata = {
      gate,
      gateId: horseInfoData.horse_id,
      randomColor: randomColor,
    };
    invokeServer(
      "put",
      `/api/event/gate/${eventRecordData?._id}`,
      horseindata
    ).then((result) => {
      eventData();
    });
    setInfoBox(false);
    setHorseInfo(false);
    setEventRecord(false);
    setQuickEnter(false);
  };

  const handelForRace = () => {
    var min = 1;
    var max = 12;
    var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    let gate = `gate${rand}`;

    const horseindata = { gate, gateId: horseInfoData.horse_id };

    invokeServer(
      "put",
      `/api/event/gate/${eventRecordData?._id}`,
      horseindata
    ).then((result) => {
      eventData();
    });
    setInfoBox(false);
    setHorseInfo(false);
    setEventRecord(false);
    setQuickEnter(false);
  };

  const giveTrueFalse = () => {
    let dataToReturn;
    gateHorseIdData.map((data) => {
      Object.keys(eventRecordData).map((key) => {
        if (key.includes("gate") && eventRecordData[key].horse_id !== "") {
          if (eventRecordData[key].horse_id === data.horse_id) {
            dataToReturn = true;
          }
        }
      });
    });
    return dataToReturn;
  };

  function countGatesWithData(item) {
    let count = 0;
    for (let i = 1; i <= 12; i++) {
      if (item[`gate${i}`]) {
        count++;
      }
    }
    return count;
  }
  useEffect(() => {
    if (paginationTotal && page + 1 <= paginationTotal && !loader) {
      loadMore();
    }
  }, [paginationTotal]);

  useEffect(() => {
      eventData();
  }, [page,active]);


  return (
    <>
      {infoBox && (
        <div className="horse-info-box-main">
          <div
            className="event-records-bg"
            onClick={() => setInfoBox(false)}
          ></div>
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
                      $2,31278 <span>{t("USD")}</span>
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
                    <span>{t("Class")}</span> <strong>{t("I")}</strong>
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
        </div>
      )}
      {horseInfo && (
        <div className="horse-info-box-main roster-hours-main">
          <div
            className="event-records-bg"
            onClick={() => {
              setHorseInfo(false);
              setCopy(false);
              setRandomColor("");
            }}
          ></div>
          <div className="container">
            <div className="roster-details ">
              <div
                className="close-icon"
                onClick={() => {
                  setHorseInfo(false);
                  setCopy(false);
                  setRandomColor("");
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
                      src={horseInfoData.img_url}
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
                        >
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
              {stable && (
                <div className="roster-bottom">
                  <div className="roster-bottom-left">
                    <ul>
                      <li>
                        <strong>{t("OWNER STABLE")}</strong>{" "}
                        {/* <strong>🇺🇦 {stableData?.title} 🇺🇦</strong> */}
                      </li>
                    </ul>
                  </div>
                  <div className="roster-bottom-right">
                    <button
                      className="btn"
                      // onClick={handelForRace
                      onClick={() => {
                        setQuickEnter(true);
                      }}
                    >
                      <a target="_blank">{t("Select for race")}</a>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {quickEnter && (
        <div className="horse-info-box-main roster-hours-main">
          <div
            className="event-records-bg"
            onClick={() => setQuickEnter(false)}
          ></div>
          <div className="container">
            <div className="roster-details ">
              <div className="event-records-content-horse">
                {/* {emptyEvent.length  !== 12 ? (
                  <h2 className="event-records-content-heading">
                    Sorry, this all gates is already been booked please select
                    another event
                  </h2>
                ) : ( */}
                <>
                  <h2 className="event-records-content-heading">
                    {t("Pick a gate and enter a racehorse")}
                  </h2>
                  <button
                    className="quick_enter_btn"
                    onClick={() => {
                      handleForGate();
                    }}
                  >
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.88 119.78"
                      width="15px"
                      height="15px"
                    >
                      <path d="M63,7.81A3.91,3.91,0,1,1,63,0,59.63,59.63,0,0,1,93.56,8.38l-.39.33c-1.74,1.57-3.57,3.4-5.42,5.35A52,52,0,0,0,63,7.81ZM47.94,47.25l10.36-.14.77.2A38.58,38.58,0,0,1,65,51.45a41.08,41.08,0,0,1,3.81,3.67A240.17,240.17,0,0,1,83.9,34.31C88.49,28.78,95,21,100.09,16.45l1-.39h11.31l-2.28,2.53A293.89,293.89,0,0,0,89.38,45.44c-5.75,8.31-14.15,21.18-18.72,30l-1.42,2.74-1.31-2.79A67.83,67.83,0,0,0,59.2,61.23,57.29,57.29,0,0,0,47.09,50l.85-2.77ZM40.13,31.7a3.89,3.89,0,1,1,6.74-3.87l1.75,3a3.89,3.89,0,1,1-6.75,3.88l-1.74-3ZM28.76,46.92a3.9,3.9,0,0,1,3.91-6.75l3,1.75a3.9,3.9,0,0,1-3.91,6.75l-3-1.75ZM34.25,82.8a3.89,3.89,0,0,1-3.88-6.75l3-1.75a3.89,3.89,0,0,1,3.88,6.75l-3,1.75Zm-8.34-19a3.89,3.89,0,1,1,0-7.78H29.4a3.89,3.89,0,1,1,0,7.78Zm39.77,32a3.89,3.89,0,0,1-7.78,0v-3.5a3.89,3.89,0,0,1,7.78,0v3.5ZM57.9,24a3.89,3.89,0,0,1,7.78,0V27.5a3.89,3.89,0,1,1-7.78,0V24ZM47.22,92.91A3.89,3.89,0,1,1,40.48,89l1.74-3A3.9,3.9,0,0,1,49,89.89l-1.75,3ZM84.7,89A3.89,3.89,0,0,1,78,92.9l-1.75-3A3.89,3.89,0,0,1,83,86l1.75,3Zm10.11-13a3.9,3.9,0,0,1-3.9,6.75l-3-1.75a3.9,3.9,0,0,1,3.91-6.75l3,1.75Zm5.26-20a3.89,3.89,0,1,1,0,7.78H96.35a3.89,3.89,0,0,1,0-7.78ZM16.5,17a5.17,5.17,0,0,1,1.57-.32,5.05,5.05,0,0,1,5.65,3.53L27.87,33.7a5.07,5.07,0,1,1-9.7,2.94l-.66-2.15a52.08,52.08,0,0,0,82.3,62.22,52.09,52.09,0,0,0,9.43-60.78c1.74-2.24,3.52-4.45,5.29-6.55A59.89,59.89,0,1,1,3.1,59.89a59.82,59.82,0,0,1,8.07-30L6.89,31.51A5.08,5.08,0,1,1,3.28,22L16.5,17Z" />
                    </svg>
                    {t("Quick Enter")}
                  </button>
                  <p className="event-records-note">
                    {t("Note:")}
                    <span>
                      <span className="quick_enter_text">
                        {t("Quick Enter")}
                      </span>{" "}
                      {t(
                        "selects any gate number for you for increased chances of reserving a gate."
                      )}
                    </span>
                  </p>
                  <div>
                    <div>
                      <p>{t("Open Gates")}</p>
                    </div>
                    <div className="opne_gate_stap">
                      {emptyEvent &&
                        emptyEvent.map((item, index) => {
                          return (
                            <span
                              key={index}
                              onClick={() => handleForGate(item)}
                            >
                              {item}
                              <sapn className="stap_underline"></sapn>
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      )}
      {eventRecord && (
        <div className="event-records-overlay">
          <div
            className="event-records-bg"
            onClick={() => {
              setEventRecord(false);
              setEventRecordData({});
              setHorseIdData([]);
              setGateHorseIdData([]);
              setStable(false);
            }}
          ></div>
          <div className="event-records-main">
            <div className="container event-records-container">
              <div className="event-records">
                <div
                  className="records-close-icon"
                  onClick={() => {
                    setEventRecord(false);
                    setEventRecordData({});
                    setHorseIdData([]);
                    setGateHorseIdData([]);
                    setStable(false);
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
                <div className="event-records-header">
                  <div className="event-records-header-info">
                    <h2>
                      {eventRecordData?.rcourse_id?.RaceCourses}
                      <span>
                        {eventRecordData?.rcourse_id?.Location} ∙{" "}
                        {eventRecordData?.rcourse_id?.Country}{" "}
                        <CopyToClipboard
                          text={
                            "Racecourse: " +
                            eventRecordData?.rcourse_id?.RaceCourses +
                            "," +
                            " Country: " +
                            eventRecordData?.rcourse_id?.Location +
                            ", " +
                            eventRecordData?.rcourse_id?.Country
                          }
                          // onCopy={() => {
                          //   alert("Text copied!");
                          // }}
                        >
                          <svg
                            height="22"
                            viewBox="0 0 19 22"
                            width="19"
                            xmlns="http://www.w3.org/2000/svg"
                            className="jsx-4086354d29891872"
                          >
                            <path
                              d="m20 21h-11v-14h11m0-2h-11c-1.1045695 0-2 .8954305-2 2v14c0 1.1045695.8954305 2 2 2h11c1.1045695 0 2-.8954305 2-2v-14c0-1.1045695-.8954305-2-2-2m-3-4h-12c-1.1045695 0-2 .8954305-2 2v14h2v-14h12z"
                              fill="#5c636a"
                              fillRule="evenodd"
                              transform="translate(-3 -1)"
                              className="jsx-4086354d29891872"
                            ></path>
                          </svg>
                        </CopyToClipboard>
                      </span>
                    </h2>
                    <ul>
                      <li>{t("Event Type")}</li>
                      <li>
                        <strong
                          className={giveClassNames(
                            eventRecordData?.class?.Class
                          )}
                        >
                          {eventRecordData?.class?.Class}
                        </strong>
                        {t("Distance")}
                        <span>{eventRecordData?.distance?.Distance}m</span>
                      </li>
                      <li>
                        {t("Status")}
                        <span>
                          {eventRecordData?.horse_ids?.length < 12 ||
                          eventRecordData?.horse_ids == undefined
                            ? "Open"
                            : "Close"}
                        </span>
                      </li>
                      {eventRecordData?.horse_ids?.length < 12 && (
                        <li>
                          {t("Registration ends")}
                          <span>
                            <TimeStamp
                              time_stamp={eventRecordData.time_stamp}
                              horse_ids={
                                eventRecordData?.horse_ids.split(",").length
                              }
                            />
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="event-records-header-side">
                    <div className="side-info">
                      <div className="rox-info-over">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-info-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        {/* <span>
                          {t("In the event this race doesn")}&apos;
                          {t(
                            "t fill and has to be cancelled. All racehorses entered will automatically be returned to their stable and the entry fee credited back to the owner"
                          )}
                          &apos;{t("s wallet soon.")}
                        </span> */}
                        <span>
                          If this race event {"doesn't"} fill by closing time,
                          the platform will automatically assign some of its own
                          ROX horses to complete the race and ensure that it
                          runs at the scheduled time. Please note that if any of
                          the
                          {"platform's"} ROX horses are assigned to the race,
                          the prize pool for the race will be reduced
                          accordingly, and these horses will not be eligible to
                          win any prizes. The {"platform's"} ROX horses will
                          only increase in class range.
                        </span>
                      </div>
                      {eventRecordData?.entry_fee ? (
                        <span>
                          {" "}
                          ${eventRecordData?.entry_fee?.replace(".", ",")}{" "}
                          {t("USD")}
                        </span>
                      ) : (
                        <Image
                          src="/images/free.svg"
                          width={48}
                          height={22}
                          alt="free"
                        />
                      )}
                    </div>
                    <p>
                      {t("Registered")}{" "}
                      <span className="registered_count">
                        {eventRecordData?.horse_ids == ""
                          ? 0
                          : eventRecordData?.horse_ids?.split(",").length}
                        /12
                      </span>
                    </p>
                  </div>
                </div>
                {horseIdData?.length > 0 && (
                  <div className="event-records-table">
                    <table>
                      <thead>
                        <tr>
                          <th>{t("GATE")}</th>
                          <th></th>
                          <th>{t("RACEHORSE")}</th>
                          <th>{t("DETAILS")}</th>
                          <th>{t("CAREER")}</th>
                          <th>{t("STABLE")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {horseIdData &&
                          horseIdData.map((item, index) => {
                            return (
                              <tr
                                key={index}
                                onClick={() => {
                                  setHorseInfo(true);
                                  setHorseInfoData(item);
                                }}
                              >
                                <td>{NewGateId(item?.horse_id)}</td>
                                <td>
                                  <Image
                                    src="/images/horse/2.png"
                                    alt="horse"
                                    width={63}
                                    height={63}
                                  />
                                </td>
                                <td>
                                  {item?.name}
                                  {/* <span>1242</span> */}
                                </td>
                                <td>{item?.genotype}</td>
                                <td>
                                  {item.won_career_first}/
                                  {item.won_career_second}/
                                  {item.won_career_third}
                                </td>
                                <td>{item?.stable_id?.title}</td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                )}
                {window.localStorage.getItem(walletSessionKey) ? (
                  !gateHorseIdData?.length > 0 ? (
                    <div className="event-records-content">
                      <h2>{t("You do not have any racehorses")}</h2>
                      <p>
                        {t("To enter an event, purchase your first racehorse")}
                      </p>
                      <Link href="/marketplace">
                        <a className="event-records-content-wallet">
                          {t("Go to Marketplace")}
                        </a>
                      </Link>
                    </div>
                  ) : (
                    <div className="event-records-content-horse">
                      {gateHorseIdData?.length > 0 && !giveTrueFalse() && (
                        <div className="event-records-table-horse">
                          <table>
                            <thead>
                              <tr>
                                <th>{t("STALLION")}</th>
                                <th className="races-table-last"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {gateHorseIdData &&
                                gateHorseIdData.map((item, index) => {
                                  return (
                                    <>
                                      {item?.gatevalue !== 3 && (
                                        <tr key={index}>
                                          <td className="hourse-tr">
                                            <strong>
                                              <Image
                                                src="/images/horse/1.png"
                                                alt="horse"
                                                width={63}
                                                height={63}
                                              />
                                            </strong>
                                            <span>{item?.name}</span>
                                          </td>

                                          <td>
                                            <div className="select_race_main">
                                              <button
                                                // disabled={handleSubmitButton(
                                                //   item
                                                // )}
                                                className="races-table-last-btn"
                                                onClick={() => {
                                                  setHorseInfo(true);
                                                  setHorseInfoData(item);
                                                  setStable(true);
                                                }}
                                              >
                                                {t("Select to Race")}
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      )}
                                    </>
                                  );
                                })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )
                ) : (
                  <div className="event-records-content">
                    <h2>{t("You are not logged in.")}</h2>
                    <p>{t("Please log in participate in racing")}</p>
                    <a>
                      <Wallet
                        account={account}
                        setAccount={setAccount}
                        AddressData={AddressData}
                        setAddressData={setAddressData}
                        chainId={chainId}
                        setChainId={setChainId}
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="races-table">
        <InfiniteScroll
          initialLoad={true}
          loadMore={loadMore}
          threshold={10}
          useWindow={true}
          hasMore={true}
          dataLength={racetable?.length}
        >
          <table>
            <thead>
              <tr>
                <th>{t("EVENT")}</th>
                <th>{t("EVENT TYPE")}</th>
                <th>{t("DISTANCE")}</th>
                <th>{t("ENTRY FEE")}</th>
                <th>{t("PRIZE POOL")}</th>
                <th>{t("REGISTERED")}</th>
              </tr>
            </thead>
            <tbody>
              {racetable &&
                racetable
                  .filter((data) => {
                    if (classRaces === "" || classRaces === "All") {
                      return data;
                    } else if (data?.class?.Class === classRaces) {
                      return data;
                    }
                  })
                  .map((item, index) => {
                    countGatesWithData(item)
                    let horse_ids;
                    if (item.horse_ids == "") {
                      horse_ids = 0;
                    } else {
                      horse_ids = item?.horse_ids?.split(",").length;
                    }
                    if(countGatesWithData(item) < 12){
                      return (
                        <tr
                          key={index}
                          onClick={() => {
                            setEventRecord(true);
                            setEventRecordData({ ...item });
                            handleOwner();
                          }}
                        >
                          <td className="event-title">
                            {item.rcourse_id.RaceCourses}
                            <span>
                              {item.rcourse_id.Location} ∙{" "}
                              {item.rcourse_id.Country}{" "}
                            </span>
                          </td>
                          <td className="event-type">
                            <span className={giveClassNames(item?.class?.Class)}>
                              {" "}
                              {item.class.Class}
                            </span>
                          </td>
                          <td className="distance">{item.distance.Distance}m</td>
                          <td className="entry-fee">
                            {item?.entry_fee ? (
                              <span>
                                {" "}
                                ${item.entry_fee.replace(".", ",")} {t("USD")}
                              </span>
                            ) : (
                              <Image
                                src="/images/free.svg"
                                alt="free"
                                width={53}
                                height={24}
                              />
                            )}
                          </td>
                          <td className="price">
                            <strong>${item.prizepool.replace(".", ",")}</strong>{" "}
                            <span>{t("USD")}</span>
                          </td>
                          <td className="register">
                            {/* {horse_ids}/12 */}
                            {/* {item?.horse_ids?.split(",").length}/12 */}
                            {countGatesWithData(item)}/12
                            
                          </td>
                        </tr>
                      );

                    }
                  })}
            </tbody>
          </table>
        </InfiniteScroll>
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
          .races-table {
            overflow-x: auto;
          }
          .races-table table {
            width: 100%;
            color: #fff;
            border-collapse: collapse;
            min-width: max-content;
          }
          .Class_7 {
            background: #dfff00 !important;
            color: #000000 !important;
          }
          .Class_6 {
            background: #ffbf00 !important;
          }
          .Class_5 {
            background: #ff7f50 !important;
          }
          .Class_4 {
            background: #de3163 !important;
          }
          .Class_3 {
            background: #9fe2bf !important;
          }
          .Class_2 {
            background: #40e0d0 !important;
          }
          .Class_1 {
            background: #6495ed !important;
          }
          .Class_G3 {
            background: #ccccff !important;
          }
          .Class_G2 {
            background: #0000ff !important;
          }
          .G1 {
            background: #000000 !important;
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
          .races-table tbody tr:hover {
            background: var(--racesTableHover);
            cursor: pointer;
          }
          .races-table tbody td {
            padding: 20px;
            border-bottom: 1px solid var(--borderColor);
            font-weight: 600;
          }
           {
            /* .registered_count {
            color: #fff;
          } */
          }
          .event-title span {
            display: block;
            color: #646a71;
            font-size: 12px;
            font-weight: 500;
          }
          .event-title {
            color: var(--colorWhite);
          }
          .event-type span {
            background: #66513f;
            font-size: 14px;
            padding: 4px 12px;
            border-radius: 5px;
          }
          .entry-fee > span {
            color: #646a71;
          }
          .event-type {
            color: #fff;
          }
          .distance {
            color: #646a71;
          }

          .price strong {
            color: #ecb508;
          }

          .price span {
            font-weight: 500;
            color: #646a71;
            text-transform: uppercase;
          }
          .register {
            text-align: right;
            color: var(--colorWhite);
          }
          .races-table th:last-child {
            text-align: right;
          }
          .event-records-overlay {
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
          }
          .event-records-content-heading {
            font-style: italic;
          }
          .event-records-note {
            color: #5c636a;
            font-weight: 500;
          }
          .opne_gate_stap {
            width: 60%;
            flex-wrap: wrap;
          }
          .opne_gate_stap span {
            border: 2px solid #00bcaa !important;
            border-radius: 30px !important;
            margin-right: 14px;
          }
          .quick_enter_btn {
            display: flex;
            margin: 0 auto;
            background: #00bcaa;
            padding: 9px 25px !important;
            border: none;
            border-radius: 5px !important;
          }
          .opne_gate_stap .stap_underline {
            width: 28px;
            height: 3px;
            display: block;
            border-radius: 20px;
            background: #5c636a;
            margin-left: 10px;
          }
          .quick_enter_btn svg {
            margin-right: 8px;
          }
          .quick_enter_text {
            font-weight: 700;
          }
          .event-records-main {
            position: relative;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            height: 100vh;
            display: flex;
          }
          .event-records-container {
            width: 100%;
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
          .event-records {
            padding-bottom: 1px;
            position: relative;
            background: var(--bigCtaBg);
            z-index: 99;
          }
          .event-records-table-horse {
            margin: 20px;
            overflow-x: auto;
          }
          .horse-event strong {
            position: absolute;
            left: 0;
            bottom: -6px;
          }
          .horse-event {
            padding-left: 100px !important;
          }

          .event-records-table-horse table {
            width: 100%;
            color: var(--colorWhite);
            border-collapse: collapse;
            min-width: max-content;
            background: var(--background);
          }

          .event-records-table-horse th {
            text-align: left;
            padding: 0 20px;
            color: #656a71;
            font-weight: 600;
            font-size: 10px;
            border-bottom: 1px solid var(--borderColor);
            height: 30px;
          }

          .event-records-table-horse tbody td {
            padding: 0px 20px;
            border-bottom: 1px solid var(--borderColor);
            font-weight: 600;
            color: #61666e;
          }

          .event-records-table {
            margin: 20px;
            overflow-x: auto;
          }
          .event-records-header {
            background: var(--racesTableHover);
            padding: 30px 40px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid var(--borderColor);
          }

          .event-records-header h2 {
            font-style: italic;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .event-records-header h2 span {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #5c636a;
          }

          .event-records-header h2 span svg {
            cursor: pointer;
          }
          .event-records-header-info ul {
            display: flex;
            gap: 20px;
            align-items: center;
            margin-top: 10px;
            font-weight: 500;
          }

          .event-records-header-info ul strong {
            background: #66513f;
            padding: 2px 8px 2px 5px;
            border-radius: 2px;
            color: #fff;
          }

          .event-records-header-info ul li {
            display: flex;
            align-items: center;
            font-style: italic;
            font-weight: 600;
          }

          .event-records-header-info ul span {
            color: var(--colorWhite);
            font-style: normal;
          }

          .event-records-header-info ul li {
            color: #5c636a;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .select_race_main {
            justify-content: end !important;
          }

          .races-table-last-btn {
            background-color: #31a800;
            border: none;
            border-radius: 0px !important;
            padding: 10px !important;
            cursor: pointer;
          }
          .rox-info-green strong {
            color: #39ad88 !important;
            font-weight: 500;
            background: transparent !important;
            padding: 0 !important;
          }
          .side-info {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 20px;
            gap: 10px;
          }

          .event-records-header-side p {
            font-size: 16px;
            font-style: italic;
            font-weight: 600;
            color: #63696f;
          }

          .event-records-header-side p strong {
            color: var(--colorWhite);
            font-size: 20px;
            margin-left: 10px;
          }
          .event-records-table table {
            width: 100%;
            color: var(--colorWhite);
            border-collapse: collapse;
            min-width: max-content;
            background: var(--background);
          }

          .event-records-table th {
            text-align: left;
            padding: 0 20px;
            color: #656a71;
            font-weight: 600;
            font-size: 10px;
            border-bottom: 1px solid var(--borderColor);
            height: 30px;
          }

          .event-records-table tbody td {
            padding: 0px 20px;
            border-bottom: 1px solid var(--borderColor);
            font-weight: 600;
            color: #61666e;
          }
          .event-records-content-horse {
            background: var(--boostBorder);
            margin: 20px;
            border-radius: 5px;
            padding: 60px 30px;
            text-align: center;
          }
          .event-records-content-horse h2 {
            font-weight: 600;
            font-size: 24px;
            color: var(--colorWhite);
          }
          .event-records-content-horse div {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .event-records-content-horse button {
            padding: 5px 25px;
            border-radius: 10px;
          }
          .event-records-content-horse div > span {
            border: 1px solid var(--colorWhite);
            color: var(--colorWhite);
            padding: 8px 20px;
            font-weight: 600;
            border-radius: 8px;
            display: inline-block;
            margin-top: 20px;
          }
          .event-records-content {
            background: var(--boostBorder);
            margin: 20px;
            border-radius: 5px;
            padding: 60px 30px;
            text-align: center;
          }

          .event-records-content h2 {
            font-weight: 600;
            font-size: 24px;
            color: var(--colorWhite);
          }

          .event-records-content p {
            margin: 12px 0;
            color: var(--colorWhite);
          }
          .event-records-content a {
            color: var(--colorWhite);
            padding: 8px 20px;
            font-weight: 600;
            border-radius: 8px;
            display: inline-block;
            margin-top: 20px;
          }

          .event-records-content-wallet {
            border: 1px solid var(--colorWhite);
            color: var(--colorWhite);
            padding: 8px 20px;
            font-weight: 600;
            border-radius: 8px;
            display: inline-block;
            margin-top: 20px;
          }

           {
            /* .event-records-content a:hover {
            background: #ffffff17;
          } */
          }
          .event-records-table tbody tr:hover {
            background: var(--racesTableHover);
            cursor: pointer;
          }
          .records-close-icon svg {
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
            color: #646d72;
            width: 18px;
            height: auto;
          }
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
          .horse-info-box-main {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 9999;
          }

          .hourse-tr {
            display: flex !important;
            align-items: center !important;
            position: relative !important;
            left: -20px !important;
            color: #fff;
          }
          .hourse-tr strong {
            display: flex !important;
            margin-right: 20px;
          }
          .roster-list-inner p {
            max-width: 500px;
            font-size: 16px;
            margin-bottom: 30px;
          }
          .roster-info-title {
            margin-bottom: 20px;
          }
          .roster-list-inner h2 {
            color: var(--colorWhite);
            font-size: 26px;
            font-weight: 600;
          }
          .roster-details {
            background: var(--studListBg);
            margin: 20px 0;
            padding: 20px;
            position: relative;
            z-index: 9999;
          }
          .roster-hours-main {
            display: flex;
            z-index: 9999;
            align-items: center;
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
          .roster-bottom {
            background: var(--studListHover);
            padding: 20px;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
          }

          .roster-bottom-left ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            font-size: 12px;
          }

          .roster-bottom-left ul li strong {
            display: block;
            margin-top: 10px;
          }

          .roster-bottom-right {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }

          .roster-list .roster-bottom-left ul li {
            margin-bottom: 0 !important;
          }
          .roster-bottom-right span {
            font-size: 12px;
            color: var(--eventButtonColor);
            font-weight: 600;
          }

          .roster-bottom-left ul li span {
            color: var(--eventButtonColor);
          }

          .roster-bottom-right button {
            width: 180px;
            text-align: center;
            display: block;
            padding: 12px;
            border-radius: 8px;
            border: none;
            color: #fff;
            cursor: pointer;
            background: var(--profileInputBorder);
          }
          .roster-bottom-right button a {
            color: #fff;
          }
          .roster-bottom-right button:hover {
            opacity: 0.8;
          }
          .roster-bottom-right button.btn {
            background: #2ee370;
          }
          .roster-bottom-right button span {
            color: #fff;
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
          @media screen and (max-width: 991px) {
            .event-records-table tbody tr:hover {
              background: #262a30;
              cursor: pointer;
            }

            .event-records-header-info ul {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }

            .event-records-header {
              display: block;
            }

            .side-info {
              display: block;
              margin: 0;
              margin-top: 30px;
            }

            .event-records-header h2 {
              display: block;
              margin-bottom: 30px;
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
            .horse-info-area-chart {
              margin: auto;
            }
          }
        `}
      </style>
    </>
  );
}
