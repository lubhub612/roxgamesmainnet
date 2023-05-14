import shajs from "sha.js";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useCustomWallet } from "../WalletContext";
import useGlobal from "../GlobalContext/index";
import useToast from "../../hooks/useToast";
import walletConfig from "../WalletContext/configPoly";
import GlobalContext from "../GlobalContext/index";
const chainId = parseInt(walletConfig.chainId, 16);

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data } = useContext(GlobalContext);
  console.log("🚀 ~ file: index.js:14 ~ AuthProvider ~ data:", data);
  const [auth, setAuth] = useState({
    loggedEmailName: "",
    loggedUserName: "",
    isLoggedIn: false,
    avatarURI: "",
    coverURI: "",
    businessName: "",
    bio: "",
    notification: "{}",
  });

  const [creatorSignupInfo, setCreatorSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    projectName: "",
    projectDescription: "",
    category: "",
    tags: "",
  });

  const { wallet, getWalletAddressBySessionKey, disconnectWallet } =
  useCustomWallet();
  console.log("🚀 ~ file: index.js:43 ~ AuthProvider ~ wallet:", wallet)
  const { global, invokeServer } = useContext(GlobalContext);
  const { toastInfo, toastError, toastSuccess, showLoading, hideLoading } =
    useToast();

  const handleLoggedUser = (user) => {
    setAuth((u) => {
      return {
        ...u,
        loggedEmailName: user.loggedEmailName,
        loggedUserName: user.loggedUserName,
        loggedUserRole: user.loggedUserRole,
        isLoggedIn: user.isLoggedIn,
        avatarURI: user.avatarURI || "",
        coverURI: user.coverURI || "",
        businessName: user.businessName || "",
        bio: user.bio || "",
        notification: user.notification || "{}",
      };
    });
  };

  const handleSubmitCreatorInfo = () => {
    let pwd = shajs("sha384").update(creatorSignupInfo.password).digest("hex");

    showLoading("Requesting to sign-up as a creator...");

    invokeServer("post", "/api/signup/creator", {
      address: wallet.address?.toLowerCase(),
      name: creatorSignupInfo.name,
      email: creatorSignupInfo.email,
      password: pwd,
      projectName: creatorSignupInfo.projectName,
      projectDescription: creatorSignupInfo.projectDescription,
      category: creatorSignupInfo.category,
      tags: creatorSignupInfo.tags,
    })
      .then((response) => {
        hideLoading();

        if (response.data.result == 1) {
          toastSuccess("Sign-up As a Creator", response.data.msg);
        } else {
          toastError("Sign-up As a Creator", response.data.msg);
        }
      })
      .catch((err) => {
        hideLoading();
        toastError("Sign-up As a Creator", `${err.message}`);
        console.log(err.message);
      });
  };

  const updateSessionProfile = (t) => {
    if (!auth.isLoggedIn) return;

    let tdata = JSON.parse(window.localStorage.getItem(global.sessionKey));
    window.localStorage.setItem(
      global.sessionKey,
      JSON.stringify({ ...tdata, ...t })
    );

    t.loggedUserName &&
      setAuth((t) => {
        return { ...t, loggedUserName: t.loggedUserName };
      });
    t.loggedEmailName &&
      setAuth((t) => {
        return { ...t, loggedEmailName: t.loggedEmailName };
      });
    t.avatar &&
      setAuth((t) => {
        return { ...t, avatarURI: t.avatarURI };
      });
    t.cover &&
      setAuth((t) => {
        return { ...t, coverURI: t.coverURI };
      });
    t.bio &&
      setAuth((t) => {
        return { ...t, bio: t.bio };
      });
    t.businessName &&
      setAuth((t) => {
        return { ...t, businessName: t.businessName };
      });
  };

  useEffect(() => {
    var strVal = window.localStorage.getItem(global.sessionKey);
    let wval = getWalletAddressBySessionKey();

    if (strVal !== null && strVal != "") {
      var tt = JSON.parse(strVal);

      if (tt.address !== wval) {
        handleLogOut();
      } else {
        if (!auth.isLoggedIn) {
          handleLoggedUser({
            ...tt,
            isLoggedIn: true,
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    let ac = new AbortController();

    if (wallet.address) {
      invokeServer("post", "/api/signup/wallet", {
        address: "0xbeE0F749bdce396DF1BB60074577995064a9C462",
      })
        .then((response) => {
          console.log("🚀 ~ file: index.js:160 ~ .then ~ response:", response)
          if (response.data.result == 1 && ac.signal.aborted !== true) {
            window.localStorage.setItem(
              global.sessionKey,
              JSON.stringify({
                loggedEmailName: response.data.info.email || "",
                loggedUserName: response.data.info.name || "",
                address: wallet.address,
                avatarURI: response.data.info.avatarURI || "",
                coverURI: response.data.info.coverURI || "",
                businessName: response.data.info.businessName || "",
                bio: response.data.info.bio || "",
                notification: response.data.info.notification || "{}",
              })
            );

            handleLoggedUser({
              loggedEmailName: response.data.info.email || "",
              loggedUserName: response.data.info.name || "",
              isLoggedIn: true,
              avatarURI: response.data.info.avatarURI || "",
              coverURI: response.data.info.coverURI || "",
              businessName: response.data.info.businessName || "",
              bio: response.data.info.bio || "",
              notification: response.data.info.notification || "{}",
            });

            toastSuccess("Auth", response.data.msg);
          } else {
            toastError("Auth", response.data.msg);
          }
        })
        .catch((err) => {
          console.log("Auth", `sign-up failed ${err.toString()}`);
          toastError("Auth", err.message);
        });
    } else {
      var tdata = window.localStorage.getItem(global.sessionKey);
      let t = JSON.parse(tdata);

      invokeServer("post", "/api/signout/", {
        address: t?.address || "",
      })
        .then((response) => {
          if (ac.signal.aborted !== true) {
            window.localStorage.removeItem(global.sessionKey);

            handleLoggedUser({
              loggedEmailName: "",
              loggedUserName: "",
              loggedUserRole: "",
              loggedPassword: "",
              isLoggedIn: false,
              avatarURI: "",
              coverURI: "",
              notification: "{}",
            });
            if (response.data.result === 1) {
              toastInfo("Auth", "signed out");
            }
          }
        })
        .catch((err) => {
          toastError("Auth", err.toString());
        })
        .finally(() => {});
    }

    return () => {
      ac.abort();
    };
  }, [wallet.address]);

  useEffect(() => {
    if (wallet.chainId === 0) {
      // console.log('wallet not connected');
      // toastInfo('Auth', 'wallet not connected')
      return;
    }
    if (wallet.chainId !== chainId) {
      console.log(
        `Target chain id is ${chainId}, but connected to ${wallet.chainId}`
      );
      toastInfo(
        "Auth",
        `Invalid chain id ${wallet.chainId}, switch to ${walletConfig.networkName}`
      );
    }
  }, [wallet.chainId]);

  const handleLogOut = useCallback(() => {
    disconnectWallet();

    window.localStorage.removeItem(global.sessionKey);

    handleLoggedUser({
      loggedEmailName: "",
      loggedUserName: "",
      loggedUserRole: "",
      loggedPassword: "",
      isLoggedIn: false,
      avatarURI: "",
      coverURI: "",
      notification: "{}",
    });
  }, [disconnectWallet, toastInfo]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        updateSessionProfile,
        creatorSignupInfo,
        setCreatorSignupInfo,
        handleSubmitCreatorInfo,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook to get and update configs state
 */
export const useAuth = () => {
  const authManager = useContext(AuthContext);
  return authManager || [{}, async () => {}];
};
