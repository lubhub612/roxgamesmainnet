import { useContext, useState } from "react";
import Layout from "../../components/Layout";
import GlobalContext from "../../contexts/GlobalContext";
import ToastListener from "../../components/Toast";
import useToast from "../../hooks/useToast";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { showLoading, hideLoading, toastInfo, toastError, toastSuccess } =
    useToast();
  const { invokeServer } = useContext(GlobalContext);
  const [contact, setContact] = useState({});
  const {t}=useTranslation()
  const HandelContact = (event) => {
    setContact({
      ...contact,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    if (contact !== "") {
      try {
        showLoading("Contacts...");
        let r = await invokeServer("post", "/api/contact/create", contact);
        let emaildata = await axios.post("/api/send_mail", contact);
        hideLoading();
        if (emaildata.data.status === true) {
          toastInfo("Contact", emaildata.data.message);
        } else {
          toastError("Contact", emaildata.data.message);
        }
      } catch (err) {
        hideLoading();
        toastError("Profile Business Name", err.message);
      }
    }
  };

  return (
    <Layout>
      <div className="contact">
        <div className="container">
          <h1>{t("Get in touch")}</h1>
          <p>
            {t("If you have any questions, please send them through our contact form or direct them to the relevant addresses below:")}
          </p>
          <form onSubmit={submitData}>
            <div className="input-group">
              <label>
                {t("Name")}
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="Name"
                  required
                  onChange={(e) => HandelContact(e)}
                />
              </label>
              <label>
                {t("Email address")}
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="Email"
                  required
                  onChange={(e) => HandelContact(e)}
                />
              </label>
            </div>
            <label>
              {t("Interested in")}
              <select
                required
                Name="Interested"
                onChange={(e) => HandelContact(e)}
              >
                <option value="">{t("Select one...")}</option>
                <option value="Collaboration Opportunities">
                  {t("Collaboration Opportunities")}
                </option>
                <option value="General Enquiries">{t("General Enquiries")}</option>
                <option value="Investment">{t("Investment")}</option>
                <option value="Careers">{t("Careers")}</option>
              </select>
            </label>
            <label>
              {t("Message")}
              <textarea
                name="Message"
                id=""
                cols="30"
                rows="5"
                placeholder="Enter your message"
                required
                onChange={(e) => HandelContact(e)}
              ></textarea>
            </label>
            <button type="submit">{t("Submit")}</button>
          </form>
          <div className="contact-info">
            <ul>
              <li>
                {t("General Enquiries")}
                <span>
                  <a href="mailto:hello@rox.games">{t("hello@rox.games")}</a>
                </span>
              </li>
              <li>
                {t("Partnerships")}
                <span>
                <a href="mailto:partnerships@rox.games">{t("partnerships@rox.games")}</a>
                </span>
              </li>
              <li>
                {t("Careers")}
                <span>
                <a href="mailto:careers@rox.games">{t("careers@rox.games")}</a>
                </span>
              </li>
              <li>
                 {t("Media Inquiry")}
                <span>
                <a href="mailto:media@rox.games">{t("media@rox.games")}</a>
                </span>
              </li>
              <li>
                {t("Media kits")}
                <span>
                  <a href="#">{t("ROX Games media kit")}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <ToastListener />
      </div>
      <style jsx>
        {`
          .contact {
            padding: 60px 0;
          }

          .contact h1 {
            text-align: center;
            margin-bottom: 10px;
            text-transform: uppercase;
            font-size: 50px;
          }

          .contact p {
            font-size: 16px;
            text-align: center;
            max-width: 670px;
            margin: 0 auto 70px;
          }

          .contact input,
          .contact textarea,
          .contact select {
            border: 1px solid var(--studListBorder);
            background: var(--studListBg);
            width: 100%;
            padding: 20px;
            border-radius: 10px;
            margin: 10px 0 25px;
            font-family: "Montserrat", sans-serif;
          }

          .input-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }

          .contact button {
            background: #46e370;
            border: none;
            color: #000;
            padding: 14px 40px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
          }
          .contact button:hover {
            filter: brightness(1.2);
          }
          .contact-info ul li {
            font-size: 26px;
            font-weight: 600;
          }

          .contact-info ul {
            display: grid;
            grid-template-columns: 2fr 1.5fr 0.5fr;
            gap: 30px;
            margin-top: 60px;
          }

          .contact-info ul li span {
            display: block;
            margin-top: 10px;
          }

          .contact-info ul li span a {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: var(--eventButtonColor);
            margin-bottom: 5px;
          }

          .contact-info ul li span a:hover {
            text-decoration: underline;
          }
          @media screen and (max-width: 991px) {
            .contact h1 {
              font-size: 40px;
            }
            .input-group {
              grid-template-columns: 1fr;
              gap: 0;
            }
            .contact-info ul {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </Layout>
  );
}
