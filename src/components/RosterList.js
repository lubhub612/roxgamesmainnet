import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import moment from "moment";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

export default function RosterList() {
  const { setAllHorse, allHorse, handleAllHorse, invokeServer } =
    useContext(GlobalContext);
  const [horseInfo, setHorseInfo] = useState(false);
  const [horseInfoData, setHorseInfoData] = useState();
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    handleAllHorse();
  }, []);

  console.log(allHorse, ":allHorse");
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
                        <CopyToClipboard text={`https://polygonscan.com/tx/${horseInfoData?.tx}`}>
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
            </div>
          </div>
        </div>
      )}
      <div className="roster-list">
        <div className="container">
          <div className="roster-list-inner">
            <h2>{t("Race Roster")}</h2>
            <div className="roster-list-search">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </span>
              <strong>
                {t("SORT BY:")}
                <select name="" id="">
                  <option value="Recently Listed">
                    {t("Recently Listed")}
                  </option>
                  <option value="Expiring Soon">{t("Expiring Soon")}</option>
                  <option value="Highest Price">{t("Highest Price")}</option>
                  <option value="Lowest Price">{t("Lowest Price")}</option>
                </select>
              </strong>
            </div>
            <div className="roster-list-items">
              {/* <ul>
                {allHorse &&
                  allHorse.map((item, index) => {
                    return (
                      <li key={index}>
                        <a>
                          <span className="roster-img">
                            <Image
                              src="/images/horse/1.png"
                              alt="horse"
                              width="54"
                              height="54"
                            />
                          </span>
                          <span
                            className="roster-title"
                            onClick={() => {
                              setHorseInfo(true), setHorseInfoData(item);
                            }}
                          >
                            {item.name}
                            <span className="roster-dots">
                              <strong>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-dot"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                              </strong>
                              <strong>{item.genotype}</strong>
                              <strong>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-dot"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                </svg>
                              </strong>
                              <strong>{item.color}</strong>
                            </span>
                          </span>
                          <span className="roster-sub">
                            {item?.stable_id?.title}
                          </span>
                          <Link href={`https://polygonscan.com/tx/${item?.tx}`}>
                            <span className="roster-link">
                              See Tx
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
                            </span>
                          </Link>
                          <span>
                            {moment(item?.born_date).format("HH:mm MMM DD")}{" "}
                          </span>
                        </a>
                      </li>
                    );
                  })}
              </ul> */}

              <div className="event-records-table">
                <table>
                  <thead>
                    <tr>
                      {/* <th>GATE</th> */}
                      <th></th>
                      <th>{t("RACEHORSE")}</th>
                      <th>{t("DETAILS")}</th>
                      <th>{t("COLOR")}</th>
                      <th>{t("STABLE")}</th>
                      {/* <th>SEE TX</th> */}
                      <th>{t("Birth Date")}</th>
                      {/* <th>DETAILS</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {allHorse &&
                      allHorse
                        .filter((data) => {
                          if (search === "") {
                            return data;
                          } else if (
                            data.name
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return data;
                          }
                        })
                        .map((item, index) => {
                          return (
                            <tr
                              key={index}
                              onClick={() => {
                                setHorseInfo(true), setHorseInfoData(item);
                              }}
                            >
                              <td>
                                <Image
                                  className="roster-img"
                                  src="/images/horse/1.png"
                                  alt="horse"
                                  width={63}
                                  height={63}
                                />
                              </td>
                              <td className="event-title ">
                                {item?.name}
                                {/* <span>1242</span> */}
                              </td>
                              <td>{item?.genotype}</td>
                              <td>{item.color}</td>
                              <td>{item?.stable_id?.title}</td>
                              {/* <td>
                                {" "}
                                <Link
                                  href={`https://polygonscan.com/tx/${item?.tx}`}
                                >
                                  <a target="_blenk">
                                    <span className="roster-link">
                                      See Tx
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
                                    </span>
                                  </a>
                                </Link>
                              </td> */}

                              <td className="event-title ">
                                {moment(item?.born_date).format("HH:mm MMM DD")}{" "}
                              </td>
                              {/* <td>
                                <Image
                                  className="roster-img"
                                  onClick={() => {
                                    setHorseInfo(true), setHorseInfoData(item);
                                  }}
                                  src="/images/icons8-info.svg"
                                  alt="horse"
                                  width={40}
                                  height={40}
                                />
                              </td> */}
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
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
          .roster-list {
            padding: 30px 0;
          }
          .event-records-table {
            overflow-x: auto;
          }
          .event-title {
            color: var(--colorWhite) !important;
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
          .event-records-table tbody tr:hover {
            background: var(--racesTableHover);
            cursor: pointer;
          }

          .roster-list-inner h2 {
            color: #585c63;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .roster-list-search {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .roster-list-search input,
          .roster-list-search select {
            background: transparent;
            border: 1px solid #676b72;
            padding: 12px 20px;
            min-width: 250px;
            border-radius: 5px;
            color: var(--colorWhite);
            font-size: 14px;
          }

          .roster-list-search strong {
            display: flex;
            align-items: center;
            gap: 20px;
            color: #61666c;
            font-weight: 600;
          }

          .roster-list-search span {
            position: relative;
          }

          .roster-list-search span svg {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 15px;
          }

          .roster-list-search span input {
            padding-left: 40px;
          }
          .roster-list ul li {
            margin-bottom: 15px;
          }
          .roster-list ul li a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--studListBg);
            padding: 20px 30px;
            border-radius: 8px;
            position: relative;
            color: var(--colorWhite);
            font-weight: 500;
          }
          .roster-list ul li a:hover {
            background: var(--rosterBgHover);
          }
          .roster-img {
            position: absolute;
            left: 0;
            bottom: 0;
          }
          .roster-title {
            padding-left: 50px;
          }
          .roster-title strong {
            font-weight: 500;
            color: #6a6f76;
            margin: 0 3px;
          }
          .roster-dots {
            margin-left: 10px;
          }
          .roster-dots strong svg {
            vertical-align: middle;
          }
          .roster-sub {
            color: #6a6f76;
          }
          .roster-dots strong svg {
            vertical-align: middle;
          }

          .roster-link {
            display: flex;
            gap: 10px;
            color: #a9afb6;
          }

          .roster-link svg {
            width: 18px;
            height: 18px;
          }
          .roster-list-items {
            margin-top: 30px;
            margin-bottom: 40px;
          }

          @media screen and (max-width: 991px) {
            .roster-list-search input,
            .roster-list-search select {
              background: transparent;
              border: 1px solid#676b72;
              padding: 12px 20px;
              min-width: auto;
              -webkit-border-radius: 5px;
              -moz-border-radius: 5px;
              border-radius: 5px;
              color: #fff;
              font-size: 14px;
            }
            .roster-list-items {
              overflow: auto;
            }
            .roster-list ul li a {
              gap: 30px;
              min-width: max-content;
            }
            .roster-list-search {
              display: block;
            }
            .roster-list-search input {
              width: 100%;
              margin-bottom: 20px;
            }

            .roster-list-search strong select {
              color: var(--colorWhite);
            }
            .roster-list-search strong {
              display: grid;
            }
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
        `}
      </style>
    </>
  );
}
