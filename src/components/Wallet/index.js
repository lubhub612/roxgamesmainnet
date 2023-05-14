import { useEffect, useState, useCallback, useContext, useMemo } from "react";
import { networkParams } from "./networks";
import { toHex, truncateAddress } from "../../utils/addressUtils";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { Web3Auth } from "@web3auth/modal";
import {
  WALLET_ADAPTERS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";
import { providerOptions } from "./providerOptions";
import copyText from "copy-text-to-clipboard";
import erc20Abi from "../../abi/WETH.json";
import BiWallet from "@meronex/icons/bi/BiWallet";
import Link from "next/link";
import Image from "next/image";
import { useRoxGlobal } from "../../contexts/RoxGlobalContext";
import { useRouter } from "next/router";
import GlobalContext from "../../contexts/GlobalContext";
import { useTranslation } from "react-i18next";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import RPC from "./web3RPC.tsx";
import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiFillMail,
  AiOutlineClose,
} from "react-icons/ai";
import { SiTwitter } from "react-icons/si";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiMessageDots } from "react-icons/bi";
import icon_one from "../../assets/images/SocialIcon.svg";
import icon_two from "../../assets/images/metaMask.svg";
import { TorusWalletAdapter } from "@web3auth/torus-evm-adapter";
import Torus from "@toruslabs/torus-embed";
import Web3 from "web3";
import AuthLoading from "../AuthLoading/index";
import MetamaskAuth from "../AuthLoading/metamaskAuth";
import { httpGetAsync } from "../../utils/myComponent";

/*const web3Modal = new Web3Modal({
  cacheProvider: true, // optional
  providerOptions // required
}); */
const torus = new Torus();

export default function Wallet(props) {
  const router = useRouter();
  const { refID } = router.query;
  const { addFileToIPFS, getIPFSUrl, invokeServer, global, sessionData } =
    useRoxGlobal();
  const { data, setData, handleStable, stableName } = useContext(GlobalContext);
  console.log("🚀 ~ file: index.js:54 ~ Wallet ~ stableName:", stableName)
  console.log("🚀 ~ file: index.js:54 ~ Wallet ~ data:", data);
  // const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [signature, setSignature] = useState("");
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState(props.chainId);
  const [network, setNetwork] = useState();
  const [message, setMessage] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();
  const [url, setUrl] = useState();
  const [weth, setWeth] = useState("0");
  const [userImage, setUserImage] = useState("");
  const [image, setImage] = useState();
  const [subscribersID, setSubscribersID] = useState("");
  const [ProfileMenu, setProfileMenu] = useState(false);
  const walletSessionKey = "walletHyperXV1";
  const torusSessionKey = "walletTorus";
  const _TOKEN_ADDRESS = "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619";
  const { t } = useTranslation();
  const [wallet, setWallet] = useState({
    address: "",
    chainId: 0,
  });
  const [provider, setProvider] = useState();
  const [signupBox, setSignUpBox] = useState(false);
  const [web3auth, setWeb3auth] = useState(null);
  const [addressData, setAddressData] = useState(props.account);
  const [loading, setLoading] = useState(false);

  const [refresh, setRefresh] = useState();
  const [loadingTorus, setLoadingTorus] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [countryInfo, setCountryInfo] = useState({});
  console.log("🚀 ~ file: index.js:88 ~ Wallet ~ countryInfo:", countryInfo);
  const [copy, setCopy] = useState(false);
  const clientId =
    "BAPonWFXDB-gMm6K2D5SuqqsEYEMoTApBjg7af_aJ5xhduitvAqnUET3d0Rd8v-zFymxQWkvTrZEtY3Eex2DA3k";

  if (typeof window !== "undefined") {
    //here `window` is available
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      // providerOptions, // required
    });
  }

  const copyToClipboard = (text) => {
    copyText(`https://polygonscan.com/address/${text}`);
  };

  const login = async () => {
    //torus wallet
    setLoadingTorus(true);
    try {
      await torus.init({
        showTorusButton: false,
        whiteLabel: {
          theme: {
            isDark:
              window.localStorage.getItem("theme") === "dark" ? true : false,
          },
        },
      });

      setLoadingTorus(false);
      await torus.login();
      setUserInfo(await torus.getUserInfo());
      setWeb3auth(torus); // await torus.ethereum.enable()
      const web3 = new Web3(torus.provider);
      const rpc = new RPC(web3);
      const addressData = await rpc.getAccounts();
      // console.log(rpc.getUserInfo(),"getUserInfo");
      // await web3auth.getUserInfo();
      if (addressData) {
        setAddressData(addressData);
        setAccount(addressData);
        setWallet({
          address: addressData,
          chainId: network?.chainId,
        });
        setLoadingTorus(false);
      }
    } catch (err) {
      console.log("🚀 ~ file: index.js ~ line 247 ~ login ~ err", err);
    }
  };

  const logout = async () => {
    const logindata = {
      subscriber_id: data[0]?._id,
      logout_time: new Date(),
    };
    await sessionData(logindata);
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth?.logout();
    setUserInfo({});
    setProvider(null);
    setCountryInfo({});
    console.log("logout");
  };

  // const connectWallet = async () => {
  //   // Meta mask
  //   try {
  //     // const provider = await web3Modal.connectTo("walletconnect");
  //     // const web3 = new  Web3(provider)
  //     if (typeof window.ethereum === "undefined") {
  //       setLoading(true);
  //       setSignUpBox(false);
  //     }
  //     const web3Modal = new Web3Modal({
  //       // cacheProvider: true, // optional
  //       // providerOptions, // required
  //     });

  //     const provider = await web3Modal.connect();

  //     const library = new ethers.providers.Web3Provider(provider);

  //     const accounts = await library.listAccounts();

  //     const network = await library.getNetwork();

  //     setProvider(provider);
  //     setLibrary(library);
  //     if (accounts) setAccount(accounts[0]);

  //     setChainId(network.chainId);
  //     setWallet({
  //       address: accounts[0],
  //       chainId: network.chainId,
  //     });
  //     if (accounts) setUrl("https://polygonscan.com/address/" + accounts[0]);
  //     const providerM = new ethers.providers.Web3Provider(window.ethereum);
  //     const TokenContract = new ethers.Contract(
  //       _TOKEN_ADDRESS,
  //       erc20Abi,
  //       providerM.getSigner()
  //     );
  //     // console.log("A", TokenContract);
  //     /* await TokenContract.balanceOf("0x2b7e82256BBC76210409eDfEDD75aADe2103cf17").then(async (res)=>{
  //       await console.log("B", res);
  //       console.log(res._hex)
  //     }); */
  //     if (accounts) {
  //       const usdtpoolBalance = await TokenContract.balanceOf(accounts[0]);
  //       console.log("WETH", ethers.utils.formatUnits(usdtpoolBalance, 18));
  //       const WETH2 = ethers.utils.formatUnits(usdtpoolBalance, 18);
  //       const WETH1 = parseFloat(WETH2);
  //       const WETH = WETH1.toFixed(0);
  //       setWeth(WETH);
  //     }
  //     console.log("WETH");
  //   } catch (error) {
  //     setError(error);
  //   }
  //   setSignUpBox(false);
  // };

  const connectWallet = async () => {
    try {
      if (typeof window.ethereum === "undefined") {
        setLoading(true);
        setSignUpBox(false);
        return; // add this line to return from the function
      }

      const web3Modal = new Web3Modal({
        cacheProvider: true,
      });

      const provider = await web3Modal.connect();

      const library = new ethers.providers.Web3Provider(provider);

      const accounts = await library.listAccounts();
      setAccount(accounts[0]);

      const network = await library.getNetwork();

      setProvider(provider);
      setLibrary(library);

      if (accounts) setAccount(accounts[0]);

      setChainId(network.chainId);

      setWallet({
        address: accounts[0],
        chainId: network.chainId,
      });

      if (accounts) setUrl("https://polygonscan.com/address/" + accounts[0]);

      const providerM = new ethers.providers.Web3Provider(window.ethereum);
      const TokenContract = new ethers.Contract(
        _TOKEN_ADDRESS,
        erc20Abi,
        providerM.getSigner()
      );

      if (accounts) {
        const usdtpoolBalance = await TokenContract.balanceOf(accounts[0]);
        console.log("WETH", ethers.utils.formatUnits(usdtpoolBalance, 18));
        const WETH2 = ethers.utils.formatUnits(usdtpoolBalance, 18);
        const WETH1 = parseFloat(WETH2);
        const WETH = WETH1.toFixed(0);
        setWeth(WETH);
      }
    } catch (error) {
      setError(error);
    }

    setSignUpBox(false);
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

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

  const refreshState = () => {
    router.push("/");
    window.localStorage.removeItem(walletSessionKey);
    window.localStorage.removeItem(torusSessionKey);
    setAccount();
    setChainId();
    setNetwork("");
    setMessage("");
    setSignature("");
    setVerified(undefined);
    // setAddressData();
  };

  const disconnect = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      // providerOptions, // required
    });
    web3Modal.clearCachedProvider();
    if (wallet.address) {
      logout();
    }
    refreshState();
  };

  useEffect(() => {
    const web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      // providerOptions, // required
    });
    let oldAddrTorus = window.localStorage.getItem(torusSessionKey);
    if (oldAddrTorus) {
      setAccount(oldAddrTorus);
    }
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, []);

  useEffect(() => {
    props.setAccount(account);
    props.setAddressData(addressData);
  }, [account, addressData]);

  useEffect(() => {
    props.setChainId(chainId);
  }, [chainId]);

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    let oldAddrTorus = window.localStorage.getItem(torusSessionKey);

    if (wallet.address !== "" && wallet.address !== oldAddr) {
      window.localStorage.setItem(walletSessionKey, wallet.address);
      console.log(`wallet: ${oldAddr} => ${wallet.address}`);
      setAccount(wallet.address);
    }
    if (addressData !== "" && addressData !== oldAddrTorus) {
      window.localStorage.setItem(torusSessionKey, addressData);
      console.log(`wallet: ${oldAddrTorus} => ${addressData}`);
    }
  }, [wallet.address, addressData]);

  const getWalletAddressBySessionKey = useCallback(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    return oldAddr;
  }, [walletSessionKey]);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        if (accounts) setAccount(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
        // console.log("Chain:", chainId);
      };

      const handleDisconnect = () => {
        // console.log("disconnect", error);
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

  useEffect(() => {
    AddressData();
  }, [account, refID]);

  const AddressData = async () => {
    const url =
      "https://ipgeolocation.abstractapi.com/v1/?api_key=a32d46d3045f4c02b2db6476487f65cf";
    httpGetAsync(url, async (response) => {
      if (response) {
        await setCountryInfo(JSON.parse(response));
      }
    });

    if (countryInfo) {
      if (refID) {
        const data = {
          refID: refID,
          address: account,
          name: userInfo?.name,
          email: userInfo?.email,
          typeOfLogin: userInfo?.typeOfLogin,
          verifier: userInfo?.verifier,
          verifierId: userInfo?.verifierId,
          avatarURI: userInfo?.profileImage,
          countryIP: countryInfo?.countryIP,
          country: countryInfo?.country,
        };
        let ref = invokeServer("post", "/api/signin/ref", data);
      } else {
        const datas = {
          refID: refID,
          address: account,
          name: userInfo?.name,
          email: userInfo?.email,
          typeOfLogin: userInfo?.typeOfLogin,
          verifier: userInfo?.verifier,
          verifierId: userInfo?.verifierId,
          avatarURI: userInfo?.profileImage,
          countryIP: countryInfo?.region_geoname_id,
          country: countryInfo?.country,
        };
        const Arr = window.localStorage.getItem(walletSessionKey);
        let walletData = await invokeServer(
          "post",
          "/api/signin/addressdata",
          datas
        );

        setSubscribersID(walletData?.data?.data[0]?._id);
        setImage(walletData?.data?.data[0]?.avatarURI);
        const url = walletData?.data?.data[0]?.avatarURI?.includes("http")
          ? walletData?.data?.data[0]?.avatarURI
          : `${global?.serverURL}/public/${walletData?.data?.data[0]?.avatarURI}`;

        setUserImage(url);
        setData(walletData?.data?.data);

        if (walletData?.data?.data[0]?._id && countryInfo) {
          countryInfo.subscriber_id = walletData?.data?.data[0]?._id;
          sessionData(countryInfo);
        }
      }
    }
  };

  // useEffect(() => {
  //   if (refID && account) {
  //     const data = {
  //       refID: refID,
  //       address: account,
  //     };
  //     let ref = invokeServer("post", "/api/signin/ref", data);
  //   }
  // }, [refID, account]);

  useMemo(() => {
    setAccount(wallet.address);
  }, [wallet]);
  return (
    <>
      {loading && <MetamaskAuth open={loading} setOpen={setLoading} />}
      {loadingTorus && <AuthLoading />}
      {signupBox && (
        <div className="modal-content">
          <div className="modal-main">
            <div className="close_icon" onClick={() => setSignUpBox(false)}>
              <AiOutlineClose className="close_theme close-icon" />
            </div>
            <h4>Start Playing ROX Games</h4>
            <p>
              Select an option to create an account and connect to the game.
            </p>
            <div className="accodian">
              <h4>
                What is Metamask? <MdKeyboardArrowDown />{" "}
              </h4>

              <div className="learn_text">
                <p>
                  MetaMask is Web{"'"}s most popular wallet. A browser extension
                  and a mobile app <span>Learn More</span>
                </p>
              </div>
            </div>
            <div
              className="box_one"
              onClick={() => {
                setSignUpBox(false);
                login();
              }}
            >
              <div className="left_part">
                <h5>Connect using Social</h5>
                <p>Use your social accounts</p>
                <div className="icon">
                  <ul className="main_menu">
                    <li>
                      <AiOutlineGoogle />
                    </li>
                    <li>
                      <AiFillFacebook />
                    </li>
                    <li>
                      <SiTwitter />
                    </li>
                    <li>
                      <BiMessageDots />
                    </li>
                    <li>
                      <AiFillMail />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="part_two">
                <Image src={icon_one} alt="" />
              </div>
            </div>
            <div className="divider">
              <div className="line"></div>
              <span className="text">or</span>
              <div className="line"></div>
            </div>
            <div className="box_one" onClick={connectWallet}>
              <div className="left_part_two">
                <h5>Metamask</h5>
                <p>Browser Extension</p>
              </div>
              <div className="right_part_two">
                <Image src={icon_two} alt="" />
              </div>
            </div>
            <div className="login">
              <p>
                Already have an account? <span>Log in</span>
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex">
        {account ? (
          <div className="profile-btn">
            <div
              className="profile-btn-img"
              onClick={() => {
                setProfileMenu(true);
                handleStable();
              }}
            >
              {userImage && image ? (
                <img
                  className="userImage"
                  style={{ width: "36px", height: "36px" }}
                  src={userImage}
                />
              ) : (
                <Image
                  src="/images/profile.png"
                  alt="profile"
                  width={36}
                  height={36}
                />
              )}
            </div>
            {ProfileMenu && (
              <div className="profile-side-menu">
                <svg
                  onClick={() => {
                    setProfileMenu(false);
                    setCopy(false);
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
                <div className="profile-side-menu-header">
                  <strong>
                    {userImage && image ? (
                      <img
                        className="userImage"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                        }}
                        src={userImage}
                      />
                    ) : (
                      <Image
                        src="/images/profile.png"
                        alt="profile"
                        width={36}
                        height={36}
                      />
                    )}
                    {account
                      ? account.substr(0, 2) + "..." + account.slice(-4)
                      : ""}
                  </strong>
                  <Link href="/contact">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chat-square-text"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                      <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </Link>
                </div>
                <ul className="profile-side-list">
                  <li>
                    <Link href="/settings">{t("MY Profile")}</Link>
                  </li>
                  <li>
                    <Link href="/referrals">{t("MY Referrals")}</Link>
                  </li>
                  <li onClick={() => handleStable()}>
                    <Link
                      href={
                        stableName
                          ? `/stable?stable=${stableName?.title
                              ?.toString()
                              .replaceAll(" ", "-")}`
                          : "#"
                      }
                    >
                      {t("My Stable")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/winnings">{t("My Race Results")}</Link>
                  </li>
                </ul>
                <div className="profile-side-card">
                  <div className="profile-side-card-header">
                    <span>{t("Your Wallet")}</span>
                    <strong
                      onClick={() => {
                        copyToClipboard(account);
                      }}
                    >
                      <Link href={`https://polygonscan.com/address/${account}`}>
                        <a target="_blank" className="textcolor">
                          {account
                            ? account.substr(0, 2) + "..." + account.slice(-4)
                            : ""}
                        </a>
                      </Link>
                      <div onClick={() => setCopy(true)}>
                        <svg
                          data-tip="custom show"
                          data-event="click focus"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-files"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                        </svg>
                      </div>
                      <div className="bar">{copy && "Copied!"}</div>
                    </strong>
                    {/* <a
                      style={{ marginRight: "10px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </svg>
                    </a> */}
                  </div>
                  <ul>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          enableBackground="new 0 0 2500 2500"
                          version="1.1"
                          viewBox="0 0 2500 2500"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#53AE94"
                            d="M1250 6.9c686.1 0 1242.4 556.6 1242.4 1243.1S1936.1 2493.1 1250 2493.1 7.6 1936.6 7.6 1250 563.8 6.9 1250 6.9"
                            className="st0"
                          ></path>
                          <path
                            fill="#FFFFFF"
                            d="M1403.3 1031.7v-185h422.9V564.8H674.7v281.9h422.9v184.9c-343.7 15.8-602.1 83.9-602.1 165.5s258.6 149.7 602.1 165.6v592.6h305.8v-592.7c343.1-15.8 601-83.9 601-165.4 0-81.6-257.9-149.6-601.1-165.5m.1 280.7c-8.6.4-53 3.1-151.7 3.1-78.9 0-134.4-2.2-154-3.3v.2c-303.7-13.5-530.3-66.4-530.3-129.7 0-63.3 226.7-116.1 530.3-129.6v206.6c19.9 1.4 76.8 4.7 155.3 4.7 94.3 0 141.7-3.9 150.4-4.7v-206.6c303.1 13.5 529.2 66.5 529.2 129.5 0 63.1-226.2 116.1-529.2 129.6"
                            className="st1"
                          ></path>
                        </svg>
                        {t("USDT")}
                      </span>
                      <span>{weth}</span>
                    </li>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0"
                          y="0"
                          enableBackground="new 0 0 2500 2500"
                          version="1.1"
                          viewBox="0 0 2500 2500"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#8247E5"
                            d="M1249.5 6.9c686.9 0 1243.6 556.6 1243.6 1243.3 0 686.7-556.7 1242.9-1243.1 1242.9-686.9 0-1243.1-556.6-1243.1-1242.9C6.4 563.5 563.1 6.9 1249.5 6.9z"
                            className="st0"
                          ></path>
                          <defs>
                            <path
                              id="SVGID_1_"
                              d="M430.7 532.2H2069.2999999999997V1967.9H430.7z"
                            ></path>
                          </defs>
                          <clipPath>
                            <use overflow="visible" xlinkHref="#SVGID_1_"></use>
                          </clipPath>
                          <g className="st1">
                            <path
                              fill="#FFFFFF"
                              d="M1668.4 969.5c-30-17.2-68.4-17.2-102.3 0L1327 1111.1l-162.3 90L930 1342.2c-30 17.2-68.4 17.2-102.3 0l-183.5-111.6c-30-17.2-51.2-51.6-51.2-90V926.2c0-34.4 17.2-68.4 51.2-90L827.7 729c30-17.2 68.4-17.2 102.3 0l183.5 111.6c30 17.2 51.2 51.6 51.2 90v141.6l162.3-94.4V832.2c0-34.4-17.2-68.4-51.2-90L934.4 540.6c-30-17.2-68.4-17.2-102.3 0L482.3 746.7c-33.9 17.2-51.2 51.6-51.2 85.6V1235c0 34.4 17.2 68.4 51.2 90l345.9 201.6c30 17.2 68.4 17.2 102.3 0l234.7-137.2 162.3-94.4 234.7-137.2c30-17.2 68.4-17.2 102.3 0L1848 1265c30 17.2 51.2 51.6 51.2 90v214.4c0 34.4-17.2 68.4-51.2 90l-179.1 107.2c-30 17.2-68.4 17.2-102.3 0l-184-107.2c-30-17.2-51.2-51.6-51.2-90v-137.2l-162.3 94.4v141.6c0 34.4 17.2 68.4 51.2 90l345.8 201.7c30 17.2 68.4 17.2 102.3 0l345.8-201.7c30-17.2 51.2-51.6 51.2-90V1261c0-34.4-17.2-68.4-51.2-90l-345.8-201.5z"
                              className="st2"
                            ></path>
                          </g>
                        </svg>
                        {t("MATIC")}
                      </span>
                      <span>{weth}</span>
                    </li>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          enableBackground="new 0 0 2500 2500"
                          version="1.1"
                          viewBox="0 0 2500 2500"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#6F2ED6"
                            d="M1249.9 6.9c687.4 0 1244.6 556.5 1244.6 1243.1s-557.2 1243.1-1244.6 1243.1S5.4 1936.5 5.4 1249.9 562.6 6.9 1249.9 6.9z"
                            className="st0"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M575.7 1037.3L904.5 940v267.1h589.9c65 0 110.2-35.6 135.7-106.8 10.4-29.3 15.6-59.7 15.6-91.5 0-77.6-23.8-134.2-71.4-169.8-24.4-16.5-51-24.8-80-24.8H575.7l88.7-322.4h833.5c170.5 0 302.7 68.1 396.7 204.1 66.1 96.7 99.2 206.7 99.2 330 0 147.5-45.2 268.9-135.7 364.3-47.6 49.6-103.2 85.8-167.1 108.8l342.8 509.3h-388l-301-478.7H904.6v478.7h-329v-971z"
                            className="st1"
                          ></path>
                        </svg>
                        {t("ROX")}
                      </span>
                      <span>{weth}</span>
                    </li>
                  </ul>
                  <Link href="/swap">
                    <button>{t("Buy ROX Token")}</button>
                  </Link>
                </div>
                <div className="profile-side-card">
                  <ul>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          enableBackground="new 0 0 2500 2500"
                          version="1.1"
                          viewBox="0 0 2500 2500"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#6F2ED6"
                            d="M1249.9 6.9c687.4 0 1244.6 556.5 1244.6 1243.1s-557.2 1243.1-1244.6 1243.1S5.4 1936.5 5.4 1249.9 562.6 6.9 1249.9 6.9z"
                            className="st0"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M575.7 1037.3L904.5 940v267.1h589.9c65 0 110.2-35.6 135.7-106.8 10.4-29.3 15.6-59.7 15.6-91.5 0-77.6-23.8-134.2-71.4-169.8-24.4-16.5-51-24.8-80-24.8H575.7l88.7-322.4h833.5c170.5 0 302.7 68.1 396.7 204.1 66.1 96.7 99.2 206.7 99.2 330 0 147.5-45.2 268.9-135.7 364.3-47.6 49.6-103.2 85.8-167.1 108.8l342.8 509.3h-388l-301-478.7H904.6v478.7h-329v-971z"
                            className="st1"
                          ></path>
                        </svg>
                        {t("My Staked ROX")}
                      </span>
                      <span>0</span>
                    </li>
                    <li>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0"
                          y="0"
                          enableBackground="new 0 0 2500 2500"
                          version="1.1"
                          viewBox="0 0 2500 2500"
                          xmlSpace="preserve"
                        >
                          <path
                            fill="#6F2ED6"
                            d="M1249.9 6.9c687.4 0 1244.6 556.5 1244.6 1243.1s-557.2 1243.1-1244.6 1243.1S5.4 1936.5 5.4 1249.9 562.6 6.9 1249.9 6.9z"
                            className="st0"
                          ></path>
                          <path
                            fill="#FFF"
                            d="M575.7 1037.3L904.5 940v267.1h589.9c65 0 110.2-35.6 135.7-106.8 10.4-29.3 15.6-59.7 15.6-91.5 0-77.6-23.8-134.2-71.4-169.8-24.4-16.5-51-24.8-80-24.8H575.7l88.7-322.4h833.5c170.5 0 302.7 68.1 396.7 204.1 66.1 96.7 99.2 206.7 99.2 330 0 147.5-45.2 268.9-135.7 364.3-47.6 49.6-103.2 85.8-167.1 108.8l342.8 509.3h-388l-301-478.7H904.6v478.7h-329v-971z"
                            className="st1"
                          ></path>
                        </svg>
                        {t("Pending ROX Rewards")}
                      </span>
                      <span>0</span>
                    </li>
                  </ul>
                  <Link href="/vaults">
                    <button>{t("ROX Rewards")}</button>
                  </Link>
                </div>
                <div onClick={disconnect} className="discount-btn">
                  {t("Disconnect")}
                </div>
                {/*}  <div className="discount-btn">Disconnect</div> */}
                {/*} <div > <a onClick={disconnect} className="discount-btn"> Disconnect </a> </div> */}
              </div>
            )}
          </div>
        ) : (
          <h6></h6>
        )}
        {!account ? (
          <a onClick={() => setSignUpBox(true)} className="btn">
            {t("Connect")}
          </a>
        ) : chainId === 0x89 ? (
          <></>
        ) : (
          ""
        )}
      </div>
      <style jsx>{`
        .modal-content {
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          position: fixed;
          z-index: 99999;
          background: #00000075;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-main {
          border-radius: 8px;
          padding: 2rem 2rem;

          height: auto;
          width: 430px;

          text-align: center;
          background: var(--background);
        }
        .close-icon {
          color: var(--colorWhite);
        }
        .textcolor {
          color: #fff;
        }
        .modal-main h4 {
          color: var(--colorWhite);
          padding: 14px 0px;
          font-size: 24px;
        }
        .modal-main p {
          color: var(--colorWhite);
          margin: 8px 0px 0px 0px;
          text-align: start;
          font-size: 14px;
        }
        .bar {
          position: relative;
        }

        .accodian h4 {
          font-size: 16px;
          padding: 0px;
          margin-top: 16px;
          text-align: start;
          color: #27b18a;
        }
        .box_one {
          align-items: flex-start;
          background: var(--settingItemBg);
          border-radius: 8px;
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 0.5rem 0;
          padding: 20px;
          transition: background-color 0.15s;
          width: 100%;
          padding-top: 20px;
        }
        .left_part {
          text-align: start;
        }
        .left_part h5 {
          font-size: 16px;
          color: var(--colorWhite);
        }
        .left_part p {
          font-size: 14px;
          margin: 0px;
          color: var(--titleColor);
        }
        .main_menu {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        .main_menu li {
          color: var(--titleColor);
          font-size: 18px;
        }
        .divider {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 1rem 0;
          width: 100%;
        }
        .text {
          margin: 0px 10px;
          color: var(--titleColor);
        }
        .line {
          width: 100%;
          height: 1px;
          background: var(--titleColor);
        }
        .left_part_two {
          text-align: start;
        }
        .left_part_two h5 {
          font-size: 16px;
          color: var(--colorWhite);
        }
        .left_part_two p {
          font-size: 14px;
          margin: 0px;
          color: var(--titleColor);
        }
        .login {
          text-align: center;
        }
        .login p {
          text-align: center;
          color: var(--titleColor);
          font-size: 14px;
        }
        .login p span {
          cursor: pointer;
          color: #27b18a;
          font-widht: bold;
        }
        .close_icon {
          text-align: end;
          font-size: 24px;
          color: var(--titleColor);
        }
        .learn_text p span {
          cursor: pointer;
          color: #27b18a;
          font-widht: bold;
        }
      `}</style>
    </>
  );
}
