import React from "react";

export default function RentOops() {
  return (
    <div>
      <div className="main_warning">
        <div className="warning-area ">
          <h5 className="accept">OOPS! SOMETHING WENT WRONG</h5>
          <p className="lending">
            MetaMask Message Signature: User denied message signature. Please
            try again later
          </p>
          <div className="btn_main">
            <button className="accept_btn">Cancle</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .main_warning {
            height: 100vh;
            width: 525px;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .warning-area {
            width: 100%;
            backdrop-filter: blur(30px);
            padding: 20px;
            text-align: center;
          }
          .accept {
            font-size: 25px;
            padding-bottom: 20px;
            max-width: 400px;
            margin: auto;
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
            width: 150px;
            padding: 10px 0;
            border: 1px solid #17716e;
            background: transparent;
            border-radius: 5px;
            color: #17716e;
            font-size: 18px;
            margin-right: 10px;
            font-weight: 600;
          }
          .accept_btn {
            width: 150px;
            padding: 10px 0;
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
    </div>
  );
}
