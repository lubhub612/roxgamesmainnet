import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import GlobalContext from "../../contexts/GlobalContext";
export default function SelectMate() {
  const route = useRouter();
  const {
    invokeServer,
    handleOwner,
    gateHorseIdData,
    setGateHorseIdData,
    data,
  } = useContext(GlobalContext);
  const { id } = route.query;
  const [search, setSearch] = useState(false);

  const [searchName, setSearchName] = useState("");
  const {t}=useTranslation()
  const [femaleHorseInfoData, setFemaleHorseInfoData] = useState();
  const [maleHorseData, setMaleHorseData] = useState();

  useEffect(() => {
    invokeServer("get", `/api/horse?id=${id}`).then((result) => {
      if (result?.data[0]?.is_in_studfarm === "0") {
        route.push("/stud");
      }
      setMaleHorseData(result.data[0]);
    });
  }, [id]);

  useEffect(() => {
    handleOwner();
    // const data = gateHorseIdData.filter(
    //   (data) => data.gender === "filly" || data.gender === "mare"
    // );
    // console.log("🚀 ~ file: index.js ~ line 39 ~ useEffect ~ data", data);
    // console.log(
    //   "🚀 ~ file: index.js ~ line 37 ~ useEffect ~ gateHorseIdData",
    //   gateHorseIdData
    // );
    // setGateHorseIdData(data);
  }, [data]);

  const handleStud = async () => {
    const data = {
      horse_owner: femaleHorseInfoData?.stable_id.address,
      Stud_owner: maleHorseData?.stable_id.address,
      male_horse: maleHorseData?._id,
      female_horse: femaleHorseInfoData?._id,
      Stud_fee: maleHorseData?.stud_fee,
      Txt_hash: "",
      Transaction_id: "",
    };
    await invokeServer("post", "/api/breend/createbreending", data).then(
      (result) => {
        console.log(result);
      }
    );
    await invokeServer("get", "/api/breend/breending").then((result) => {
      console.log("Gate data ", result);
    });
  };
  return (
    <Layout>
      {search && (
        <div className="mate-search container">
          <div className="mate-search-inner">
            <span onClick={() => setSearch(false)}>
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
            <h2>{t("Select Female")}</h2>
            <div className="mate-search-input">
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
                placeholder="Search a racehorse"
                onChange={(e) => setSearchName(e.target.value)}
              />
            </div>
            <p>
              {t("To breed with a colt or stallion, you must own a filly or mare.")}
            </p>

            <div className="event-records-table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>{t("RACEHORSE")}</th>
                    <th>{t("DETAILS")}</th>
                    <th>{t("CAREER")}</th>
                    <th>{t("STABLE")}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {gateHorseIdData &&
                    gateHorseIdData
                      .filter((data) => {
                        return (
                          data.gender === "filly" || data.gender === "mare"
                        );
                        {
                          /* if (searchName === "") {
                          return data;
                        } else if (
                          data.name
                            .toLowerCase()
                            .includes(searchName.toLowerCase())
                        ) {
                          return data;
                        } */
                        }
                      })
                      .map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Image
                                src="/images/horse/2.png"
                                alt="horse"
                                width={63}
                                height={63}
                              />
                            </td>
                            <td>{item?.name}</td>
                            <td>{item?.genotype}</td>
                            <td>
                              {item.won_career_first}/{item.won_career_second}/
                              {item.won_career_third}
                            </td>
                            <td>{item?.stable_id?.title}</td>
                            <td>
                              <div className="select_race_main">
                                <button
                                  className="races-table-last-btn"
                                  onClick={() => {
                                    setSearch(false);
                                    setFemaleHorseInfoData(item);
                                  }}
                                >
                                  {t("BREED HORSE")}
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      <div className="select-mate">
        <div className="container">
          <div className="select-mate-back">
            <Link href="/stud">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
                {t("Back")}
              </a>
            </Link>
          </div>
          <h2>{t("Breeding")} </h2>
          <div className="select-mate-area">
            <div className="select-mate-head">
              <div className="select-mate-head-button">
                <span>{t("FEMALE")}</span>
                {/* <button onClick={() => setSearch(true)}>
                  <div className="select-mate-head-button-info">
                    <span>
                      Yarr2D2 <strong>{maleHorseData?.horse_id}</strong>
                    </span>
                    Select Female{" "}
                  </div>
                </button> */}
                <button onClick={() => setSearch(true)}>
                  {femaleHorseInfoData && (
                    <div className="select-mate-head-button-info select-mate-btn">
                      <span>
                        {t("Yarr2D2")} <strong>{femaleHorseInfoData?.horse_id}</strong>
                      </span>
                    </div>
                  )}
                  {t("Select Female")}
                </button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="m0 0h24v24h-24z" />
                  <path
                    d="m13.5 19c-6.27-5.6358696-9.5-8.5-9.5-11.91847826 0-2.86413044 2.28-5.08152174 5.225-5.08152174 1.615 0 3.23.73913043 4.275 1.94021739 1.045-1.20108696 2.66-1.94021739 4.275-1.94021739 2.945 0 5.225 2.2173913 5.225 5.08152174 0 3.51086956-3.23 6.37499996-9.5 11.91847826zm-1.5.78125c-6.31304348-5.53125-10.04347826-8.8125-10.04347826-13.21875 0-.1875 0-.375 0-.5625-.57391304.84375-.95652174 1.875-.95652174 3 0 3.5625 3.25217391 6.46875 9.5652174 12z"
                    fill="#676D74"
                    fillRule="nonzero"
                  />
                </g>
              </svg>
              <div className="select-mate-head-button">
                <span>{t("STUD")}</span>
                <div className="select-mate-head-button-info">
                  <span>
                    {t("Yarr2D2")} <strong>{maleHorseData?.horse_id}</strong>
                  </span>
                  <p>{t("Yarr2D2 is a Colt and he is ready to mate.")}</p>
                </div>
              </div>
            </div>
            <div className="select-mate-horse">
              <div className="select-mate-horse-one">
                <Image
                  src="/images/horse/3.png"
                  alt="horse"
                  width={550}
                  height={550}
                />
              </div>
              <div className="select-mate-horse-two">
                <Image
                  src="/images/horse/2.png"
                  alt="horse"
                  width={550}
                  height={550}
                />
              </div>
              {/* FEMALE */}
              {femaleHorseInfoData && (
                <div className="select-mate-horse-info-female">
                  <ul>
                    <li>
                      <Image
                        src="/images/racehorse/horse.svg"
                        alt="horse"
                        width={22}
                        height={22}
                      />
                      <strong>{femaleHorseInfoData?.bloodline}</strong>
                    </li>
                    <li>
                      <Image
                        src="/images/racehorse/gen.svg"
                        alt="gen"
                        width={22}
                        height={22}
                      />
                      <strong>{femaleHorseInfoData?.genotype}</strong>
                    </li>
                    <li>
                      <Image
                        src="/images/racehorse/gender.svg"
                        alt="gender"
                        width={22}
                        height={22}
                      />
                      <strong>{femaleHorseInfoData?.gender}</strong>
                    </li>
                    <li>
                      <span className="horse-color"></span>
                      <strong>{femaleHorseInfoData?.color}</strong>
                    </li>
                  </ul>
                </div>
              )}
              {/* stud */}
              <div className="select-mate-horse-info">
                <ul>
                  <li>
                    <Image
                      src="/images/racehorse/horse.svg"
                      alt="horse"
                      width={22}
                      height={22}
                    />
                    <strong>{maleHorseData?.bloodline}</strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/gen.svg"
                      alt="gen"
                      width={22}
                      height={22}
                    />
                    <strong>{maleHorseData?.genotype}</strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/gender.svg"
                      alt="gender"
                      width={22}
                      height={22}
                    />
                    <strong>{maleHorseData?.gender}</strong>
                  </li>
                  <li>
                    <span className="horse-color"></span>
                    <strong>{maleHorseData?.color}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="select-mate-content">
              {/* FEMALE */}
              <div className="select-mate-content-item">
                {femaleHorseInfoData && (
                  <div>
                    <h3>{t("PERFORMANCE")}</h3>
                    <ul>
                      <li>
                        <Image
                          src="/images/racehorse/star.svg"
                          alt="star"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {femaleHorseInfoData?.number_of_races}{" "}
                          {femaleHorseInfoData?.won_career_first}/
                          {femaleHorseInfoData?.won_career_second}/
                          {femaleHorseInfoData?.won_career_third} W{" "}
                          {femaleHorseInfoData?.win_rate}%
                        </strong>
                      </li>
                      <li>
                        <Image
                          src="/images/racehorse/offspring.svg"
                          alt="star"
                          width={22}
                          height={22}
                        />
                        <strong>
                          {femaleHorseInfoData?.breeding_counter} {t("of 3 left")}
                        </strong>
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
                          <span>
                            <h4>{t("3 breeds left")}</h4>
                            {t("This Stallion can breed 3 times during the current breeding cycle. Next breeding cycle will commence in 26 Day(s).")}
                            <Link href="#">
                              <a>{t("Learn more")}</a>
                            </Link>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* STUD */}
              <div className="select-mate-content-item">
                <h3>{t("PERFORMANCE")}</h3>
                <ul>
                  <li>
                    <Image
                      src="/images/racehorse/star.svg"
                      alt="star"
                      width={22}
                      height={22}
                    />
                    <strong>
                      {maleHorseData?.number_of_races}{" "}
                      {maleHorseData?.won_career_first}/
                      {maleHorseData?.won_career_second}/
                      {maleHorseData?.won_career_third} W{" "}
                      {maleHorseData?.win_rate}%
                    </strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/offspring.svg"
                      alt="star"
                      width={22}
                      height={22}
                    />
                    <strong>{maleHorseData?.breeding_counter} {t("of 3 left")}</strong>
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
                      <span>
                        <h4>{t("3 breeds left")}</h4>
                        {t("This Stallion can breed 3 times during the current breeding cycle. Next breeding cycle will commence in 26 Day(s).")}
                        <Link href="#">
                          <a>{t("Learn more")}</a>
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="select-mate-button">
              <button onClick={handleStud}>
                {t("To proceed please select Female Horse")}
              </button>
            </div>
          </div>
          <div className="select-mate-mobile">
            <div className="select-meta-mobile-item">
              <h3>{t("FEMALE")}</h3>
              <div
                className="mobile-item-image-group"
                onClick={() => setSearch(true)}
              >
                <p>{t("Select Female")}</p>
                <Image
                  src="/images/horse/4.png"
                  alt="horse"
                  width={139}
                  height={139}
                />
              </div>
              <div className="mobile-item-horse-info">
                <ul>
                  <li>
                    <Image
                      src="/images/racehorse/horse.svg"
                      alt="horse"
                      width={22}
                      height={22}
                    />
                    <strong></strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/gen.svg"
                      alt="gen"
                      width={22}
                      height={22}
                    />
                    <strong></strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/gender.svg"
                      alt="gender"
                      width={22}
                      height={22}
                    />
                    <strong></strong>
                  </li>
                  <li>
                    <span className="horse-color"></span>
                    <strong></strong>
                  </li>
                </ul>
              </div>
              <div className="mobile-item-performance">
                <h3>{t("PERFORMANCE")}</h3>
                <ul>
                  <li>
                    <Image
                      src="/images/racehorse/star.svg"
                      alt="star"
                      width={22}
                      height={22}
                    />
                    <strong></strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/offspring.svg"
                      alt="star"
                      width={22}
                      height={22}
                    />
                    <strong></strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="select-meta-mobile-item select-meta-mobile-item-selected">
              <h3>{t("STUD")}</h3>
              <div className="mobile-item-image-group">
                <p>
                  {t("Yarr2D2")} <strong>1483</strong>
                </p>
                <div className="select-meta-mobile-item-selected-img">
                  <Image
                    src="/images/horse/1.png"
                    alt="horse"
                    width={139}
                    height={139}
                  />
                </div>
              </div>
              <div className="mobile-item-horse-info">
                <ul>
                  <li>
                    <Image
                      src="/images/racehorse/horse.svg"
                      alt="horse"
                      width={22}
                      height={22}
                    />
                    <strong>Finney</strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/gen.svg"
                      alt="gen"
                      width={22}
                      height={22}
                    />
                    <strong>Z24 Elite</strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/gender.svg"
                      alt="gender"
                      width={22}
                      height={22}
                    />
                    <strong>Colt</strong>
                  </li>
                  <li>
                    <span className="horse-color"></span>
                    <strong>Bleu De France</strong>
                  </li>
                </ul>
              </div>
              <div className="mobile-item-performance">
                <h3>{t("PERFORMANCE")}</h3>
                <ul>
                  <li>
                    <Image
                      src="/images/racehorse/star.svg"
                      alt="star"
                      width={22}
                      height={22}
                    />
                    <strong>96 4/9/13 W 4.17%</strong>
                  </li>
                  <li>
                    <Image
                      src="/images/racehorse/offspring.svg"
                      alt="star"
                      width={22}
                      height={22}
                    />
                    <strong>03 of 3 left</strong>
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
                      <span>
                        <h4>{t("3 breeds left")}</h4>
                        {t("This Stallion can breed 3 times during the current breeding cycle. Next breeding cycle will commence in 26 Day(s).")}
                        <Link href="#">
                          <a>{t("Learn more")}</a>
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="select-mobile-female">
            {t("To proceed please select Female Horse")}
            <button onClick={() => setSearch(true)}>{t("Select Female")}</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mate-search {
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
          }
          .event-records-table {
            margin: 20px;
            overflow-x: auto;
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
          .event-records-table tbody td {
            padding: 0px 20px;
            border-bottom: 1px solid var(--borderColor);
            font-weight: 600;
            color: #61666e;
          }
          .mate-search-inner {
            background: var(--studListBg);
            position: relative;
            padding: 30px 50px;
            width: 100%;
            border: 1px solid;
          }
          .mate-search-inner span {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
          }

          .mate-search-inner span svg {
            height: auto;
            width: 20px;
          }

          .mate-search-inner h2 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 18px;
          }

          .mate-search-input {
            position: relative;
          }

          .mate-search-input input {
            width: 50%;
            background: transparent;
            padding: 10px 32px;
            border: 1px solid;
          }
          @media (max-width: 768px) {
            width: 100% !important;
          }
          .mate-search-input svg {
            position: absolute;
            top: 11px;
            left: 10px;
          }

          .mate-search-input input:focus {
            outline: none;
          }

          .mate-search-inner p {
            font-size: 8px;
            margin-top: 40px;
            text-align: center;
          }
          .select-mate {
            padding: 80px 0;
            position: relative;
          }
          .select-mate h2 {
            text-align: center;
            font-size: 32px;
          }

          .select-mate-back a {
            display: flex;
            align-items: center;
            gap: 5px;
            color: var(--eventButtonColor);
            position: absolute;
            left: 20%;
            top: 88px;
          }

          .select-mate-back a svg {
            width: 30px;
            height: auto;
          }

          .select-mate-head {
            display: grid;
            grid-template-columns: 2fr 1fr 2fr;
            text-align: center;
            max-width: 930px;
            margin: auto;
            align-items: center;
            z-index: 9;
            position: relative;
          }

          .select-mate-head svg {
            margin: auto;
            margin-top: 55px;
          }

          .select-mate-head-button button {
            border: 3px solid #237b46;
            border-radius: 10px;
            height: 70px;
            display: block;
            width: 100%;
            background: transparent;
            color: #237b45;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
          }

          .select-mate-head-button span {
            font-weight: 500;
            color: var(--eventButtonColor);
            margin-bottom: 10px;
            display: block;
          }

          .select-mate-area {
            margin-top: 50px;
          }

          .select-mate-head-button-info {
            border: 3px solid var(--borderColor);
            border-radius: 10px;
            height: 70px;
            display: block;
            width: 100%;
          }

          .select-mate-head-button-info p {
            font-size: 10px;
            color: var(--eventButtonColor);
          }

          .select-mate-head-button-info span {
            margin-top: 8px;
            font-weight: 600;
          }

          .select-mate-head-button-info span strong {
            background: #237b45;
            font-size: 12px;
            padding: 2px 10px;
            border-radius: 5px;
            color: #fff;
          }
          .select-mate-horse {
            max-width: 930px;
            margin: auto;
            position: relative;
            height: 450px;
          }

          .select-mate-horse-one {
            transform: rotateY(160deg);
            position: absolute;
            top: -50px;
            left: 35px;
          }

          .select-mate-horse-two {
            position: absolute;
            transform: rotateY(160deg);
            left: 350px;
            top: -20px;
          }
          .select-mate-horse-info-female ul li {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 30px 0;
            color: var(--eventButtonColor);
          }

          .select-mate-horse-info-female {
            position: absolute;
            top: 10px;
          }

          .select-mate-horse-info-female ul li .horse-color {
            background: #4e4e4e;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }

          .select-mate-horse-info-female ul li strong {
            font-weight: 500;
          }

          .select-mate-horse-info-female ul li:nth-child(2) {
            margin-left: -20px;
          }

          .select-mate-horse-info-female ul li:nth-child(3) {
            margin-left: -40px;
          }

          .select-mate-horse-info-female ul li:nth-child(4) {
            margin-left: -60px;
          }
           {
            /* stud */
          }

          .select-mate-horse-info ul li {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 30px 0;
            color: var(--eventButtonColor);
          }

          .select-mate-horse-info {
            position: absolute;
            right: -70px;
            top: 10px;
          }

          .select-mate-horse-info ul li .horse-color {
            background: #4e4e4e;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }

          .select-mate-horse-info ul li strong {
            font-weight: 500;
          }

          .select-mate-horse-info ul li:nth-child(2) {
            margin-left: 20px;
          }

          .select-mate-horse-info ul li:nth-child(3) {
            margin-left: 40px;
          }

          .select-mate-horse-info ul li:nth-child(4) {
            margin-left: 60px;
          }
          .select-mate-content {
            max-width: 930px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 150px;
            margin-top: 100px;
          }

          .select-mate-content-item {
            background: var(--studListBg);
            width: 100%;
            padding: 20px 30px;
            border-radius: 10px;
            min-height: 147px;
          }

          .select-mate-content-item h3 {
            color: var(--eventButtonColor);
            font-weight: 500;
            font-size: 12px;
            display: block;
            margin-bottom: 15px;
          }

          .select-mate-content-item ul li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 15px;
          }
          .select-mate-content-item ul li strong {
            font-weight: 500;
          }

          .select-mate-button {
            text-align: center;
            max-width: 930px;
            margin: auto;
          }
          .select-mate-btn {
            height: auto;
            background: none;
            border: none;
          }
          .select-mate-button button {
            background: transparent;
            border: 3px solid#237b46;
            border-radius: 10px;
            width: 100%;
            padding: 24px;
            margin-top: 60px;
            color: var(--colorWhite);
            font-weight: 500;
            font-size: 14px;
            cursor: pointer;
          }
          .select-mate-mobile {
            display: none;
          }
          .select-mobile-female {
            display: none;
          }
          @media screen and (max-width: 991px) {
            .select-mate-back a {
              left: 20px;
              top: 20px;
            }
            .select-mate-area {
              display: none;
            }
            .select-mate-back a {
              left: 20px;
              top: 20px;
            }

            .select-mate-area {
              display: none;
            }

            .select-meta-mobile-item h3 {
              font-weight: 500;
              margin-bottom: 20px;
              color: var(--eventButtonColor);
              font-size: 12px;
            }

            .mobile-item-image-group {
              border: 2px solid #237b45;
              color: #237b45;
              border-radius: 10px;
              cursor: pointer;
            }

            .mobile-item-image-group p {
              padding: 15px 15px 0;
              font-weight: 500;
            }

            .select-mate-mobile {
              display: flex;
              gap: 30px;
              justify-content: space-between;
              max-width: 380px;
              margin: 40px auto 10px;
            }
            .select-mate h2 {
              text-align: center;
              font-size: 24px;
            }
            .mobile-item-horse-info ul li {
              display: flex;
              align-items: center;
              gap: 15px;
              color: var(--eventButtonColor);
              margin-top: 10px;
              font-size: 12px;
            }

            .mobile-item-horse-info {
              margin-top: 20px;
            }

            .mobile-item-horse-info ul li .horse-color {
              width: 20px;
              height: 20px;
              background: #ddd;
              border-radius: 50%;
            }

            .mobile-item-performance {
              margin-top: 40px;
            }

            .mobile-item-performance ul li {
              display: flex;
              align-items: center;
              gap: 10px;
              margin: 10px 0;
              color: var(--eventButtonColor);
              font-size: 12px;
            }
            .select-meta-mobile-item-selected .mobile-item-image-group {
              border: 2px solid var(--borderColor);
            }

            .select-meta-mobile-item-selected .mobile-item-image-group p {
              color: var(--colorWhite);
            }

            .select-meta-mobile-item-selected
              .mobile-item-image-group
              p
              strong {
              background: #237b45;
              padding: 4px 10px;
              font-size: 12px;
              border-radius: 5px;
            }

            .select-meta-mobile-item-selected-img {
              transform: rotateY(160deg);
            }
            .select-mobile-female {
              background: var(--studListBg);
              position: fixed;
              bottom: 0;
              z-index: 999;
              width: 100%;
              left: 0;
              padding: 20px;
              text-align: center;
              display: block;
            }

            .select-mobile-female button {
              display: block;
              margin: auto;
              background: #237b45;
              border: none;
              padding: 12px 50px;
              border-radius: 10px;
              margin-top: 15px;
              font-weight: 600;
              cursor: pointer;
              color: #fff;
            }
            .select-mobile-female button:hover {
              filter: brightness(1.2);
            }
            .mate-search-inner {
              height: 400px;
              margin: 30px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
