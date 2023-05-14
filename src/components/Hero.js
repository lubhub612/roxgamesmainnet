import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Wallet from "./Wallet";

export default function Hero() {
  const [account, setAccount] = useState("");
  const [chainId, setChainId] = useState("");
  const [AddressData,setAddressData] = useState("");
  const walletSessionKey = "walletHyperXV1";
  const [wallet, setWallet] = useState();
  const {t}=useTranslation()
  useEffect(() => {
    const data = window.localStorage.getItem(walletSessionKey);
    setWallet(data);
  }, [account]);

  return (
    <>
      <div className="hero-area">
        <h2>{t("THE NEW AGE OF ENTERTAINMENT")}</h2>

              <h3>{t("DIGITAL HORSE RACING AND NFT GAMING")}</h3>

        <p>
          {t("Buy, breed, rent, or race your very own digital racehorses and explore the galaxy of NFT characters and accessories in our exciting new game.")}
        </p>

        {!wallet ? (
          <div className="">
            <div className="get-start-btn relative">
              <div className="absolute getstart-btn-main">
                <div className="absolute getstart-btn-body">
                  <ul className="h-full">
                    <li className="h-full get-start-h6">
                      <Wallet
                        account={account}
                        setAccount={setAccount}
                        AddressData = {AddressData}
                        setAddressData={setAddressData}
                        chainId={chainId}
                        setChainId={setChainId}
                      />
                    </li>
                  </ul>
                </div>
                <button>{t("GET STARTED")}</button>
              </div>
            </div>
          </div>
        ) : (
          <Link href="stable">
            <button>{t("GET STARTED")}</button>
          </Link>
        )}
      </div>
      <style jsx>
        {`
          .hero-area {
            background-image: var(--heroGradient), url(images/hero-bg.jpg);
            background-position: 0 50%;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 200px 0 140px;
            text-align: center;
            color: #fff;
          }
          .hero-area h2 {
            font-size: 52px;
            font-weight: 700;
            letter-spacing: 3px;
          }

          .hero-area p {
            font-size: 18px;
            max-width: 640px;
            margin: 10px auto 50px;
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
            padding: 18px 40px;
            font-family: "Montserrat", sans-serif;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 20px;
          }
          button:hover {
            filter: brightness(1.15);
          }
          .get-start-btn {
            display: flex;
            justify-content: center;
            width: 100%;
            height: 60px;
          }
          .getstart-btn-body {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            z-index: 11;
          }
          .getstart-btn-main:hover button {
            filter: brightness(1.15);
          }
          .get-start-h6 h6 {
            display: none;
          }
          .get-start-h6 a {
            width: 100%;
            height: 100%;
          }
          .absolute {
            position: absolute;
          }
          .relative {
            position: relative;
          }
          .h-full {
            height: 100%;
          }
          @media screen and (max-width: 991px) {
            .hero-area p {
              padding: 0 20px;
            }
          }
        `}
      </style>
    </>
  );
}
