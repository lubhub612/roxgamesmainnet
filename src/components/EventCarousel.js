import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function EventCarousel({ showHorse }) {
  let settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const {t}=useTranslation()
    const handleLength = (data) => {
    let sum = 12;
    if (data == "") {
      return sum;
    } else {
      sum = sum - data.split(",").length;
    }
    return sum;
  };
  return (
    <>
      <div className="event-carousel">
        <div className="container event-overflow">
          <div className="">
            <h2 className="event-carousel-inner-area">
              <span>{t("Next to Run")}</span>
              {/* <Link href="#">
                <a>See All</a>
              </Link> */}
            </h2>
            <div className="event-area-inner">
              {showHorse && (
                <Slider {...settings}>
                  {showHorse &&
                    showHorse.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="event-item"
                          style={{ width: "430px" }}
                        >
                          <Image
                            src={`/images/locations/${item?.rcourse_id?.flag}`}
                            alt="event"
                            layout="fill"
                          />
                          <div className="event-item-content">
                            <span>{item.rcourse_id.Country}</span>
                            <h2>{item.rcourse_id.RaceCourses}</h2>
                            <h3>{item.class.Class}</h3>
                            <h4>
                              ${item.entry_fee} <span>{t("USD")}</span>
                            </h4>
                            <h5>
                              <span>{handleLength(item?.horse_ids)}</span>
                              {t("gate left")}
                            </h5>
                            <Link href={`/events?id=${item._id}`}>
                              <button>{t("Enter")}</button>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              )}
            </div>
            {/* {showHorse && (
              <Slider {...settings}>
                {showHorse.length > 0 &&
                  showHorse.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="event-carousel-item"
                        style={{ width: "200px" }}
                      >
                        <div>
                          <Link href="#">
                            <a>
                              <span className="circle-pulse"></span>
                              <h3>{item?.rcourse_id?.RaceCourses}</h3>
                              <strong>Upcoming</strong>
                            </a>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </Slider>
            )} */}
          </div>
        </div>
      </div>

        <style jsx>{`
          .event-carousel {
            background: var(--background);
            padding: 30px 0;
          }
        .event-overflow {
          overflow: hidden;
        }
        .event-area-inner {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
        }
        .event-item {
          position: relative;
          height: 200px;
          transition: 0.3s;
        }
        .event-item:after {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          content: "";
          background: linear-gradient(90deg, #000000c4 0, rgb(9 152 220 / 8%));
        }
        .event-item-content {
          position: absolute;
          padding: 30px;
          color: #fff;
          z-index: 1;
          width: 100%;
          height: 100%;
        }

        .event-item-content span {
          margin: 0;
          font-size: 12px;
        }

        .event-item-content h2 {
          font-weight: 600;
          margin: 5px 0;
          font-size: 24px;
        }

        .event-item-content h3 {
          font-weight: 600;
          font-size: 15px;
        }

        .event-item-content h4 {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #f0b90b;
          margin-top: 30px;
        }

        .event-item-content h5 {
          position: absolute;
          right: 30px;
          bottom: 23px;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .event-item-content h5 span {
          color: #fff;
          font-size: 24px;
        }

        .event-item-content button {
          position: absolute;
          right: 30px;
          bottom: 30px;
          background: linear-gradient(90deg, #f0b90b, #8a6900);
          border-radius: 8px;
          box-shadow: 0 0 8px 0px #f0b90b5e;
          color: #fff;
          cursor: pointer;
          border: none;
          font-size: 14px;
          font-weight: 500;
          padding: 10px 36px;
          font-family: "Montserrat", sans-serif;
          letter-spacing: 1px;
          visibility: hidden;
          opacity: 0;
        }
        .event-item-content button:hover {
          filter: brightness(1.15);
        }
        .event-item:hover button {
          visibility: visible;
          opacity: 1;
        }
        .event-item:hover {
          filter: brightness(1.15);
        }
        .event-item-content h4 span {
          font-weight: 500;
        }
        .event-item-content strong {
          position: absolute;
          right: 30px;
          top: 30px;
        }

        .event-carousel-inner-area {
          font-size: 14px;
          color: var(--colorWhite);
          opacity: 0.6;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .event-carousel-inner-area a {
          color: var(--titleColor);
        }
        .event-carousel-item {
          border-radius: 5px;
        }
        .event-carousel-item a {
          display: block;
          background: #ddd;
          padding: 12px;
          border-radius: 5px;
          min-height: 100px;
          display: grid;
          position: relative;
          background-color: #2a2e35;
          border-radius: 4px;
          box-shadow: 0 4px 8px rgb(0 0 0 / 12%);
          background-image: linear-gradient(
            90deg,
            #747e163d,
            rgba(42, 46, 53, 0.06)
          );
        }

        .event-carousel-item h3 {
          color: #fff;
          font-weight: 500;
          font-size: 14px;
        }

        .event-carousel-item strong {
          color: #e8b208;
          font-weight: 500;
          font-size: 12px;
          display: flex;
          align-items: flex-end;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
            width: 7px;
            height: 7px;
            left: 0;
            top: 0;
          }
          95% {
            opacity: 0.1;
            left: -10.5px;
            top: -10.5px;
            width: 28px;
            height: 28px;
          }
          100% {
            opacity: 0;
            width: 7px;
            height: 7px;
            left: 0;
            top: 0;
          }
        }
        .circle-pulse {
          background: #ff231f;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          position: absolute;
          right: 15px;
          top: 15px;
          z-index: 9999;
        }
        .circle-pulse:after {
          background-color: #ff231f;
          content: "";
          display: table;
          border-radius: 50%;
          position: absolute;
          animation-name: pulse;
          animation-duration: 0.9s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-out;
        }
        span.jsx-a7b3ee4c5db29835.circle-pulse {
        }
      `}</style>
    </>
  );
}
