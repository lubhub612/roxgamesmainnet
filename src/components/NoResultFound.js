import Image from 'next/image';
import { useTranslation } from 'react-i18next';
export default function NoResultFound() {
  const {t}=useTranslation()
  return (
    <>
      <div className="no-race-found">
        <Image
          src="/images/race-search.png"
          width={128}
          height={144}
          alt="race-search"
        />
        <h2>{t("No races have been scheduled")}</h2>
        <p>{t("Please check back later.")}</p>
      </div>
      <style jsx>
        {`
          .no-race-found {
            text-align: center;
            margin: 150px 0 50px;
            color: var(--colorWhite);
          }

          .no-race-found h2 {
            font-size: 26px;
            margin-bottom: 20px;
            margin-top: 30px;
          }

          .no-race-found p {
            opacity: 0.6;
          }
        `}
      </style>
    </>
  );
}
