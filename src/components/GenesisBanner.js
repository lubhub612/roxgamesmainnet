import { useTranslation } from "react-i18next";

export default function GenesisBanner() {
  const {t}=useTranslation()
  return (
    <>
      <div className="genesis-banner">
        <div className="container">
          <div className="genesis-banner-inner">
            <h2>
              <strong>{t("ROX")}</strong> <span>{t("GENESIS")}</span>
            </h2>
            <h3>{t("First Generation")}</h3>
            <p>
              {t("ROX first-generation racehorses are known as the Genesis breed.There will only ever be 19,999 Genesis bred racehorses in the ROX ecosystem.")}
            </p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .genesis-banner {
            padding: 30px 0 60px;
            text-align: center;
            background: var(--background);
          }

          .genesis-banner-inner h2 {
            font-size: 100px;
            text-transform: uppercase;
            position: relative;
          }
          .genesis-banner-inner h2 strong {
            color: var(--colorWhite);
            opacity: 0.1;
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
            margin-bottom: 20px;
          }

          .genesis-banner-inner p {
            max-width: 900px;
            font-size: 16px;
            margin: auto;
          }
          @media screen and (max-width: 991px) {
            .genesis-banner-inner h2 {
              font-size: 30px;
            }
            .genesis-banner-inner h2 span {
              font-size: 10px;
            }
          }
        `}
      </style>
    </>
  );
}
