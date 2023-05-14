import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function BigCTA() {
  const {t}= useTranslation();
  return (
    <>
      <div className="big-cta">
        <div className="container">
          <div className="big-cta-inner">
            <h3>{t("BE FIRST")}</h3>
            <h2>{t("Your Legacy Awaits")}</h2>
            <Link href="#">
              <a>{t("MARKETPLACE")}</a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .big-cta {
            background: var(--background);
            padding-bottom: 80px;
            margin-top: 80px
          }
          .big-cta-inner {
            background: var(--bigCtaBg);
            border-radius: 30px;
            padding: 60px;
            position: relative;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            border: 1px solid #f0b90c;
          }
          .big-cta-inner h3 {
            color: #f0b90c;
            font-weight: 600;
            font-size: 20px;
          }

          .big-cta-inner h2 {
            font-size: 40px;
            font-weight: 600;
            margin: 10px 0 40px;
          }
          .big-cta-inner a {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border-radius: 8px;
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
            cursor: pointer;
            border: none;
            font-size: 18px;
            font-weight: 500;
            padding: 20px 40px;
            font-family: 'Montserrat', sans-serif;
            letter-spacing: 1px;
            display: inline-block;
          }
          .big-cta-inner a:hover {
            -webkit-filter: brightness(1.15);
            filter: brightness(1.15);
          }
          @media screen and (max-width: 991px) {
            .big-cta-inner h2 {
              font-size: 34px;
              font-weight: 600;
              margin: 10px 0 40px;
            }
          }
        `}
      </style>
    </>
  );
}
