import { useTranslation } from "react-i18next";

export default function TournamentsBanner() {
  const {t}=useTranslation()
  return (
    <>
      <div className="tournaments">
        <div className="container">
          <div className="tournaments-inner">
            <h2>{t("CHAMPIONSHIP")}</h2>
            <div className="tournaments-count">
              <span>
                95 <strong>{t("COMPLETED")}</strong>
              </span>
              <span>
                <span className="primary-color">$95,488 USD</span>{' '}
                <strong>{t("WON")}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .tournaments {
            background: url('/images/tournaments-banner.png') no-repeat center
              center / cover;
            padding: 60px 0 120px;
          }

          .tournaments-inner {
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .tournaments-inner span {
            color: var(--colorWhite);
          }
          .tournaments-count {
            background: var(--resultBtnBg);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px 30px;
            min-width: 430px;
            font-weight: 600;
            position: relative;
          }

          .tournaments-count strong {
            color: #61666e;
            margin-left: 10px;
          }
          .tournaments-count:before {
            background: url('/images/to-horse.svg') no-repeat center center /
              cover;
            bottom: 0;
            content: '';
            left: 0;
            position: absolute;
            top: 0;
            width: 100px;
            filter: var(--resultBtnImg);
          }

          .tournaments-inner h2 {
            font-size: 32px;
          }
          .primary-color {
            color: #f0b90c;
          }
          @media screen and (max-width: 991px) {
            .tournaments-inner {
              display: grid;
              gap: 20px;
              text-align: center;
              justify-content: center;
            }
            .tournaments {
              padding: 50px 0;
            }
            .tournaments-count {
              min-width: unset;
              gap: 40px;
            }
          }
        `}
      </style>
    </>
  );
}
