import Link from "next/link";
import React, { useState } from "react";

export default function ImageBox({ box, setBox, imageData }) {
  return (
    <div>
      {box && (
        <div className="horse-info-box-main image-main roster-hours-main">
          <div className="event-records-bg" onClick={() => setBox(false)}></div>
          <div className="container">
            <div className="roster-details ">
              <div className="close-icon" onClick={() => setBox(false)}>
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
              <div className="roster-content">
                <div className="w-full">
                  <img src={`images/locations/${imageData}`} alt="horse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .roster-content {
          grid-template-columns: 1fr 3fr;
          gap: 20px;
        }
        .close-icon {
          position: absolute;
          right: 25px;
          top: 25px;
        }

        .close-icon svg {
          width: 22px;
          height: auto;
          cursor: pointer;
        }
        .roster-details {
          background: var(--studListBg);
          margin: 20px 0;
          padding: 5px;
          position: relative;
          z-index: 9999;
        }
        .horse-info-box-main {
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 9999;
        }
        .roster-hours-main {
          display: flex;
          z-index: 9999;
          align-items: center;
        }
        .event-records-bg {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100vh;
          width: 100%;
          background: #0000008c;
          z-index: 1;
        }
        .event-records {
          padding-bottom: 1px;
          position: relative;
          background: var(--bigCtaBg);
          z-index: 99;
        }
        .image-main .container {
          max-width: 991px;
        }
        .event-records-table-horse {
          margin: 20px;
          overflow-x: auto;
        }
      `}</style>
    </div>
  );
}
