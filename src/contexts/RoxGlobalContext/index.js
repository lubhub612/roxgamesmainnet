//import React, { useCallback, useState } from "react";

import React, { createContext, useCallback, useContext, useState } from "react";
import copyText from "copy-text-to-clipboard";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";

const RoxGlobalContext = React.createContext();

const ipfs = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

export const RoxGlobalProvider = ({ children }) => {
  const [global, setGlobal] = useState({
    serverURL: "https://api.rox.games",
    // serverURL: "https://localhost:2083",
  });

  const [reloadSaleCounter, setReloadSaleCounter] = useState(0);

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
  const uploadFiles = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    let imageData = await invokeServer(
      "post",
      "/api/signin/image_upload",
      formData
    );
    return { file: imageData.data.file };
  };

  const addFileToIPFS = async (file) => {
    return ipfs.add(file);
  };

  const getIPFSUrl = (hash) => {
    return `https://ipfs.infura.io/ipfs/${hash}`;
  };

  const copyToClipboard = (text) => {
    copyText(text);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const sessionData = async (data) => {
    await invokeServer("post", `/api/session/loginSession`, data);
  };

  return (
    <RoxGlobalContext.Provider
      value={{
        global,
        invokeServer,
        addFileToIPFS,
        getIPFSUrl,
        reloadSaleCounter,
        reloadSales,
        copyToClipboard,
        refreshPage,
        uploadFiles,
        sessionData,
      }}
    >
      {children}
    </RoxGlobalContext.Provider>
  );
};

//export default GlobalContext;
//export { GlobalProvider };

export const useRoxGlobal = () => {
  const globalManager = useContext(RoxGlobalContext);
  return globalManager || [{}, async () => {}];
};
