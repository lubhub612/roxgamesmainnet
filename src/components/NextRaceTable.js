import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import GlobalContext from "../contexts/GlobalContext";
import dynamic from "next/dynamic";
import EventUpcoming from "./EventUpcoming";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import Racepath from "./Racepath";

const InfiniteScroll = dynamic(() => import("react-infinite-scroller"), {
  ssr: false,
});

export default function NextRaceTable({ active, setActive }) {
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

  const [race, setRace] = useState(false);
  const [infoBox, setInfoBox] = useState(false);
  const [racetable, setRacetable] = useState([]);
  const [paginationTotal, setPaginationTotal] = useState();
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [classRaces, setClassRaces] = useState("");
  const [time, setTime] = useState();
  const [horseInfo, setHorseInfo] = useState(false);
  const [horseInfoData, setHorseInfoData] = useState();
  const [timeElapse, setTimeElapse] = useState();
  const [horseData, setHorseData] = useState();
  const { t } = useTranslation();
  const [height, setHeight] = useState();
  const [convertTime, setConvertTime] = useState();
  const [sec, setSec] = useState(0);
  const [horse, setHorse] = useState([]);
  const [distance, setDistance] = useState();
  const [copy, setCopy] = useState(false);
  const [selectedEvent,setSelectedEvent] = useState([])

  // const [inter, setInter] = useState(null);
  const [perSecond, setPerSec] = useState(0);

  const newDate = moment().utc().format("DD/MMM/YYYY, HH:mm:ss");
  let finishDate = moment(horseInfoData?.finish_time).format(
    "DD/MMM/YYYY, HH:mm:ss"
  );


  var playerOnePos = 0;
  var playerTwoPos = 0;
  var playerThreePos = 0;
  var playerFourPos = 0;
  var playerFivePos = 0;
  var playerSixPos = 0;
  var playerSevenPos = 0;
  var playerEightPos = 0;
  var playerNinePos = 0;
  var playerTenPos = 0;
  var playerElevenPos = 0;
  var playerTwelvePos = 0;

  const game = () => {
    var playerOne = document.getElementById("h1");
    var playerTwo = document.getElementById("h2");
    var playerThree = document.getElementById("h3");
    var playerFour = document.getElementById("h4");
    var playerFive = document.getElementById("h5");
    var playerSix = document.getElementById("h6");
    var playerSeven = document.getElementById("h7");
    var playerEight = document.getElementById("h8");
    var playerNine = document.getElementById("h9");
    var playerTen = document.getElementById("h10");
    var playerEleven = document.getElementById("h11");
    var playerTwelve = document.getElementById("h12");
    if (playerOne) {
      
      let test = [];
      // console.log("🚀 ~ file: NextRaceTable.js ~ line 100 ~ game ~ test", test)
      
      if (test.includes(parseInt(playerOnePos))) {
        playerOne.style.marginBottom = playerOnePos + "px";
      } else {
        playerOnePos += Math.random() * 20 + 1;
        playerOne.style.marginBottom = playerOnePos + "px";
      }
      test.push(parseInt(playerTwoPos));

      playerTwoPos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerTwoPos))) {
        playerTwo.style.marginBottom = playerTwoPos + "px";
      } else {
        playerTwoPos += Math.random() * 20 + 1;
        playerTwo.style.marginBottom = playerTwoPos + "px";
      }
      test.push(parseInt(playerTwoPos));

      playerThreePos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerThreePos))) {
        playerThree.style.marginBottom = playerThreePos + "px";
      } else {

        playerThree.style.marginBottom = playerThreePos + "px";
      }
      test.push(parseInt(playerThreePos));
      playerFourPos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerFourPos))) {
        playerFour.style.marginBottom = playerFourPos + "px";
      } else {
        playerFourPos += Math.random() * 20 + 1;
        playerFour.style.marginBottom = playerFourPos + "px";
      }
      test.push(parseInt(playerFourPos));

      playerFivePos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerFivePos))) {
        playerFive.style.marginBottom = playerFivePos + "px";
      } else {
        playerFivePos += Math.random() * 20 + 1;
        playerFive.style.marginBottom = playerFivePos + "px";
      }
      test.push(parseInt(playerFivePos));


      playerSixPos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerSixPos))) {
        playerSix.style.marginBottom = playerSixPos + "px";
      } else {
        playerSixPos += Math.random() * 20 + 1;
        playerSix.style.marginBottom = playerSixPos + "px";
      }
      test.push(parseInt(playerSixPos));

      playerSevenPos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerSevenPos))) {
        playerSeven.style.marginBottom = playerSevenPos + "px";
      } else {
        playerSevenPos += Math.random() * 20 + 1;
        playerSeven.style.marginBottom = playerSevenPos + "px";
      }
      test.push(parseInt(playerSevenPos));

      playerEightPos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerEightPos))) {
        playerEight.style.marginBottom = playerEightPos + "px";
      } else {
        playerEightPos += Math.random() * 20 + 1;
        playerEight.style.marginBottom = playerEightPos + "px";
      }
      test.push(parseInt(playerEightPos));

      playerNinePos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerNinePos))) {
        playerNine.style.marginBottom = playerNinePos + "px";
      } else {
        playerNinePos += Math.random() * 20 + 1;
        playerNine.style.marginBottom = playerNinePos + "px";
      }
      test.push(parseInt(playerNinePos));

      playerTenPos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerTenPos))) {
        playerTen.style.marginBottom = playerTenPos + "px";
      } else {
        playerTenPos += Math.random() * 20 + 1;
        playerTen.style.marginBottom = playerTenPos + "px";
      }
      test.push(parseInt(playerTenPos));

      playerElevenPos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerElevenPos))) {
        playerEleven.style.marginBottom = playerElevenPos + "px";
      } else {
        playerElevenPos += Math.random() * 20 + 1;
        playerEleven.style.marginBottom = playerElevenPos + "px";
      }
      test.push(parseInt(playerElevenPos));

      playerTwelvePos += Math.random() * 20 + 1;
      if (test.includes(parseInt(playerTwelvePos))) {
        playerTwelve.style.marginBottom = playerTwelvePos + "px";
      } else {
        playerTwelvePos += Math.random() * 20 + 1;
        playerTwelve.style.marginBottom = playerTwelvePos + "px";
      }
      test.push(parseInt(playerTwelvePos))

    }
  };

  const openRace = () => {
    setRace(true);
    document.documentElement.scrollTop = 0;
  };

  useEffect(()=>{
    console.log("=====>useeffect");
    setInterval(()=>{
      console.log("=====> setInterval");
      game()
    },300)
  },[])

  useEffect(() => {
    eventData();
  }, [page,active]);

  const pull_data = (data) => {
    setHeight(data);
    document.documentElement.style.setProperty(
      "--size-height",
      `-${data - 497}px`
    );
    document.documentElement.style.setProperty(
      "--aniamtioSec",
      `${convertTime}s`
    );
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

  const eventData = () => {
    invokeServer("get", `/api/event?page=${page}`).then((result) => {
      let dataObject = {};
      [...racetable, ...result.data.data].forEach((item) => {
        dataObject[item.idx] = item;
      });
      const userData = Object.values(dataObject).filter((data) => {
        if (countGatesWithData(data) === 12) {
          return data;
        }else if (active) {
          return data?.rcourse_id.Country === "Earth"
        }
      });
      setRacetable(...[userData]);

      setDistance(userData[0]?.distance.Distance);
      setPaginationTotal(result.data.total);
      setLoader(false);
    });
  };

  // const runHorse = (item, height) => {
  //     const finish_time = moment(item?.finish_time, "DD/MMM/YYYY, HH:mm:ss");
  //     const start_time = moment(item.start_time, "DD/MMM/YYYY, HH:mm:ss");

  //     const durationSecond = moment.duration(finish_time.subtract(start_time));
  //     const min = parseInt(durationSecond.asMinutes()) * 60;
  //     const sec = parseInt(durationSecond.asSeconds()) % 60;
  //     const totalSecond = min + sec;

  //     const t = totalSecond;
  //     let d = parseInt(item.distance.Distance) / 100;
  //     const time = (t / d) * 1000;
  //     console.log(time,"time");

  //     document.documentElement.style.setProperty(
  //         "--horse-time-out",
  //         `${time / 1000}s`
  //     );

  //     setInterval(() => {
  //         game();
  //     }, time);
  // };

  const loadMore = () => {
    if (page + 1 <= paginationTotal && !loader) {
      setPage(page + 1);
      setLoader(true);
    }
  };

  const handleTime = (Time) => {
    if (Time) {
      const startTime = moment().utc().format("DD/MMM/YYYY, HH:mm:ss");

      var a = moment(Time, "DD/MMM/YYYY, HH:mm:ss").add("12", "hours").format();
      const endTime = moment(a);

      const duration = moment.duration(endTime.diff(startTime));
      if (duration.get("seconds") > 0) {
        const hours = parseInt(duration.asHours());
        const minutes = parseInt(duration.asMinutes()) % 60;
        const seconds = parseInt(duration.asSeconds()) % 60;
        setTime(`${hours}h,${minutes}m,${seconds}s`);
      } else {
        setTime("00:00:00");
      }
    }
  };
  
  const calculateTime = (Time) => {
    if (Time) {
      const startTime = moment().utc().format("DD/MMM/YYYY, HH:mm:ss");
      const finish_time = moment(
        horseInfoData?.finish_time,
        "DD/MMM/YYYY, HH:mm:ss"
      );
      const start_time = moment(
        horseInfoData.start_time,
        "DD/MMM/YYYY, HH:mm:ss"
      );

      const duration = moment.duration(finish_time.diff(startTime));
      if (duration.get("seconds") > 0) {
        const minutes = parseInt(duration.asMinutes()) % 60;
        const seconds = parseInt(duration.asSeconds()) % 60;
        setTimeElapse(`${minutes}m:${seconds}s`);
        setSec(minutes * 60 + seconds);
        const durationSecond = moment.duration(
          finish_time.subtract(start_time)
        );
        const min = parseInt(durationSecond.asMinutes()) * 60;
        const second = parseInt(durationSecond.asSeconds()) % 60;
        const totalSecond = min + second;
        setConvertTime(totalSecond);
      } else {
        const start_time = moment(
          horseInfoData.start_time,
          "DD/MMM/YYYY, HH:mm:ss"
        );
        const duration = moment.duration(finish_time.subtract(start_time));
        const minutes = parseInt(duration.asMinutes()) % 60;
        const seconds = parseInt(duration.asSeconds()) % 60;
        setTimeElapse(`${minutes}m:${seconds}s`);
      }
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

  useEffect(() => {
    if (horseInfoData?.horse_ids) {
      handelHorseOwner(horseInfoData?.horse_ids);
      setInterval(() => {
        calculateTime(horseInfoData?.start_time);
      }, 1000);
    }
  }, [horseInfoData]);

  useEffect(() => {
    if (horseInfoData?.horse_winners) {
      const winData = {
        winID: horseInfoData?.horse_winners,
      };
      const data = winners(winData);
    }
  }, [horseInfoData?.horse_winners]);


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
              <h2>{t("Sluz bucket")}</h2>
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
                    $2,31278<span>{t("USD")}</span>
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
      )}
      {race && (
        <div className="race-view">
          <div className="race-view-banner">
            <span className="close-icon" onClick={() => setRace(false)}>
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
                {horseInfoData.rcourse_id.RaceCourses}
                <span>
                  {horseInfoData.rcourse_id.Country} ∙{" "}
                  {horseInfoData.rcourse_id.Location}
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
                  <span className="race-number">
                    {horseInfoData?.class?.Class}
                  </span>
                </li>
                <li>
                  {t("Distance")}{" "}
                  <span>
                    {horseInfoData.distance.Distance}
                    {t("m")}
                  </span>
                </li>
                <li>
                  {t("Status")}
                  <span>
                    {time === "00:00:00" && finishDate <= newDate ? (
                      <td> {t("Finished")}</td>
                    ) : time === "00:00:00" ? (
                      <td>{t("Live")}</td>
                    ) : (
                      <td>{t("Scheduled")}</td>
                    )}
                  </span>
                </li>
                {time !== "00:00:00" && (
                  <li>
                    {t("Runs At")}{" "}
                    <span>
                      {new Date(horseInfoData?.start_time).toUTCString()}
                    </span>
                  </li>
                )}
                {finishDate <= newDate && (
                  <li>
                    {t("Ran At")}{" "}
                    <span>
                      {new Date(horseInfoData?.finish_time).toUTCString()}
                    </span>
                  </li>
                )}
                {time !== "00:00:00" && finishDate >= newDate ? (
                  ""
                ) : (
                  <li>
                    {t("Time Elapsed")} <span>{timeElapse}</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="race-view-banner-content-button">
              {/* <button className="button-3d">
                  Watch 3D
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
                </button> */}
              {time == "00:00:00" && finishDate <= newDate ? (
                <>
                  <span>{t("RACE FINISHED!")}</span>
                </>
              ) : time == "00:00:00" ? (
                <>
                  <button className="button-3d">
                    {t("Watch 3D")}
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
                  </button>
                  <span className="live-status">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="jsx-3d4b672525cc1689 bi bi-play-btn"
                    >
                      <path
                        d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.357l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
                        className="jsx-3d4b672525cc1689"
                      ></path>
                      <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                        className="jsx-3d4b672525cc1689"
                      ></path>
                    </svg>
                    {t("Live")}
                  </span>
                </>
              ) : (
                <>
                  <button className="button-3d">
                    {t("Watch 3D")}
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
                  </button>
                  <span>{t("Runs in")}</span>
                  <span className="live-status">{time}</span>
                </>
              )}
            </div>
          </div>
          {/* get horse */}
          {time !== "00:00:00" ? (
            <div className="event-records">
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
                        {
                          setInterval(() => {
                            calculateTime(item?.start_time);
                          }, 1000);
                        }
                        return (
                          <tr
                            key={index}
                            onClick={() => {
                              // key={index}
                              setHorseInfo(true);
                              setHorseData(item);
                            }}
                          >
                            <td>{index + 1}</td>
                            <td>
                              <Image
                                src="/images/horse/2.png"
                                alt="horse"
                                width={63}
                                height={63}
                              />
                            </td>
                            <td>{item.name}</td>
                            <td>
                              {" "}
                              {item.genotype} ∙ {item.bloodline}
                            </td>
                            <td>
                              {item.won_career_first}/{item.won_career_second}/
                              {item.won_career_third}
                            </td>
                            <td> {item.stable_id.title} </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <>
              <div>
                {finishDate > newDate ? (
                  <div className="race-view-list">
                    <div className="race-view-list-sidebar">
                      <ul>
                        {horseIdData &&
                          horseIdData.map((item, index) => {
                            return (
                              <>
                                <li
                                  className="active"
                                  key={index}
                                  onClick={() => {
                                    setHorseInfo(true);
                                    setHorseData(item);
                                  }}
                                >
                                  <span>1st</span>
                                  <strong>
                                    <Image
                                      src="/images/horse/1.png"
                                      alt="horse"
                                      width={36}
                                      height={36}
                                    />
                                    <h3>
                                      {item.name}{" "}
                                      <small>
                                        {item.genotype} - {item.bloodline}
                                      </small>
                                    </h3>
                                    <p>#{index + 1}</p>
                                  </strong>
                                </li>
                              </>
                            );
                          })}
                      </ul>
                    </div>
                    <div className="race-view-list-content">
                      <div className="racetrack-container">
                        <div className="racetrack">

                        {selectedEvent?.map((item, index) => {
                              // console.log(item,"itemtfebfwebjfwe")
                            return (
                              <>
                                  <Racepath
                                    func={pull_data}
                                    key={index}
                                    distance={item.distance.Distance}
                                  />
                                <div id="race-path">
                                  <div className="hours">
                                    <div className="in-race-horse" id="h1">
                                      {t("1")}
                                    </div>
                                    <div className="in-race-horse" id="h2">
                                      {" "}
                                      {t("2")}
                                    </div>
                                    <div className="in-race-horse" id="h3">
                                      {t("3")}
                                    </div>
                                    <div className="in-race-horse" id="h4">
                                      {t("4")}
                                    </div>
                                    <div className="in-race-horse" id="h5">
                                      {t("5")}
                                    </div>
                                    <div className="in-race-horse" id="h6">
                                      {t("6")}
                                    </div>
                                    <div className="in-race-horse" id="h7">
                                      {t("7")}
                                    </div>
                                    <div className="in-race-horse" id="h8">
                                      {t("8")}
                                    </div>
                                    <div className="in-race-horse" id="h9">
                                      {t("9")}
                                    </div>
                                    <div className="in-race-horse" id="h10">
                                      {t("10")}
                                    </div>
                                    <div className="in-race-horse" id="h11">
                                      {" "}
                                      {t("11")}
                                    </div>
                                    <div className="in-race-horse" id="h12">
                                      {t("12")}
                                    </div>
                                  </div>
                                </div>
                              </>
                            );
                          })}

                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="race-live-list">
                    {winner?.length > 0 &&
                      winner?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="race-live-item"
                            onClick={() => {
                              setHorseInfo(true);
                              setHorseData(item);
                            }}
                          >
                            <div className="race-live-title">
                              <span>
                                {" "}
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
                        );
                      })}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}

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

      <EventUpcoming setClassRaces={setClassRaces} />
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
                <th>{t("RUNS IN")}</th>
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
                    {
                      setInterval(() => {
                        handleTime(item?.time_stamp);
                      }, 1000);
                    }
                    return (
                      <tr
                        key={index}
                        onClick={() => {
                          openRace;
                          setRace(true);
                          setHorseInfoData(item);
                          setSelectedEvent([item])
                          // runHorse(item, height);
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
                        <td className="price">
                          <strong>
                            {item?.entry_fee ? (
                              <span> ${item.entry_fee.replace(".", ",")}</span>
                            ) : (
                              <Image
                                src="/images/free.svg"
                                alt="free"
                                width={53}
                                height={24}
                              />
                            )}
                          </strong>{" "}
                          <span>{t("USD")}</span>
                        </td>
                        <td className="price">
                          <strong>${item.prizepool.replace(".", ",")}</strong>{" "}
                          <span>{t("USD")}</span>
                        </td>
                        <td className="register">
                        {countGatesWithData(item)}/12
                        </td>
                        {time === "00:00:00" &&
                        new Date(item.finish_time).toUTCString() < newDate ? (
                          <td className="run-live">{t("Finished")}</td>
                        ) : time == "00:00:00" ? (
                          <td className="run-live">{t("Live")}</td>
                        ) : (
                          <td className="register-live">{time}</td>
                        )}
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          {/* {console.log("🚀 ~ file: NextRaceTable.js ~ line 900 ~ winner?.map ~ racetable", racetable)} */}
        </InfiniteScroll>
        {/* <Racepath /> */}
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

          .horse-info-box-main {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            z-index: 9999;
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
            background: #35e0d0 !important;
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
          .races-table table {
            width: 100%;
            color: #fff;
            border-collapse: collapse;
            min-width: max-content;
          }
          .register {
            color: var(--colorWhite);
          }
          .register-live {
            color: var(--colorWhite);
            text-align: right;
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
            background: #375b55;
            font-size: 14px;
            padding: 4px 12px;
            border-radius: 5px;
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
          .run-live {
            color: #f0b90c;
            text-align: right;
          }
          .races-table th:last-child {
            text-align: right;
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
            padding: 30px 35px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
          }
          .race-number {
            background: #563d6d;
            padding: 4px 8px;
            border-radius: 5px;
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
          .close-icon {
            position: absolute;
            right: 5px;
            top: 5px;
            cursor: pointer;
          }

          .close-icon svg {
            width: 35px;
            height: 35px;
            color: #676666;
          }
          .race-view-banner h2 span {
            color: #5b646b;
            font-style: italic;
          }

          .race-view-banner h2 svg {
            cursor: pointer;
          }
          .button-3d {
            background: url("/images/3d-button.jpg") no-repeat center center /
              cover;
            border: 1px solid #f0b90c;
            color: #fff;
            padding: 10px 30px;
            font-weight: 600;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 15px;
            cursor: pointer;
          }
          .live-status {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #f0b90c;
            font-weight: 600;
          }

          .live-status svg {
            width: 24px;
            height: 24px;
          }

          .race-view-banner-content-button {
            display: flex;
            align-items: center;
            gap: 30px;
          }
          .race-view-list-sidebar li {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 10px;
          }

          .race-view-list-sidebar li span {
            background: var(--bigCtaBg);
            padding: 6px 8px;
            border-radius: 5px;
            display: block;
            min-width: 50px;
            text-align: center;
            font-size: 12px;
          }

          .race-view-list-sidebar h3 small {
            font-size: 6px;
            color: #5d646b;
            display: block;
            visibility: hidden;
            opacity: 0;
            height: 0;
          }
          .race-view-list-sidebar li strong {
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 500;
            font-size: 12px;
            background: var(--bigCtaBg);
            padding: 0px 15px;
            border-radius: 5px;
            width: 100%;
            transition: 0.3s;
          }
          .race-view-list-sidebar li strong:hover {
            background: var(--bigCtaBg);
            transform: scale(1.25);
            z-index: 100;
          }
          .race-view-list-sidebar li strong:hover h3 small {
            visibility: visible;
            opacity: 1;
            height: inherit;
          }

          .race-view-list-sidebar li strong h3 {
            font-weight: 500;
          }

          .race-view-list-sidebar li strong span {
            transform: scaleX(-1);
          }
          .race-view-list-sidebar .active span {
            background: #f0b90c;
            color: #000;
          }
          .race-view-list {
            display: grid;
            grid-template-columns: 1fr 3.3fr;
            gap: 30px;
            padding: 35px 35px 50px;
            border-top: 1px solid #33302a;
            position: relative;
          }

          .race-view-list-content {
            background: var(--bigCtaBg);
            border-radius: 5px;
          }
          .racetrack-container {
            height: 597px;
            min-width: 100%;
            overflow: hidden;
            position: relative;
            z-index: 2;
          }
          #race-path {
            position: relative;
          }
          .race-view-list-content .racetrack {
            height:100%;
            width:100%;
            // display: flex;
            // justify-content: space-around;
          // background: url("/images/race-path.svg")
            align-items: end;
            background-position-x: right;
            background-position-y: bottom;
            background-repeat: no-repeat;
            background-size: auto auto;
            bottom: 0;
            animation-name: racetrack1;
            animation-duration: var(--aniamtioSec);
            animation-timing-function: linear;
            // height: 8830px;
            width: 100%;
            
          }
          @keyframes racetrack1 {
            0% {   
              // margin-top: -7860px;
              margin-top: var(--size-height);
            }
            80%{
              animation-duration: 48s;
            }
            100%{
              margin-bottom: 0;
            }
          }
         
          #racetrack-container #racetrack,
          .in-race-horse {
            position: absolute;
            transition: all 1s;
          }
          .race-view-list-sidebar li:last-child {
            margin-bottom: 0;
          }
          .race-view-list-content ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100%;
          }

          .race-view-list-content .racetrack div div {
            width: 25px;
            height: 25px;
            background: #4f4f4f;
            text-align: center;
            display: flex;
            animation-name: rox;
            animation-duration: var(--aniamtioSec);
            align-items: center;
            justify-content: center;
            color: #fff;
            opacity:1;
            border-radius: 50px;
            transition: all 3s linear;
          
          }
          // @keyframes rox {
          //   0%{
          //     bottom :0%;
          //   }
          //   95%{
          //     bottom : 90%;
          //   }
          //   99.8%{
          //     opacity:0.5;
          //   }
          //   100%{
          //     opacity:0;
          //   }
          // }

          @keyframes rox {
            0%{
              bottom: 50px;
            }
            10%{
              bottom: 10%;
            }
            20%{
              bottom: 20%;
            }
            30%{
              bottom: 30%;
            }
            35%{
              bottom: 35%;
            }
            50%{
              bottom: 45%;
            }
            60%{
              bottom: 55%;
            }
            70%{
              bottom: 65%;
            }
            80%{
              bottom: 75%;
            }

            90%{
              bottom: 85%;
            }
            95%{
              bottom:90%
            }
            99.8%{
      
            }
            100%{
              bottom: 91%;
             
            }

          }
          .race-view-list-content .racetrack .hours div:nth-child(1) {
            background: red;
            left: calc(2rem + 0%);
            bottom: 50px;
          }
          .race-view-list-content
            .racetrack
            #race-path
            .hours
            div:nth-child(2) {
            background: green;
            left: calc(2rem + 7.5%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(3) {
            background: blue;
            left: calc(2rem + 15%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(4) {
            background: #7f8c8d;
            left: calc(2rem + 22.5%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(5) {
            background: #e74c3c;
            left: calc(2rem + 30%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(6) {
            background: #e67e22;
            left: calc(2rem + 37.5%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(7) {
            background: #f1c35f;
            left: calc(2rem + 45%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(8) {
            background: #34495e;
            left: calc(2rem + 52.5%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(9) {
            background: #9b59b6;
            left: calc(2rem + 60%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(10) {
            background: #3498db;
            left: calc(2rem + 67.5%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(11) {
            background: #2ecc71;
            left: calc(2rem + 75%);
            bottom: 50px;
          }
          .race-view-list-content .racetrack div div:nth-child(12) {
            background: #1abc9c;
            left: calc(2rem + 82.5%);
            bottom: 50px;
          }
          .race-view-list-sidebar p {
            color: #808080;
          }
          .race-live-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 20px;
            padding: 35px 35px 35px;
            border-top: 1px solid #343432;
          }
          .race-live-item {
            background: var(--studListBg);
            position: relative;
            overflow: hidden;
            padding: 25px;
            border-radius: 5px;
            cursor: pointer;
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
          @media screen and (max-width: 991px) {
            .race-view-banner {
              display: grid;
              gap: 35px;
            }

            .race-view-list {
              display: grid;
              grid-template-columns: 1fr;
              align-items: center;
              padding: 20px;
            }

            .race-view-list-content {
              height: 600px;
              padding: 0 30px;
            }

            .race-view-list-sidebar li {
              display: grid;
              grid-template-columns: 1fr 8fr;
            }
            .race-view-list-sidebar li strong:hover {
              transform: unset;
            }
            .race-view-list-sidebar h3 small {
              font-size: 8px;
              color: #5d646b;
              display: block;
              visibility: visible;
              opacity: 1;
              height: inherit;
            }
            .race-view-list-sidebar strong {
              display: grid !important;
              grid-template-columns: 1fr 8fr 0fr;
            }
            .race-view-list-sidebar {
              width: 80vw;
            }
            .race-view-list-content ul {
              width: 60vw;
            }
            .race-live-list {
              grid-template-columns: 1fr;
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

          .event-records-table {
            margin: 20px;
            overflow-x: auto;
          }
          .event-records {
            border-top: 1px solid #33302a;
          }
          .event-records-table tbody tr:hover {
            background: var(--racesTableHover);
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
}
