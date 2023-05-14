import React, { useEffect, useState, useContext } from "react";
import GlobalContext, { useGlobal } from "../../../contexts/GlobalContext";
import { useCustomWallet } from "../../../contexts/WalletContext";

import { OwnedByContainer, ItemWrapper, DetailWrapper } from "./styles";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export default function OwnedBy(props) {
  console.log("🚀 ~ file: index.js:15 ~ OwnedBy ~ props:", props);
  const { collection, tokenId, setOwnerCount } = props;
  const { t } = useTranslation();
  const router = useRouter();
  const { wallet } = useCustomWallet();
  const { invokeServer } = useContext(GlobalContext);
  const [ownerInfo, setOwnerInfo] = useState();

  useEffect(() => {
    let ac = new AbortController();
    invokeServer(
      "get",
      `/api/nft/owner?collectionAddress=${collection.toLowerCase()}&tokenId=${tokenId}`
    )
      .then((res) => {
        if (ac.signal.aborted === false) {
          if (res.data.result === 1) {
            let j;
            let rr = res.data.items;
            setOwnerInfo((t) => rr);
            setOwnerCount && setOwnerCount((t) => rr.length);
          }
        }
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });
    return () => ac.abort();
  }, [collection, tokenId]);

  return (
    <OwnedByContainer>
      {ownerInfo &&
        ownerInfo.map((item, i) =>
          item.balance > 0 ? (
            <ItemWrapper
              key={i}
              onClick={() => router.push(`/profile/${item.owner}`)}
            >
              <DetailWrapper>
                <img
                  src={
                    item.avatarURI
                      ? item.avatarURI
                      : "/images/notification-user-sample.png"
                  }
                  alt=""
                />
                <div>
                  <p>{item.name}</p>
                  <p>{item.bio}</p>
                </div>
              </DetailWrapper>
              <span>
                <span>{item.balance}</span> {t("items")}
              </span>
            </ItemWrapper>
          ) : (
            <></>
          )
        )}
    </OwnedByContainer>
  );
}
