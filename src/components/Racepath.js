import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Racepath = (props) => {

  const distance = props.distance;
  const [startMeter, setStartMeter] = useState([]);
  const [height, setHeight] = useState()
  const ref = useRef(null)

  
  // const loop = () => {
  //   const array = [];
  //   for (let i = 100; i < distance; i = i + 100) {
  //     array = [...array, i];
  //   }
  //   return array;
  // };

  useEffect(() => {
    setHeight(ref?.current?.clientHeight)
  },[height])


  props.func(height)
  
  useEffect(() => {
    const array = [];
    for (let i = 100; i <= distance; i += 100) {
      array.push(i);
    }
    setStartMeter(array);
  }, [distance]);

  return (
    <>
      <div ref={ref} >
        <div className="path-start">
          <div>
            <div className="">
              <div className="border-for-meter finish-line">
                <div className="position meter-count-latter">
                  <h2 className="count-latter finish-count">FINISH</h2>
                </div>
              </div>
            </div>
          </div>
          {startMeter && 
             startMeter?.map((item) => {
            return (
              <div key={item}>
                <div className="border-dark"></div>
                <div className="border-for-meter">
                  <div className="position meter-count-latter">
                    <h2 className="count-latter ">{item}m</h2>
                  </div>
                </div>
              </div>
            );
          })}

          <div>
            <div className="border-dark"></div>
            <div className="border">
              <div className="position">
                <h2 className="count-latter">Start</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .path-start {
            width: 100%;
          }
          .finish-line {
            margin-top: 50px !important;
            background: linear-gradient(90deg, rgba(0,177,140,1) 0%, rgba(0,177,140,1) 91%, rgba(0,177,140,0) 91%, rgba(0,177,140,0) 100%) !important;
          }
          .finish-count {
            color: #00b18c !important;
          }
          .border-dark {
            width: 100%;
            height: 1px;
            margin-top: 200px;
            background: #646a7147;
          }
          .border {
            position: relative;
            width: 100%;
            height: 1px;
            margin-top: 190px;
            background: #646a71;
          }
          .meter-count-latter {
            top: -11px !important;
            right: 6px !important;
          }
          .border-for-meter {
            position: relative;
            width: 100%;
            height: 1.1px;
            margin-top: 190px;
            background: rgb(74, 74, 74);
            background: linear-gradient(
              90deg,
              rgba(74, 74, 74, 1) 0%,
              rgba(74, 74, 74, 0.7175245098039216) 71%,
              rgba(74, 74, 74, 0.41220238095238093) 83%,
              rgba(74, 74, 74, 0) 94%
            );
          }
          .position {
            position: absolute;
            top: -38px;
            right: 18px;
          }
          .count-latter {
            font-size: 14px;
            color: #646a71d1;
            font-size: 15px;
            color: #646a71;
            font-weight: 500;
          }
        `}
      </style>
    </>
  );
};

export default Racepath;
