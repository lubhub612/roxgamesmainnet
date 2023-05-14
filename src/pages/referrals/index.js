import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";
import Layout from "../../components/Layout";
import { useRoxGlobal } from "../../contexts/RoxGlobalContext";

export default function Index() {
  const walletSessionKey = "walletHyperXV1";
  const router = useRouter()
  const { t } = useTranslation();
  const [walletData, setWalletData] = useState();
  const { invokeServer } = useRoxGlobal();
  const [account, setAccount] = useState(false);
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    if (!oldAddr) {
      router.push("/");
      return;
    }
    setAccount(oldAddr);
  }, [account]);

  useEffect(() => {
    AddressData();
  }, [account]);

  const AddressData = async () => {
    let walletData = await invokeServer("post", "/api/signin/addressdata", {
      address: account,
    });
    setWalletData({
      ...walletData?.data?.data[0],
    });
  };

  return (
    <>
      <Layout>
        <div className="MainArea">
          <div className="Main">
            <div className="ProfileArea">
              <div className="Profile">
                <img src="/images/logo.png" alt="avatar" />
                <div className="ProfileContent">
                  <span>{t("My Rox ID")}</span>
                  <strong>{walletData?._id?.substr(0, 5) + "..."}</strong>
                  <p>
                    {walletData?.address?.substr(0, 4) +
                      "..." +
                      walletData?.address?.slice(-4)}
                    <CopyToClipboard
                      text={`https://polygonscan.com/address/${walletData?.address}`}
                    >
                      {/* <div
                        className="roster-info-share"
                        onClick={() => setCopy(true)}
                      > */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                        ></path>
                      </svg>
                      {/* <span>{copy && "Copied!"}</span> */}
                      {/* </div> */}
                    </CopyToClipboard>
                  </p>
                </div>
              </div>
              <div className="MyLink">
                <h3>
                  {t("My referral link")}
                  <CopyToClipboard
                    text={`https://rox.games/?refID=${walletData?._id}`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 20 20"
                      fill="#fff"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                      ></path>
                    </svg>
                  </CopyToClipboard>
                </h3>
                <a href="#">
                  rox.games?RefID={walletData?._id?.substr(0, 5) + "..."}
                </a>
                <p>
                  {t(
                    "Share your referral link and invite your friends to the Rox to build your team"
                  )}
                </p>
              </div>
            </div>
            <div className="ListArea">
              <div className="Item">
                <h3>
                  <span>
                    {t("Upline")}
                    <strong>
                      <p>
                        {t(
                          "Upline is the superior partner who invited you into the Rox system"
                        )}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                      </svg>
                    </strong>
                  </span>
                  <strong>{t("Level: 12")}</strong>
                </h3>
                <div className="ItemInner">
                  <div className="logo">
                    <img src="/images/logo.png" alt="avatar" />
                  </div>
                  <div className="ItemContent">
                    <h4>
                      {t("Rox")}{" "}
                      {/* <CopyToClipboard text={walletData?.address}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 20 20"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5"
                        >
                          <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                          ></path>
                        </svg>
                      </CopyToClipboard> */}
                    </h4>
                    <h5>
                      {walletData?.address?.substr(0, 4) +
                        "..." +
                        walletData?.address?.slice(-4)}
                      <CopyToClipboard
                        text={`https://polygonscan.com/address/${walletData?.address}`}
                      >
                        <div
                          className="roster-info-share"
                          onClick={() => setCopy(true)}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 20 20"
                            fill="#fff"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                          >
                            <path d="M15 6.667H8.332c-.92 0-1.667.746-1.667 1.666V15c0 .92.746 1.667 1.667 1.667h6.666c.92 0 1.667-.747 1.667-1.667V8.333c0-.92-.746-1.666-1.667-1.666Z"></path>
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.469 3.468A2.167 2.167 0 0 1 5 2.833h6.666A2.167 2.167 0 0 1 13.834 5v1.667a.5.5 0 0 1-1 0V5a1.167 1.167 0 0 0-1.167-1.167H5.001A1.167 1.167 0 0 0 3.834 5v6.667a1.167 1.167 0 0 0 1.167 1.166h1.666a.5.5 0 1 1 0 1H5.001a2.167 2.167 0 0 1-2.167-2.166V5c0-.575.228-1.126.635-1.532Z"
                            ></path>
                          </svg>
                          <span>{copy && "Copied!"}</span>
                        </div>
                      </CopyToClipboard>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="Item">
                <h3>
                  <span>
                    {t("Your Rox Token Balance")}
                    {/* <strong>
                      <p>
                        {t(
                          "Rox is the native BSC token of the Rox platform, which rewards its holders with automatic passive interest payments within 15 minutes"
                        )}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-question-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                      </svg>
                    </strong> */}
                  </span>
                </h3>
                <dvi className="ExtraInfo">
                  <h5>{t("0.000")}</h5>
                  <p style={{ visibility: "hidden" }}>{t("Fixed APY 36.5%")}</p>
                </dvi>
              </div>
            </div>
            <div className="FaceId">
              <div className="FaceIdInner">
                <div className="FaceIdItem">
                  <span>{t("Rox ID")}</span>
                  <strong>{walletData?._id}</strong>
                </div>
                <div className="FaceIdItem">
                  <span>{t("Partners")}</span>
                  <span className="ref_count">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.875 12.5a4.062 4.062 0 1 0 0-8.125 4.062 4.062 0 0 0 0 8.125Z"
                        stroke="#fff"
                        strokeMiterlimit="10"
                      ></path>
                      <path
                        d="M12.14 4.523c.36-.097.73-.147 1.102-.148a4.063 4.063 0 0 1 0 8.125M1.25 15.422a6.875 6.875 0 0 1 11.25 0M13.242 12.5a6.868 6.868 0 0 1 5.625 2.922"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>{" "}
                    {walletData?.refs?.length}
                  </span>
                </div>
              </div>
              <div className="FaceRefItem">
                {walletData &&
                  walletData?.refs?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link
                          href={`https://polygonscan.com/address/${item.address}`}
                        >
                          <a target="_blank">
                            <p>
                              <img src="/images/logo.png" /> {item.name} ID{" "}
                              {item._id?.substr(0, 5) + "..."}
                            </p>
                          </a>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .roster-info-share {
              display: flex;
            }

            .MainArea {
              padding-top: 70px !important;
              padding-bottom: 50px !important;
              border-radius: 10px;
              max-width: 900px;
              margin: auto;
              padding: 3px;
            }
            @media screen and (max-width: 991px) {
              .MainArea {
                margin: 30px 30px 100px;
              }
            }
            .Main svg {
              cursor: pointer;
              fill: var(--copygary);
            }
            .Main {
              margin: auto;
              border-radius: 10px;
              padding: 10px;
              background: var(--bigCtaBg);
              max-width: 900px;
            }

            .ProfileArea {
              display: flex;
              align-items: center;
              gap: 165px;
            }
            @media screen and (max-width: 991px) {
              .ProfileArea {
                display: grid;
                gap: 40px;
              }
            }

            .Profile {
              display: flex;
              align-items: center;
              gap: 20px;
              color: var(--colorWhite);
            }
            .Profile img {
              max-width: 120px;
              border-radius: 50%;
            }

            .ProfileContent span {
              display: block;
              color: var(--colorWhite);
              font-weight: 500;
            }
            .ProfileContent strong {
              font-size: 30px;
              font-weight: 700;
              margin: 5px 0;
              display: block;
            }
            .ProfileContent p {
              margin: 0;
              display: flex;
              align-items: center;
              gap: 10px;
            }
            @media screen and (max-width: 991px) {
              .ProfileContent strong {
                font-size: 20px;
              }

              .ProfileContent p {
                font-size: 12px;
              }
            }
            .MyLink {
              background: var(--darkstillblack);
              max-width: 450px;
              border-radius: 10px;
              padding: 25px;
            }
            .MyLink h3 {
              margin: 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              color: var(--colorWhite);
              font-size: 16px;
              margin-bottom: 20px;
            }

            .MyLink a {
              color: var(--colorWhite);
              text-decoration: none;
              font-weight: 700;
              font-size: 26px;
            }
            @media screen and (max-width: 991px) {
              .MyLink a {
                font-size: 18px;
              }
            }

            .MyLink p {
              color: var(--colorWhite);
              margin: 0;
              margin-top: 10px;
            }

            .ItemInner {
              display: flex;
              align-items: center;
              gap: 15px;
              margin-top: 10px;
            }
            .ItemInner img {
              max-width: 50px;
              border-radius: 50%;
            }

            .ListArea {
              display: flex;
              align-items: center;
              gap: 30px;
              margin-top: 30px;
            }
            @media screen and (max-width: 991px) {
              .ListArea {
                display: grid;
                gap: 30px;
              }
            }

            .ItemContent h4 {
              margin: 0;
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 24px;
            }

            .ItemContent h5 {
              display: flex;
              align-items: center;
              gap: 10px;
              font-size: 12px;
              margin: 0;
              margin-top: 5px;
            }

            .Item {
              background: var(--darkstillblack);
              padding: 20px;
              border-radius: 10px;
              color: var(--colorWhite);
              width: 396px;
            }
            @media screen and (max-width: 991px) {
              .Item {
                width: unset;
              }
            }
            .Item h3 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              position: relative;
              margin: 0;
            }
            .Item h3 strong:hover p {
              visibility: visible;
            }
            .Item h3 p {
              position: absolute;
              top: -93px;
              background: var(--bigCtaBg);
              color: var(--colorWhite);
              padding: 12px;
              border-radius: 10px;
              left: -20px;
              visibility: hidden;
            }
            .Item h3 span {
              display: flex;
              align-items: center;
              gap: 10px;
              color: var(--colorWhite);
              font-weight: 400;
              font-size: 16px;
            }
            .Item h3 strong {
              font-size: 14px;
              font-weight: 400;
            }

            .ExtraInfo h5 {
              margin: 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 20px;
              margin-top: 10px;
            }

            .ExtraInfo p {
              margin: -0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              font-size: 12px;
              margin-top: 20px;
            }

            .FaceId {
              background: var(--darkstillblack);
              max-width: 920px;
              border-radius: 10px;
              margin: 30px 0 0;
              padding: 20px;
              min-height: 500px;
            }
            .FaceId p {
              display: flex;
              align-items: center;
              gap: 20px;
              color: var(--colorWhite);
              font-weight: 700;
              background: var(--bigCtaBg);
              padding: 10px 20px;
              max-width: fit-content;
              border-radius: 10px;
            }
            .FaceId p img {
              max-width: 30px;
              border-radius: 50%;
            }

            .FaceIdInner {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 40px;
            }

            .FaceIdItem span {
              display: block;
              // color: var(--colorWhite);
              font-size: 16px;
              margin-bottom: 10px;
              display: flex;
              align-items: center;
              gap: 10px;
            }

            .FaceIdItem .ref_count path {
              stroke: var(--colorWhite);
            }
            .FaceIdItem strong {
              color: var(--colorWhite);
              font-size: 24px;
            }

            .FaceRefItem {
              display: flex;
              flex-wrap: wrap;
              column-gap: 10px;
            }
            .FaceRefItem a {
              text-decoration: none;
            }
            .FaceRefItem p {
              white-space: nowrap;
            }
          `}
        </style>
      </Layout>
    </>
  );
}
