import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import GlobalContext from "../../contexts/GlobalContext";
import CopyToClipboard from "react-copy-to-clipboard";
// import ReactGA from "react-ga";
import { useRouter } from "next/router";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function Racehorse() {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation();
  const { invokeServer } = useContext(GlobalContext);
  const [horseData, setHorseData] = useState();
  const [event, setEvent] = useState();
  const [parentsData, setParentsData] = useState();
  const [horseInfoData, setHorseInfoData] = useState();
  const [copy, setCopy] = useState(false);

  const [horseInfo, setHorseInfo] = useState(false);
  const [averageWins, setAverageWins] = useState();

  useEffect(() => {
    if (id) {
      invokeServer("get", `/api/horse?id=${id}`).then((result) => {
        if (result?.data?.length == 0) router.push("/");
        setHorseData(result.data);
      });

      invokeServer("get", `/api/event/racehorse?id=${id}`).then((result) => {
        setEvent(result.data.data);
      });
    }
  }, [id]);

  useEffect(() => {
    if (horseData) {
      const parents = horseData[0]?.parents_id;
      if (parents) {
        invokeServer("get", `/api/horse?id=${parents}`).then((result) => {
          setParentsData(result.data);
        });
      }
    }
  }, [horseData]);

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  //   ReactGA.event({
  //     category: "test",
  //     action: "test action",
  //     label: "test label",
  //     value: 5,
  //   });
  // }, []);

  useEffect(() => {
    let sum = 0;
    parentsData?.map((item) => {
      sum = sum + parseInt(item.win_rate) / parentsData?.length;
      setAverageWins(sum);
    });
  }, [parentsData]);

  return (
    <Layout>
      <div className="racehorse">
        <div className="container">
          <div className="racehorse-share">
            <ul>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                >
                  <path
                    d="M15.1436 5.34866C14.7781 5.14095 14.3081 5.14095 13.8903 5.34866L10.9661 7.06231L8.98172 8.15282L6.10966 9.86647C5.74412 10.0742 5.27415 10.0742 4.8564 9.86647L2.61097 8.51632C2.24543 8.30861 1.98433 7.89318 1.98433 7.42582V4.82938C1.98433 4.41395 2.19321 3.99852 2.61097 3.73887L4.8564 2.44065C5.22193 2.23294 5.69191 2.23294 6.10966 2.44065L8.35509 3.7908C8.72063 3.99852 8.98172 4.41395 8.98172 4.88131V6.59496L10.9661 5.45252V3.68694C10.9661 3.27151 10.7572 2.85608 10.3394 2.59644L6.16188 0.155786C5.79634 -0.0519288 5.32637 -0.0519288 4.90862 0.155786L0.626632 2.64837C0.208877 2.85608 0 3.27151 0 3.68694V8.56825C0 8.98368 0.208877 9.39911 0.626632 9.65875L4.8564 12.0994C5.22193 12.3071 5.69191 12.3071 6.10966 12.0994L8.98172 10.4377L10.9661 9.29525L13.8381 7.63353C14.2037 7.42582 14.6736 7.42582 15.0914 7.63353L17.3368 8.93175C17.7023 9.13947 17.9634 9.5549 17.9634 10.0223V12.6187C17.9634 13.0341 17.7546 13.4496 17.3368 13.7092L15.1436 15.0074C14.7781 15.2151 14.3081 15.2151 13.8903 15.0074L11.6449 13.7092C11.2794 13.5015 11.0183 13.0861 11.0183 12.6187V10.957L9.03394 12.0994V13.8131C9.03394 14.2285 9.24282 14.6439 9.66057 14.9036L13.8903 17.3442C14.2559 17.5519 14.7258 17.5519 15.1436 17.3442L19.3734 14.9036C19.7389 14.6958 20 14.2804 20 13.8131V8.87982C20 8.46439 19.7911 8.04896 19.3734 7.78932L15.1436 5.34866Z"
                    fill="#F0F8FF"
                    fillOpacity="0.64"
                  />
                </svg>

                <Link
                  href={`https://polygonscan.com/tx/${
                    horseData && horseData[0]?.tx
                  }`}
                >
                  <a target="_blank">
                    {horseData &&
                      horseData[0]?.tx.slice(0, 10) +
                        "...." +
                        horseData[0]?.tx.slice(
                          horseData[0]?.tx.length - 4,
                          horseData[0]?.tx.length
                        )}
                  </a>
                </Link>
              </li>

              <li>
                <CopyToClipboard
                  text={`https://polygonscan.com/tx/${
                    horseData && horseData[0]?.tx
                  }`}
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
                {/* {t("Share")} */}  
              </li>
            </ul>
          </div>
          {horseData?.length > 0 &&
            horseData?.map((item, index) => {
              return (
                <div key={index} className="racehorse-area">
                  <div className="racehorse-left">
                    <h2>{item?.name}</h2>
                    <h3>
                      {t("Owner")}
                      <Link href="#">
                        <a> {t("Great-Racing-Group")}</a>
                      </Link>
                    </h3>
                    <ul>
                      <li>
                        <Image
                          src="/images/racehorse/bloodline.svg"
                          alt="bloodline"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("BLOODLINE")}
                          <span>{item?.bloodline}</span>
                        </strong>
                      </li>
                      <li>
                        <Image
                          src="/images/racehorse/gen.svg"
                          alt="gen"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("GEN")}
                          <span>{item?.genotype}</span>
                        </strong>
                      </li>
                      <li>
                        <Image
                          src="/images/racehorse/gender.svg"
                          alt="gender"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("GENDER")}
                          <span>{item?.gender}</span>
                        </strong>
                      </li>
                      <li>
                        <Image
                          src="/images/racehorse/coat.svg"
                          alt="coat"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("COAT")}
                          <span>{item?.color}</span>
                        </strong>
                      </li>
                      <li>
                        <Image
                          src="/images/racehorse/offspring.svg"
                          alt="offspring"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("OFFSPRING")}
                          <span>3 0 of 3 left</span>
                        </strong>
                      </li>
                      <li>
                        <Image
                          src="/images/racehorse/decay.svg"
                          alt="decay"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("BREEDING DECAY")}
                          <span>Tier 0 9 of 12 left</span>
                        </strong>
                      </li>
                      {/* 
                      <li>
                        <Image
                          src="/images/racehorse/gender.svg"
                          alt="gender"
                          width={22}
                          height={22}
                        />
                        <span>
                          GENDER
                          <strong>{item?.gender}</strong>
                        </span>
                      </li> */}

                      <li>
                        <Image
                          src="/images/racehorse/decay.svg"
                          alt="decay"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("Breed Type")}
                          <span>{item?.breed_type}</span>
                        </strong>
                      </li>

                      <li>
                        <Image
                          src="/images/racehorse/decay.svg"
                          alt="decay"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {t("Born Date")}
                          <span>{item?.born_date}</span>
                        </strong>
                      </li>
                    </ul>
                  </div>
                  <div className="racehorse-right">
                    <div className="racehorse-right-imgs">
                      <Image
                        src={`/images/horses/${item?.hexcode}.png`}
                        alt="horse"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="racehorse-right-view">
                      <Image
                        src="/images/racehorse/view360.svg"
                        alt="view360"
                        width={26}
                        height={24}
                      />
                    </div>
                  </div>
                </div>
              );
            })}

          {horseInfo && (
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
                            <CopyToClipboard
                              text={horseData && horseData[0]?.tx}
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
                          {/* {t("Share")} */}
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
                          <strong>{t("STUD FEE")}</strong>
                          <span>
                            ${horseInfoData?.stud_fee} <span>USD</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="performance">
            <div className="performance-title">
              <h2>{t("Career Performance")}</h2>
              <ul>
                <li>III</li>
                <li>1543</li>
              </ul>
            </div>
            <div className="performance-history">
              <ul>
                <li>
                  <Image
                    src="/images/racehorse/flag.svg"
                    alt="flag"
                    width={24}
                    height={24}
                  />
                  <strong>{t("RACES")}</strong>
                  <span>113</span>
                </li>
                <li>
                  <Image
                    src="/images/racehorse/star.svg"
                    alt="star"
                    width={24}
                    height={24}
                  />
                  <strong>{t("CAREER")}</strong>
                  <span>16/9/5</span>
                </li>
                <li>
                  <Image
                    src="/images/racehorse/cup.svg"
                    alt="cup"
                    width={24}
                    height={24}
                  />
                  <strong>{t("WIN RATE")}</strong>
                  <span>14.16%</span>
                </li>
                <li>
                  <Image
                    src="/images/racehorse/chart.svg"
                    alt="chart"
                    width={24}
                    height={24}
                  />
                  <strong>{t("PLACE RATE")}</strong>
                  <span>26%</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="racehorse-listing">
            <div className="racehorse-race-list">
              <h2>{t("Last 5 Races")}</h2>
              <div className="race-list-area">
                {event?.length > 0 &&
                  event?.map((item, index) => {
                    return (
                      <div key={index} className="race-list-item">
                        <div className="race-list-item-title">
                          <span>1st</span>
                          <h3>
                            {item?.rcourse_id.Country} - {""}
                            {item?.rcourse_id.Location}
                            <strong>{item?.distance.Distance}m - 2m 10s</strong>
                          </h3>
                        </div>
                        <p>
                          <strong>${item?.prizepool}</strong> USD
                        </p>
                      </div>
                    );
                  })}
                {/* <div className="race-list-item">
                  <div className="race-list-item-title">
                    <span>1st</span>
                    <h3>
                      DE - Hamburg <strong>2200m - 2m 10s</strong>
                    </h3>
                  </div>
                  <p>
                    <strong>$0</strong> USD
                  </p>
                </div>
                <div className="race-list-item">
                  <div className="race-list-item-title">
                    <span>1st</span>
                    <h3>
                      DE - Hamburg <strong>2200m - 2m 10s</strong>
                    </h3>
                  </div>
                  <p>
                    <strong>$0</strong> USD
                  </p>
                </div>
                <div className="race-list-item">
                  <div className="race-list-item-title">
                    <span>1st</span>
                    <h3>
                      DE - Hamburg <strong>2200m - 2m 10s</strong>
                    </h3>
                  </div>
                  <p>
                    <strong>$0</strong> USD
                  </p>
                </div> */}
              </div>
            </div>
            <div className="racehorse-race-list">
              <h2>{t("Positions per distance")}</h2>
            </div>
          </div>
          <div className="racehorse-race-list">
            <h2>{t("Rating")}</h2>
          </div>

          <div className="lineage-overview">
            <h2>{t("Lineage Overview")}</h2>
            <div className="lineage-area">
              <div className="lineage-item">
                <div className="lineage-title">
                  <h3>{t("Parents")}</h3>
                  <h4>
                    {t("AVERAGE WINS")} <strong>{averageWins}%</strong>
                  </h4>
                </div>
                <div className="lineage-horse-area">
                  {parentsData?.length > 0 &&
                    parentsData
                      ?.filter(
                        (data) =>
                          data.gender == "colt" || data.gender == "Stallion"
                      )
                      .map((item, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="lineage-horse"
                              onClick={() => {
                                setHorseInfo(true);
                                setHorseInfoData(item);
                              }}
                            >
                              <a>
                                <Image
                                  src="/images/horse/1.png"
                                  alt="horse"
                                  width={84}
                                  height={84}
                                />

                                <div className="lineage-horse-content">
                                  <span>{t("SIRE")}</span>
                                  <h5>
                                    {item.name} <strong>1438</strong>
                                  </h5>
                                  <p>
                                    {item.genotype} ∙ {item.breed_type} ∙{" "}
                                    {item.won_career_first +
                                      "/" +
                                      item.won_career_second +
                                      "/" +
                                      item.won_career_third}
                                    ∙ {item.win_rate}%
                                  </p>
                                  {/* <span>∙ {HandleAverageWins(item)}</span> */}
                                </div>
                              </a>
                            </div>
                          </>
                        );
                      })}

                  {parentsData?.length > 0 &&
                    parentsData
                      ?.filter(
                        (data) =>
                          data.gender == "filly" || data.gender == "mare"
                      )
                      .map((item, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="lineage-horse"
                              onClick={() => {
                                setHorseInfo(true);
                                setHorseInfoData(item);
                              }}
                            >
                              <a>
                                <Image
                                  src="/images/horse/1.png"
                                  alt="horse"
                                  width={84}
                                  height={84}
                                />
                                <div className="lineage-horse-content">
                                  <span>{t("DAM")}</span>
                                  <h5>
                                    {item.name} <strong>1438</strong>
                                  </h5>
                                  <p>
                                    {item.genotype} ∙ {item.breed_type} ∙{" "}
                                    {item.won_career_first +
                                      "/" +
                                      item.won_career_second +
                                      "/" +
                                      item.won_career_third}
                                    ∙ {item.win_rate}%
                                  </p>
                                </div>
                              </a>
                            </div>
                          </>
                        );
                      })}
                </div>
              </div>
            </div>
            <div className="lineage-area">
              <div className="lineage-item">
                <div className="lineage-title">
                  <h3>{t("Offspring")}</h3>
                  <h4>
                    {t("AVERAGE WINS")} <strong>{averageWins}%</strong>
                  </h4>
                </div>

                <div className="lineage-horse-area">
                  {parentsData?.length > 0 &&
                    parentsData.map((item, index) => {
                      return (
                        <>
                          <div
                            key={index}
                            className="lineage-horse"
                            onClick={() => {
                              setHorseInfo(true);
                              setHorseInfoData(item);
                            }}
                          >
                            <a>
                              <Image
                                src="/images/horse/1.png"
                                alt="horse"
                                width={84}
                                height={84}
                              />
                              <div className="lineage-horse-content">
                                <h5>
                                  {item.name} <strong>1438</strong>
                                </h5>
                                <p>
                                  {item.genotype} ∙ {item.breed_type} ∙{" "}
                                  {item.won_career_first +
                                    "/" +
                                    item.won_career_second +
                                    "/" +
                                    item.won_career_third}
                                  ∙ {item.win_rate}%
                                </p>
                              </div>
                            </a>
                          </div>
                        </>
                      );
                    })}
                </div>
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
            cursor: pointer;
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
          .racehorse {
            margin-bottom: 50px;
          }
          .racehorse-share ul {
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: end;
            margin: 20px 0;
            color: var(--eventButtonColor);
          }
          .racehorse-share ul li {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .racehorse-share ul li svg {
            width: 20px;
            height: auto;
          }
          .racehorse-area {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
          }
          .racehorse-right-imgs {
            display: flex;
            justify-content: center;
          }
          .racehorse-right .racehorse-right-img {
            transform: rotateY(160deg);
          }

          .racehorse-left ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 150px;
          }

          .racehorse-left ul li {
            background: var(--studListBg);
            padding: 10px 15px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            font-weight: 600;
          }

          .racehorse-left ul li span {
            color: var(--eventButtonColor);
            font-size: 12px;
            font-weight: 400;
            display: block;
          }

          .racehorse-left ul li strong {
            color: var(--colorWhite);
            font-size: 14px;
          }

          .racehorse-left h2 {
            font-size: 34px;
          }

          .racehorse-left h3 {
            color: var(--eventButtonColor);
            font-weight: 500;
          }

          .racehorse-left h3 a {
            color: #237b45;
          }
          .racehorse-right {
            position: relative;
          }

          .racehorse-right-view {
            position: absolute;
            right: 100px;
            bottom: 40px;
            background: #000;
            width: 45px;
            height: 45px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            cursor: pointer;
          }
          .performance-title {
            display: flex;
            align-items: center;
            gap: 15px;
            border-bottom: 1px solid var(--borderColor);
            padding-bottom: 5px;
            margin-bottom: 20px;
          }

          .performance-title ul {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .performance-title ul li {
            background: #66523e;
            font-weight: 500;
            padding: 2px 10px;
            border-radius: 5px;
            color: #fff;
          }

          .performance-history ul {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-bottom: 20px;
          }

          .performance-history ul li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--eventButtonColor);
            font-weight: 600;
          }

          .performance-history ul li span {
            opacity: 0.5;
          }

          .performance-history ul li strong {
            color: var(--colorWhite);
          }
          .racehorse-race-list {
            background: var(--studListBg);
            padding: 20px;
            border-radius: 10px;
          }

          .racehorse-race-list h2 {
            font-size: 16px;
            color: var(--eventButtonColor);
            margin-bottom: 15px;
          }

          .race-list-item {
            border-top: 1px solid var(--boostBorder);
            padding: 10px 0px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .race-list-item-title {
            display: flex;
            align-items: center;
            gap: 30px;
          }

          .race-list-item-title h3 strong {
            display: block;
            color: var(--eventButtonColor);
            font-size: 12px;
            font-weight: 500;
          }

          .race-list-item-title h3 {
            font-size: 14px;
          }

          .race-list-item-title span {
            background: var(--hoverBg);
            padding: 3px 12px;
            font-style: italic;
            color: var(--eventButtonColor);
            font-weight: 600;
          }

          .race-list-item p {
            color: var(--eventButtonColor);
            font-size: 12px;
          }

          .race-list-item p strong {
            color: #237b45;
            font-size: 14px;
          }
          .racehorse-listing {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
          }

          .lineage-overview {
            margin-top: 20px;
          }

          .lineage-overview h2 {
            border-bottom: 1px solid var(--borderColor);
            margin-bottom: 20px;
            padding-bottom: 10px;
          }

          .lineage-area {
            background: var(--studListBg);
            padding: 20px;
            border-radius: 10px;
            display: grid;
            gap: 70px;
            margin-bottom: 25px;
            padding-bottom: 3%;
          }

          .lineage-title {
            color: var(--eventButtonColor);
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
          }

          .lineage-title h4 {
            font-size: 10px;
          }

          .lineage-title h4 strong {
            display: block;
            text-align: right;
            color: var(--colorWhite);
            font-size: 12px;
          }

          .lineage-horse a {
            background: var(--hoverBg);
            border-radius: 10px;
            display: flex;
            gap: 20px;
            align-items: center;
            position: relative;
            color: #fff;
            cursor: pointer;
          }
          .lineage-horse a:hover {
            background: var(--studListHover);
          }

          .lineage-horse-content span {
            position: absolute;
            left: 50%;
            bottom: -12px;
            border: 1px solid #237b45;
            padding: 4px 15px;
            display: block;
            font-size: 10px;
            background: var(--rosterBgHover);
            border-radius: 5px;
            color: var(--colorWhite);
          }

          .lineage-horse-content h5 {
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--colorWhite);
          }

          .lineage-horse-content h5 strong {
            background: #66513f;
            padding: 1px 10px;
            border-radius: 5px;
            font-size: 12px;
            color: #fff;
          }

          .lineage-horse-content p {
            color: var(--eventButtonColor);
            margin-top: 5px;
          }
          .lineage-horse-area {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          @media screen and (max-width: 991px) {
            .racehorse-area {
              grid-template-columns: 1fr;
              margin-top: 30px;
            }

            .racehorse-left ul {
              margin: 40px 0;
            }

            .racehorse-share ul {
              justify-content: flex-start;
            }

            .performance-history ul {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 10px;
            }

            .racehorse-listing {
              grid-template-columns: 1fr;
            }

            .lineage-horse-area {
              grid-template-columns: 1fr;
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
            right: 15px;
            top: 15px;
            cursor: pointer;
          }

          .close-icon svg {
            width: 20px;
            height: 20px;
            color: var(--colorWhite);
          }
          .roster-content {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 20px;
          }

          .roster-list-inner h2 {
            color: var(--colorWhite);
            font-size: 26px;
            font-weight: 600;
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
        `}
      </style>
    </Layout>
  );
}
