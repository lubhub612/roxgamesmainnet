import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function TournamentsDetailsBanner() {
  const {t} =useTranslation();
  return (
    <>
      <div className="tournament-details-banner">
        <div className="container">
          <div className="tournament-details-banner-inner">
            <Link href="/tournaments">
              <a className="back-button">
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
                </svg>{' '}
                {t("Back")}
              </a>
            </Link>
            <h2>
              <Image
                src="/images/to-img.svg"
                width="48"
                height="48"
                alt="img"
              />
              {t("KEEP ON WINNING")}
            </h2>
            <div className="tournament-date">{t("Saturday")}</div>
            <p>
              {t("Racehorses must run a minimum of 5 races in a specific distance category to have a chance at qualifying.")}
            </p>
            <p>
              {t("The top 192 racehorses per distance category will qualify for Tournament A. Racehorses ranked 193-384 will qualify for Tournament B. Learn more about how points are calculated here or view results here.")}
            </p>
            <div className="tournament-status">
              <ul>
                <li>
                  {t("Status:")}
                  <span className="primary-color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-play-btn"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    </svg>
                    {t("Active")}
                  </span>
                </li>
                <li>
                  {t("Stage:")}
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="jsx-3d4b672525cc1689"
                    >
                      <path
                        d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                        fill="white"
                        className="jsx-3d4b672525cc1689"
                      ></path>
                    </svg>
                    {t("Qualification")}
                  </span>
                </li>
                <li>
                  {t("Ends:")} <span>15th May 2023</span>
                </li>
                <li>
                  {t("Prize pool:")}
                  <span className="primary-color">
                    $15,006 <strong>USD</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .tournament-details-banner {
            background: url('/images/to-details-banner.png') no-repeat center
              center / cover;
          }
          .tournament-details-banner-inner {
            padding: 30px 0;
          }

          .back-button {
            color: #fff;
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 18px;
            margin-bottom: 50px;
          }

          .back-button svg {
            width: 30px;
            height: 30px;
          }

          .tournament-details-banner-inner h2 {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            text-transform: uppercase;
            font-size: 40px;
            color: #fff;
          }

          .tournament-date {
            text-align: center;
            background: var(--bigCtaBg);
            max-width: fit-content;
            margin: 10px auto;
            padding: 3px 16px;
            border-radius: 5px;
          }

          .tournament-details-banner-inner p {
            text-align: center;
            max-width: 900px;
            margin: 15px auto;
            color: #f0f8ffa3;
          }

          .tournament-status {
            background: var(--bigCtaBg);
            max-width: 1000px;
            margin: 40px auto;
            padding: 20px 70px;
            border-radius: 5px;
          }

          .tournament-status ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #6a7077;
            font-weight: 500;
          }

          .tournament-status li span {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #a8afb7;
            margin-top: 5px;
            font-weight: 600;
          }

          .tournament-status li span svg {
            width: 24px;
            height: 24px;
          }
          .tournament-status li span svg path {
            fill: var(--colorWhite);
          }
          .tournament-status span strong {
            color: #6a7077;
          }
          .primary-color {
            color: #f0b90c !important;
          }
          @media screen and (max-width: 991px) {
            .tournament-status {
              display: none;
            }
            .tournament-details-banner-inner h2 {
              display: grid;
              font-size: 26px;
            }
          }
        `}
      </style>
    </>
  );
}
