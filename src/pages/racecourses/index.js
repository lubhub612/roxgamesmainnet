import Image from "next/image";
import { useContext, useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroller";
// import InfiniteScroll from "react-infinite-scroll-component";
import dynamic from "next/dynamic";

import Layout from "../../components/Layout";
import GlobalContext from "../../contexts/GlobalContext";
import moment from "moment";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ImageBox from "../../components/ImageBox/Index";
const InfiniteScroll = dynamic(() => import("react-infinite-scroller"), {
  ssr: false,
});
export default function Racecourses() {
  const [time, setTime] = useState(false);
  const [category, setCategory] = useState(false);
  const [chains, setChains] = useState(false);
  const [raceData, setRaceData] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(0);
  const { t } = useTranslation();
  const [regions, setRegions] = useState();
  const [regionsid, setRegionsid] = useState();
  const [page, setPage] = useState(1);
  const [paginationTotal, setPaginationTotal] = useState();
  const { invokeServer } = useContext(GlobalContext);
  const [loader, setLoader] = useState(true);
  const [theme, setTheme] = useState("");
  const [box, setBox] = useState(false);
  const [imageData, setImageData] = useState({});
  const [sortOrder, setSortOrder] = useState("asc");

  const HandelTheme = (e) => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  };
  useEffect(() => {
    HandelTheme();
  }, [theme]);

  useEffect(() => {
    invokeServer("get", `/api/race/data/${selectedRegion}?page=${page}`).then(
      (result) => {
        let dataObject = {};
        [...raceData, ...result.data.data].forEach((item) => {
          dataObject[item.idx] = item;
        });
        console.log(
          "🚀 ~ file: index.js:55 ~ useEffect ~ result:",
          result.data.data
        );
        setRaceData(...[Object.values(dataObject)]);
        setPaginationTotal(result.data.total);
        setLoader(false);
      }
    );
  }, [selectedRegion, page]);
  useEffect(() => {
    invokeServer("get", "/api/region").then((result) => {
      setRegions(result.data);
    });
  }, []);
  const giveRegionName = (data) => {
    let regionToReturn;
    regions?.forEach((regionsData) => {
      if (regionsData?.idx === parseFloat(data)) {
        regionToReturn = regionsData?.Region;
      }
    });
    return regionToReturn;
  };
  const loadMore = () => {
    if (page + 1 <= paginationTotal && !loader) {
      setPage(page + 1);
      setLoader(true);
    }
  };

  const formatDate = (date) => {
    // console.log("date --->", date);
    // const newDateFor = moment(date).format("DD-MM-YYYY , HH:mm:ss");
    // const currentDate = moment(new Date()).format("DD-MM-YYYY , HH:mm:ss");
    // // console.log("newDateFor -->", newDateFor, "currentDate -->", currentDate);

    // const newDate = moment(newDateFor)
    //   .add("24", "hour")
    //   .format("DD-MM-YYYY , HH:mm:ss");
    // // console.log(
    // //   "newDate < moment(new Date()).format() -->",
    // //   newDate < moment(new Date()).format()
    // // );
    // if (newDate < currentDate) {
    //   pendingDate = pendingDate + 1;
    //   formatDate(newDate,pendingDate + 1);
    // }
    // return pendingDate;
    var a = moment(date, "DD-MM-YYYY , HH:mm:ss");
    var b = moment(new Date());
    return b.diff(a, "days");
  };

  const newprizepool = (data) => {
    let newPrice = 0;
    data.map((x) => {
      newPrice = newPrice + parseInt(x.prizepool);
    });
    return newPrice;
  };

  const handleSort = (event) => {
    const key = event.target.dataset.key;
    const order = sortOrder === "asc" ? "desc" : "asc";

    const sorted = raceData.sort((a, b) => {
      const result = a[key] > b[key] ? 1 : -1;
      return order === "asc" ? result : -result;
    });
    setRaceData(sorted);
    setSortOrder(order);
  };

  return (
    <Layout>
      <ImageBox setBox={setBox} box={box} imageData={imageData} />
      <div className="rankings">
        <div className="container">
          <h2>{t("Intergalactic Racecourses")}</h2>
          {/* <p>
            {t(
              "This is a list of currently active horse racing venues (Thoroughbred racing and harness racing), sorted by country."
            )}
            {t("In most English-speaking countries they are called")} &quot;
            {t("racecourses")}&quot;
            {t("the United States and some parts of Canada use")}
            &quot;{t("racetracks")}&quot; {t("(some parts of Canada also use")}
            &quot;{t("raceway")}&quot;
            {t(
              "). In many non-English speaking countries the term used is"
            )}{" "}
            &quot;{t("hippodrome")}&quot;.
          </p> */}
          <p>
            Get ready for the ride of your life in our intergalactic horse
            racing league! We offer an unparalleled racing experience on seven
            different planets, each with its own set of unique and challenging
            racecourses. With our carefully designed courses, both seasoned
            players and newcomers to the world of GameFi are sure to find
            thrills and excitement at every turn. Join us today and experience
            the thrill of intergalactic horse racing like never before!
          </p>
          <div className="rankings-head">
            <div className="rankings-item">
              <span onClick={() => setTime((e) => !e)}>
                {t("Last 24 hours")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              {time && (
                <ul>
                  <li onClick={() => setTime(false)}>{t("Last 24 hours")}</li>
                  <li onClick={() => setTime(false)}>{t("Last 7 days")}</li>
                  <li onClick={() => setTime(false)}>{t("Last 30 days")}</li>
                  <li onClick={() => setTime(false)}>{t("All time")}</li>
                </ul>
              )}
            </div>
            <div className="rankings-item">
              <span onClick={() => setCategory((e) => !e)}>
                {regions && regions.length && giveRegionName(selectedRegion)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
              {category && (
                <>
                  <ul>
                    {regions &&
                      regions.map((item, index) => (
                        <>
                          <li
                            className={theme === "dark" && `rankins-item-drop`}
                            onClick={() => {
                              setLoader(true);
                              setPage(1);
                              setRaceData([]);
                              setSelectedRegion(item.idx);
                              setCategory(false);
                            }}
                            key={index}
                          >
                            {item.Region}
                          </li>
                        </>
                      ))}
                  </ul>
                  {/* <ul>
                    <li onClick={() => setRegion(false)}>North America</li>
                    <li onClick={() => setRegion(false)}>South America</li>
                    <li onClick={() => setRegion(false)}>Europe</li>
                    <li onClick={() => setRegion(false)}>Middel East</li>
                    <li onClick={() => setRegion(false)}>African Continent</li>
                    <li onClick={() => setRegion(false)}>
                      Australian Continent
                    </li>
                  </ul> */}
                </>
              )}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="rankings-table ">
            <table>
              <InfiniteScroll
                initialLoad={true}
                loadMore={loadMore}
                Intergalactic
                Racecourses
                useWindow={true}
                hasMore={true}
                dataLength={raceData?.length}
              >
                <thead>
                  <tr>
                    <th
                      className="w-350 pointer"
                      onClick={handleSort}
                      data-key="RaceCourses"
                    >
                      {t("Racecourse")}
                    </th>
                    {/* <th>Country</th> */}
                    {/* <th>City</th> */}
                    <th
                      className="w-230 pointer"
                      onClick={handleSort}
                      data-key="Region"
                    >
                      {t("Region")}
                    </th>
                    {/* <th>Region Name</th> */}
                    <th
                      className="w-200 pointer"
                      onClick={handleSort}
                      data-key="eventid"
                    >
                      {t("Total Races")}{" "}
                    </th>
                    <th
                      className="w-200 pointer"
                      onClick={handleSort}
                      data-key="finish_time"
                    >
                      {t("Races last 24h")}
                    </th>
                    <th
                      className="w-200 pointer"
                      onClick={handleSort}
                      data-key="eventid"
                    >
                      {t("Total Rewards")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {raceData &&
                    raceData
                      .filter((data) => data.active === "1")
                      .map((item, index) => {
                        console.log(item, "itemitemitem");
                        return (
                          <>
                            <tr key={index}>
                              <td
                                className="event-title"
                                onClick={() => {
                                  setBox(true);
                                  setImageData(item.flag);
                                }}
                              >
                                <strong className="racestrong">
                                  {item.RaceCourses}
                                  <span className="img-area">
                                    <div className="img-area-inner">
                                      <img
                                        src={`/images/locations/${item.flag}`}
                                      />
                                    </div>
                                  </span>
                                  {item?.planet_idx !== "8" ? (
                                    <span>
                                      {item.Country} ∙ {item.Location}{" "}
                                    </span>
                                  ) : (
                                    <span>
                                      {item.Location} ∙ {item.Country}{" "}
                                    </span>
                                  )}
                                </strong>
                              </td>
                              <Link href={`/results?RacecourseId=${item._id}`}>
                                <td className="regiontitle">{item.Region}</td>
                              </Link>
                              <Link href={`/results?RacecourseId=${item._id}`}>
                                <td>
                                  <span className="price-with-icon">
                                    {item.eventid.length === 0
                                      ? "-"
                                      : item.eventid.length}
                                  </span>
                                </td>
                              </Link>
                              <Link href={`/results?RacecourseId=${item._id}`}>
                                <td>
                                  {" "}
                                  {item.eventid.length === 0
                                    ? "-"
                                    : item.eventid[0]?.finish_time == ""
                                    ? "-"
                                    : formatDate(
                                        item.eventid[0]?.finish_time
                                      )}{" "}
                                </td>
                              </Link>
                              <Link href={`/results?RacecourseId=${item._id}`}>
                                <td>
                                  {item.eventid.length === 0
                                    ? "-"
                                    : newprizepool(item.eventid)}{" "}
                                </td>
                              </Link>
                            </tr>
                          </>
                        );
                      })}
                </tbody>
              </InfiniteScroll>
            </table>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .pointer{
          cursor: pointer
        }
          .regiontitle span {
            font-weight: 500;
            color: #646a71;
          }
          .event-title span {
            display: block;
            font-size: 12px;
            font-weight: 500;
          }
          .event-title {
            color: var(--colorWhite);
          }
          .w-350 {
            width: 375px;
            min-width: 320px;
          }
          .w-230 {
            width: 230px;
            min-width: 200px;
          }
          .w-200 {
            width: 200px;
            min-width: 190px;
          }
          .rankings-table {
            overflow-x: auto;
          }
          .rankings {
            margin: 50px 0;
          }
          .racestrong {
            font-weight: 600;
          }

          .rankings h2 {
            text-align: center;
            font-size: 36px;
            font-weight: 500;
            margin-bottom: 20px;
          }

          .rankings p {
            text-align: center;
            margin-bottom: 40px;
            font-size: 16px;
          }

          .rankings-head {
            display: grid;
            grid-template-columns: 1fr 1fr;
            max-width: 600px;
            margin: 20px auto;
            gap: 20px;
          }

          .rankings-item {
            position: relative;
          }

          .rankings-item span {
            border: 1px solid #4c505c;
            padding: 12px 20px;
            display: block;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            cursor: pointer;
          }

          .rankings-item ul {
            position: absolute;
            top: 60px;
            left: 0;
            background: var(--background);
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 16%);
            padding: 20px 0;
            width: 100%;
            color: var(--colorWhite);
            z-index: 99;
          }

          .rankings-item ul li {
            padding: 8px 20px;
            cursor: pointer;
          }

          .rankings-item ul li:hover {
            background: #f8f8f86e;
            cursor: pointer;
          }
          .rankins-item-drop:hover{
            background: #f8f8f86e !important;
            cursor: pointer;
          }
          .rankings-table table {
            width: 100%;
            text-align: left;
            border-collapse: collapse;
            min-width: max-content;
          }

          .rankings-table table th {
            padding: 0 20px;
            height: 30px;
            font-size: 13px;
            font-weight: 600;
          }
          span.img-area svg {  
          position: absolute;
            width: 20px;
            height: 20px;
            bottom: 0;
            right: 0;
          }
          .rankings-table td .single-item {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .rankings-table  th {
            text-align: left;
            padding: 0 20px;
            color: #656a71;
            font-weight: 600;
            font-size: 10px;
            border-bottom: 1px solid var(--borderColor);
            height: 30px;
          }
          .price-with-icon {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .img-area-inner {
            overflow: hidden;
            width: 277px;
            height: 154px;
            position: relative;
            padding-top: 2px;
          }
          .single-item .img-area {
            position: relative;
          }
          .rankings-table td {
            padding: 20px;
            border-bottom: 1px solid var(--borderColor);
            ffont-weight: 600;
            font-size: 14px;
          }
          
          .green {
            color: #34c77b;
          }
          .red {
            color: #e85655;
          }

          .rankings-table tbody tr:hover {
            // background: #ececec73;
            background:#60606026;
            cursor: pointer;
          }
          {/* .rankings-table tbody tr {
            {/* background: var(--studListBg); */}
            {/* margin-bottom: 10px; */}
          } */}

          @media screen and (max-width: 991px) {
            .rankings-head {
              grid-template-columns: 1fr 1fr;
            }
          }
        `}
      </style>
    </Layout>
  );
}
