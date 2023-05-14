import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useTranslation } from 'react-i18next';
export default function Activity() {
  const [price, setPrice] = useState(false);
  const [singleLayout, setSingleLayout] = useState(true);
  const {t}=useTranslation()
  return (
    <Layout>
      <div className="nft-listing-area">
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

        <div
          className={`nft-listing-split ${!singleLayout ? 'no-sidebar' : ''}`}
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
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>{t("Collections")}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      <li>
                        {t("Crypto Punks")}
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        {t("Primates")}
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        {t("CLONE X")}
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        {t("Mutant APE")}
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        {t("Bored Ape")}
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
                    <AccordionItemButton>{t("Chains")}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul>
                      <li>
                        {t("Ethereum")}
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        {t("Polygon")}
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        {t("Klaytn")}
                        <label className="custom-checkbox">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                      </li>
                      <li>
                        {t("Solana")}
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
                        src="/images/nft.gif"
                        alt="horse"
                        width={46}
                        height={46}
                      />
                      {t("Unity Warrior Galaxy #9023")}
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
                      0.455
                    </span>
                    <strong>$5.51</strong>
                  </td>
                  <td>1</td>
                  <td>ALD2E</td>
                  <td>---</td>
                  <td>5 {t("minutes ago")}</td>
                </tr>
                <tr>
                  <td>
                    <span className="table-horse-img">
                      <Image
                        src="/images/nft.gif"
                        alt="horse"
                        width={46}
                        height={46}
                      />
                      {t("Unity Warrior Galaxy #9023")}
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
                      0.455
                    </span>
                    <strong>$5.51</strong>
                  </td>
                  <td>1</td>
                  <td>ALD2E</td>
                  <td>---</td>
                  <td>5 {t("minutes ago")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

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
            padding: 50px;
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
              padding: 30px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
