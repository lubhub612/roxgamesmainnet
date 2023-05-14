import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function RentBorrow(props) {
  const [info, setInfo] = useState(true);
  // const[cancel,setCancel] = useState(false);
  const handleCancel = () => {
    props.rent(false);
  };
  return (
    <>
      <div className="main_warning">
        <div className="warning-area ">
          <div className="close" onClick={handleCancel}>
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
          <h5 className="accept">
            BORROW A RACEHORSE FROM THE LENDING MARKETPLACE
          </h5>
          <div className="extensive">
            <div className="horse-img">
              <strong>
                <Image
                  src="/images/horse/1.png"
                  alt="horse"
                  width={63}
                  height={63}
                />
              </strong>
            </div>
            <div className="cleavage">
              <div className="cle">
                {/* <h5>{props.horseData.name}</h5> */}
                <h5>Ajay horse 1</h5>
                <button></button>
                <button>1508</button>
              </div>
              <span>Z5 Buterin Stallion</span>
            </div>
          </div>
          <div className="days">
            <div className="period">
              <h5>LENDING PERIOD</h5> <h5>4 days</h5>
            </div>
            <div className="period">
              <h5>LENDING PERIOD</h5>{" "}
              <h5>
                50/50 <span> Borrow Lender</span>
              </h5>
            </div>
          </div>
          <div className="btn_main">
            <button className="cancle" onClick={handleCancel}>
              Cancel
            </button>
            <button className="accept_btn">Borrow Racehorse</button>
          </div>
        </div>
      </div>
      {/* {cancel && <RentOops/>} */}

      <style jsx>
        {`
          .main_warning {
            height: 100vh;
            width: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: #0000008c;
            z-index: 9999;
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
          .extensive {
            display: flex;
            align-items: center;
            background: var(--studListBg);
            border-radius: 8px;
            padding: 15px;
          }
          .cleavage {
            padding-left: 15px;
          }
          .cle {
            display: flex;
            align-items: center;
            padding-bottom: 10px;
          }

          .cleavage h5 {
            font-size: 15px;
            padding: 0;
          }
          .close {
            text-align: end;
          }
          .accept {
            font-size: 20px;
            padding-bottom: 20px;
            max-width: 350px;
            margin: auto;
          }
          .days {
            padding: 15px;
            background: var(--studListBg);
            border-radius: 8px;
            margin-top: 10px;
          }
          .period {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 10px;
            text-align: end;
          }
          .period h5 {
            font-size: 15px;
          }
          .period span {
            display: block;
          }
          .lending {
            font-size: 18px;
            font-weight: 500;
          }
          .lending span {
            color: #17716e;
          }
          .btn_main {
            padding-top: 20px;
          }
          .cancle {
            width: 200px;
            padding: 7px 0;
            border: 1px solid #17716e;
            background: transparent;
            border-radius: 5px;
            color: #17716e;
            font-size: 18px;
            margin-right: 10px;
            font-weight: 600;
          }
          .accept_btn {
            width: 200px;
            padding: 7px 0;
            background-color: #17716e;
            border-radius: 5px;
            color: #ffffff;
            border: 1px solid #17716e;
            font-size: 18px;
            margin-right: 10px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}
