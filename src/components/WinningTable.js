import moment from "moment";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import InfiniteScroll from "react-infinite-scroller";
import GlobalContext from "../contexts/GlobalContext";
import EventUpcoming from "./EventUpcoming";
import RaceResult from "./RaceResult";

export default function WinningTable({
  setRaces,
  setWow,
  data,
  active,
  setActive,
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const { Location } = router.query;
  const [racetable, setRacetable] = useState([]);
  const [paginationTotal, setPaginationTotal] = useState();
  const [loader, setLoader] = useState(true);
  const { invokeServer } = useContext(GlobalContext);
  const [page, setPage] = useState(1);
  const [classRaces, setClassRaces] = useState("");
  const [RacInfoData, setRaceInfoData] = useState({});
  const [race, setRace] = useState(false);

  // const [racetable, setRacetable] = useState([]);

  // const winningData = props.data;
  // useEffect(() => {
  //   eventData();
  // }, [page,Location]);

  const openRace = (item) => {
    document.documentElement.scrollTop = 0;
    setRaceInfoData(item);
    setRace(true);
  };

  // const eventData = () => {
  //   if (!Location) {
  //     invokeServer("get", `/api/event?page=${page}`).then((result) => {
  //       let dataObject = {};
  //       [...racetable, ...result.data.data].forEach((item) => {
  //         dataObject[item.idx] = item;
  //       });
  //       const userData = Object.values(dataObject).filter((data) => {
  //         if (
  //           data.horse_ids.split(",").length === 12 &&
  //           data.finish_time !== ""

  //         ) {
  //           return data;
  //         }
  //       });
  //       setRacetable(...[userData]);
  //       setPaginationTotal(result.data.total);
  //       setLoader(false);
  //     });
  //   }

  //   if (Location) {
  //     invokeServer("get", `/api/event/location/${Location}`).then((result) => {
  //       setRacetable(result.data);
  //     });
  //   }
  // };

  useEffect(() => {
    let sum = 0;
    setRaces(data?.length);
    data?.forEach((x) => {
      sum = sum + parseInt(x.prizepool);
    });
    setWow(sum);
  }, [data]);

  const loadMore = () => {
    if (page + 1 <= paginationTotal && !loader) {
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

  const hideResultModel = () => {
    setRace(false);
  };

  return (
    <>
      {race && <RaceResult hide={hideResultModel} RacInfoData={RacInfoData} />}
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
                <th>{t("DATE")}</th>
                <th>{t("PRIZE POOL")}</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data
                  .filter((item) => {
                    if (!active) {
                      return item;
                    } else if (active) {
                      return item?.rcourse_id.Country === "Earth";
                    }
                  })
                  .map((item, index) => {
                    return (
                      <tr key={index} onClick={() => openRace(item)}>
                        <td className="event-title">
                          <strong>
                            <strong>
                              {item.rcourse_id.RaceCourses}
                              <span
                                className={giveClassNames(item?.class?.Class)}
                              >
                                {" "}
                                {item.rcourse_id.Location} ∙{" "}
                                {item.rcourse_id.Country}{" "}
                              </span>
                            </strong>
                          </strong>
                        </td>
                        <td className="event-type">
                          <span> {item.class.Class}</span>
                        </td>
                        <td className="distance">{item.distance.Distance}m</td>
                        <td className="date">
                          {moment(item.finish_time).format(
                            "DD MMM YYYY, HH:ss"
                          )}
                        </td>
                        <td className="price">
                          <strong>${item.prizepool.replace(".", ",")}</strong>{" "}
                          <span>USD</span>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
            {/* <tbody></tbody> */}
          </table>
        </InfiniteScroll>
      </div>

      <style jsx>
        {`
          .races-table {
            margin-top: 30px;
            overflow-x: auto;
          }
          .races-table table {
            width: 100%;
            color: var(--colorWhite);
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
          .event-type span {
            background: #375b55;
            font-size: 14px;
            padding: 4px 12px;
            border-radius: 5px;
          }
          .event-type {
            color: #fff;
          }
          .date {
            color: #646a71;
          }
          .distance {
            color: #646a71;
          }
          .price {
            text-align: right;
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
          .event-title > strong {
            display: flex;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}
