import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function GenesisLearn() {
  const {t}=useTranslation();
  return (
    <>
      <div className="genesis-learn">
        <div className="container">
          <div className="genesis-learn-inner">
            <div className="genesis-learn-item">
              <span>{t("GETTING STARTED")}</span>
              <h2>{t("ROX Ecosystem")}</h2>
              <p>
                {t("Greatness is born from humble beginnings.Nurture your racehorse and create an everlasting legacy.When making a decision to buy a ROX racehorse,there are two key attributes to look for,Bloodline and Genotype.")}
              </p>
              <p>
                {t("You can buy a racehorse directly from ROX’s Marketplace or from any other open marketplace such as opensea.io.")}
              </p>
              <Link href="#">
                <a>{t("Buy Now")}</a>
              </Link>
            </div>
            <div className="genesis-learn-item">
              <span>{t("BLOODLINE")}</span>
              <h2>{t("Racehorse Rarity")}</h2>
              <p>
                {t("Greatness is born from humble beginnings.Nurture your racehorse and create an everlasting legacy.When making a decision to buy a ROX racehorse,there are two key attributes to look for,Bloodline and Genotype.")}
              </p>
              <p>
                {t("You can buy a racehorse directly from ROX’s Marketplace or from any other open marketplace such as opensea.io.")}
              </p>
              <Link href="#">
                <a>{t("COMMUNITY WEBSITE")}</a>
              </Link>
            </div>
            <div className="genesis-learn-item">
              <span>{t("GENOTYPE")}</span>
              <h2>{t("Z1 to Z268")}</h2>
              <p>
                {t("Greatness is born from humble beginnings. Nurture your racehorse and create an everlasting legacy.When making a decision to buy a ROX racehorse,there are two key attributes to look for,Bloodline and Genotype.")}
              </p>
              <p>
                {t("You can buy a racehorse directly from ROX’s Marketplace or from any other open marketplace such as opensea.io.")}
              </p>
              <Link href="#">
                <a>{t("COMMUNITY WEBSITE")}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .genesis-learn {
            padding: 100px 0;
            background: var(--background);
          }

          .genesis-learn-item {
            max-width: 600px;
            margin: 0 auto 50px;
          }

          .genesis-learn-item span {
            color: #61666d;
            font-weight: 500;
          }

          .genesis-learn-item h2 {
            font-weight: 600;
            margin: 14px 0;
            font-size: 24px;
          }

          .genesis-learn-item p {
            color: #a4aab2;
            margin-bottom: 20px;
          }

          .genesis-learn-item a {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            border-radius: 8px;
            box-shadow: 0 0 8px 0px#f0b90b5e;
            color: #fff;
            font-weight: 600;
            text-transform: uppercase;
            padding: 8px 15px;
            margin-top: 10px;
            display: inline-block;
          }
        `}
      </style>
    </>
  );
}
