import Image from "next/image";
import Layout from "../../components/Layout";
import ReCAPTCHA from "react-google-recaptcha";
import { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import Dropdown from "react-dropdown";
import ToastListener from "../../components/Toast";
import useToast from "../../hooks/useToast";
import axios from "axios";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const channelOptions = [
  "Business",
  "Crypto",
  "Entertainment",
  "Gaming",
  "Lifestyle",
  "Marketing",
  "Tech",
  "Other",
];

export default function CollectionCreate() {
  const { showLoading, hideLoading, toastInfo, toastError, toastSuccess } =
    useToast();
  const { invokeServer } = useContext(GlobalContext);
  const [theme, setTheme] = useState("");
  const {t}=useTranslation()
  const [applicationData, setApplicationData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    email: "",
    channelName: "",
    youtube: "",
    tikTok: "",
    instagram: "",
    category: "",
    additionalInformation: "",
    pickPlan: "",
    roxRun: "",
    termsofyears: "",
    termsService: "",
  });

  const Application = async (e) => {
    e.preventDefault();
    if (applicationData !== "") {
      try {
        showLoading("Ambassador Program");
        const data = invokeServer(
          "post",
          "/api/application/createData",
          applicationData
        );
        let emaildata = await axios.post("/api/ambass_mail", applicationData);
        hideLoading();
        if (emaildata.data.status === true) {
          toastInfo("Ambassadors", "Application submitted");
        } else {
          toastError("Ambassadors", emaildata.data.message);
        }
      } catch (err) {
        hideLoading();
        toastError("Ambassadors", err.message);
      }
    }
  };

  const HandelTheme = (e) => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  };
  useEffect(() => {
    HandelTheme();
  }, [theme]);

  return (
    <Layout HandelTheme={HandelTheme}>
      <div className="ambassadors">
        <div className="container">
          <span>{t("JOIN THE 2023")}</span>
          <h2>
            {t("AMBASSADOR")} <br />
            {t("PROGRAM")}
          </h2>
        </div>
      </div>
      <div className="ambassadors-info">
        <div className="container">
          <h2>{t("BECOME OUR AMBASSADOR")}</h2>
          <p>
            {t("Do you believe in the future of crypto? Join the ROX Games Ambassador program and get rewarded every time you share ROX Games content (videos/articles/images/etc). We’re looking for crypto bloggers, YouTubers, Instagramers, TikTokers, chat moderators, and any creator who loves crypto, Blockchain gaming and wants to join the ROX Games family.")}
          </p>
          <div className="ambassadors-info-list">
            <div className="ambassadors-info-list-content">
              <h3>{t("AMBASSADOR BENEFITS")}</h3>
              <ul>
                <li>
                  {t("Get monthly prizes for content published (T shirt or sweatshirt, bag, mug)")}
                </li>
                <li>
                  {t("Unlock your earning potential with up to 10% commissions with multilevel referral system")}
                </li>
                <li>
                  {t("Get recognized as an official")} &ldquo;{t("ROX Games Ambassador")}&rdquo;{t(", by obtaining a")} &ldquo;{t("Limited-Edition")}
                  {t("Influencer NFTs")}
                </li>
                <li>{t("Offer your audience coupon codes* with up to 5% discount")}</li>
              </ul>
            </div>
            <div className="ambassadors-info-list-img">
              <Image
                src="/images/info-right-img.png"
                alt="info"
                width={665}
                height={289}
              />
            </div>
          </div>
          {/* <div className="ambassadors-info-list">
            <div className="ambassadors-info-list-img">
              <Image
                src="/images/info-left-img.png"
                alt="info"
                width={663}
                height={406}
              />
            </div>
            <div className="ambassadors-info-list-content">
              <h3>{t("CONTENT REQUIREMENT")}</h3>
              <ul>
                <li>{t("Exclusivity - we don")}&apos;{t("t accept everyone")}</li>
                <li>{t("A welcome package with brand merch")}</li>
                <li>
                  {t("Your own URL with a built in discount code to for riends & family. (USA only)")}
                </li>
                <li>
                  {t("10% commission on orders placed using your URL (USA only)")}{" "}
                </li>
                <li>
                  {t("If we share your content, you score more free Waboba products!")}
                </li>
              </ul>
            </div>
          </div> */}

          <div className="ambassadors-form">
            <h4>{t("AMBASSADOR APPLICATION")}</h4>
            <p>{t("You must be 18 years of age to apply.")}</p>

            <form action="#" onSubmit={Application}>
              <h5>{t("Tell Us About Yourself")}</h5>
              <div className="input-group">
                <div>
                  <label htmlFor="firstName">{t("First Name*")}</label>
                  <input
                    type="text"
                    required
                    id="firstName"
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="lastName">{t("Last Name*")}</label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label htmlFor="birthday">{t("Birthday (Month/Day/Year)*")}</label>
                  <input
                    type="number"
                    id="birthday"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        birthday: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <label htmlFor="email">{t("Email Address*")}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="channel">{t("Channel's name*")}</label>
                  <input
                    type="text"
                    id="channel"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        channelName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <label htmlFor="youtube">
                    {t("Please add a link to your Youtube channel here*")}
                  </label>
                  <input
                    type="text"
                    id="youtube"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        youtube: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="tikTok">
                    {t("Please add a link to your TikTok channel here*")}
                  </label>
                  <input
                    type="text"
                    id="tikTok"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        tikTok: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="input-box">
                  <label htmlFor="instagram">
                    {t("Please add a link to your Instagram channel here*")}
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        instagram: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="category">{"Channel's Category*"}</label>
                  <Dropdown
                    className={`${
                      theme === "dark" && "selectbgdark "
                    } custom-dropdown drop-down`}
                    options={channelOptions}
                    value=""
                    placeholder="Select an option"
                    required
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        category: e.value,
                      })
                    }
                  />
                </div>
              </div>

              <label htmlFor="addInfo">{t("Additional Information *")}</label>
              <textarea
                rows={10}
                type="addInfo"
                id="addInfo"
                required
                onChange={(e) =>
                  setApplicationData({
                    ...applicationData,
                    additionalInformation: e.target.value,
                  })
                }
              />

              <div className="input-group">
                <div className="input-box">
                  <label htmlFor="pickaplan">{t("Pick a Plan*")}</label>

                  <Dropdown
                    className={`${
                      theme === "dark" && "selectbgdark "
                    } custom-dropdown drop-down`}
                    options={["Video", "Campaign", "Ambassador"]}
                    value=""
                    required
                    placeholder="Select an option"
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        pickPlan: e.value,
                      })
                    }
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="pickaplan">
                    {t("Are you already a ROX Games affiliate?*")}
                  </label>

                  <Dropdown
                    className={`${
                      theme === "dark" && "selectbgdark "
                    } custom-dropdown drop-down`}
                    options={["Yes", "No"]}
                    value=""
                    required
                    placeholder="Select an option"
                    onChange={(e) =>
                      setApplicationData({
                        ...applicationData,
                        roxRun: e.value,
                      })
                    }
                  />
                </div>
              </div>

              <ReCAPTCHA
                sitekey="6LfIBWckAAAAACOqmYTHNXGEllt5aU7BCXo8RIKX"
                // onChange={onChange}
                required
              />
              <div className="year-conformation">
                <input
                  required
                  type="checkbox"
                  className="conformation-checkbox"
                  onClick={(e) =>
                    setApplicationData({
                      ...applicationData,
                      termsofyears: e.target.checked,
                    })
                  }
                />
                <label>{t("I am over 18 years old")}</label>
              </div>
              <div className="year-conformation">
                <input
                  type="checkbox"
                  required
                  className="conformation-checkbox"
                  onClick={(e) =>
                    setApplicationData({
                      ...applicationData,
                      termsService: e.target.checked,
                    })
                  }
                />
                <label>
                  {t("I accept the Influencer Terms, Terms of Service and Privacy Policy")}
                </label>
              </div>
              {/* <label htmlFor="social">Link to best social profile*</label>
              <input type="text" id="social" />
              <label htmlFor="favorite">Favorite ROX Games Product*</label>
              <input type="text" id="favorite" />
              <label htmlFor="chosen">If chosen, what would you do?*</label>
              <input type="text" id="chosen" />
              <label htmlFor="pick">Why should we pick you?</label>
              <input type="text" id="pick" />
              <input type="file" /> */}
              <button
                type="submit"
                // disabled={
                //   !applicationData.termsofyears || !applicationData.termsService
                // }
              >
                {t("APPLY")}
              </button>
            </form>
          </div>
        </div>
        <ToastListener />
      </div>
      <style jsx>
        {`
          .ambassadors {
            background: url("/images/ab-banner.jpg") no-repeat center center /
              cover;
            padding: 180px 0;
            text-align: left;
          }
          .ambassadors span {
            letter-spacing: 5px;
            font-size: 34px;
            color: #fff;
          }
          .ambassadors h2 {
            font-size: 65px;
            line-height: 1.1;
            margin-top: 10px;
            color: #fff;
          }
          .ambassadors-info {
            margin: 60px 0 80px;
          }

          .ambassadors-info h2 {
            text-align: center;
            font-size: 30px;
            margin-bottom: 20px;
          }

          .ambassadors-info p {
            text-align: center;
            font-size: 17px;
            max-width: 800px;
            margin: auto;
          }

          .ambassadors-info-list {
            display: flex;
            gap: 150px;
            align-items: center;
            margin-top: 150px;
          }

          .ambassadors-info-list-content h3 {
            font-size: 34px;
            margin-bottom: 20px;
          }

          .ambassadors-info-list-content ul li {
            list-style: disc;
            margin: 10px 0;
          }

          .ambassadors-info-list-content ul {
            padding-left: 25px;
          }

          .ambassadors-form {
            margin-top: 100px;
          }

          .ambassadors-form h4 {
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
          }

          .ambassadors-form form {
            border: 1px solid #efb809;
            border-radius: 5px;
            padding: 30px;
            max-width: 1130px;
            margin: auto;
            margin-top: 60px;
          }

          .ambassadors-form form input {
            width: 100%;
            background: transparent;
            border: 1px solid #808080;
            padding: 12px;
            margin: 10px 0 30px;
          }
          .input-box {
            width: 50%;
          }
          .ambassadors-form form Dropdown {
            width: 100%;
            background: transparent;
            border: 1px solid #808080;
            padding: 12px;
            margin: 10px 0 30px;
          }

          .year-conformation {
            display: flex;
            margin-top: 14px;
          }
          .conformation-checkbox {
            display: inline-block;
            width: auto !important;
            margin: 0 12px 0 0 !important;
          }
          .ambassadors-form form textarea {
            width: 100%;
            background: transparent;
            border: 1px solid #808080;
            padding: 12px;
            margin: 10px 0 30px;
          }
          .ambassadors-form form h5 {
            font-size: 22px;
            font-weight: 500;
            margin-bottom: 30px;
          }

          .ambassadors-form form button {
            width: 100%;
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border: none;
            padding: 16px;
            border-radius: 10px;
            cursor: pointer;
            color: #fff;
            margin-top: 25px;
          }

          .ambassadors-form form .input-group {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
          }

          .ambassadors-form form button:hover {
            filter: brightness(1.15);
          }

          @media screen and (max-width: 991px) {
            .ambassadors {
              text-align: center;
            }

            .ambassadors h2 {
              font-size: 40px;
            }

            .ambassadors span {
              font-size: 20px;
            }

            .ambassadors-info-list {
              display: grid;
              gap: 60px;
              margin-top: 80px;
            }
            .ambassadors-form h4 {
              font-size: 24px;
            }
            .ambassadors-info-list-content h3 {
              font-size: 30px;
              margin-bottom: 20px;
            }
            .ambassadors-info h2 {
              font-size: 24px;
            }
            .ambassadors-form form .input-group {
              display: block;
            }
            .ambassadors {
              padding: 100px 0;
            }
          }
        `}
      </style>
    </Layout>
  );
}
