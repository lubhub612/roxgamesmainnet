import Link from 'next/link';
import { useTranslation } from 'react-i18next';
export default function LearnCommunity() {
  const {t}= useTranslation();
  return (
    <>
      <div className="learn-community">
        <div className="container">
          <div className="learn-community-inner">
            <h2>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.373749 5.13199V16.6324C0.373749 16.807 0.472633 16.9669 0.628779 17.0454L10.538 22V9.99328L0.373749 5.13199ZM3.14581 16.1703C2.60989 16.1703 2.22181 15.5873 2.22181 14.7843C2.22181 13.9813 2.60989 13.3983 3.14581 13.3983C3.68173 13.3983 4.06982 13.9813 4.06982 14.7843C4.06986 15.5873 3.68177 16.1703 3.14581 16.1703ZM5.91787 14.5736C5.38196 14.5736 4.99387 13.9906 4.99387 13.1876C4.99387 12.3846 5.38196 11.8016 5.91787 11.8016C6.45379 11.8016 6.84188 12.3846 6.84188 13.1876C6.84193 13.9906 6.45384 14.5736 5.91787 14.5736ZM8.68994 12.9363C8.15402 12.9363 7.76593 12.3533 7.76593 11.5503C7.76593 10.7473 8.15402 10.1642 8.68994 10.1642C9.22586 10.1642 9.61395 10.7473 9.61395 11.5503C9.61399 12.3532 9.2259 12.9363 8.68994 12.9363Z"
                  fill="#F0F8FF"
                  fillOpacity="0.32"
                />
                <path
                  d="M11.1913 0.0415809C11.0693 -0.0138603 10.9307 -0.0138603 10.8087 0.0415809L1.09912 4.45471L11 9.1903L20.9009 4.45471L11.1913 0.0415809ZM11 6.00615C10.197 6.00615 9.61399 5.61806 9.61399 5.08214C9.61399 4.54623 10.197 4.15814 11 4.15814C11.803 4.15814 12.3861 4.54623 12.3861 5.08214C12.3861 5.61806 11.803 6.00615 11 6.00615Z"
                  fill="#F0F8FF"
                  fillOpacity="0.32"
                />
                <path
                  d="M11.462 9.99328V22L21.3712 17.0454C21.5274 16.9669 21.6263 16.807 21.6263 16.6324V5.13199L11.462 9.99328ZM13.7721 13.3983C13.2371 13.3983 12.8481 12.8152 12.8481 12.0122C12.8481 11.2093 13.2371 10.6262 13.7721 10.6262C14.3071 10.6262 14.6961 11.2093 14.6961 12.0122C14.6961 12.8152 14.3071 13.3983 13.7721 13.3983ZM18.3922 15.7084C17.8572 15.7084 17.4682 15.1253 17.4682 14.3223C17.4682 13.5193 17.8572 12.9363 18.3922 12.9363C18.9272 12.9363 19.3162 13.5193 19.3162 14.3223C19.3162 15.1253 18.9272 15.7084 18.3922 15.7084Z"
                  fill="#F0F8FF"
                  fillOpacity="0.32"
                />
              </svg>
              {t("COMMUNITY PORTALS")}
            </h2>

            <div className="learn-list">
              <div className="learn-item">
                <Link href="#">
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <h3>
                      {t("Getting Started")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </h3>
                    <p>
                      {t("Here, you")}&apos;{t("ll find curated how-to guides and information to help get you on the racetrack.")}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="learn-item">
                <Link href="#">
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <h3>
                      {t("Getting Started")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </h3>
                    <p>
                      {t("Here, you")}&apos;{t("ll find curated how-to guides and information to help get you on the racetrack.")}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="learn-item">
                <Link href="#">
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <h3>
                      {t("Getting Started")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </h3>
                    <p>
                      {t("Here, you")}&apos;{t("ll find curated how-to guides and information to help get you on the racetrack.")}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="learn-item">
                <Link href="#">
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <h3>
                      {t("Getting Started")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </h3>
                    <p>
                      {t("Here, you")}&apos;{t("ll find curated how-to guides and information to help get you on the racetrack.")}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="learn-item">
                <Link href="#">
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <h3>
                      {t("Getting Started")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </h3>
                    <p>
                      {t("Here, you")}&apos;{t("ll find curated how-to guides and information to help get you on the racetrack.")}
                    </p>
                  </a>
                </Link>
              </div>
              <div className="learn-item">
                <Link href="#">
                  <a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-info"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                    </span>
                    <h3>
                      {t("Getting Started")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </h3>
                    <p>
                      {t("Here, you")}&apos;{t("ll find curated how-to guides and information to help get you on the racetrack.")}
                    </p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .learn-streaming-section {
            margin-top: 50px;
          }
          .learn-community-inner h2 {
            color: #5b6068;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
            font-size: 18px;
          }
          .learn-community-inner h2 svg path {
            fill: var(--colorWhite);
          }
          .learn-community {
            padding: 60px 0;
          }

          .learn-list {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
          }

          .learn-item span {
            color: #fff;
            border: 1px solid #fff;
            width: 40px;
            height: 40px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
          }

          .learn-item span svg {
            width: 30px;
            height: 30px;
          }

          .learn-item h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 600;
            font-size: 20px;
            margin-bottom: 15px;
          }
          .learn-item a {
            color: #fff;
          }
          .learn-item {
            padding: 30px;
            border-radius: 5px;
            transition: 0.3s;
            background: linear-gradient(
                27.54deg,
                rgba(96, 54, 48, 0.93) 17.1%,
                rgba(109, 73, 68, 0.32) 55.96%,
                rgba(23, 62, 98, 0) 103.91%,
                rgba(41, 29, 60, 0) 0
              ),
              url('/images/learn-bg.png') no-repeat center center / cover;
          }
          .learn-item:hover {
            filter: brightness(115%);
          }
          @media screen and (max-width: 991px) {
            .learn-list {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}
      </style>
    </>
  );
}
