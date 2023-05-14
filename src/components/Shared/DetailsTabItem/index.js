import { useRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DetailsTabItemContainer, DetailsItem } from './styles';

const DetailsTabItem = () => {
  const {t}=useTranslation()
  const router = useRouter();
  const { collection, tokenId } = router.query;
  return (
    <DetailsTabItemContainer>
      <DetailsItem>
        <div className="detail-name">{t("Contract address")}</div>
        <div className="detail-value">{collection?.toLowerCase()}</div>
      </DetailsItem>
      <DetailsItem>
        <div className="detail-name">{t("Token ID")}</div>
        <div className="detail-value">{tokenId}</div>
      </DetailsItem>
      <DetailsItem>
        <div className="detail-name">{t("Token standart")}</div>
        <div className="detail-value">{t("ERC-1155")}</div>
      </DetailsItem>
      <DetailsItem>
        <div className="detail-name">{t("Blockchain")}</div>
        <div className="detail-value">{t("BSC")}</div>
      </DetailsItem>
    </DetailsTabItemContainer>
  )
}

export default DetailsTabItem;
