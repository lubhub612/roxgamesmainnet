import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Countdown from "react-countdown";
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import Image from "next/image";
import Layout from "../../components/Layout";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";

export default function Betting() {
  const { invokeServer } = useContext(GlobalContext);
  const [result, setResult] = useState([]);
  // console.log("🚀 ~ file: index.js:21 ~ Betting ~ result:", result.forEach((key)=>{
  //   console.log(key.includes('gate'), "key");
  // }))

  const renderer = ({ seconds, minutes }) => {
    return (
      <span className="hoursTimes">
        {minutes}:{seconds}
      </span>
    );
  };

  useEffect(() => {
    invokeServer(
      "get",
      "/api/betting/result?API_KEY=SS6wGL4kdWlqj9en6CdErrYGCUuiJVLLithdGz9VOEpVEasIorlXjHc3W9BkLlO9YDxQoCJQvW08Rjd00a9TAUgr4De5ArmimV64ygPg1Y62n9xWCB6txuNULDpOj36s"
    ).then((result) => {
      setResult(result.data);
    });
  }, []);

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }
  function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (
      (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
    );
  }

  const HandleColor = (id, item) => {
    let dataToReturn;
    Object.keys(item).map((keys) => {
      console.log("🚀 ~ file: index.js:91 ~ Object.keys ~ keys:", keys)
      if (similarity("gate", keys) > 0.6) {
        if (item[keys].horse_id === id) {
          console.log(item[keys], "item[keys]item[keys]");
          dataToReturn = item[keys].color;
        }
      }
    });
    return dataToReturn;
  };

  return (
    <Layout>
      <div className="betting-area">
        <div className="betting-one">
          <Tabs defaultIndex={1}>
            <TabList>
              <Tab>Results</Tab>
              <Tab>02:20</Tab>
              <Tab>03:11</Tab>
              <Tab>04:20</Tab>
              <Tab>05:05</Tab>
            </TabList>

            <TabPanel>
              <ul className="result-title">
                <li>ID</li>
                <li>Date/Time</li>
                <li>Event</li>
                <li>Results</li>
              </ul>

              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      {result.length > 0 &&
                        result.map((item, index) => {
                          return (
                            <ul key={index} className="result-value">
                              <li>{item._id}</li>
                              <li>{item.start_time}</li>
                              <li>
                                <strong>{item.rcourse_id.RaceCourses}</strong>
                              </li>
                              <li className="result-value-inn">
                                {item.horse_winners.split(",").map((id) => {
                                  return (
                                    <span
                                      style={{
                                        background: HandleColor(id, item),
                                      }}
                                      key={index}
                                    >
                                      {id}
                                    </span>
                                  );
                                })}
                              </li>
                            </ul>
                          );
                        })}
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul className="result-winner">
                      <li>Winner</li>
                      <li>Place</li>
                      <li>Show</li>
                    </ul>
                    <ul className="result-winner-content">
                      <li>
                        <span>
                          <strong>5</strong>
                          3.4
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>5</strong>
                          3.4
                        </span>
                        <span>
                          <strong>5</strong>
                          3.4
                        </span>
                      </li>
                      <li>
                        <span>
                          <strong>5</strong>
                          3.4
                        </span>
                        <span>
                          <strong>5</strong>
                          3.4
                        </span>
                        <span>
                          <strong>5</strong>
                          3.4
                        </span>
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <div className="betting-winner">
                <h2>Horses 8</h2>
                <h3>
                  <span>Place your bets</span>
                </h3>
                <Countdown date={Date.now() + 100000} renderer={renderer} />
              </div>
              <ul className="betting-list-title">
                <li>Name</li>
                <li>Last 5</li>
                <li>Chances</li>
                <li>Winner</li>
                <li>Place</li>
                <li>Show</li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/1.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/2.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/3.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/4.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/5.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>

              <div className="betting-footer">
                <Tabs>
                  <TabList>
                    <Tab>FORECAST</Tab>
                    <Tab>QUINELLA</Tab>
                    <Tab>TRICAST</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left better-foot">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left better-foot">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="betting-winner">
                <h2>Horses 8</h2>
                <h3>
                  <span>Place your bets</span>
                </h3>
                <Countdown date={Date.now() + 100000} renderer={renderer} />
              </div>
              <ul className="betting-list-title">
                <li>Name</li>
                <li>Last 5</li>
                <li>Chances</li>
                <li>Winner</li>
                <li>Place</li>
                <li>Show</li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/1.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/2.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/3.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/4.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/5.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>

              <div className="betting-footer">
                <Tabs>
                  <TabList>
                    <Tab>FORECAST</Tab>
                    <Tab>QUINELLA</Tab>
                    <Tab>TRICAST</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="betting-winner">
                <h2>Horses 8</h2>
                <h3>
                  <span>Place your bets</span>
                </h3>
                <Countdown date={Date.now() + 100000} renderer={renderer} />
              </div>
              <ul className="betting-list-title">
                <li>Name</li>
                <li>Last 5</li>
                <li>Chances</li>
                <li>Winner</li>
                <li>Place</li>
                <li>Show</li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/1.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/2.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/3.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/4.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/5.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>

              <div className="betting-footer">
                <Tabs>
                  <TabList>
                    <Tab>FORECAST</Tab>
                    <Tab>QUINELLA</Tab>
                    <Tab>TRICAST</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="betting-winner">
                <h2>Horses 8</h2>
                <h3>
                  <span>Place your bets</span>
                </h3>
                <Countdown date={Date.now() + 100000} renderer={renderer} />
              </div>
              <ul className="betting-list-title">
                <li>Name</li>
                <li>Last 5</li>
                <li>Chances</li>
                <li>Winner</li>
                <li>Place</li>
                <li>Show</li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/1.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/2.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/3.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/4.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />{" "}
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>
              <ul className="betting-list-area-content">
                <li>
                  <Image
                    src="/images/number/5.svg"
                    alt="rox"
                    width={24}
                    height={24}
                  />
                  Mystical
                </li>
                <li>
                  <span>X</span> <strong>1</strong>
                  <span>X</span>
                  <strong>2</strong>
                  <span>X</span>
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17_3)">
                      <path
                        d="M3.612 15.443C3.226 15.641 2.788 15.294 2.866 14.851L3.696 10.121L0.172996 6.76501C-0.156004 6.45101 0.0149962 5.87701 0.455996 5.81501L5.354 5.11901L7.538 0.792012C7.735 0.402012 8.268 0.402012 8.465 0.792012L10.649 5.11901L15.547 5.81501C15.988 5.87701 16.159 6.45101 15.829 6.76501L12.307 10.121L13.137 14.851C13.215 15.294 12.777 15.641 12.391 15.443L8 13.187L3.612 15.443Z"
                        fill="#FFD012"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_3">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
                <li>
                  <span>4.05</span>
                </li>
              </ul>

              <div className="betting-footer">
                <Tabs>
                  <TabList>
                    <Tab>FORECAST</Tab>
                    <Tab>QUINELLA</Tab>
                    <Tab>TRICAST</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="better-footer-number">
                      <Image
                        src="/images/number/1.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/2.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/3.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/4.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/5.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/6.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/7.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                      <Image
                        src="/images/number/8.svg"
                        alt="rox"
                        width={30}
                        height={30}
                      />
                    </div>
                    <ul className="better-footer-list">
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                      <li>1st</li>
                    </ul>
                    <ul className="better-footer-list">
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                      <li>2st</li>
                    </ul>
                    <p className="better-para">
                      Use the filter above to select odds
                    </p>
                    <div className="better-footer-area">
                      <div className="better-footer-area-left">
                        <h2>OVER / UNDER 3.5</h2>
                        <ul>
                          <li>
                            <span>Over</span>
                            <strong>1.89</strong>
                          </li>
                          <li>
                            <span>Under</span>
                            <strong>2.03</strong>
                          </li>
                        </ul>
                      </div>
                      <div className="better-footer-area-left">
                        <h2>EVEN / ODD</h2>
                        <ul>
                          <li>
                            <span>Even</span>
                            <strong>1.78</strong>
                          </li>
                          <li>
                            <span>Odd</span>
                            <strong>2.16</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="betting-two">
          <h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>{" "}
            Hourse 8
          </h2>
          <div className="betting-two-img">
            <Image
              src="/images/horse-timer.jpg"
              alt="rox"
              width={870}
              height={490}
            />
            <Countdown date={Date.now() + 100000} renderer={renderer} />
          </div>
          <h3># 450341553</h3>
          <ul>
            <li>
              <strong>Participants</strong>
              <strong>WIN</strong>
              <strong>P1-2</strong>
              <strong>51-3</strong>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/1.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/2.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/3.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/4.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/5.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/6.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/7.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
            <li>
              <span>
                <Image
                  src="/images/number/8.svg"
                  alt="rox"
                  width={30}
                  height={30}
                />{" "}
                Morgan
              </span>
              <span>4.06</span> <span>2.03</span> <span>1.33</span>
            </li>
          </ul>
        </div>
        <div className="betting-three">
          <div className="betting-three-header">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>{" "}
              BET SLIP <span>1</span>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-card-text"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
              </svg>
              My BETS
            </button>
          </div>
          <div className="betting-three-head2">
            <table>
              <thead>
                <tr>
                  <th>Selection</th>
                  <th>Odds</th>
                  <th>Stake</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {" "}
                <tr>
                  <td>OU: UN</td>
                  <td>1.73</td>
                  <td>
                    <input type="number" value="1" />
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-x-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="betting-three-tabs">
            <Tabs>
              <TabList>
                <Tab>SINGLE</Tab>
                <Tab>MULTIPLE</Tab>
                <Tab>SYSTEM</Tab>
              </TabList>
              <TabPanel>
                <div className="betting-three-combi">
                  <table>
                    <thead>
                      <tr>
                        <td rowSpan="2">GR</td>
                        <td rowSpan="2">Combi</td>
                        <td colSpan="2">Odds</td>
                        <td rowSpan="2">Group Stake</td>
                      </tr>
                      <tr>
                        <td>Min</td>
                        <td>Max</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1.67</td>
                        <td>1.67</td>
                        <td>
                          <input
                            maxLength="10"
                            size="10"
                            placeholder="0.00"
                            tabIndex="1"
                            value="1"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5">
                          <div>
                            <button value="1">1</button>
                            <button value="2">2</button>
                            <button value="5">5</button>
                            <button value="10">10</button>
                            <button value="0">Clear</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5">
                          <div className="betting-three-re">
                            <div>
                              <span>Pot. MIN Win </span>
                              <span>1.67 €</span>
                            </div>
                            <div>
                              <span>Pot. MAX Win </span>
                              <span>1.67 €</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="betting-three-results">
                    <div>
                      <span>Total Stake</span>
                      <span>1 €</span>
                    </div>
                    <div>
                      <span>Win Tax (15%)</span>
                      <span>0.26 €</span>
                    </div>
                    <div>
                      <span>Max Net Win</span>
                      <span>1.47 €</span>
                    </div>
                  </div>
                  <div className="betting-three-result-button">
                    <button>
                      Clear{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </button>
                    <button>
                      Place Bet{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="betting-three-combi">
                  <table>
                    <thead>
                      <tr>
                        <td rowSpan="2">GR</td>
                        <td rowSpan="2">Combi</td>
                        <td colSpan="2">Odds</td>
                        <td rowSpan="2">Group Stake</td>
                      </tr>
                      <tr>
                        <td>Min</td>
                        <td>Max</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1.67</td>
                        <td>1.67</td>
                        <td>
                          <input
                            maxLength="10"
                            size="10"
                            placeholder="0.00"
                            tabIndex="1"
                            value="1"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5">
                          <div>
                            <button value="1">1</button>
                            <button value="2">2</button>
                            <button value="5">5</button>
                            <button value="10">10</button>
                            <button value="0">Clear</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5">
                          <div className="betting-three-re">
                            <div>
                              <span>Pot. MIN Win </span>
                              <span>1.67 €</span>
                            </div>
                            <div>
                              <span>Pot. MAX Win </span>
                              <span>1.67 €</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="betting-three-results">
                    <div>
                      <span>Total Stake</span>
                      <span>1 €</span>
                    </div>
                    <div>
                      <span>Win Tax (15%)</span>
                      <span>0.26 €</span>
                    </div>
                    <div>
                      <span>Max Net Win</span>
                      <span>1.47 €</span>
                    </div>
                  </div>
                  <div className="betting-three-result-button">
                    <button>
                      Clear{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </button>
                    <button>
                      Place Bet{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="betting-three-combi">
                  <table>
                    <thead>
                      <tr>
                        <td rowSpan="2">GR</td>
                        <td rowSpan="2">Combi</td>
                        <td colSpan="2">Odds</td>
                        <td rowSpan="2">Group Stake</td>
                      </tr>
                      <tr>
                        <td>Min</td>
                        <td>Max</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1.67</td>
                        <td>1.67</td>
                        <td>
                          <input
                            maxLength="10"
                            size="10"
                            placeholder="0.00"
                            tabIndex="1"
                            value="1"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5">
                          <div>
                            <button value="1">1</button>
                            <button value="2">2</button>
                            <button value="5">5</button>
                            <button value="10">10</button>
                            <button value="0">Clear</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="5">
                          <div className="betting-three-re">
                            <div>
                              <span>Pot. MIN Win </span>
                              <span>1.67 €</span>
                            </div>
                            <div>
                              <span>Pot. MAX Win </span>
                              <span>1.67 €</span>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="betting-three-results">
                    <div>
                      <span>Total Stake</span>
                      <span>1 €</span>
                    </div>
                    <div>
                      <span>Win Tax (15%)</span>
                      <span>0.26 €</span>
                    </div>
                    <div>
                      <span>Max Net Win</span>
                      <span>1.47 €</span>
                    </div>
                  </div>
                  <div className="betting-three-result-button">
                    <button>
                      Clear{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                      </svg>
                    </button>
                    <button>
                      Place Bet{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check-lg"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <style jsx>{`
        .betting-area {
          display: grid;
          grid-template-columns: 3fr 1fr 1fr;
          gap: 10px;
          margin: 50px 20px;
        }

        ul.result-title {
          background: #1c5446;
          display: grid;
          color: #fff;
          font-weight: 700;
          padding: 15px 40px;
          grid-template-columns: 1fr 1fr 1fr 3fr;
          text-align: center;
        }

        ul.result-value {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 3fr;
          text-align: center;
        }

        ul.result-winner {
          background: #585858;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          color: #fff;
          text-align: center;
          padding: 10px;
        }

        ul.result-winner-content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
          background: #e6e6e6;
        }

        ul.result-winner-content li {
          border: 1px solid #222222;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 20px;
          justify-content: center;
        }
        ul.result-winner-content span {
          color: #000;
        }

        ul.result-winner-content li strong {
          background: #045c00;
          color: #fff;
          padding: 5px 10px;
          border-radius: 50px;
        }

        ul.result-winner-content li span {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .result-value li span {
          background: #ff0413;
          color: #fff;
          vertical-align: middle;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 5px;
          width: 25px;
          height: 25px;
          font-weight: 700;
        }

        .result-value-inn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
        }
        .result-value-inn span {
          width: auto !important;
        }
        .result-value li span:nth-child(2) {
          background: #312783;
        }

        .result-value li span:nth-child(3) {
          background: #015c01;
        }

        .betting-winner {
          background: #1c5446;
          text-align: center;
          color: #fff;
          padding: 10px;
          position: relative;
        }

        .betting-winner h2 {
          margin: 0;
          font-size: 18px;
        }
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .betting-winner h3 {
          background: #444444;
          margin: 8px;
          display: inline-block;
          padding: 6px 30px;
          border: 1px solid #fff;
          font-size: 16px;
        }
        .betting-winner h3 span {
          animation: blink 1.4s infinite;
        }
        ul.betting-list-title {
          display: grid;
          align-items: center;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          text-align: center;
          background: #1c5446;
          color: #fff;
          margin-top: 10px;
          padding: 12px;
        }

        ul.betting-list-area-content {
          display: grid;
          align-items: center;
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          text-align: center;
          background: #e6e6e6;
          padding: 15px;
          border-bottom: 1px solid #9bad74;
        }

        ul.betting-list-area-content li img {
          height: auto;
          width: 30px;
        }

        ul.betting-list-area-content li:nth-child(1) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 700;
        }

        ul.betting-list-area-content li:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        ul.betting-list-area-content li:nth-child(2) strong {
          width: 25px;
          height: 25px;
          background: #e6bb10;
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 50px;
          color: #fff;
        }

        ul.betting-list-area-content li:nth-child(3) {
          display: flex;
          justify-content: center;
          gap: 10px;
        }

        ul.betting-list-area-content li:nth-child(4) span,
        ul.betting-list-area-content li:nth-child(5) span,
        ul.betting-list-area-content li:nth-child(6) span {
          background: #000;
          color: #fff;
          font-weight: 700;
          padding: 8px 20px;
          border-radius: 5px;
        }

        .betting-footer {
          margin-top: 20px;
        }

        .better-footer-number {
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 10px 0;
        }

        .better-footer-number img {
          height: auto;
          width: 50px;
        }

        ul.better-footer-list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          gap: 10px;
          padding: 5px;
        }

        ul.better-footer-list li {
          border: 1px solid #000;
          display: block;
          background: #000;
          width: 100%;
          color: #a7a7a7;
          padding: 5px 20px;
          text-align: center;
        }

        p.better-para {
          background: #fff;
          text-align: center;
          font-weight: 700;
          padding: 5px;
          font-style: italic;
          color: #000;
          margin: 20px 0;
        }

        .better-footer-area {
          display: grid;
          align-items: center;
          justify-content: space-between;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .better-footer-area-left h2 {
          background: #1c5446;
          text-align: center;
          color: #fff;
          font-size: 18px;
          padding: 6px;
        }

        .better-footer-area-left ul {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .better-footer-area-left ul li span {
          display: block;
          background: #fff;
          text-align: center;
          border: 1px solid #0000;
          font-weight: 700;
          color: #000;
        }

        .better-footer-area-left ul li strong {
          background: #000;
          display: block;
          color: #fff;
          text-align: center;
          padding: 10px;
          font-size: 22px;
        }

        .betting-two img {
          max-width: 100%;
          height: auto;
        }

        .betting-two h2 {
          background: #1c5446;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 8px 20px;
          font-size: 20px;
          margin: 0;
        }

        .betting-two h2 svg {
          height: auto;
          width: 22px;
        }

        .betting-two-img {
          position: relative;
        }

        .betting-two h3 {
          background: #222222;
          margin: 0;
          color: #fff;
          padding: 5px 20px;
          font-weight: 400;
        }

        .betting-two ul li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #3b3b3b;
          border-top: 1px solid #000;
          padding: 12px;
        }

        .betting-two ul li img {
          height: auto;
          width: 24px;
        }

        .betting-two ul li span {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          font-weight: 400;
        }

        .betting-two ul li strong {
          color: #fff;
        }

        .betting-two ul li:nth-child(1) {
          background: #313131;
        }
        .betting-list-area-content li {
          color: #000;
        }
        .betting-three {
          background: #dde3e1;
          padding: 15px 5px;
        }

        .betting-three-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 5px;
        }

        .betting-three-header button {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 16px 14px;
          border-radius: 10px;
          border: none;
          font-weight: 700;
          justify-content: center;
          background: #828282;
          color: #fff;
        }

        .betting-three-header button:first-child {
          background: #ff0a00;
          color: #fff;
        }

        .betting-three-header button span {
          background: #000;
          border: 1px solid #fff;
          padding: 2px;
          color: #fff;
        }

        .betting-three-head2 table {
          border-collapse: collapse;
          table-layout: fixed;
          width: 100%;
          background: #fff;
          color: #000;
        }

        .betting-three-head2 th {
          padding-top: 5px;
          border-right: 1px inset rgba(128, 128, 128, 0.4);
          background: #417d0d;
          padding: 5px;
          color: #fff;
        }

        .betting-three-head2 td {
          padding: 3px;
          text-align: center;
          font-weight: 700;
        }

        .betting-three-head2 table input {
          width: 50px;
          text-align: center;
          padding: 3px;
          background: #fff;
          color: #000;
          font-weight: 700;
          border: 1px solid #000;
        }

        .betting-three-head2 th:first-child {
          width: 110px;
          text-align: left;
          padding-left: 10px;
        }

        .betting-three-head2 td svg {
          color: #ff323f;
          cursor: pointer;
        }

        .betting-three-head2 td:first-child {
          text-align: left;
          padding-left: 10px;
        }
        .betting-three-combi thead {
          color: #ffffff;
          background: #1c5446;
          font-size: 13.2px;
          font-weight: 700;
        }

        .betting-three-combi thead > tr > td {
          white-space: pre-wrap;
        }

        .betting-three-combi td {
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 1px;
          padding: 3px 5px;
          border: 1px solid #222222;
        }

        .betting-three-combi table {
          table-layout: fixed;
          min-width: 100%;
          border-collapse: collapse;
          text-align: center;
        }

        .betting-three-combi tbody td {
          background: #fff;
          color: #000;
          font-weight: 700;
          padding: 6px 5px;
        }

        .betting-three-combi input {
          background: #fff;
          border: 1px solid #000;
          color: #000;
          text-align: center;
          width: 40px;
        }

        .betting-three-combi tbody tr div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          gap: 5px;
        }

        .betting-three-combi tbody tr div button {
          background: #000;
          border: none;
          color: #fff;
          padding: 10px;
          width: 100%;
          border-radius: 5px;
          cursor: pointer;
        }
        .jsx-3442513288.betting-three-combi thead {
          color: #ffffff;
          background: #d60000;
          font-size: 13.2px;
          font-weight: 700;
        }

        .jsx-3442513288.betting-three-combi thead > tr > td {
          white-space: pre-wrap;
        }

        .jsx-3442513288.betting-three-combi td {
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 1px;
          padding: 3px 5px;
          border: 1px solid #222222;
        }

        .jsx-3442513288.betting-three-combi table {
          table-layout: fixed;
          min-width: 100%;
          border-collapse: collapse;
          text-align: center;
        }

        .jsx-3442513288.betting-three-combi tbody td {
          background: #fff;
          color: #000;
          font-weight: 700;
          padding: 6px 5px;
        }

        .jsx-3442513288.betting-three-combi input {
          background: #fff;
          border: 1px solid #000;
          color: #000;
          text-align: center;
          width: 40px;
        }
        .betting-three-tabs .react-tabs__tab {
          color: #fff;
        }
        .jsx-3442513288.betting-three-combi tbody tr div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          gap: 5px;
        }

        .jsx-3442513288.betting-three-combi tbody tr div button {
          background: #000;
          border: none;
          padding: 10px;
          width: 100%;
        }

        .betting-three-re > div {
          margin-bottom: 3px;
          padding-bottom: 3px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .betting-three-re {
          display: block !important;
          font-weight: 500;
          margin: 2px 5px;
        }

        .betting-three-results {
          background: #1c5446;
          color: #fff;
        }

        .betting-three-results > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px 10px;
          border-bottom: 1px solid #dddddd57;
        }

        .betting-three-result-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px;
          gap: 10px;
        }

        .betting-three-result-button button {
          width: 100%;
          display: flex;
          color: #fff;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px;
          font-size: 16px;
          border-radius: 10px;
          border: none;
        }

        .betting-three-result-button button:nth-child(1) {
          background: #ff0a00;
        }

        .betting-three-result-button button:nth-child(2) {
          background: #63b600;
        }
        .betting-two {
          background: #222222;
        }
        @media screen and (max-width: 991px) {
          .betting-area {
            grid-template-columns: 1fr;
          }
          .betting-two {
            background: #222222;
          }

          ul.betting-list-title li:nth-child(2),
          ul.betting-list-title li:nth-child(3) {
            display: none;
          }

          ul.betting-list-area-content li:nth-child(2),
          ul.betting-list-area-content li:nth-child(3) {
            display: none !important;
          }

          ul.result-value li {
            font-size: 10px;
          }

          ul.result-winner-content {
            display: block;
          }

          ul.result-winner-content li {
            display: grid !important;
          }

          .better-footer-number {
            display: flex;
          }

          ul.better-footer-list {
            grid-template-columns: 1fr 1fr !important;
            display: grid;
          }

          .better-footer-area {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          ul.betting-list-area-content {
            display: flex;
            gap: 5px;
            justify-content: space-between;
          }

          ul.betting-list-title {
            display: flex;
            justify-content: space-between;
          }

          ul.betting-list-area-content li span {
            padding: 12px !important;
          }

          ul.betting-list-area-content li:nth-child(1) span {
            display: none !important;
          }
        }
      `}</style>
    </Layout>
  );
}
