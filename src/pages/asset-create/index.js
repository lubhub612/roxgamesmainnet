import Image from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout';
export default function CollectionCreate() {
  const [category, setCategory] = useState(false);
  const [coin, setCoin] = useState(false);
  const {t}=useTranslation()
  return (
    <Layout>
      <div className="collection-create">
        <div className="container">
          <h2>{t("Create New Item")}</h2>
          <div className="collection-input-item">
            <h3>{t("Image, Video, Audio, or 3D Model")}</h3>
            <p>
              {t("File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB")}
            </p>
            <div className="input-image">
              <button className="input-btn input-width">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                </svg>
              </button>
              <input type="file" name="logo" />
            </div>
          </div>
          <div className="collection-input-item">
            <h3>{t("Name")}</h3>
            <input type="text" placeholder="Example: Treasures of the Sea" />
          </div>
          <div className="collection-input-item">
            <h3>{t("External link")}</h3>
            <p>
              {t("OpenSea will include a link to this URL on this item")}&apos;{t("s detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.")}
            </p>
            <input
              type="text"
              placeholder="https://rox.run/collection/treasures-of-the-sea"
            />
          </div>
          <div className="collection-input-item">
            <h3>{t("Description")}</h3>
            <p>
              {t("The description will be included on the item")}&apos;{t("s detail page underneath its image. Markdown syntax is supported.")}
            </p>
            <textarea
              rows="12"
              placeholder="Provide a detailed description of your item."
            ></textarea>
          </div>
          <div className="collection-input-item">
            <h3>{t("Collection")}</h3>
            <p>{t("This is the collection where your item will appear.")}</p>
            <div className="collection-category">
              <span onClick={() => setCategory((e) => !e)}>
                {t("Select Collection")}
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
              </span>
              {category && (
                <ul>
                  <li onClick={() => setCategory(false)}>{t("New")}</li>
                  <li onClick={() => setCategory(false)}>{t("Art")}</li>
                  <li onClick={() => setCategory(false)}>{t("Collectibles")}</li>
                  <li onClick={() => setCategory(false)}>{t("Domain Names")}</li>
                  <li onClick={() => setCategory(false)}>{t("Music")}</li>
                  <li onClick={() => setCategory(false)}>{t("Photography")}</li>
                  <li onClick={() => setCategory(false)}>{t("Sports")}</li>
                  <li onClick={() => setCategory(false)}>{t("Trading Cards")}</li>
                  <li onClick={() => setCategory(false)}>{t("Utility")}</li>
                  <li onClick={() => setCategory(false)}>{t("Virtual Worlds")}</li>
                </ul>
              )}
            </div>
          </div>
          <div className="collection-input-item">
            <h3>{t("Supply")}</h3>
            <p>{t("The number of items that can be minted. No gas cost to you!")}</p>
            <input type="text" placeholder="1" />
          </div>
          <div className="collection-input-item">
            <h3>{t("Blockchain")}</h3>
            <div className="collection-category">
              <span onClick={() => setCoin((e) => !e)}>
                {t("Ethereum")}
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
              </span>
              {coin && (
                <ul>
                  <li onClick={() => setCoin(false)}>{t("Ethereum")}</li>
                  <li onClick={() => setCoin(false)}>{t("Polygon")}</li>
                  <li onClick={() => setCoin(false)}>{t("Klaytn")}</li>
                  <li onClick={() => setCoin(false)}>{t("Solana")}</li>
                </ul>
              )}
            </div>
          </div>
          <div className="collection-input-item">
            <h3>{t("Freeze metadata info")}</h3>
            <p>
              {t("Freezing your metadata will allow you to permanently lock and store all of this item")}&apos;{t("s content in decentralized file storage.")}
            </p>
          </div>
          <div className="collection-input-item">
            <button>{t("Create")}</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .collection-create {
            padding: 50px 0 20px;
          }
          .input-image {
            position: relative;
            overflow: hidden;
            display: inline-block;
          }
          .collection-input-item .input-btn {
            border: 2px dotted var(--colorWhite);
            color: var(--colorWhite);
            background: transparent;
            padding: 20px;
            border-radius: 8px;
            font-size: 20px;
            font-weight: bold;
            width: 180px;
            height: 180px;
            border-radius: 100%;
          }
          .input-btn svg {
            width: 70px;
            height: auto;
          }
          .input-image input[type='file'] {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            cursor: pointer;
          }
          .collection-input-item .input-btn.input-width {
            width: 350px;
            height: 200px;
            border-radius: 10px;
          }

          .collection-input-item .input-btn.input-large-img {
            border-radius: 10px;
            width: 700px;
            height: 200px;
          }
          .collection-category {
            position: relative;
            max-width: fit-content;
          }

          .collection-category span {
            border: 1px solid #4c505c;
            padding: 12px 20px;
            display: block;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 10px;
            justify-content: space-between;
            cursor: pointer;
          }

          .collection-category ul {
            position: absolute;
            top: 60px;
            left: 0;
            background: var(--background);
            box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 16%);
            padding: 20px 0;
            width: 100%;
            color: var(--colorWhite);
            z-index: 99;
          }

          .collection-category ul li {
            padding: 8px 20px;
            cursor: pointer;
          }

          .collection-category ul li:hover {
            background: var(--settingItemBg);
          }
          .collection-create h2 {
            font-size: 36px;
          }

          .collection-input-item h3 {
            font-size: 16px;
            margin-bottom: 5px;
          }

          .collection-input-item p {
            opacity: 0.5;
            font-size: 14px;
            margin-bottom: 20px;
          }

          .collection-input-item {
            margin: 50px 0;
          }

          .collection-input-item input,
          .collection-input-item textarea {
            border: 2px solid var(--borderColor);
            background: transparent;
            width: 100%;
            padding: 18px;
            font-size: 14px;
            color: var(--colorWhite);
            border-radius: 10px;
          }

          .collection-link-list li {
            position: relative;
            margin: 10px 0;
          }

          .collection-link-list li svg {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
          }

          .collection-link-list li input {
            padding: 18px 50px;
          }

          .collection-choose {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 60%;
            gap: 30px;
          }

          .collection-choose li {
            border: 1px solid var(--borderColor);
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
          }

          .collection-choose li h3 {
            margin-top: 10px;
          }

          .collection-choose li p {
            margin-bottom: 0;
          }

          .collection-input-item button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border: none;
            padding: 20px 50px;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 500;
            color: #fff;
          }
          .collection-choose li.active {
            border: 1px solid #eab50e;
            position: relative;
          }

          .collection-choose li.active svg {
            position: absolute;
            right: -10px;
            width: 30px;
            height: auto;
            z-index: 9;
            top: -10px;
            color: #eab50e;
          }
          @media screen and (max-width: 991px) {
            .collection-input-item .input-btn.input-large-img,
            .collection-input-item .input-btn.input-width {
              width: 80vw;
            }
          }
        `}
      </style>
    </Layout>
  );
}
