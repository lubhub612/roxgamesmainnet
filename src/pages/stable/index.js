import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useMemo, useState } from "react";
import Layout from "../../components/Layout";
import GlobalContext from "../../contexts/GlobalContext";
import Switch from "react-switch";
import CopyToClipboard from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import { FiAlertTriangle } from "react-icons/fi";
import { FiAlertCircle } from "react-icons/fi";
import { FiAlignCenter } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function Stable() {
  const router = useRouter();
  const { stable } = router.query;
  const { t } = useTranslation();
  const {
    handleOwner,
    gateHorseIdData,
    setGateHorseIdData,
    data,
    handleStable,
    stableName,
    setStableName,
    invokeServer,
  } = useContext(GlobalContext);
  const [title, setTitle] = useState();
  const [horseInfo, setHorseInfo] = useState(false);
  const [horseInfoData, setHorseInfoData] = useState();
  const [gender, setGender] = useState(false);
  const [copy, setCopy] = useState(false);
  const [account, setAccount] = useState("");

  const [sum, setSum] = useState({ first: "", second: "", third: "", win: "" });
  const [stud, setStud] = useState(false);
  const [studData, setStudData] = useState({
    horseID: "",
    stableID: "",
    racehorse: "",
    details: "",
    gender: "",
  });

  const walletSessionKey = "walletHyperXV1";
  useEffect(() => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get("stable");
    if (value) {
      setAccount(stableName);
      return;
    } else {
      router.push("/");
      return;
    }
  }, [router]);

  useEffect(() => {
    if (stable) {
      invokeServer("post", "/api/stable/sharestable", {
        title: stable?.toString().replaceAll("-", " "),
      }).then((result) => {
        if (result?.data?.stable) {
          setGateHorseIdData(result?.data?.Horse);
          setTitle(result?.data?.stable[0]);
        }
      });
    }
  }, [stable]);

  useEffect(() => {
    handleOwner();
    // handleStable();
  }, [data]);

  useEffect(() => {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let win = 0;
    gateHorseIdData.forEach((x) => {
      sum1 = sum1 + parseInt(x.won_career_first);
      sum2 = sum2 + parseInt(x.won_career_second);
      sum3 = sum3 + parseInt(x.won_career_third);
      win = win + parseInt(x.win_rate) / parseInt(gateHorseIdData.length);

      setSum({ ...sum, first: sum1, second: sum2, third: sum3, win: win });

      console.log("hello ", win);
    });
  }, [gateHorseIdData]);

  const handlestud = (event) => {
    setStudData({ ...studData, [event.target.name]: event.target.value });
  };

  const handleStudData = async () => {
    const studdata = {
      horseID: studData.horseID,
      stableID: studData.stableID,
      price: studData.price,
      duration: studData.duration,
    };
    await invokeServer("post", "/api/stud/create", studdata).then((result) => {
      console.log(result);
      setStud(false);
      setStudData(" ");
    });
  };

  return (
    account && (
      <Layout>
        {stud && (
          <div className="horse-info-box-main roster-hours-main">
            <div
              className="event-records-bg"
              onClick={() => {
                setStud(false);
                setStudData(" ");
              }}
            ></div>
            <div className="container">
              <div className="roster-details ">
                <div
                  className="close-icon"
                  onClick={() => {
                    setStud(false);
                    setStudData(" ");
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
                <div className="roster-text">
                  <h2>
                    {t("You are about to put your racehorse into the stud")}
                  </h2>
                </div>
                <div className="roster">
                  <div className="roster-img">
                    <Image
                      src="/images/horse/2.png"
                      alt="horse"
                      width={63}
                      height={63}
                    />
                  </div>
                  <div className="roster-info">
                    <h4>{studData.racehorse}</h4>
                    <h5>
                      {studData.details} . {studData.gender}
                    </h5>
                  </div>
                </div>
                <div className="roster-notification">
                  <p>
                    <span>
                      <FiAlertTriangle />
                    </span>
                    {t("This racehorse has 7 covers left")}
                  </p>
                </div>

                <div className="breeding-price">
                  <h4>
                    {t("BREEDING PRICE")} <FiAlertCircle />
                  </h4>
                  <span>
                    <input
                      type="number"
                      name="price"
                      placeholder="0.09"
                      onChange={(e) => handlestud(e)}
                    />
                  </span>
                </div>
                <div className="stud-duration">
                  <h4>
                    {t("STUD DURATION")} <FiAlertCircle />
                  </h4>
                  <select
                    onChange={(e) => handlestud(e)}
                    defaultValue="2 days"
                    name="duration"
                  >
                    <option value="2 days">{t("2 days")} </option>
                    <option value="10 days"> {t("10 days")} </option>
                    <option value="14 days">{t("14 days")} </option>
                    <option value="30 days">{t("30 days")} </option>
                  </select>
                </div>
                <div className="information">
                  <p>
                    {t(
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy."
                    )}
                  </p>
                </div>
                <div className="roster-button">
                  <div className="button-group">
                    <button className="roster-button-left">
                      {t("Cancle")}
                    </button>
                    <button
                      className="roster-button-right"
                      onClick={handleStudData}
                    >
                      {t("Next")}
                    </button>
                  </div>
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
                  <div className="roster-horse">
                    <img
                      src={horseInfoData?.img_url}
                      alt="horse"
                      width={1024}
                      height={1024}
                    />
                  </div>
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
                    </ul>
                  </div>
                </div>
                {/* <div className="roster-bottom">
                <div className="roster-bottom-left">
                  <ul>
                    <li>
                      <span>OWNER STABLE</span>{" "}
                    </li>
                  </ul>
                </div>
                <div className="roster-bottom-right">
                  <button className="btn" onClick={handelForRace}>
                    <a target="_blank">Select for race</a>
                  </button>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        )}
        <div className="stable">
          <div className="container">
            <div className="stable-profile">
              <div className="stable-profile-img">
                <Image
                  src="/images/user.svg"
                  alt="user"
                  width={56}
                  height={56}
                />
              </div>
              <h2>
                {title
                  ? title?.title?.toString().replaceAll(" ", "-")
                  : stableName?.title?.toString().replaceAll(" ", "-")}
                <CopyToClipboard
                  text={`https://rox1.netlify.app/stable?stable=${
                    title
                      ? title?.title
                      : stableName?.title?.toString().replaceAll(" ", "-")
                  }`}
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
                </CopyToClipboard>
              </h2>
            </div>
            <div className="stable-profile-info">
              <ul>
                <li>
                  <span>{t("THOROUGHBREDS")}</span>
                  {/* <strong> */}
                  {gateHorseIdData?.length}
                  {/* </strong> */}
                </li>
                <li>
                  <span>{t("TOTAL CAREER")}</span>
                  {/* <strong> */}
                  {sum.first}/ {sum.second}/ {sum.third}
                  {/* </strong> */}
                </li>
                <li>
                  <span>{t("WIN RATE")}</span>
                  {/* <strong> */}
                  {sum.win}%{/* </strong> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="stable-no-racehorses">
          <div className="container">
            {/* <h2>No racehorses found</h2> */}
            {gateHorseIdData?.length > 0 ? (
              <div className="event-records-table">
                <table>
                  <thead>
                    <tr>
                      {/* <th>GATE</th> */}
                      <th></th>
                      <th>{t("RACEHORSE")}</th>
                      <th>{t("GENDER")}</th>
                      <th>{t("DETAILS")}</th>
                      <th>{t("CAREER")}</th>
                      {/* <th>STABLE</th> */}
                      {!title && <th>{t("IN STUD FARM")}</th>}
                      <th>{t("DETAILS")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gateHorseIdData &&
                      gateHorseIdData?.map((item, index) => {
                        return (
                          <tr key={index}>
                            {/* <td>{index}</td> */}
                            {/* <td>{NewGateId(item?.horse_id)}</td> */}
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
                            <td>
                              {item?.gender}
                              {/* <span>1242</span> */}
                            </td>
                            <td>{item?.genotype}</td>
                            <td>
                              {item.won_career_first}/{item.won_career_second}/
                              {item.won_career_third}
                            </td>
                            {/* <td>{item?.stable_id?.title}</td> */}
                            {!title && (
                              <td
                              // onClick={() => {
                              //   setStud(true);
                              //   setStudData({
                              //     ...studData,
                              //     horseID: item._id,
                              //     stableID: item.stable_id._id,
                              //     racehorse: item.name,
                              //     details: item.genotype,
                              //     gender: item.gender,
                              //   });
                              // }}
                              >
                                {item?.gender === "colt" ||
                                item?.gender === "Stallion" ? (
                                  <Switch
                                    onChange={() => {
                                      setGender(true);
                                      setStud(true);
                                      setStudData({
                                        ...studData,
                                        horseID: item._id,
                                        stableID: item.stable_id._id,
                                        racehorse: item.name,
                                        details: item.genotype,
                                        gender: item.gender,
                                      });
                                    }}
                                    uncheckedIcon={false}
                                    checkedIcon={false}
                                    onColor="#f0b90c"
                                    checked={
                                      item.gender === "Stallion" ||
                                      item.gender === "colt"
                                    }
                                    height={28}
                                    width={57}
                                    handleDiameter={25}
                                  />
                                ) : (
                                  ""
                                )}
                              </td>
                            )}
                            <td>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-box-arrow-up-right"
                                viewBox="0 0 16 16"
                                onClick={() => {
                                  setHorseInfo(true), setHorseInfoData(item);
                                }}
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
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="stable-no-racehorses-list">
                <div className="stable-no-racehorses-list-item">
                  <div>
                    <h3>{t("Explore 1000+ racehorses on ROX Marketplace")}</h3>
                    <Link href="#">
                      <a>{t("Buy a racehorse")}</a>
                    </Link>
                  </div>
                </div>
                <div className="stable-no-racehorses-list-item">
                  <div>
                    <h3>{t("Try out racehorses at reduced cost")}</h3>
                    <Link href="/rent">
                      <a>{t("Rent a racehorse")}</a>
                    </Link>
                  </div>
                </div>
                <div className="stable-no-racehorses-list-item">
                  <div>
                    <h3>{t("Team up with another player for free")}</h3>
                    <Link href="#">
                      <a>{t("Join a stable")}</a>
                    </Link>
                  </div>
                </div>
              </div>
            )}
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
            .information p {
              width: 470px;
              text-align: left;
              margin: 20px 0;
            }
            .breeding-price {
              display: flex;
              justify-content: space-between;
            }
            .breeding-price h4 {
              align-items: center;
              display: flex;
              gap: 10px;
            }
            .breeding-price input {
              background-color: transparent;
              font-size: 17px;
              width: 140px;
              height: 44px;
              padding-right: 8px;
              justify-content: end;
              text-align: end;
              border-radius: 6px;
              border: 2px solid gray;
            }
            .stud-duration {
              display: flex;
              justify-content: space-between;
              margin-top: 30px;
            }
            .stud-duration h4 {
              align-items: center;
              display: flex;
              gap: 10px;
            }
            .stud-duration select {
              font-size: 17px;
              width: 140px;
              height: 44px;
              padding-right: 8px;
              padding-left: 8px;
              justify-content: space-between;
              display: flex;
              align-items: center;
              border-radius: 6px;
              border: 2px solid gray;
              position: relative;
            }
            .drop-down {
              top: 100%;
              position: absolute;
            }
            .stud-duration button :hover.drop-down {
              display: block;
            }
            .roster-button {
              display: flex;
              justify-content: center;
              border-top: 1px solid gray;
              padding-top: 20px;
              padding-bottom: 30px;
            }
            .button-group {
              display: flex;
              gap: 30px;
            }
            .roster-button-left {
              height: 34px;
              width: 127px;
              font-weight: bold;
              background-color: transparent;
              border: 2px solid;
              border-radius: 8px;
            }
            .roster-button-right {
              height: 34px;
              width: 127px;
              font-weight: bold;
              border-radius: 8px;
            }
            .roster-notification {
              padding: 15px;
              background: var(--studListHover);
              border: orange 2px solid;
              border-radius: 10px;
              margin-bottom: 15px;
            }
            .roster-notification span {
              margin-right: 15px;
            }
            .roster {
              background: var(--studListHover);
              padding: 13px;
              display: flex !important;
              align-items: center;
              gap: 25px;
              border-radius: 8px;
              margin-top: 30px;
              margin-bottom: 15px;
            }
            .roster-text h2 {
              padding-top: 30px;
              width: 430px;
              text-align: center;
            }
            .stable-profile {
              display: flex;
              align-items: center;
              gap: 30px;
            }
            .stable {
              background: var(--studListBg);
              padding: 60px 0;
            }
            .stable-profile h2 {
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 24px;
            }

            .stable-profile h2 svg {
              cursor: pointer;
            }

            .stable-profile-img {
              background: #a6acb5;
              border-radius: 50px;
              width: 70px;
              height: 70px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .stable-profile-info ul {
              display: flex;
              align-items: center;
              justify-content: space-between;
              max-width: 650px;
              margin-top: 40px;
              margin-left: 100px;
            }

            .stable-profile-info ul li {
              font-weight: 600;
            }

            .stable-profile-info ul li span {
              display: block;
              margin-bottom: 10px;
              text-transform: uppercase;
              color: var(--eventButtonColor);
              font-size: 12px;
            }

            .stable-profile-info ul li strong {
              font-size: 16px;
            }
            .stable-no-racehorses-list-item {
              background: url("/images/event1.png") no-repeat center center /
                cover;
              text-align: center;
              border-radius: 10px;
              min-height: 400px;
              display: flex;
              align-items: flex-end;
              padding: 30px 20px;
            }

            .stable-no-racehorses {
              padding: 80px 0;
            }

            .stable-no-racehorses-list {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              gap: 30px;
              margin: 0 100px;
            }

            .stable-no-racehorses-list-item h3 {
              font-size: 24px;
              color: #fff;
            }

            .stable-no-racehorses-list-item a {
              background: #fff;
              color: #000;
              font-size: 14px;
              font-weight: 500;
              font-family: "Montserrat", sans-serif;
              letter-spacing: 1px;
              padding: 12px;
              display: block;
              border-radius: 10px;
              margin-top: 30px;
            }
            .stable-no-racehorses-list-item a:hover {
              filter: brightness(1.2);
            }
            .stable-no-racehorses h2 {
              text-align: center;
              margin-bottom: 40px;
              font-size: 24px;
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

            .event-records-table tbody td {
              padding: 0px 20px;
              border-bottom: 1px solid var(--borderColor);
              font-weight: 600;
              color: #61666e;
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
              border-radius: 10px;
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
            .roster-hours-main {
              display: flex;
              z-index: 9999;
              align-items: center;
            }
            .horse-info-box-main {
              position: fixed;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              z-index: 9999;
            }

            @media screen and (max-width: 991px) {
              .stable-no-racehorses-list-item {
                min-height: 300px;
              }
              .stable-profile {
                display: block;
                align-items: center;
                justify-content: center;
                text-align: center;
              }

              .stable-profile h2 {
                display: flex;
                justify-content: center;
                margin-top: 20px;
              }

              .stable-profile-img {
                margin: auto;
              }

              .stable-profile-info ul {
                margin: 30px 0px 0;
              }

              .stable-no-racehorses-list {
                margin: 0;
                grid-template-columns: 1fr;
              }

              .stable-no-racehorses {
                padding: 50px 0;
              }

              .stable {
                padding: 50px 0;
              }
            }
          `}
        </style>
      </Layout>
    )
  );
}
