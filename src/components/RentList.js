import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import moment from "moment";
import { useRouter } from "next/router";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import RentTerms from "../pages/RentTerms";
import RentBorrow from "../pages/RentBorrow";

export default function RentList() {
  const {
    handleAllHorse,
    gateHorseIdData,
    handleOwner,
    data,
    allHorse,
    setAllHorse,
    ownerId,
  } = useContext(GlobalContext);
  const router = useRouter();
  const [horseData, setHorseData] = useState();
  const [horseInfo, setHorseInfo] = useState(false);
  const [horseInfoData, setHorseInfoData] = useState();
  const [sortdata, setSort] = useState("Recently Listed");
  const [search, setSearch] = useState("");
  const [rent, setRent] = useState(false);
  const [copy, setCopy] = useState(false);

  const { t } = useTranslation();
  useEffect(() => {
    handleAllHorse();
  }, []);

  useEffect(() => {
    let oldAddr = window.localStorage.getItem("userID");
    const hdata = allHorse.filter((data) => data.for_rent == 1);
    setHorseData(hdata);
  }, [allHorse]);

  const handleRentNow = () => {
    setRent(true);
  };

  return (
    <>
      <div className="roster-list">
        <div className="container">
          <div className="roster-list-inner">
            {/* <div className="roster-heading"> */}

            <h2>{t("Rent a NFT Horse")}</h2>
            <p>
              {t(
                "You can rent a horse by the day from individual owners. Renting creates a secondary economy in the ROX NFT ecosystem, where ROX NFT horses are often just left lying idle in the user’s wallet. It provides the renter with a source of income."
              )}
            </p>
            {/* </div> */}
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
                <select name="" id="" onChange={(e) => setSort(e.target.value)}>
                  <option value="Recently Listed">
                    {t("Recently Listed")}
                  </option>
                  <option value="Highest Price">{t("Highest Price")}</option>
                  <option value="Lowest Price">{t("Lowest Price")}</option>
                </select>
              </strong>
            </div>

            {horseInfo && (
              <>
                <div className="horse-info-box-main roster-hours-main ">
                  <div
                    className="event-records-bg"
                    onClick={() => {
                      setHorseInfo(false);
                      setCopy(false);
                    }}
                  ></div>
                  <div className="container">
                    <div className="roster-details">
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
                                  <span>
                                    {horseInfoData?.tx.slice(0, 15) + "...."}
                                  </span>
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
                                {horseInfoData?.genotype}{" "}
                                <span>{t("Exclusive")}</span>
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
                            <li>
                              <strong>{t("DAILY RENTAL PRICE")} </strong>
                              <span>
                                ${horseInfoData?.daily_rent_fee}{" "}
                                <span>{t("USD")}</span>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="roster-bottom">
                        <div className="roster-bottom-left">
                          <ul>
                            <li>
                              <strong>{t("lENDER STABLE")}</strong>{" "}
                              <span>
                                {/* 🇺🇦 {horseInfoData?.stable_id?.title} 🇺🇦 */}
                                {horseInfoData?.stable_id?.title}
                              </span>
                            </li>
                            <li>
                              <strong>{t("Max Rental Duration")}</strong>{" "}
                              <span>
                                {horseInfoData?.max_days_for_rent} {t("Days")}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="roster-bottom-right">
                          {/* <span>STUD FEE</span>
                        <button>
                          ${horseInfoData?.stud_fee} <span>USD</span>
                        </button> */}
                          <button className="btn" onClick={handleRentNow}>
                            <Link href="#">
                              <a>{t("Rent Now")}</a>
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {rent && (
                  <RentBorrow horseData={horseInfoData} rent={setRent} />
                )}
              </>
            )}

            <div className="roster-add-horse">
              <div className="roster-add-img">
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={80}
                  height={80}
                />
                <strong>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-plus-lg"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                    />
                  </svg>
                  {t(
                    "Rent Out Your horse Frictionless rentals without full custody for the renter. Simple and secure, as it should be!"
                  )}
                </strong>
              </div>
              <button onClick={(e) => router.push("/stable")}>
                {t("Select Your Racehorse")}
              </button>
            </div>
            <div className="races-table">
              <table>
                <thead>
                  <tr>
                    <th>{t("STALLION")}</th>
                    <th>{t("STABLE")}</th>
                    <th>{t("TIME LEFT")}</th>
                    <th className="races-table-last">{t("STUD FEE")}</th>
                  </tr>
                </thead>
                <tbody>
                  {horseData &&
                    horseData
                      ?.sort((a, b) => {
                        if (sortdata === "Recently Listed") {
                          return new Date(b.born_date) - new Date(a.born_date);
                          return;
                        } else if (sortdata === "Highest Price") {
                          return b.stud_fee - a.stud_fee;
                        } else if (sortdata === "Lowest Price") {
                          return a.stud_fee - b.stud_fee;
                        }
                      })
                      .filter((data) => {
                        if (search === "") {
                          return data;
                        } else if (
                          data.name.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return data;
                        }
                      })
                      .map((item, index) => {
                        return (
                          <>
                            <tr
                              key={index}
                              onClick={() => {
                                setHorseInfo(true);
                                setHorseInfoData(item);
                              }}
                            >
                              <td className="event-title">
                                <strong>
                                  <Image
                                    src="/images/horse/1.png"
                                    alt="horse"
                                    width={63}
                                    height={63}
                                  />
                                </strong>
                                {item?.name}
                                {/* <span>US ∙ Charlotte </span> */}
                              </td>
                              <td className="distance">
                                {item?.stable_id?.title}
                              </td>
                              <td>
                                {moment(item.next_breeding_date).format(
                                  "DD, MM:ss"
                                )}
                              </td>
                              <td className="price">
                                <strong>${item.stud_fee}</strong>{" "}
                                <span>{t("USD")}</span>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <RentTerms/> */}
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
          .close-icon {
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
          }

          .close-icon svg {
            width: 20px;
            height: 20px;
            color: var(--colorWhite);
          }
          .roster-list {
            padding: 30px 0;
          }
          .event-title strong {
            position: absolute;
            left: 0;
            bottom: -6px;
          }
          .event-title {
            padding-left: 100px !important;
          }
          .races-table th.races-table-last {
            text-align: right;
          }
          .event-title strong {
            position: absolute;
            left: 0;
            bottom: -6px;
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
          .run-live {
            color: #f0b90c;
            text-align: right;
          }
          .price span {
            font-weight: 500;
            color: #646a71;
            text-transform: uppercase;
          }
          .roster-list-search {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .roster-heading {
            margin-left: 20px;
          }
          .roster-list-inner p {
            max-width: 600px;
            font-size: 16px;
            margin-top: 20px;
            margin-bottom: 30px;
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
            background: var(--race);
            padding: 20px 30px;
            border-radius: 8px;
            position: relative;
            color: var(--colorWhite);
            font-weight: 500;
          }
          .roster-list ul li a:hover {
            background: #3b3f47;
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
          .races-table tbody td {
            padding: 20px;
            font-weight: 600;
            position: relative;
          }

          .event-title span {
            display: block;
            color: #646a71;
            font-size: 12px;
            font-weight: 500;
          }
          .races-table tbody tr {
            border-bottom: 1px solid var(--borderColor);
            margin-bottom: 10px;
          }
          .races-table tbody tr:hover {
            background: #ececec73;
            cursor: pointer;
          }
          .event-title {
            color: var(--colorWhite);
          }
          .roster-content {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 20px;
          }

          .roster-list-inner h2 {
            color: #5b6068;
            font-size: 26px;
            font-weight: 600;
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
          .roster-add-horse {
            background: var(--studListBg);
            margin: 20px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .roster-add-img {
            display: flex;
            align-items: center;
            gap: 30px;
          }

          .roster-add-img img {
            mix-blend-mode: color-burn;
          }

          .roster-add-horse button {
            border-radius: 8px;
            border: none;
            color: #fff;
            cursor: pointer;
            background: var(--profileInputBorder);
            padding: 14px 40px;
            margin-right: 20px;
          }

          .roster-add-horse button:hover {
            opacity: 0.8;
          }
          .roster-add-img strong {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--colorWhite);
          }
          @media screen and (max-width: 991px) {
            .roster-add-horse {
              display: block;
            }

            .roster-add-horse button {
              margin: 20px;
              width: -webkit-fill-available;
            }
            .roster-list-search input,
            .roster-list-search select {
              background: transparent;
              border: 1px solid#676b72;
              padding: 12px 20px;
              min-width: auto;
              border-radius: 5px;
              color: #fff;
              font-size: 14px;
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
            .roster-content {
              grid-template-columns: 1fr;
            }

            .roster-info-title {
              padding: 0;
              display: block;
              margin-bottom: 30px;
            }

            .roster-info ul {
              grid-template-columns: repeat(2, 1fr);
            }

            .roster-bottom {
              display: grid;
              gap: 30px;
            }

            .roster-bottom-right {
              display: block;
            }

            .roster-bottom-right button {
              display: block;
              width: 100%;
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
}
