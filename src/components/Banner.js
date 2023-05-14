import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const {t}=useTranslation();
  return (
    <>
      <div className="banner-area">
        <div className="container">
          <div className="banner-inner">
            <div className="banner-content">
              <h2>{t("Create your free stable")}</h2>
              <p>{t("Become a stable owner and start racing now to win!")}</p>
            </div>
            <Link href="/stable">
              <button>{t("Start")}</button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .banner-area {
            background: var(--background);
            padding: 60px 0;
          }

          .banner-inner {
            background: 50% / cover no-repeat url(/images/banner.jpg);
            box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
            position: relative;
            border-radius: 5px;
            padding: 45px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 1;
          }
          .banner-inner:after {
            background: linear-gradient(36deg, #2a2e35, rgba(42, 46, 53, 0.32));
            content: "";
            display: block;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: -1;
          }
          .banner-content h2 {
            font-size: 26px;
          }

          .banner-content p {
            opacity: 0.8;
          }
          button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border-radius: 8px;
            box-shadow: 0 0 8px 0px #f0b90b5e;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 18px;
            font-weight: 500;
            padding: 14px 45px;
            font-family: "Montserrat", sans-serif;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 16px;
          }
          button:hover {
            filter: brightness(1.15);
          }
          @media screen and (max-width: 991px) {
            .banner-inner {
              display: block;
              text-align: center;
              padding: 150px 20px 40px;
            }

            .banner-inner h2 {
              font-size: 30px !important;
              margin-bottom: 10px;
            }

            .banner-inner button {
              width: 100%;
              margin-top: 30px;
            }
          }
        `}
      </style>
    </>
  );
}
