import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";


export default function RentTerms() {
  const router = useRouter();
  const [info, setInfo] = useState(false);
  const [cookies, setCookie] = useCookies(["Market_Terms_Service"]);

  const handleButton = () => {
    router.back();
    setInfo(false);
  };

  useEffect(() => {
    if (cookies.Market_Terms_Service) {
      setCookie("Market_Terms_Service", true);
      setInfo(false);
    } else {
      setInfo(true);
    }
  }, []);
  return (
    <>
      {info && (
        <div className="main_warning">
          <div className="warning-area ">
          <div className="close" onClick={handleButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </div>
            <h5 className="accept">ACCEPT THE TERMS </h5>
            <p className="lending">
              Lending and borrowing racehorses is powered by ROX Games Technology.
              By clicking I Accept, I hereby agree and consent to <span>ROX Games
                Technologys Terms and Conditions </span> and <span>Privacy policy.</span>
            </p>
            <div className="btn_main">
              <button className="cancle" onClick={handleButton} >Cancel</button>
              <button className="accept_btn" onClick={() => {
                      setCookie("Market_Terms_Service", true);
                      setInfo(false);
                    }}>I Accept</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>
        {`
          .main_warning {
            height: 100vh;
            width: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position:fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: #0000008c;
            z-index: 1;
          }
          .warning-area {
            width: 500px;
            // backdrop-filter: blur(30px);
            padding: 20px;
            text-align: center;
            border-radius: 10px;
            z-index: 2;
            background: var(--bigCtaBg);
          }
          .close {
            text-align: end;
          }
          .accept {
            font-size: 25px;
            padding-bottom: 20px;
          }
          .lending {
            font-size: 18px;
            font-weight:500;
          }
          .lending span{
            color:#17716E;
          }
          .btn_main{
            padding-top:20px;
          }
          .cancle{
            width: 150px;
            padding: 10px 0;
            border: 1px solid #17716E;
            background: transparent;
            border-radius: 5px;
            color: #17716E;
            font-size: 18px;
            margin-right:10px;
            font-weight: 600;
          }
          .accept_btn{
            width: 150px;
            padding: 10px 0;
            background-color:#17716E;
            border-radius: 5px;
            color: #ffffff;
            border: 1px solid #17716E;
            font-size: 18px;
            margin-right:10px;
            font-weight: 600;
          }
          .close-icon {
            position: absolute;
            top : 0px;
            right : 0px;
            // right: 28%;
            cursor: pointer;
          }
          .close-icon svg {
            width: 20px;
            height: 20px;
            color: #676666;
          }
        `}
      </style>
    </>
  );
}
