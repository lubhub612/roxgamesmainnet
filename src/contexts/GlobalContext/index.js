import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { typeOf } from "react-is";
import copyText from "copy-text-to-clipboard";

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    serverURL: "https://api.rox.games",
    // serverURL: "https://localhost:2083",
  });
  const [data, setData] = useState([]);
  const [horseIdData, setHorseIdData] = useState([]);
  const [stableName, setStableName] = useState([]);
  const [gateHorseIdData, setGateHorseIdData] = useState([]);
  const [reloadSaleCounter, setReloadSaleCounter] = useState(0);
  const [allHorse, setAllHorse] = useState([]);
  const [account, setAccount] = useState();
  const [winner, setWinner] = useState();
  const [winning, setWinning] = useState();

  const reloadSales = useCallback(() => {
    setReloadSaleCounter((t) => t + 1);
  }, [reloadSaleCounter]);

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
  const refreshPage = () => {
    window.location.reload();
  };

  const handelHorseOwner = async (horse_ids) => {
    let userId;
    const horse = data?.forEach((x) => {
      return (userId = x._id);
    });

    invokeServer("get", `/api/horse?id=${horse_ids}`).then((result) => {
      result.data.forEach((y) => {
        setHorseIdData(result.data);
        let handelId = [];

        result.data.forEach((x) => {
          handelId.push(x.stable_id);
        });
        let id = handelId.join(",");
        // invokeServer("get", `/api/stable/stabledata?id=${id}`).then(
        //   (result) => {
        //     setStableName(result.data);
        //   }
        // );
      });
    });
  };

  const handleOwner = async () => {
    let userId;
    const horse = data?.forEach((x) => {
      return (userId = x._id);
    });
    if (userId) {
      await invokeServer("get", `/api/horse/ownerhorse?id=${userId}`).then(
        (result) => {
          setGateHorseIdData(result.data);
        }
      );
    }
  };

  const handleAllHorse = async () => {
    invokeServer("get", `/api/horse/allhorse`).then((result) => {
      setAllHorse(result.data);
    });
  };
  const walletSessionKey = "walletHyperXV1";

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    setAccount(oldAddr);

    let userId;
    const horse = data?.forEach((x) => {
      return (userId = x._id);
    });
    localStorage.setItem("userID", userId);
  }, [account, data]);

  const handleStable = () => {
    invokeServer("post", "/api/stable/stabledata", {
      address: account,
    }).then((result) => {
      setStableName(result.data.data);
    });
  };

  const winners = (winners_ids) => {
    invokeServer("post", `/api/horse/winners`, winners_ids).then((result) => {
      setWinner(result.data);
    });
  };

  const winnings = (horseId) => {
    console.log("🚀 ~ file: index.js ~ line 114 ~ winnings ~ horseId", horseId);
    if (horseId.length) {
      invokeServer("post", `/api/horse/winnings`, { horse_id: horseId }).then(
        (result) => {
          console.log(
            "🚀 ~ file: index.js ~ line 117 ~ invokeServer ~ result",
            result
          );
        }
      );
    }
    // console.log('horseId -->', typeof horseId, horseId);
    //   setWinning(result.data);
    // });
  };

  const HandlePopulation = async (id) => {
    const population = await invokeServer(
      "get",
      `/api/species/getspecies?id=${id}`
    );
    return population;
  };
  const copyToClipboard = (text) => {
    copyText(text);
  };
  return (
    <GlobalContext.Provider
      value={{
        invokeServer,
        reloadSales,
        refreshPage,
        handelHorseOwner,
        data,
        setData,
        horseIdData,
        setHorseIdData,
        handleStable,
        stableName,
        setStableName,
        handleOwner,
        gateHorseIdData,
        setGateHorseIdData,
        setAllHorse,
        allHorse,
        handleAllHorse,
        winners,
        winner,
        winning,
        winnings,
        HandlePopulation,
        global,
        copyToClipboard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
