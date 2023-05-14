import React from "react";
//import { useWallet } from 'use-wallet'
//import { isMobile } from 'react-device-detect'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

//import useToast from '../../hooks/useToast';
import walletConfig from "./configPoly";

//const Web3 = require("web3");

import { networkParams } from "./networks";
import { toHex, truncateAddress } from "../../utils/addressUtils";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "./providerOptions";
import GlobalContext from "../GlobalContext";

export const WalletContext = createContext();

//const walletSessionKey = 'walletHyperXV1';

export const WalletProvider = (props) => {
  const { data } = useContext(GlobalContext);
  console.log("🚀 ~ file: index.js:31 ~ WalletProvider ~ user:", data)
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState(props.account);
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState(props.chainId);
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();

  const walletSessionKey = "walletHyperXV1";
  const rpcUrl = walletConfig.rpcUrls[0];

  const [wallet, setWallet] = useState({
    address: "",
    chainId: 0,
  });
  console.log("🚀 ~ file: index.js:46 ~ WalletProvider ~ wallet:", wallet);



  const connectWallet = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
    });
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(network.chainId);
      setWallet({
        address: accounts[0],
        chainId: network.chainId,
      });
    } catch (error) {
      setError(error);
    }
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  //   const handleInput = (e) => {
  //     const msg = e.target.value;
  //     setMessage(msg);
  //   };

  const switchNetwork = async () => {
    ///const toNetworkId = 56;

    const toNetworkId = 89;

    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(toNetworkId) }],
      });
      setChainId(toNetworkId);

      setWallet({
        address: account,
        chainId: toNetworkId,
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(toNetworkId)]],
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  //   const signMessage = async () => {
  //     if (!library) return;
  //     try {
  //       const signature = await library.provider.request({
  //         method: "personal_sign",
  //         params: [message, account]
  //       });
  //       setSignedMessage(message);
  //       setSignature(signature);
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  //   const verifyMessage = async () => {
  //     if (!library) return;
  //     try {
  //       const verify = await library.provider.request({
  //         method: "personal_ecRecover",
  //         params: [signedMessage, signature]
  //       });
  //       setVerified(verify === account.toLowerCase());
  //     } catch (error) {
  //       setError(error);
  //     }
  //   };

  const connectWalletChain = useCallback(
    async (chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls) => {
      let ethereum = window.ethereum;
      if (ethereum === undefined) return;

      try {
        await library.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId }],
        });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        console.log("error switch chain: ", switchError);
        if (switchError.code === 4902) {
          const data = [
            {
              // chainId: '0x38',
              chainId: chainId,
              // chainName: 'Binance Smart Chain',
              chainName: chainName,
              // nativeCurrency:
              // {
              //     name: 'BNB',
              //     symbol: 'BNB',
              //     decimals: 18
              // },
              nativeCurrency: nativeCurrency,
              // rpcUrls: ['https://bsc-dataseed.binance.org/'],
              rpcUrls: rpcUrls,
              // blockExplorerUrls: ['https://bscscan.com/'],
              blockExplorerUrls: blockExplorerUrls,
            },
          ];

          try {
            await library.provider.request({
              method: "wallet_addEthereumChain",
              params: data,
            });
          } catch (err) {
            console.error("Failed to add network ", err);
          }
        }
      }
    },
    []
  );

  const connectWalletByConfig = useCallback(async () => {
    return await connectWalletChain(
      walletConfig.chainId,
      walletConfig.networkName,
      walletConfig.nativeCurrency,
      walletConfig.rpcUrls,
      walletConfig.blockUrls
    );
  }, [connectWalletChain]);

  const refreshState = () => {
    setAccount();
    setChainId();
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
  };

  const disconnectWallet = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      // providerOptions, // required
    });
    web3Modal.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      // providerOptions, // required
    });
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    setAccount(account);
  }, [account]);

  useEffect(() => {
    setChainId(chainId);
  }, [chainId]);

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    if (wallet.address !== "" && wallet.address !== oldAddr) {
      window.localStorage.setItem(walletSessionKey, wallet.address);
      console.log(`wallet: ${oldAddr} => ${wallet.address}`);
    }
  }, [wallet.address]);

  const getWalletAddressBySessionKey = useCallback(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    return oldAddr;
  }, [walletSessionKey]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        console.log("accountsChanged", accounts);
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
        console.log("Chain:", chainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  return (
    <WalletContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        connectWalletByConfig,
        getWalletAddressBySessionKey,
        wallet,
        setWallet,
        datas:data
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};

export const useCustomWallet = () => {
  const dataManager = useContext(WalletContext);
  return dataManager || [{}, async () => {}];
};
