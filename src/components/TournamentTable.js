import Image from 'next/image';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';

export default function TournamentTable() {
  const {t}=useTranslation();
  const ChangeLink = (e) => {
    e.preventDefault();
    Router.push('/tournaments-details');
  };
  return (
    <>
      <div className="event-open">
        <div className="container">
          <div className="races-table">
            <table>
              <thead>
                <tr>
                  <th>{t("TOURNAMENT")}</th>
                  <th>{t("STATUS")}</th>
                  <th>{t("DISTANCE (m)")}</th>
                  <th>{t("STAGES")}</th>
                  <th>{t("ENDS")}</th>
                  <th>{t("PRIZE POOL")}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="active" onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      {t("Podium Plate")}
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      {t("Completed")}
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      {t("finals")}
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
                <tr onClick={ChangeLink}>
                  <td className="event-title">
                    <span>
                      <span className="event-title-img">
                        <Image
                          src="/images/to-img.svg"
                          width={34}
                          height={34}
                          alt="logo"
                        />
                      </span>
                      Podium Plate
                      <strong>Thursday</strong>
                    </span>
                  </td>
                  <td className="tournament-type">
                    <span className="tournament-active">
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
                      Active
                    </span>
                    <span>
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="m17.008 7.34-6.84 6.85L7.98 12a1.161 1.161 0 0 0-1.64 1.642l3.012 3.017a1.157 1.157 0 0 0 1.64 0l7.667-7.676a1.161 1.161 0 0 0 0-1.642 1.171 1.171 0 0 0-1.652 0Z"
                          fill="#F0F8FF"
                          fillOpacity=".64"
                        />
                        <path
                          d="M4 1h16v-2H4v2Zm19 3v16h2V4h-2Zm-3 19H4v2h16v-2ZM1 20V4h-2v16h2Zm3 3a3 3 0 0 1-3-3h-2a5 5 0 0 0 5 5v-2Zm19-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2ZM20 1a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2ZM4-1a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v-2Z"
                          fill="#F0F8FF"
                          fillOpacity=".04"
                        />
                      </svg>
                      Completed
                    </span>
                  </td>
                  <td className="distance">1400, 2000, 2600</td>
                  <td className="entry-fee">
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 10C10.3674 10 10.2402 9.94732 10.1464 9.85355C10.0527 9.75979 10 9.63261 10 9.5L10 6.5C10 6.36739 10.0527 6.24021 10.1464 6.14645C10.2402 6.05268 10.3674 6 10.5 6C10.6326 6 10.7598 6.05268 10.8536 6.14645C10.9473 6.24021 11 6.36739 11 6.5L11 9.5C11 9.63261 10.9473 9.75979 10.8536 9.85355C10.7598 9.94732 10.6326 10 10.5 10ZM7.5 12C7.36739 12 7.24022 11.9473 7.14645 11.8536C7.05268 11.7598 7 11.6326 7 11.5L7 8L7 4.5C7 4.36739 7.05268 4.24021 7.14645 4.14645C7.24021 4.05268 7.36739 4 7.5 4C7.63261 4 7.75979 4.05268 7.85355 4.14645C7.94732 4.24021 8 4.36739 8 4.5L8 11.5C8 11.6326 7.94732 11.7598 7.85355 11.8536C7.75979 11.9473 7.63261 12 7.5 12ZM4.5 14C4.36739 14 4.24022 13.9473 4.14645 13.8536C4.05268 13.7598 4 13.6326 4 13.5L4 2.5C4 2.36739 4.05268 2.24021 4.14645 2.14645C4.24021 2.05268 4.36739 2 4.5 2C4.63261 2 4.75979 2.05268 4.85355 2.14645C4.94732 2.24021 5 2.36739 5 2.5L5 13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9473 4.63261 14 4.5 14Z"
                          fill="white"
                        />
                      </svg>
                      finals
                    </span>
                  </td>
                  <td className="register">13th May 2023</td>
                  <td className="price">
                    <strong>$15,006</strong> <span>USD</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .event-open {
            background: var(--background);
            padding: 60px 0;
          }
          .races-table {
            overflow-x: auto;
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
            height: 30px;
          }
          .races-table tbody tr:hover {
            background: var(--racesTableHover);
            cursor: pointer;
          }
          .races-table tbody td {
            padding: 20px;
            border-bottom: 1px solid var(--borderColor);
            font-weight: 600;
          }
          .event-title span span {
            display: block;
            color: #646a71;
            font-size: 12px;
            font-weight: 500;
          }

          .event-type span {
            background: #66513f;
            font-size: 14px;
            padding: 4px 12px;
            border-radius: 5px;
          }

          .distance {
            color: #646a71;
          }

          .price strong {
            color: #ecb508;
          }

          .price span {
            font-weight: 500;
            color: #646a71;
            text-transform: uppercase;
          }

          .event-title span {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .event-title strong {
            font-weight: 500;
            background: var(--racesButton);
            padding: 4px 15px;
            border-radius: 5px;
            font-size: 12px;
          }
          .tournament-type span {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            color: #b2b9c0;
          }
          .tournament-type .tournament-active svg path {
            fill: unset;
          }
          .tournament-type svg path {
            fill: var(--titleColor);
          }
          .entry-fee span {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .entry-fee span svg {
            width: 30px;
            height: 30px;
          }
          .event-title-img {
            filter: grayscale(1);
          }
          .active .event-title-img {
            filter: grayscale(0);
          }
          .tournament-type .tournament-active {
            display: none;
          }
          .active {
            background: var(--racesTableHover);
            box-shadow: inset 0 -1px 0 hsl(0deg 0% 100% / 4%);
          }

          .active .tournament-type .tournament-active {
            display: flex;
            align-items: end;
            color: #f0b90c;
          }
          .active .tournament-type span {
            display: none;
          }

          .tournament-active svg {
            width: 26px;
            height: 26px;
          }
          .races-table th:last-child {
            text-align: right;
          }
          .price {
            text-align: right;
          }
          @media screen and (max-width: 991px) {
            .event-open {
              padding: 30px 0;
            }
          }
        `}
      </style>
    </>
  );
}
