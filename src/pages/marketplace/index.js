import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import MarketplaceTerms from "../../components/MarketplaceTerms";
import { useTranslation } from "react-i18next";
export default function NftListingProfile() {
  const [price, setPrice] = useState(false);
  const [activeItem, setActiveItem] = useState(true);
  const [singleLayout, setSingleLayout] = useState(true);
  const {t}=useTranslation()
  return (
    <Layout>
      <div className="nft-listing-profile-banner">
        <Image
          src="/images/nft-pro-banner.png"
          alt="nft"
          layout="fill"
          objectFit="cover"
        />

        <div className="profile-thumb">
          <Image
            src="/images/profile-img.png"
            alt="profile"
            layout="fill"
            objectFit="cover"
            className="profile-thumb-img"
          />
        </div>
      </div>
      <div className="nft-listing-Profile">
        <div className="nft-listing-profile-left">
          <h2>
            {t("ROX Games")}
            <svg
              aria-label="verified-icon"
              fill="#4281E2"
              viewBox="0 0 30 30"
              className="jsx-b4ee19148aa84e4f sc-50keu7-0 fTpPkd"
            >
              <path
                d="M13.474 2.80108C14.2729 1.85822 15.7271 1.85822 16.526 2.80108L17.4886 3.9373C17.9785 4.51548 18.753 4.76715 19.4892 4.58733L20.9358 4.23394C22.1363 3.94069 23.3128 4.79547 23.4049 6.0278L23.5158 7.51286C23.5723 8.26854 24.051 8.92742 24.7522 9.21463L26.1303 9.77906C27.2739 10.2474 27.7233 11.6305 27.0734 12.6816L26.2903 13.9482C25.8918 14.5928 25.8918 15.4072 26.2903 16.0518L27.0734 17.3184C27.7233 18.3695 27.2739 19.7526 26.1303 20.2209L24.7522 20.7854C24.051 21.0726 23.5723 21.7315 23.5158 22.4871L23.4049 23.9722C23.3128 25.2045 22.1363 26.0593 20.9358 25.7661L19.4892 25.4127C18.753 25.2328 17.9785 25.4845 17.4886 26.0627L16.526 27.1989C15.7271 28.1418 14.2729 28.1418 13.474 27.1989L12.5114 26.0627C12.0215 25.4845 11.247 25.2328 10.5108 25.4127L9.06418 25.7661C7.86371 26.0593 6.6872 25.2045 6.59513 23.9722L6.48419 22.4871C6.42773 21.7315 5.94903 21.0726 5.24777 20.7854L3.86969 20.2209C2.72612 19.7526 2.27673 18.3695 2.9266 17.3184L3.70973 16.0518C4.10824 15.4072 4.10824 14.5928 3.70973 13.9482L2.9266 12.6816C2.27673 11.6305 2.72612 10.2474 3.86969 9.77906L5.24777 9.21463C5.94903 8.92742 6.42773 8.26854 6.48419 7.51286L6.59513 6.0278C6.6872 4.79547 7.86371 3.94069 9.06418 4.23394L10.5108 4.58733C11.247 4.76715 12.0215 4.51548 12.5114 3.9373L13.474 2.80108Z"
                className="jsx-b4ee19148aa84e4f VerifiedIcon--background"
              ></path>
              <path
                d="M13.5 17.625L10.875 15L10 15.875L13.5 19.375L21 11.875L20.125 11L13.5 17.625Z"
                fill="white"
                stroke="white"
                className="jsx-b4ee19148aa84e4f"
              ></path>
            </svg>
          </h2>
          <p>{t("The NFT horse racing game, ROX Games, on Matic network.")}</p>
          <ul>
            <li>
              <h4>211.2K</h4> <p>{t("items")}</p>
            </li>
            <li>
              <h4>211.2K</h4> <p>{t("owners")}</p>
            </li>
            <li>
              <h4>0.005</h4> <p>{t("floor price")}</p>
            </li>
            <li>
              <h4>1.0K</h4> <p>{t("total volume")}</p>
            </li>
          </ul>
        </div>
        <div className="nft-listing-profile-right">
          <ul>
            <li>
              <a href="https://www.facebook.com/rox.nft.games" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/roxgames12" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/rox.games_/" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-discord"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@rox-games" target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-youtube"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="nft-listing-area">
        <div className="nft-listing-header">
          <span
            className={activeItem ? "active" : ""}
            onClick={() => setActiveItem((e) => !e)}
          >
            {t("Items")}
          </span>
          <span
            className={!activeItem ? "active" : ""}
            onClick={() => setActiveItem((e) => !e)}
          >
            {t("Activity")}
          </span>
        </div>
        <div className="nft-listing-bar">
          <span onClick={() => setSingleLayout((e) => !e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-filter"
              viewBox="0 0 16 16"
            >
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
          </span>
          <input type="text" placeholder="Search by name or attribute" />
          <div className="nft-listing-button">
            <button onClick={() => setPrice((e) => !e)}>
              {t("Price low to high")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            {price && (
              <ul>
                <li onClick={() => setPrice(false)}>{t("Recently listed")}</li>
                <li onClick={() => setPrice(false)}>{t("Recently created")}</li>
                <li onClick={() => setPrice(false)}>{t("Recently sold")}</li>
                <li onClick={() => setPrice(false)}>{t("Recently received")}</li>
                <li onClick={() => setPrice(false)}>{t("Ending soon")}</li>
                <li onClick={() => setPrice(false)}>{t("Price low to high")}</li>
                <li onClick={() => setPrice(false)}>{t("Price high to low")}</li>
                <li onClick={() => setPrice(false)}>{t("Highest last sale")}</li>
                <li onClick={() => setPrice(false)}>{t("Most viewed")}</li>
                <li onClick={() => setPrice(false)}>{t("Most favorites")}</li>
                <li onClick={() => setPrice(false)}>{t("Oldest")}</li>
              </ul>
            )}
          </div>
        </div>
        {activeItem && (
          <div
            className={`nft-listing-split ${!singleLayout ? "no-sidebar" : ""}`}
          >
            {singleLayout && (
              <div className="nft-listing-split-sidebar">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{t("Status")}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          {t("Buy Now")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("On Auction")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{t("Quantity")}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          {t("All items")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Single items")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Bundles")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{t("Bloodline")}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          {t("Buterin")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Finney")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Nakamoto")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Szabo")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )}

            <div className="nft-listing-split-content">
              <div className="nft-numbers">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
                <span>211,370 {t("items")}</span>
              </div>
              <div className="nft-horse-list">
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>{t("Warm Spot")}</h2>
                  <p>{t("Price")}</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    {t("Offer for")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>{t("Buy Now")}</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
                <div className="nft-horse-list-item">
                  <Image
                    src="/images/horse/2.png"
                    alt="horse"
                    width={1024}
                    height={1024}
                  />
                  <h2>Warm Spot</h2>
                  <p>Price</p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.0055
                  </span>
                  <strong>
                    Offer for
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="53"
                      viewBox="0 0 33 53"
                      fill="none"
                    >
                      <path
                        d="M16.8498 0.666687L16.4974 1.85009V36.1896L16.8498 36.5371L32.9842 27.115L16.8498 0.666687Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 0.666687L0.715599 27.115L16.85 36.5372V19.8699V0.666687Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 39.5552L16.6511 39.7944V52.0268L16.8497 52.6L32.9937 30.1378L16.8497 39.5552Z"
                        fill="#8247E5"
                      />
                      <path
                        d="M16.85 52.5998V39.5551L0.715599 30.1377L16.85 52.5998Z"
                        fill="#B591F0"
                      />
                      <path
                        d="M16.8497 36.537L32.9838 27.1151L16.8497 19.8699V36.537Z"
                        fill="#3C1281"
                      />
                      <path
                        d="M0.715599 27.1151L16.8497 36.537V19.8699L0.715599 27.1151Z"
                        fill="#8247E5"
                      />
                    </svg>
                    0.00045
                  </strong>
                  <button>Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!activeItem && (
          <div
            className={`nft-listing-split ${!singleLayout ? "no-sidebar" : ""}`}
          >
            {singleLayout && (
              <div className="nft-listing-split-sidebar">
                <Accordion>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{t("Event Type")}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ul>
                        <li>
                          {t("Sales")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Listings")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Offers")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Collection Offers")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                        <li>
                          {t("Transfers")}
                          <label className="custom-checkbox">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </li>
                      </ul>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            )}

            <div className="nft-listing-split-content">
              <table>
                <thead>
                  <tr>
                    <th>{t("Item")}</th>
                    <th>{t("Price")}</th>
                    <th>{t("Quantity")}</th>
                    <th>{t("Form")}</th>
                    <th>{t("To")}</th>
                    <th>{t("Time")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        {t("Seattle Tora")}
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>{t("DDABCC")}</td>
                    <td>---</td>
                    <td>{t("2 minutes ago")}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        {t("Seattle Tora")}
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>{t("DDABCC")}</td>
                    <td>---</td>
                    <td>{t("2 minutes ago")}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        {t("Seattle Tora")}
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>{t("DDABCC")}</td>
                    <td>---</td>
                    <td>{t("2 minutes ago")}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        {t("Seattle Tora")}
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>{t("DDABCC")}</td>
                    <td>---</td>
                    <td>{t("2 minutes ago")}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        {t("Seattle Tora")}
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>{t("DDABCC")}</td>
                    <td>---</td>
                    <td>{t("2 minutes ago")}</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                  <tr>
                    <td>
                      <span className="table-horse-img">
                        <Image
                          src="/images/horse/2.png"
                          alt="horse"
                          width={46}
                          height={46}
                        />
                        Seattle Tora
                      </span>
                    </td>
                    <td>
                      <span>
                        <Image
                          src="/images/coin/ropsten-chain.png"
                          alt="coin"
                          width={16}
                          height={16}
                        />
                        0.005
                      </span>
                      <strong>$5.51</strong>
                    </td>
                    <td>1</td>
                    <td>DDABCC</td>
                    <td>---</td>
                    <td>2 minutes ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      {/* <MarketplaceTerms /> */}
      <style jsx>
        {`
          .nft-listing-Profile {
            padding: 70px 50px;
            display: flex;
            justify-content: space-between;
          }
          .nft-listing-profile-banner {
            position: relative;
            height: 350px;
            width: 100%;
          }

          .profile-thumb {
            width: 150px;
            height: 150px;
            position: absolute;
            bottom: -40px;
            border-radius: 10px;
            left: 50px;
          }
          .nft-listing-profile-left h2 {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 28px;
          }

          .nft-listing-profile-left svg {
            width: 24px;
            height: auto;
          }

          .nft-listing-profile-left p {
            margin: 15px 0;
          }

          .nft-listing-profile-left ul {
            display: flex;
            gap: 50px;
            margin-top: 30px;
          }

          .nft-listing-profile-left ul p {
            margin: 0;
            opacity: 0.5;
          }

          .nft-listing-profile-right {
            padding: 10px;
          }
          .nft-listing-profile-right ul {
            display: flex;
            gap: 40px;
            align-items: center;
          }

          .nft-listing-profile-right ul li a {
            color: var(--colorWhite);
          }

          .jsx-5da4171d11fcc64e.nft-listing-profile-right ul {
            display: flex;
            gap: 40px;
            align-items: center;
          }

          .jsx-5da4171d11fcc64e.nft-listing-profile-right ul li a {
            color: #fff;
          }

          .nft-listing-area {
            padding: 0 50px;
          }
          .nft-listing-profile-left h4 {
            font-size: 16px;
          }
          .nft-listing-bar {
            display: grid;
            grid-template-columns: 1fr 18fr 3fr;
            gap: 30px;
            align-items: center;
            position: sticky;
            top: 0;
            z-index: 999;
            background: var(--background);
            padding: 10px 0;
          }

          .nft-listing-bar span svg {
            width: 30px;
            height: 30px;
            cursor: pointer;
          }

          .nft-listing-bar input {
            background: transparent;
            border: 2px solid var(--borderColor);
            padding: 12px 20px;
            color: var(--colorWhite);
            border-radius: 10px;
          }

          .nft-listing-bar button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 12px;
            background: transparent;
            border: 2px solid var(--borderColor);
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            min-width: max-content;
          }
          .nft-listing-button {
            position: relative;
            display: flex;
            justify-content: flex-end;
          }

          .nft-listing-button ul {
            position: absolute;
            right: 20px;
            background: var(--background);
            color: var(--colorWhite);
            text-align: left;
            border-radius: 5px;
            padding: 15px 0;
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 16%);
            top: 50px;
            min-width: max-content;
            z-index: 99;
          }

          .nft-listing-button ul li {
            font-size: 14px;
            padding: 5px 20px;
            cursor: pointer;
          }

          .nft-listing-button ul li:hover {
            background: var(--settingItemBg);
          }
          .nft-listing-header span {
            font-size: 18px;
            font-weight: 500;
            border-bottom: 2px solid transparent;
            padding-bottom: 5px;
            opacity: 0.5;
            cursor: pointer;
          }

          .nft-listing-header {
            display: flex;
            align-items: center;
            gap: 30px;
            margin-bottom: 30px;
          }
          .nft-listing-header span.active {
            border-bottom: 2px solid var(--colorWhite);
            padding-bottom: 5px;
            opacity: 1;
          }
          .nft-listing-split-sidebar .accordion__button {
            background: transparent !important;
            padding: 0;
            font-weight: 500;
          }

          .nft-listing-split {
            display: grid;
            grid-template-columns: 300px 4fr;
            gap: 30px;
            margin: 30px 0;
          }
          .nft-listing-split.no-sidebar {
            grid-template-columns: 1fr;
          }

          .nft-listing-split-sidebar {
            background: var(--bigCtaBg);
            padding: 20px;
            border-radius: 10px;
            position: sticky;
            top: 60px;
            height: 100vh;
            overflow: auto;
          }

          .nft-listing-split-sidebar .accordion__panel {
            padding: 0;
          }

          .nft-listing-split-sidebar .accordion__panel ul li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 30px 0;
            position: relative;
            font-size: 12px;
          }
          .nft-listing-split-content {
            background: var(--bigCtaBg);
            padding: 20px;
            border-radius: 10px;
            overflow-x: auto;
          }

          .nft-numbers {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .nft-numbers svg {
            cursor: pointer;
          }

          .nft-horse-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 30px;
          }

          .nft-horse-list-item {
            background: var(--dropdownHover);
            padding: 20px;
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }

          .nft-horse-list-item h2 {
            font-size: 14px;
            font-weight: 500;
          }

          .nft-horse-list-item p {
            font-size: 12px;
            margin: 15px 0 5px;
          }

          .nft-horse-list-item span {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;
            margin: 5px 0;
          }

          .nft-horse-list-item svg {
            width: 10px;
            height: auto;
          }

          .nft-horse-list-item strong {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            font-size: 12px;
            margin-top: 20px;
            opacity: 0.6;
          }
          .nft-horse-list-item button {
            position: absolute;
            width: 100%;
            left: 0;
            bottom: -40px;
            padding: 12px;
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border: none;
            transition: 0.3s;
            cursor: pointer;
            color: #fff;
          }
          .nft-horse-list-item:hover button {
            bottom: 0;
          }
          .nft-horse-list-item:hover button:hover {
            filter: brightness(1.15);
          }
          .nft-listing-split-content table {
            width: 100%;
            text-align: left;
            border-collapse: collapse;
            min-width: 700px;
          }

          .nft-listing-split-content table thead {
            height: 40px;
          }

          .nft-listing-split-content table span.table-horse-img {
            gap: 10px;
            font-size: 14px;
            font-weight: 500;
          }

          .nft-listing-split-content table span {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .nft-listing-split-content table strong {
            font-size: 12px;
            text-align: right;
            font-weight: 300;
            opacity: 0.5;
            margin-left: 5px;
          }

          .nft-listing-split-content table td {
            padding: 10px 0;
            border-bottom: 1px solid var(--borderColor);
          }
          .nft-listing-split-content tbody td:first-child {
            width: 25vw;
          }
          .nft-listing-split-content table tr:last-child td {
            border-bottom: 0;
          }
          .nft-listing-split-content th:last-child,
          .nft-listing-split-content td:last-child {
            text-align: right;
          }
          @media screen and (max-width: 991px) {
            .nft-listing-split-content tbody td:first-child {
              width: unset;
            }
            .nft-listing-button {
              display: flex;
              justify-content: flex-end;
            }

            .nft-listing-Profile {
              display: grid;
              gap: 40px;
              padding: 70px 30px;
            }

            .profile-thumb {
              left: 50%;
              transform: translate(-50%);
            }

            .nft-listing-bar {
              grid-template-columns: 1fr;
              position: unset;
            }

            .nft-listing-button button {
              width: 100%;
            }

            .nft-listing-split {
              grid-template-columns: 1fr;
            }

            .nft-listing-split-sidebar {
              position: unset;
              height: max-content;
            }

            .nft-horse-list {
              grid-template-columns: 1fr;
            }

            .nft-listing-area {
              padding: 0 30px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
