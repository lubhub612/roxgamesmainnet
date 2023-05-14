import Image from "next/image";
import RaceResult from "./RaceResult";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import dynamic from "next/dynamic";
import EventUpcoming from "./EventUpcoming";
const InfiniteScroll = dynamic(() => import("react-infinite-scroller"), {
  ssr: false,
});
import moment from "moment";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function ResultTable({ setRaces, setWow, active }) {
  const router = useRouter();
  const { Location } = router.query;

  const [race, setRace] = useState(false);
  const { t } = useTranslation();
  const { invokeServer } = useContext(GlobalContext);
  // const [active, setActive] = useState(false);
  const [racetable, setRacetable] = useState([]);
  const [paginationTotal, setPaginationTotal] = useState();
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [classRaces, setClassRaces] = useState("");
  const [RacInfoData, setRaceInfoData] = useState({});

  const openRace = (item) => {
    document.documentElement.scrollTop = 0;
    setRaceInfoData(item);
    setRace(true);
  };

  useEffect(() => {
    eventData();
  }, [page, Location, active]);

  const eventData = () => {
    if (!Location) {
      invokeServer("get", `/api/event?page=${page}`).then((result) => {
        let dataObject = {};
        [...racetable, ...result.data.data].forEach((item) => {
          dataObject[item.idx] = item;
        });
        const userData = Object.values(dataObject).filter((data) => {
          if (
            data.horse_ids.split(",").length === 12 &&
            data.finish_time !== ""
          ) {
            return data;
          } else if (active) {
            return data?.rcourse_id.Country === "Earth";
          }
        });
        setRacetable(...[userData]);
        setPaginationTotal(result.data.total);
        setLoader(false);
      });
    }

    if (Location) {
      invokeServer("get", `/api/event/location/${Location}`).then((result) => {
        setRacetable(result.data);
      });
    }
  };

  useEffect(() => {
    let sum = 0;
    setRaces(racetable.length);
    racetable.forEach((x) => {
      sum = sum + parseInt(x.prizepool);
    });
    setWow(sum);
  }, [racetable]);

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
                    return (
                      <tr key={index} onClick={() => openRace(item)}>
                        <td className="event-title">
                          <strong>
                            <strong>
                              {item.rcourse_id.RaceCourses}
                              <span>
                                {" "}
                                {item.rcourse_id.Location} ∙{" "}
                                {item.rcourse_id.Country}{" "}
                              </span>
                            </strong>
                          </strong>
                        </td>
                        {/* <td>
                          {" "}
                          <strong>
                            <Image
                              src="/images/free.svg"
                              alt="Free"
                              width="53"
                              height="24"
                            />
                          </strong>
                        </td> */}
                        <td className="event-type">
                          <span className={giveClassNames(item?.class?.Class)}>
                            {" "}
                            {item.class.Class}
                          </span>
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
          </table>
        </InfiniteScroll>
      </div>

      <style jsx>
        {`
          .races-table {
            overflow-x: auto;
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
