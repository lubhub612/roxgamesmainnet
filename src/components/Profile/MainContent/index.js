import React, { useContext, useEffect, useRef, useState } from "react";
import HideNFTSection from "../../Shared/HideNFTSection/index";
import FavoriteSection from "../../Shared/FavoriteSection/index";
import { useCustomWallet } from "../../../contexts/WalletContext";
import GlobalContext from "../../../contexts/GlobalContext";
import { useAuth } from "../../../contexts/AuthContext";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { CardContainer, CardList, MainContentContainer } from "./styles";
import ProfilePanel from "../ProfilePanel";
import { ProfilePageSections } from "../index";
import { EmptyFolderIcon } from "../../Shared/SvgIcons";
import GradientButton from "../../Shared/GradientButton";
import ActivitySection from "../../Shared/ActivitySection";
import CardItem from "../../Shared/CardItem";
import OfferSection from "../../Shared/OfferSection";

export default function Index(props) {
  console.log("🚀 ~ file: index.js:18 ~ Index ~ props:", props);
  const router = useRouter();
  const { address, isOpenRightMenu, isMoreView, activeSection } = props;

  const gridDivRef = useRef();
  const { wallet } = useCustomWallet();
  console.log("🚀 ~ file: index.js:24 ~ Index ~ wallet:", wallet);
  const { auth } = useAuth();
  const { t } = useTranslation();
  const { invokeServer } = useContext(GlobalContext);

  const [ownedNFTs, setOwnedNFTs] = useState([]);
  console.log("🚀 ~ file: index.js:30 ~ Index ~ ownedNFTs:", ownedNFTs);
  const [nftFound, setNFTFound] = useState([]);

  const [isOperator, setIsOperator] = useState(false);
  const [ownerInfo, setOwnerInfo] = useState({
    items: 0,
    holders: 0,
    floorPrice: 0.0,
    volumeTrade: 0.0,
  });

  const handleDetails = (collectionAddress, tokenId) => {
    if (address.toLowerCase() === wallet.address.toLowerCase())
      router.push(`/products/${collectionAddress}/${tokenId}/sell`);
    else
      router.push(
        `/products?collection=${collectionAddress}&tokenId=${tokenId}/offer`
      );
  };

  const getGridDivDimension = () => {
    return gridDivRef.current?.clientWidth - 10;
  };

  useEffect(() => {
    setIsOperator(
      (t) => wallet.address.toLowerCase() === address?.toLowerCase()
    );
  }, [wallet.address, address]);

  useEffect(() => {
    let ac = new AbortController();
    invokeServer("get", `/api/nft/owner?address=${address}&validBalance=`)
      .then((res) => {
        console.log("🚀 ~ file: index.js:60 ~ .then ~ res:", res);
        if (ac.signal.aborted === false) {
          if (res.data.result === 1) {
            let j;
            let rr = res.data.items;
            // simulated too many items...
            // for (j = 0; j < 1000; j++) {
            //   let t = JSON.parse(JSON.stringify(res.data.items[0]));
            //   rr[j] = t;
            // }

            setOwnedNFTs((t) => rr);
            setNFTFound((t) => []);
          } else {
            setOwnedNFTs((t) => []);
          }
        }
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });

    invokeServer("get", `/api/user?address=${address}`)
      .then((res) => {
        console.log("🚀 ~ file: index.js:84 ~ .then ~ res:", res);
        if (ac.signal.aborted === false) {
          if (res.data.result === 1) {
            let j;
            let rr = res.data.user;
            setOwnerInfo((t) => {
              return { ...t, ...rr };
            });
          }
        }
      })
      .catch((err) => {
        console.log(`${err.message}`);
      });

    return () => ac.abort();
  }, [address]);

  useEffect(() => {
    let ac = new AbortController();

    let i,
      maxCount = 100;
    if (maxCount > ownedNFTs.length) maxCount = ownedNFTs.length;

    if (maxCount > 0) {
      console.log("🚀 ~ file: index.js:110 ~ useEffect ~ maxCount:", maxCount);
      let filters = ownedNFTs.slice(0, maxCount).map((item) => {
        return {
          collectionAddress: item.collectionAddress,
          tokenId: item.tokenId,
        };
      });

      invokeServer(
        "post",
        "/api/nft/lump",
        filters.map((t) => {
          return {
            collectionAddress: t.collectionAddress.toLowerCase(),
            tokenId: t.tokenId,
          };
        })
      )
        .then((res) => {
          console.log("🚀 ~ file: index.js:128 ~ .then ~ res:", res);
          if (res.data.result === 1) {
            if (ac.signal.aborted === false) {
              setNFTFound((t) => [...t, ...res.data.items]);
              if (ownedNFTs.length > maxCount) {
                setOwnedNFTs((t) => t.slice(maxCount, t.length));
              } else {
                setOwnedNFTs((t) => []);
              }
            }
          }
        })
        .catch((err) => {
          console.log(`${err.message}`);
        });
    } else {
      if (address !== "") {
        invokeServer("get", `/api/user/statistics?address=${address}`)
          .then((res) => {
            console.log("🚀 ~ file: index.js:147 ~ .then ~ res:", res);
            if (ac.signal.aborted === false) {
              if (res.data.result === 1) {
                setOwnerInfo((t) => {
                  return { ...t, ...res.data.info };
                });
              }
            }
          })
          .catch((err) => {
            console.log(`${err.message}`);
          });
      }
    }

    return () => ac.abort();
  }, [ownedNFTs]);

  const handleBuyNewItem = () => {
    router.push("/explorer");
  };

  const handleCreateNewItem = () => {
    router.push("/upload");
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case ProfilePageSections.grid:
        return (
          <>
            {nftFound.length > 0 ? (
              <>
                <CardList isMoreView={isMoreView} ref={gridDivRef}>
                  {nftFound.map((item, index) => (
                    <CardItem
                      key={index}
                      item={item}
                      onClick={() =>
                        handleDetails(item.collectionAddress, item.tokenId)
                      }
                      profileAddress={address}
                    />
                  ))}
                </CardList>
              </>
            ) : (
              <div className="no-result" ref={gridDivRef}>
                <EmptyFolderIcon />
                <div className="empty-text">
                  {t("There Are No NFT in")}{" "}
                  {isOperator === true ? "your" : `${address}'s`}{" "}
                  {t("portfolio Yet")}
                </div>
                {isOperator ? (
                  <div className="action-buttons">
                    <GradientButton
                      label={"Create item"}
                      height={"36px"}
                      width={"106px"}
                      fontSize={"14px"}
                      handleClick={handleCreateNewItem}
                    />
                    <GradientButton
                      label={"Buy new item"}
                      height={"36px"}
                      width={"106px"}
                      fontSize={"14px"}
                      handleClick={handleBuyNewItem}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </>
        );
      case ProfilePageSections.activity:
        return (
          <div className="activity-section">
            <ActivitySection />
          </div>
        );
      case ProfilePageSections.offer:
        return (
          <div className="offer-section">
            <OfferSection />
          </div>
        );
      case ProfilePageSections.hideNFT:
        return (
          <div className="hideNft-section">
            <HideNFTSection />
          </div>
        );
      case ProfilePageSections.favorite:
        return (
          <div className="favorite-section">
            <FavoriteSection address={address} />
          </div>
        );
      default:
        break;
    }
  };
  return (
    <MainContentContainer>
      <ProfilePanel ownerInfo={ownerInfo} />
      <CardContainer>{renderMainContent()}</CardContainer>
    </MainContentContainer>
  );
}
