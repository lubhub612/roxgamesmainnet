import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import {
  VerifiedIcon,
  HeartOutlineIcon,
  CommentIcon,
  FourGridIcon,
  NineGridIcon,
} from "../../Shared/SvgIcons";
import {
  CollectionContainer,
  HeaderImage,
  CollectionLogoWrapper,
  DetailWrapper,
  DetailInfoWrapper,
  DetailInfo,
  Description,
} from "./styles";
import { useData } from "../../../contexts/DataContext";

export const Collection = (props) => {
  const { collection } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { setCollectionData, collectionData } = useData();

  return (
    <CollectionContainer>
      <HeaderImage
        bgimage={collection.bannerURI}
        onClick={() => {
          router.push(
            `/viewcollection/${collection.walletAddress.toLowerCase()}`
          );
          setCollectionData(collection);
        }}
      />
      <CollectionLogoWrapper
        onClick={() => {
          router.push(
            `/viewcollection/${collection.walletAddress.toLowerCase()}`
          );
          setCollectionData(collection);
        }}
      >
        <img src={collection.logoURI} alt={collection.name} />
      </CollectionLogoWrapper>
      <DetailWrapper>
        <h1>{collection.name}</h1>
        <div
          className="link"
          onClick={() =>
            router.push(`/profile/${collection.walletAddress.toLowerCase()}`)
          }
        >
          <span>{collection.user}</span>
        </div>
        <DetailInfoWrapper>
          <DetailInfo>
            <VerifiedIcon />
            <span>{t("Verify")}</span>
          </DetailInfo>
          <DetailInfo>
            <HeartOutlineIcon />
            <span>
              {collection.favoriteCount ?? 0} {t("favorites")}
            </span>
          </DetailInfo>
          <DetailInfo>
            <CommentIcon />
            <span>
              {collection.commentCount ?? 0} {t("comments")}
            </span>
          </DetailInfo>
        </DetailInfoWrapper>
        <DetailInfoWrapper>
          <DetailInfo>
            <FourGridIcon />
            <span>
              {collection.tradeCount ?? 0} {t("trades")}
            </span>
          </DetailInfo>
          <DetailInfo>
            <NineGridIcon />
            <span>
              {t("Volume")} {collection?.tradeVolume ?? 0}$
            </span>
          </DetailInfo>
        </DetailInfoWrapper>
        <Description>{collection.description}</Description>
      </DetailWrapper>
    </CollectionContainer>
  );
};
