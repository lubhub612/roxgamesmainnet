import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useAuth } from "../AuthContext";
import { useCustomWallet } from "../WalletContext";

const OfferContext = React.createContext();

export const OfferProvider = (props) => {
  const [global, setGlobal] = useState({
    serverURL: "https://api.rox.games",
    // serverURL: "https://localhost:2083",
  });

  const { contract, tokenId } = props;
  console.log(
    "🚀 ~ file: index.js:20 ~ OfferProvider ~ contract, tokenId:",
    contract,
    tokenId
  );
  const { auth } = useAuth();

  const [itemLoaded, setItemLoaded] = useState({});
  const [favorite, setFavorite] = useState({
    count: 0,
    set: false,
  });

  const [reloadCounter, setReloadCounter] = useState(0);

  const [unlistedInfo, setUnlistedInfo] = useState(NaN);

  const [creatorInfo, setCreatorInfo] = useState("Anonymous");

  const [comments, setComments] = useState([]);
  const { wallet } = useCustomWallet();

  const [nftSalesOnPurchase, setNftSalesOnPurchase] = useState();

  const invokeServer = useCallback(
    async (method, route, data) => {
      if (method === "post") {
        return axios.post(global.serverURL + route, data, {
          headers: {
            "Content-Security-Policy": "upgrade-insecure-requests",
            accessToken: process.env.Access_Token,
          },
        });
      } else if (method === "get") {
        return axios.get(global.serverURL + route, {
          headers: {
            "Content-Security-Policy": "upgrade-insecure-requests",
            accessToken: process.env.Access_Token,
          },
        });
      } else if (method === "put") {
        return axios.put(global.serverURL + route, data, {
          headers: {
            "Content-Security-Policy": "upgrade-insecure-requests",
            accessToken: process.env.Access_Token,
          },
        });
      }
    },
    [global.serverURL]
  );
  const walletSessionKey = "walletHyperXV1";
  const getWalletAddressBySessionKey = useCallback(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    return oldAddr;
  }, [walletSessionKey]);

  const reloadSaleInfoToOffer = useCallback(() => {
    setReloadCounter((t) => {
      return t + 1;
    });
  }, [reloadCounter]);

  const reloadUnlistedInfo = (contract, tokenId) => {
    invokeServer(
      "get",
      "/api/sale?unlisted=&collectionAddress=" +
        contract +
        "&tokenId=" +
        tokenId
    )
      .then((res) => {
        if (res.data.result === 1) {
          setUnlistedInfo((t) => res.data.sales);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reloadNFT = (contract, tokenId) => {
    invokeServer("get", "/api/nft/" + contract + "/" + tokenId)
      .then((res) => {
        // console.log(res.data);

        if (res.data.msg === "found") {
          setItemLoaded(res.data.item);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const reloadFavorite = useCallback(
    (contract, tokenId) => {
      invokeServer(
        "get",
        "/api/favorite/?collectionAddress=" +
          contract +
          "&tokenId=" +
          tokenId +
          "&account=" +
          getWalletAddressBySessionKey()
      )
        .then((res) => {
          if (res.data.msg === "no favorites") {
            setFavorite((t) => {
              return { count: 0, set: false };
            });
          } else {
            setFavorite((t) => {
              return { count: res.data.count, set: res.data.set };
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [getWalletAddressBySessionKey]
  );

  const reloadComments = (contract, tokenId) => {
    invokeServer(
      "get",
      "/api/comment/?collectionAddress=" + contract + "&tokenId=" + tokenId
    )
      .then((res) => {
        if (res.data.msg === "no comments") {
          setComments((t) => []);
        } else if (res.data.msg === "found comments") {
          setComments((t) => res.data.res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let ac = new AbortController();

    reloadNFT(contract, tokenId);
    reloadFavorite(contract, tokenId);
    reloadComments(contract, tokenId);
    reloadUnlistedInfo(contract, tokenId);

    return () => {
      ac.abort();
    };
  }, [auth?.isLoggedIn, wallet?.chain, reloadCounter]);

  useEffect(() => {
    let ac = new AbortController();
    invokeServer(
      "get",
      "/api/sale?collectionAddress=" + contract + "&tokenId=" + tokenId
    )
      .then((res) => {
        if (ac.signal.aborted === false) {
          if (res.data.result === 1) {
            setNftSalesOnPurchase((t) => {
              return {
                ...t,
                allSales: res.data.sales,
                fixedSales: res.data.fixed,
                auctionSales: res.data.auction,
              };
            });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => ac.abort();
  }, [reloadCounter]);

  const requestReloadNFT = (contract, tokenId) => {
    invokeServer("post", "/api/nft/reload", {
      collectionAddress: contract,
      tokenId: tokenId,
    })
      .then((res) => {
        reloadSaleInfoToOffer();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (itemLoaded?.creator === undefined) return;

    invokeServer("get", "/api/user?address=" + itemLoaded?.creator)
      .then((res) => {
        setCreatorInfo((t) => {
          return res.data?.user;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [itemLoaded, reloadCounter]);

  return (
    <OfferContext.Provider
      value={{
        itemLoaded,
        favorite,
        comments,
        creatorInfo,
        unlistedInfo,
        reloadSaleInfoToOffer,
        nftSalesOnPurchase,
      }}
    >
      {props.children}
    </OfferContext.Provider>
  );
};

export const useOfferInfo = () => {
  const dataManager = useContext(OfferContext);
  return dataManager || [{}, async () => {}];
};
// export default OfferContext;
// export { OfferProvider };
