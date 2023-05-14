import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import PerfectScrollbar from "react-perfect-scrollbar";

function Terms() {
  const router = useRouter();
  const [info, setInfo] = useState(false);
  const [cookies, setCookie] = useCookies(["Terms_Service"]);
  const {t}=useTranslation();
  useEffect(() => {
    if (cookies.Terms_Service) {
      setCookie("Terms_Service", true);
      setInfo(false);
    } else {
      setInfo(true);
    }
  }, []);
  const handleButton = () => {
    router.back();
    setInfo(false);
  };
  return (
    <div>
      {info && (
        <div className="warning-area">
          <div className="warning-info">
            <span onClick={handleButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>
            </span>
            <h2>{t("Terms of Service")}</h2>
            <PerfectScrollbar>
              <div className="warning-info-content">
                <p>{t("Please accept these terms before using our services.")}</p>
                {/* <h3>{t("APYs being indicative")}</h3>
                <p>
                  {t("All APYs listed on this site are for guidance purposes only. ROX employs strategies across a broad range of markets. The available liquidity in said markets changes constantly. As a result, ROX cannot calculate APYs in real time. Users acknowledge this and also acknowledge the risk of negative returns on their deposited funds during certain time periods. By depositing funds in ROX")}&lsquo;{t("s vaults, the user assumes any associated risk of loss.")}
                </p> */}
                {/* <h3>{t("Risk of loss of funds when using our products")}</h3>
                <p>
                  {t("Our products are a smart contracts based suite of technologies that relies on blockchain technology. By depositing your funds into our vaults you recognize and assume all risks inherent in such technologies, including but not limited to the risk that the smart contracts underlying our vaults could fail, resulting in a total loss of user funds. ROX is not responsible for any such losses.")}
                </p> */}
                <h3>{t("UI usage and legal jurisdictions")}</h3>
                <p>
                  {t("ROX is a decentralized finance project and does not hold any securities licenses in the U.S. or any other jurisdiction. Any investment made through our protocol shall be made with this in mind.")}
                </p>
                <p>
                  {t("Furthermore, by accepting these terms you acknowledge and warrant that you are not a citizen of or otherwise accessing the website from the following nations: the Balkans, Belarus, Burma, China, Cote D")}&lsquo;{t("Ivoire (Ivory Coast), Cuba, Democratic Republic of Congo, Hong Kong, Iran, Iraq, Liberia, North Korea, Sudan, Syria, Zimbabwe, and/or any other jurisdiction prohibited by the United States Office of Foreign Asset Control (OFAC).")}
                </p>
                <p>{t("Last updated 1st January 2023")}</p>
              </div>
            </PerfectScrollbar>
            <button
              onClick={() => {
                setCookie("Terms_Service", true);
                setInfo(false);
              }}
            >
              {t("Accept Terms")}
            </button>
          </div>
        </div>
      )}

      <style jsx>
        {`
          .warning-area {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9999;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000000b5;
            backdrop-filter: blur(30px);
          }
          .warning-info {
            background: var(--bigCtaBg);
            padding: 50px;
            border-radius: 10px;
            max-width: 700px;
            position: relative;
            margin: 30px;
          }
          .warning-info-content {
            max-height: 400px;
          }

          .warning-info-content h3 {
            font-size: 14px;
            font-weight: 600;
            margin: 10px 0;
          }

          .warning-info-content p {
            margin: 20px 0;
          }

          .warning-info span {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
          }

          .warning-info span svg {
            width: 30px;
            height: 30px;
          }

          .warning-info h2 {
            font-size: 26px;
            font-weight: 500;
            margin-bottom: 30px;
          }

          .warning-info button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border: none;
            padding: 15px 30px;
            color: #fff;
            font-size: 14px;
            border-radius: 10px;
            margin-top: 30px;
            cursor: pointer;
          }
          .warning-info button:hover {
            filter: brightness(1.15);
          }
        `}
      </style>
    </div>
  );
}

export default Terms;
