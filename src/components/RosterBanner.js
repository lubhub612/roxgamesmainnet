import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function RosterBanner() {
  const {t}=useTranslation()
  return (
    <>
      <div className="genesis-banner">
        <div className="container">
          <div className="genesis-banner-inner">
            <div>
              <h3>{t("Ready To Race")}</h3>
              <p>
                {t("Every ROX racehorse purchased or bred will appear here. You can search any racehorse within the ROX ecosystem and where it lives on the blockchain.")}
              </p>
            </div>
            <div>
              <Link href="/marketplace">
                <a>{t("Buy A RACEHORSE")}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .genesis-banner {
            padding: 50px 0 30px;
            text-align: center;
            background: var(--background);
          }
          .genesis-banner-inner {
            display: flex;
            justify-content: space-between;
          }

          .genesis-banner-inner h2 {
            color: #262a31;
            font-size: 100px;
            text-transform: uppercase;
            position: relative;
          }

          .genesis-banner h2 span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #f0b90c;
            font-size: 14px;
          }

          .genesis-banner-inner h3 {
            color: #5b6068;
            font-size: 30px;
            font-weight: 600;
            text-align: left;
            margin-bottom: 20px;
          }

          .genesis-banner-inner p {
            max-width: 500px;
            font-size: 16px;
            text-align: left;
            margin: auto;
          }
          .genesis-banner-inner a {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border-radius: 8px;
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 18px;
            font-weight: 500;
            padding: 10px 10px;
            font-family: "Montserrat", sans-serif;
            letter-spacing: 1px;
            display: inline-block;
            text-transform: uppercase;
            margin-top: 30px;
          }
          .genesis-banner-inner a:hover {
            -webkit-filter: brightness(1.15);
            filter: brightness(1.15);
          }
          @media screen and (max-width: 991px) {
            .genesis-banner-inner h2 {
              font-size: 30px;
            }
            .genesis-banner h2 span {
              font-size: 10px;
            }
          }
        `}
      </style>
    </>
  );
}
