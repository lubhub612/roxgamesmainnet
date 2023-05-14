import { useState } from "react";
import Slider from "react-rangeslider";
import Image from "next/image";
import Layout from "../../components/Layout";
import "react-rangeslider/lib/index.css";
import Terms from "../../components/Terms";
import { useTranslation } from "react-i18next";
export default function Boost() {
  const [range, setRange] = useState(91);
  const [custom, setCustom] = useState(false);
  const [customColor, setCustomColor] = useState({});
  const [customeAPR, setCustomeAPR] = useState("");
  const { t } = useTranslation();
  const handleChange = (value) => {
    setRange(value);
  };

  const handleDays = () => {
    setCustom(false);
  };

  return (
    <Layout>
      <div className="container">
        <div className="boost-area">
          <div className="boost-box">
            <h2>{t("Lock ROX for Rewards")}</h2>
            <p className="boost-content">
              <span>
                {customColor.text ? (
                  <>
                    {t("APR")} <strong>{customColor.text}</strong> {t("in ROX")}
                  </>
                ) : (
                  <>
                    {t("APR")} <strong>1.97%</strong> to <strong>12%</strong>{" "}
                    {t("in ROX")}
                  </>
                )}
              </span>
            </p>
            <div className="stack-box-area-inner">
              <div className="boost-box-input">
                <div className="stack-box-icon">
                  <Image
                    src="/images/token/rox.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                </div>
                <input type="number" placeholder="0.0" />
                <span>{t("MAX")}</span>
              </div>
            </div>

            <div className="boost-item-list">
              <ul>
                <li
                  className={
                    customColor.color === "6" && "boost-item-list-color"
                  }
                  onClick={() => {
                    handleDays();
                    setCustomColor({ color: "6", text: "1.97%" });
                  }}
                >
                  {t("6 Month")}
                </li>
                <li
                  className={
                    customColor.color === "1" && "boost-item-list-color"
                  }
                  onClick={() => {
                    handleDays();
                    setCustomColor({ color: "1", text: "6%" });
                  }}
                >
                  {t("1 Years")}
                </li>
                <li
                  className={
                    customColor.color === "2" && "boost-item-list-color"
                  }
                  onClick={() => {
                    handleDays();
                    setCustomColor({ color: "2", text: "8%" });
                  }}
                >
                  {t("2 years")}
                </li>
                <li
                  className={
                    customColor.color === "3" && "boost-item-list-color"
                  }
                  onClick={() => {
                    // setCustom(true);
                    setCustomColor({ color: "3", text: "12%" });
                  }}
                >
                  {t("3 Years")}
                </li>
              </ul>
            </div>
            {custom && (
              <div className="boost-custom-box-area">
                <div className="boost-custom-box">
                  <div className="boost-range">
                    <Slider
                      min={91}
                      max={1460}
                      value={range}
                      onChange={handleChange}
                    />
                    <span className="boost-number-first">91</span>
                    <span className="boost-number-last">1460</span>
                  </div>
                  <div className="boost-days">
                    <span>{range}</span> {t("days")}
                  </div>
                </div>
                <div className="boost-button-area">
                  <span onClick={() => setCustom(false)}>{t("Cancel")}</span>
                  <button onClick={() => setCustom(false)}>
                    {t("Confirm")}
                  </button>
                </div>
              </div>
            )}

            <div className="boost-message">
              <p>
                {t(
                  "Commit to the long-term vision of ROX Games by locking your ROX tokens and earning rewards in ROX tokens."
                )}
              </p>

              <p>
                {t(
                  "Note: Penalty for early withdrawal 25% of principal + rewards"
                )}
              </p>
            </div>
            <div className="stack-box-area-inner">
              <button>{t("Connect your Wallet")}</button>
            </div>
          </div>
          <div className="boost-bar">
            {" "}
            <p>
              <h1 style={{ textAlign: "center" }}>{t("Lock statistics")}</h1>{" "}
            </p>
            <div className="boost-bar-list">
              <div className="boost-bar-item">
                <h6>{t("Total locked")}</h6>
                <h6>105729.28 ROX</h6>
              </div>
              <div className="boost-bar-item">
                <h6>{t("You locked")}</h6>
                <h6>864831.83 ROX</h6>
              </div>
            </div>
            <div className="stack-img"></div>
          </div>
          <div className="boost-bar">
            <div className="vault-content-down">
              {/* <h1>{t("Qi vaults have a 0.5% deposit fee.")}</h1> */}
              <div className="vault-content-down-inner">
                <div className="vault-content-down-item">
                  <div>
                    <h2>{t("My Investments")}</h2>
                    <strong>0.00</strong>
                    <span>{t("MAI-3CRV LP")}</span>
                  </div>
                  <button>{t("Withdraw All")}</button>
                </div>
                <div className="vault-content-down-item">
                  <div>
                    <h2>
                      {t("Balance:")} 0.00 MAI-3CRV LP{" "}
                      <small>{t("Get LP")}</small>
                    </h2>
                    <div className="vault-content-input">
                      <input type="number" placeholder="0.0" />
                      <button>{t("MAX")}</button>
                    </div>
                    <p>{t("This vault is auto-compounding")}</p>
                  </div>
                  <button>{t("Invest")}</button>
                </div>
                <div className="vault-content-down-item">
                  <div>
                    <h2>{t("Rewards")}</h2>
                    <strong>0.00</strong> <span>ROX</span>
                  </div>
                  <button>{t("Claim ROX")}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Terms />
      </div>
      <style jsx>{`
        .vault-content-down h2 {
          font-size: 14px;
        }

        .vault-content-down h1 {
          font-size: 14px;
          font-weight: 300;
          border-bottom: 1px solid #eeb80d;
          padding-bottom: 10px;
        }

        .vault-content-down-inner {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 50px;
          text-align: center;
        
        }
        @media  (max-width:991px){
          .vault-content-down-inner {
          grid-template-columns: 1fr;
          }
        }
        .vault-content-down-item button {
          display: block;
          width: 100%;
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          border: none;
          padding: 14px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 16px;
          color: #fff;
          cursor: pointer;
        }
        .vault-content-down-item {
          padding-top: 50px;
          min-height: 200px;
          display: grid;
          align-items: end;
        }

        .vault-content-down-item h2 {
          font-size: 20px;
          margin-bottom: 5px;
        }
        .vault-content-down-item p {
          margin-bottom: 20px;
          margin-top: 20px;
        }
        .vault-content-down-inner {
          
          gap: 10px;
        }
        .vault-content-input {
          position: relative;
        }

        .vault-content-input button {
          width: unset;
          padding: 10px 16px;
          font-weight: 500;
          position: absolute;
          right: 8px;
          margin-top: 0;
          top: 37px;
          border-radius: 5px;
          cursor: pointer;
          color: #fff;
        }
        .vault-content-input input {
          width: 100%;
          background: transparent;
          border: 1px solid #e3af09;
          border-radius: 5px;
          padding: 10px;
          margin-top: 30px;
          font-size: 26px;
        }
        .right-true-svg {
          display: flex;
          align-items: center;
        }
        .stack-box-area-inner {
          max-width: 50%;
          margin: auto;
        }
        .boost-area {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
          padding: 50px 0;
        }

        .boost-box {
          background: var(--bigCtaBg);
          padding: 40px;
          border-radius: 10px;
          height: fit-content;
          text-align: center;
          padding-top: 50px;
        }

        .boost-bar {
          background: var(--bigCtaBg);
          padding: 30px;
          border-radius: 10px;
        }

        .boost-box h2 {
          font-size: 40px;
          font-weight: 500;
        }

        .boost-box p {
          font-size: 14px;
        }

        .boost-box-input {
          position: relative;
        }

        .boost-box-input input {
          width: 100%;
          border: 1px solid #efb809;
          background: transparent;
          border-radius: 5px;
          padding: 15px 15px 15px 50px;
          font-size: 20px;
          margin-top: 100px;
        }

        .boost-box-input span {
          position: absolute;
          bottom: 7px;
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          color: #fff;
          padding: 10px 20px;
          right: 7px;
          border-radius: 5px;
          cursor: pointer;
        }

        .boost-box button {
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          width: 100%;
          border: none;
          padding: 16px;
          font-size: 16px;
          border-radius: 10px;
          margin-top: 30px;
          cursor: pointer;
          color: #fff;
        }
        .boost-box button:hover {
          filter: brightness(1.15);
        }

        .boost-bar h2 {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .boost-bar p {
          font-size: 16px;
          margin-bottom: 20px;
        }

        .boost-bar h4 {
          margin-top: 50px;
        }

        .boost-bar a {
          color: #ecb608;
          font-weight: 500;
          text-align: right;
          display: block;
          margin-top: 30px;
        }

        .boost-bar h5 {
          margin-top: 40px;
          text-align: center;
          margin-bottom: 20px;
          font-weight: 400;
          font-size: 18px;
        }

        .boost-bar-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .boost-bar-item {
          background: var(--stackBg);
          padding: 20px;
          border-radius: 10px;
        }

        .boost-bar-item h6 {
          text-align: center;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .boost-bar-item ul li span svg {
          color: #038726;
        }

        .boost-bar-item ul li {
          display: flex;
          gap: 10px;
          font-size: 16px;
          margin: 15px 0;
        }
        .stack-img {
          margin-top: 50px;
        }

        .boost-bar .stack-img p {
          color: #6d6f72;
          font-size: 16px;
        }
        .stack-box-icon {
          position: absolute;
          bottom: 10px;
          left: 15px;
        }
        .boost-content span {
          margin: 0 20px;
        }

        .boost-content span strong {
          font-size: 20px;
          margin: 0 5px;
        }

        .boost-item-list ul > li {
          margin-top: 0;
        }

        .boost-item-list ul {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 40px;
          margin-top: 30px;
        }
        .boost-item-list li {
          margin-top: 30px;
          list-style: none;
          background: var(--stackBg);
          padding: 15px 20px;
          border-radius: 10px;
          cursor: pointer;
          transition: 0.3s;
        }
        .boost-item-list li:hover {
          background: #eab508;
          color: #fff;
        }
        .boost-item-list-color {
          background-color: #eab508 !important;
          color: #fff;
        }
        .boost-message {
          margin: 50px 0;
        }

        .boost-message span strong {
          font-size: 40px;
          margin: 0 10px;
        }

        .boost-message span {
          font-size: 18px;
        }

        .boost-message p {
          font-size: 16px;
        }
        .boost-custom-box-area {
          border: 1px solid var(--boostBorder);
          margin-top: 40px;
          border-radius: 10px;
          padding: 30px;
          align-items: center;
        }
        .boost-custom-box {
          display: grid;
          grid-template-columns: 3fr 1fr;
          gap: 50px;
        }

        .boost-days span {
          background: var(--background);
          font-size: 30px;
          font-weight: 500;
          padding: 15px;
          border-radius: 10px;
          color: var(--colorWhite);
        }

        .boost-days {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 16px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .boost-range {
          position: relative;
        }

        .boost-range span {
          position: absolute;
          top: 40px;
          font-size: 16px;
          font-weight: 500;
        }
        .boost-range .boost-number-first {
          left: 0;
        }

        .boost-range .boost-number-last {
          right: 0;
        }
        .boost-button-area {
          display: flex;
          align-items: center;
          gap: 30px;
          justify-content: center;
          margin-top: 50px;
        }

        .boost-box .boost-button-area button {
          margin-top: 0;
          width: unset;
          padding: 15px 40px;
        }

        .boost-button-area span {
          cursor: pointer;
          color: #e7b208;
          font-size: 18px;
          font-weight: 500;
        }
        @media screen and (max-width: 991px) {
          .stack-box-area-inner {
            max-width: 90%;
          }
          .boost-box {
            height: unset;
            padding-top: 50px;
          }
          .boost-area {
            grid-template-columns: 1fr;
            padding: 50px 0;
          }
          .boost-content span {
            display: block;
          }
          .boost-item-list ul {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .boost-box h2 {
            font-size: 34px;
            font-weight: 500;
          }
        }
      `}</style>
    </Layout>
  );
}
