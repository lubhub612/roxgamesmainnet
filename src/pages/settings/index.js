import React, { useState, useEffect, useCallback, useContext } from "react";
import Image from "next/image";
import Switch from "react-switch";
import Layout from "../../components/Layout";
//import FormInputBox from '../../components/Shared/FormInputBox';
import FileUploader from "../../components/Shared/FileUploader";
import { ChangeIcon } from "../../components/Shared/SvgIcons";
import { useAuth } from "../../contexts/AuthContext";
import { useRoxGlobal } from "../../contexts/RoxGlobalContext";
import useToast from "../../hooks/useToast";
import { useCustomWallet } from "../../contexts/WalletContext";

//import GradientButton from '../../components/Shared/GradientButton';

import settingCover from "../../assets/images/setting-banner.png";
import profileLogo from "../../assets/images/profile-banner2.png";
import GlobalContext from "../../contexts/GlobalContext";
import { useRouter } from "next/router";
import ToastListener from "../../components/Toast";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";
import Referral from "../../components/Referral";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const router = useRouter();
  const [profile, setProfile] = useState(true);
  const [stableProfile, setStableProfile] = useState(false);
  const [notification, setNotification] = useState(false);

  const [active, setActive] = useState(false);
  const [account, setAccount] = useState(false);
  const {
    auth,
    setAuth,
    creatorSignupInfo,
    setCreatorSignupInfo,
    handleSubmitCreatorInfo,
    updateSessionProfile,
  } = useAuth();
  const { wallet } = useCustomWallet();
  const { addFileToIPFS, getIPFSUrl, invokeServer, uploadFiles, global } =
    useRoxGlobal();
  const { user } = useContext(GlobalContext);
  const { t } = useTranslation();
  const { showLoading, hideLoading, toastInfo, toastError, toastSuccess } =
    useToast();

  const [name, setName] = useState("");
  const [nameWarning, setNameWarning] = useState("");
  const [accountBio, setAccountBio] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameWarning, setUserNameWarning] = useState("");
  const [emailName, setEmailName] = useState("");
  const [emailNameWarning, setEmailNameWarning] = useState("");

  const [coverImage, setCoverImage] = useState(settingCover);
  const [coverFile, setCoverFile] = useState(null);
  const [coversImage, setCoversImage] = useState("");

  const [profileImage, setProfileImage] = useState(profileLogo);
  const [profileFile, setProfileFile] = useState(null);
  const [profilesImage, setProfilesImage] = useState("");
  const [id, setId] = useState();

  //Stable profile
  const [stablecoverImage, setStableCoverImage] = useState(settingCover);
  const [stablecoverFile, setStableCoverFile] = useState(null);
  //backend image
  const [stablecoverImages, setStablecoverImages] = useState("");

  const [stableprofileImage, setStableProfileImage] = useState(profileLogo);
  const [stableprofileFile, setStableProfileFile] = useState(null);
  // backend image
  const [stableprofilesImage, setStableProfilesImage] = useState("");

  const [stableData, setStableData] = useState({});
  //referral
  const [handleReferral, setHandleReferral] = useState(false);
  const [walletDataInfo, setWalletDataInfo] = useState({});

  const [notificationSettings, setNotificationSettings] = useState({
    New_Item_Sold: true,
    New_Bid_Activity: true,
    Auction_Expiration: false,
    Owned_Asset_Upadates: false,
    Like_On_Post: false,
    Comment_Post: false,
    HyperchainX_Newsletter: false,
  });

  const walletSessionKey = "walletHyperXV1";

  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    if (!oldAddr) {
      router.push("/");
      return;
    }
    setAccount(oldAddr);
  }, [account]);

  const changeCoverImage = (uploaded) => {
    let objectUrl = URL.createObjectURL(uploaded);
    setCoverImage(objectUrl);
    setCoverFile(uploaded);
  };
  const changeProfileImage = (uploaded) => {
    let objectUrl = URL.createObjectURL(uploaded);
    setProfileImage(objectUrl);
    setProfileFile(uploaded);
  };

  useEffect(() => {
    AddressData();
    stableAddressData();
  }, [account]);

  const AddressData = async () => {
    let walletData = await invokeServer("post", "/api/signin/addressdata", {
      address: account,
    });
    setWalletDataInfo({
      ...walletData?.data?.data,
    });
    setName(walletData?.data?.data[0]?.businessName);
    setUserName(walletData?.data?.data[0]?.name);
    setAccountBio(walletData?.data?.data[0]?.bio);
    setEmailName(walletData?.data?.data[0]?.email);
    setId(walletData?.data?.data[0]?._id);

    if (walletData?.data?.data[0]?.avatarURI) {
      const url = walletData?.data?.data[0]?.avatarURI?.includes("http")
        ? walletData?.data?.data[0]?.avatarURI
        : `${global?.serverURL}/public/${walletData?.data?.data[0]?.avatarURI}`;
      setProfilesImage(url);
      // console.log("🚀 ~ file: index.js:134 ~ AddressData ~ url:", url)
    }
    if (walletData?.data?.data[0]?.coverURI) {
      // setCoversImage(walletData?.data?.data[0]?.coverURI);
      const url = walletData?.data?.data[0]?.coverURI?.includes("http")
        ? walletData?.data?.data[0]?.coverURI
        : `${global?.serverURL}/public/${walletData?.data?.data[0]?.coverURI}`;
      setCoversImage(url);
    }

    if (walletData?.data?.data[0]?.notification) {
      let notif = JSON.parse(walletData?.data?.data[0]?.notification);
      setNotificationSettings((t) => {
        return {
          ...t,
          New_Item_Sold: notif?.New_Item_Sold || false,
          New_Bid_Activity: notif?.New_Bid_Activity || false,
          Auction_Expiration: notif?.Auction_Expiration || false,
          Owned_Asset_Upadates: notif?.Owned_Asset_Upadates || false,
          Like_On_Post: notif?.Like_On_Post || false,
          Comment_Post: notif?.Comment_Post || false,
          HyperchainX_Newsletter: notif?.HyperchainX_Newsletter || false,
        };
      });
    }
  };

  const updateProfileInformation = async () => {
    showLoading("Updating profile information...");

    if (coverFile !== null) {
      // showLoading("Uploading cover image to IPFS...");
      try {
        const { file } = await uploadFiles(coverFile);

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          coverURI: file,
        });
        // hideLoading();

        // if (r.data.result === 1) {
        //   toastInfo("Cover Image", r.data.msg);
        // } else {
        //   toastError("Cover Image", r.data.msg);
        // }
      } catch (err) {
        hideLoading();

        toastError("Cover Image", err.message);
      }
    }

    if (profileFile !== null) {
      try {
        const { file } = await uploadFiles(profileFile);

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          avatarURI: file,
        });
      } catch (err) {
        hideLoading();

        toastError("Profile Image", err.message);
      }
    }

    if (name !== "") {
      try {
        // showLoading("Updating profile business name...");

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          businessName: name,
        });
      } catch (err) {
        hideLoading();

        toastError("Profile Business Name", err.message);
      }
    }

    if (accountBio !== "") {
      try {
        // showLoading("Updating profile bio...");

        let r = await invokeServer("post", "/api/signin/address", {
          address: account,
          bio: accountBio,
        });

        // hideLoading();
        // if (r.data.result === 1) {
        //   toastInfo("Profile Biography", r.data.msg);
        // } else {
        //   toastError("Profile Biography", r.data.msg);
        // }
      } catch (err) {
        hideLoading();

        toastError("Profile Biography", err.message);
      }
    }

    if (userName !== "") {
      try {
        // showLoading("Updating profile username...");
        let r = await invokeServer("post", "/api/signin/address", {
          name: userName,
          address: account,
        });

        // hideLoading();
        // if (r.data.result === 1) {
        //   toastInfo("Profile User Name", r.data.msg);
        // } else {
        //   toastError("Profile User Name", r.data.msg);
        // }
      } catch (err) {
        hideLoading();

        toastError("Profile User Name", err.message);
      }
    }

    if (emailName !== "") {
      try {
        // showLoading("Updating profile email...");
        let r = await invokeServer("post", "/api/signin/address", {
          email: emailName,
          address: account,
        });

        // hideLoading();
        // if (r.data.result === 1) {
        //   toastInfo("Profile Email", r.data.msg);
        // } else {
        //   toastError("Profile Email", r.data.msg);
        // }
      } catch (err) {
        hideLoading();

        toastError("Profile Email", err.message);
      }
    }
    hideLoading();
    toastInfo("Updating profile", "Updating profile information...");
  };

  const updateNotificationInformation = async () => {
    let notif = JSON.stringify(notificationSettings);
    try {
      showLoading("Updating notification information...");

      let r = await invokeServer("post", "/api/signin/address", {
        address: account,
        notification: notif,
      });

      hideLoading();
      if (r.data.result === 1) {
        // setAuth((t) => {
        //   return {
        //     ...t,
        //     notification: notif,
        //   };
        // });
        // updateSessionProfile({
        //   notification: notif,
        // });
        toastInfo("Profile Notification", r.data.msg);
      } else {
        toastError("Profile Notification", r.data.msg);
      }
    } catch (err) {
      hideLoading();

      console.log(err.message);
      toastError("Profile Notification", err.message);
    }
  };

  const HandelStabeData = (event) => {
    setStableData({
      ...stableData,
      [event.target.name]: event.target.value,
    });
  };

  const stableAddressData = async (event) => {
    let stableWalletData = await invokeServer(
      "post",
      "/api/stable/stabledata",
      {
        address: account,
      }
    );
    setStableData({
      ...stableWalletData?.data?.data,
    });
    setStableProfilesImage(stableWalletData?.data?.data?.avatarURI);
    setStablecoverImages(stableWalletData?.data?.data?.coverURI);
  };

  const stableCoverImage = (uploaded) => {
    let objectUrl = URL.createObjectURL(uploaded);
    setStableCoverImage(objectUrl);
    setStableCoverFile(uploaded);
  };
  const stableProfileImage = (uploaded) => {
    let objectUrl = URL.createObjectURL(uploaded);
    setStableProfileImage(objectUrl);
    setStableProfileFile(uploaded);
  };

  const updateProfileStable = async () => {
    showLoading("Updated stable profile setting");

    if (stablecoverFile !== null) {
      // showLoading("Uploading cover image to IPFS...");
      try {
        const { file } = await uploadFiles(stablecoverFile);

        let r = await invokeServer("post", "/api/stable/createstable", {
          address: account,
          coverURI: file,
        });
      } catch (err) {
        hideLoading();

        toastError("Cover Image", err.message);
      }
    }

    if (stableprofileFile !== null) {
      try {
        const { file } = await uploadFiles(stableprofileFile);

        let r = await invokeServer("post", "/api/stable/createstable", {
          address: account,
          avatarURI: file,
        });
      } catch (err) {
        hideLoading();

        toastError("Profile Image", err.message);
      }
    }

    if (stableData.stableName !== "") {
      try {
        // showLoading("Updating profile business name...");

        let r = await invokeServer("post", "/api/stable/createstable", {
          address: account,
          title: stableData.stableName,
        });
        // hideLoading();
        // if (r.data.result === 1) {
        //   toastInfo("Profile Business Name", r.data.msg);
        // } else {
        //   toastError("Profile Business Name", r.data.msg);
        // }
      } catch (err) {
        hideLoading();

        toastError("Profile Business Name", err.message);
      }
    }

    if (stableData.stableDescription !== "") {
      try {
        // showLoading("Updating profile bio...");

        let r = await invokeServer("post", "/api/stable/createstable", {
          address: account,
          description: stableData.stableDescription,
        });

        // hideLoading();
        // if (r.data.result === 1) {
        //   toastInfo("Profile Biography", r.data.msg);
        // } else {
        //   toastError("Profile Biography", r.data.msg);
        // }
      } catch (err) {
        // hideLoading();

        toastError("Profile Biography", err.message);
      }
    }
    hideLoading();
    toastInfo(
      "Updated stable profile",
      "Updating stable profile information..."
    );
  };
  return account ? (
    <Layout>
      <div className="container">
        <div className="settings">
          <div className="settings-sidebar">
            <ul>
              <li
                className={profile ? "active" : ""}
                onClick={() => {
                  setProfile(true);
                  setStableProfile(false);
                  setNotification(false);
                  setHandleReferral(false);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6905 16.3784C18.717 15.1444 19.431 13.6814 19.772 12.1133C20.113 10.5452 20.071 8.91814 19.6495 7.3697C19.2281 5.82126 18.4396 4.39702 17.3507 3.21747C16.2619 2.03791 14.9047 1.13774 13.394 0.593109C11.8834 0.0484744 10.2637 -0.124604 8.67188 0.0885164C7.08011 0.301637 5.56313 0.894685 4.24926 1.81749C2.93539 2.7403 1.86329 3.96572 1.12365 5.39009C0.384015 6.81446 -0.00140285 8.39587 3.83677e-06 10.0005C0.000543632 12.3333 0.823267 14.5913 2.32381 16.3784L2.30951 16.3906C2.35955 16.4506 2.41673 16.502 2.4682 16.5613C2.53253 16.6348 2.60186 16.7041 2.66834 16.7755C2.86848 16.9927 3.07434 17.2012 3.29021 17.3969C3.35597 17.4569 3.42388 17.5126 3.49035 17.5697C3.71909 17.7669 3.95426 17.954 4.198 18.1283C4.22945 18.1497 4.25805 18.1775 4.2895 18.1997V18.1911C5.96362 19.3682 7.96076 20 10.0079 20C12.055 20 14.0521 19.3682 15.7262 18.1911V18.1997C15.7577 18.1775 15.7856 18.1497 15.8177 18.1283C16.0608 17.9533 16.2966 17.7669 16.5254 17.5697C16.5919 17.5126 16.6598 17.4562 16.7255 17.3969C16.9414 17.2005 17.1473 16.9927 17.3474 16.7755C17.4139 16.7041 17.4825 16.6348 17.5475 16.5613C17.5983 16.502 17.6562 16.4506 17.7062 16.3899L17.6905 16.3784ZM10.0072 4.28687C10.6433 4.28687 11.2652 4.47536 11.7942 4.82852C12.3232 5.18167 12.7354 5.68362 12.9789 6.27089C13.2223 6.85816 13.286 7.50438 13.1619 8.12782C13.0378 8.75127 12.7315 9.32394 12.2816 9.77342C11.8318 10.2229 11.2586 10.529 10.6347 10.653C10.0107 10.777 9.36397 10.7134 8.77622 10.4701C8.18847 10.2269 7.6861 9.81492 7.33266 9.28639C6.97922 8.75786 6.79057 8.13647 6.79057 7.50081C6.79057 6.64842 7.12946 5.83094 7.73268 5.22821C8.33591 4.62548 9.15406 4.28687 10.0072 4.28687ZM4.29378 16.3784C4.30618 15.4407 4.6876 14.5455 5.35551 13.8865C6.02343 13.2276 6.92413 12.8579 7.86276 12.8574H12.1515C13.0902 12.8579 13.9909 13.2276 14.6588 13.8865C15.3267 14.5455 15.7081 15.4407 15.7205 16.3784C14.1529 17.79 12.1174 18.5711 10.0072 18.5711C7.89689 18.5711 5.86145 17.79 4.29378 16.3784Z"
                    fill="#EEB80A"
                  ></path>
                </svg>
                {t("Profile")}
              </li>
              <li
                className={stableProfile ? "active" : ""}
                onClick={() => {
                  setStableProfile(true);
                  setProfile(false);
                  setNotification(false);
                  setHandleReferral(false);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6905 16.3784C18.717 15.1444 19.431 13.6814 19.772 12.1133C20.113 10.5452 20.071 8.91814 19.6495 7.3697C19.2281 5.82126 18.4396 4.39702 17.3507 3.21747C16.2619 2.03791 14.9047 1.13774 13.394 0.593109C11.8834 0.0484744 10.2637 -0.124604 8.67188 0.0885164C7.08011 0.301637 5.56313 0.894685 4.24926 1.81749C2.93539 2.7403 1.86329 3.96572 1.12365 5.39009C0.384015 6.81446 -0.00140285 8.39587 3.83677e-06 10.0005C0.000543632 12.3333 0.823267 14.5913 2.32381 16.3784L2.30951 16.3906C2.35955 16.4506 2.41673 16.502 2.4682 16.5613C2.53253 16.6348 2.60186 16.7041 2.66834 16.7755C2.86848 16.9927 3.07434 17.2012 3.29021 17.3969C3.35597 17.4569 3.42388 17.5126 3.49035 17.5697C3.71909 17.7669 3.95426 17.954 4.198 18.1283C4.22945 18.1497 4.25805 18.1775 4.2895 18.1997V18.1911C5.96362 19.3682 7.96076 20 10.0079 20C12.055 20 14.0521 19.3682 15.7262 18.1911V18.1997C15.7577 18.1775 15.7856 18.1497 15.8177 18.1283C16.0608 17.9533 16.2966 17.7669 16.5254 17.5697C16.5919 17.5126 16.6598 17.4562 16.7255 17.3969C16.9414 17.2005 17.1473 16.9927 17.3474 16.7755C17.4139 16.7041 17.4825 16.6348 17.5475 16.5613C17.5983 16.502 17.6562 16.4506 17.7062 16.3899L17.6905 16.3784ZM10.0072 4.28687C10.6433 4.28687 11.2652 4.47536 11.7942 4.82852C12.3232 5.18167 12.7354 5.68362 12.9789 6.27089C13.2223 6.85816 13.286 7.50438 13.1619 8.12782C13.0378 8.75127 12.7315 9.32394 12.2816 9.77342C11.8318 10.2229 11.2586 10.529 10.6347 10.653C10.0107 10.777 9.36397 10.7134 8.77622 10.4701C8.18847 10.2269 7.6861 9.81492 7.33266 9.28639C6.97922 8.75786 6.79057 8.13647 6.79057 7.50081C6.79057 6.64842 7.12946 5.83094 7.73268 5.22821C8.33591 4.62548 9.15406 4.28687 10.0072 4.28687ZM4.29378 16.3784C4.30618 15.4407 4.6876 14.5455 5.35551 13.8865C6.02343 13.2276 6.92413 12.8579 7.86276 12.8574H12.1515C13.0902 12.8579 13.9909 13.2276 14.6588 13.8865C15.3267 14.5455 15.7081 15.4407 15.7205 16.3784C14.1529 17.79 12.1174 18.5711 10.0072 18.5711C7.89689 18.5711 5.86145 17.79 4.29378 16.3784Z"
                    fill="#EEB80A"
                  ></path>
                </svg>
                {t("Stable profile")}
              </li>
              {/* <li
                className={handleReferral ? "active" : ""}
                onClick={() => {
                  setHandleReferral(true);
                  setNotification(false);
                  setStableProfile(false);
                  setProfile(false);
                }}
              >
                <svg
                  version="1.1"
                  width="21px"
                  height="21px"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enableBackground="new 0 0 1000 1000"
                >
                  
                  <g>
                    <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                      <path  fill="#EEB80A" d="M2815.4,4823.6c-553.8-127.6-1033.6-507.9-1288.8-1023.4c-148-303.7-188.9-482.3-186.3-842.2c2.6-472.1,119.9-816.7,403.2-1179.1c331.8-423.6,829.4-678.8,1398.5-714.6l224.6-15.3v150.6c0,257.8,0,255.2-239.9,273.1c-607.4,43.4-1117.8,441.5-1322,1036.2c-84.2,245-84.2,655.9,2.6,916.2c142.9,439,502.8,803.9,944.3,959.6c176.1,61.3,597.2,84.2,798.8,43.4c186.3-38.3,459.4-173.5,627.8-306.3c114.8-91.9,285.8-293.5,375.2-449.2c25.5-40.8,38.3-38.3,199.1,33.2c94.4,43.4,171,91.9,171,109.7c0,68.9-219.5,362.4-393,525.7c-222,209.3-444.1,344.5-717.1,433.9C3563.2,4856.8,3070.6,4879.7,2815.4,4823.6z" />
                      <path  fill="#EEB80A" d="M5829.4,3606.2C4859.6,3504.2,4032.8,2771.7,3798,1807c-79.1-319-79.1-778.4-2.6-1092.3C4037.9-262.7,4859.6-985,5847.3-1084.5c832-81.7,1646.1,273.1,2133.5,936.6c454.3,615.1,587,1408.8,357.3,2123.3C7993.6,3047.3,6952.3,3723.6,5829.4,3606.2z M6554.2,3159.6c229.7-51,594.6-234.8,786-393C8024.2,2200,8236,1202.2,7843,398.3C7595.5-104.5,7090.2-510.3,6541.5-643c-262.9-63.8-684-58.7-941.7,12.8C4770.3-400.5,4198.6,296.2,4142.5,1146c-76.6,1140.8,893.2,2128.4,2028.9,2064.6C6291.3,3205.6,6462.3,3182.6,6554.2,3159.6z" />
                      <path  fill="#EEB80A" d="M1582.8,1271.1C947.3,888.3,490.5,314.1,253.1-395.4C184.2-602.2,100-944.1,100-1020.7c0-23,63.8-43.4,183.8-61.3c199.1-30.6,224.6-25.5,224.6,43.4c0,99.5,127.6,546.1,214.4,742.6c173.5,403.2,497.7,814.1,837.1,1069.3l145.5,107.2l173.5-132.7C2095.7,582,2399.4,434,2662.3,367.6c283.3-71.4,900.9-66.4,977.5,10.2c7.7,7.7-5.1,94.4-30.6,194l-45.9,183.8L3433,735.1c-556.4-79.1-1036.1,71.5-1431.7,451.7c-114.8,112.3-214.4,201.6-219.5,199.1C1776.7,1385.9,1687.4,1332.3,1582.8,1271.1z" />
                      <path  fill="#EEB80A" d="M1146.4-1268.2c-538.5-513-801.4-783.5-798.8-814.1c2.5-25.5,35.7-109.7,68.9-188.8l63.8-140.4l336.9-7.7l336.9-7.7l48.5-191.4c173.5-676.3,663.5-1283.7,1322-1641c283.3-153.1,913.6-375.2,1071.9-375.2c23,0,63.8,63.8,102.1,158.2c35.7,89.3,66.4,168.4,71.5,176.1c2.6,7.7-84.2,89.3-194,181.2c-426.2,357.3-666.1,803.9-758,1411.3c-20.4,140.4-38.3,262.9-38.3,273.1c0,10.2,150.6,23,336.9,25.5l334.3,7.6l71.5,173.5l71.5,171l-806.5,773.3c-441.5,423.7-811.6,773.3-821.8,775.8C1957.9-502.6,1587.9-847.1,1146.4-1268.2z M2460.7-1533.7l484.9-469.6l-285.8-2.6h-288.4v-176.1c0-635.5,168.4-1288.8,431.3-1671.7c45.9-63.8,74-117.4,66.4-117.4s-79.1,33.2-160.8,74c-334.3,168.4-689.1,505.3-885.6,839.6c-127.6,216.9-255.2,587-298.6,857.5l-30.6,193.9h-252.7c-137.8,0-247.6,10.2-242.4,23c10.2,28.1,946.8,921.3,964.7,921.3C1970.7-1061.5,2195.3-1273.3,2460.7-1533.7z" />
                      <path  fill="#EEB80A" d="M4134.8-872.7c-255.2-153.1-477.2-313.9-630.4-451.7l-125-114.8l137.8-142.9l137.8-140.4l181.2,148c252.7,206.7,421.1,316.4,456.8,298.6c17.9-7.7,104.6-79.1,196.5-155.7c91.9-76.6,275.6-196.5,408.3-265.4c587-306.3,1253.1-377.7,1893.6-204.2c275.6,74,666.1,278.2,908.5,472.1l211.8,168.4l171-114.8c622.7-418.6,1056.6-1013.2,1265.8-1738c74-252.7,142.9-724.8,142.9-974.9v-163.3H6926.8H4362V-4443v-191.4h2753.7h2753.7l15.3,79.1c7.6,43.4,15.3,194,15.3,334.3c0,1513.4-661,2682.2-1921.7,3389.2l-148,81.7L7633.7-939c-316.5-308.8-630.4-487.4-1043.8-597.2c-257.8-66.4-768.2-61.3-1041.3,12.8c-393,104.6-717.1,296-1015.7,594.6c-94.4,94.4-181.2,173.5-191.4,173.5C4331.3-755.3,4239.5-808.9,4134.8-872.7z" />
                    </g>
                  </g>
                </svg>
                {t("Referral")}
              </li> */}
              <li
                className={notification ? "active" : ""}
                onClick={() => {
                  setNotification(true);
                  setStableProfile(false);
                  setProfile(false);
                  setHandleReferral(false);
                }}
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.88429 20.0001C10.2629 19.9914 10.6262 19.8491 10.9099 19.5983C11.1937 19.3475 11.3796 19.0045 11.4348 18.6299H8.27368C8.33046 19.0147 8.52508 19.3658 8.82135 19.6178C9.11762 19.8699 9.49536 20.0057 9.88429 20.0001Z"
                    fill="#AAFF26"
                  ></path>
                  <path
                    d="M18.6041 16.1242C18.0246 15.6076 17.5172 15.0153 17.0957 14.3633C16.6355 13.4634 16.3596 12.4806 16.2844 11.4727V8.50385C16.2819 8.14323 16.2498 7.78344 16.1882 7.4281C15.7152 7.33355 15.2606 7.16307 14.842 6.92329C15.0016 7.43703 15.0826 7.97192 15.0824 8.50986V11.4787C15.1561 12.7083 15.4943 13.9075 16.074 14.9944C16.4889 15.6518 16.9812 16.2571 17.5404 16.7973H2.14944C2.70859 16.2571 3.2009 15.6518 3.61582 14.9944C4.19552 13.9075 4.53376 12.7083 4.60742 11.4787V8.50385C4.60426 7.80833 4.73832 7.11903 5.00193 6.47539C5.26554 5.83176 5.65351 5.24645 6.14364 4.75297C6.63378 4.25949 7.21643 3.86753 7.85826 3.59955C8.50008 3.33156 9.18846 3.19281 9.88398 3.19124C10.9019 3.19205 11.8969 3.49308 12.7446 4.05664C12.6512 3.71348 12.5987 3.36045 12.5884 3.00494V2.62632C11.9609 2.31764 11.2867 2.11459 10.5931 2.02535V1.26812C10.5931 1.05534 10.5086 0.851269 10.3581 0.700809C10.2077 0.550348 10.0036 0.46582 9.79083 0.46582C9.57804 0.46582 9.37397 0.550348 9.22351 0.700809C9.07305 0.851269 8.98853 1.05534 8.98853 1.26812V2.0554C7.43544 2.27448 6.01405 3.04805 4.98677 4.23329C3.9595 5.41852 3.3957 6.93539 3.39947 8.50385V11.4727C3.3242 12.4806 3.04836 13.4634 2.58815 14.3633C2.17401 15.0138 1.67479 15.606 1.10375 16.1242C1.03964 16.1805 0.988263 16.2498 0.953031 16.3276C0.9178 16.4053 0.899522 16.4896 0.899414 16.5749V17.3923C0.899414 17.5516 0.962731 17.7045 1.07544 17.8172C1.18814 17.9299 1.341 17.9932 1.50039 17.9932H18.2075C18.3669 17.9932 18.5197 17.9299 18.6324 17.8172C18.7451 17.7045 18.8084 17.5516 18.8084 17.3923V16.5749C18.8083 16.4896 18.7901 16.4053 18.7548 16.3276C18.7196 16.2498 18.6682 16.1805 18.6041 16.1242Z"
                    fill="#EEB80A"
                  ></path>
                  <path
                    d="M17.0959 6.00974C18.7555 6.00974 20.1008 4.66441 20.1008 3.00487C20.1008 1.34533 18.7555 0 17.0959 0C15.4364 0 14.0911 1.34533 14.0911 3.00487C14.0911 4.66441 15.4364 6.00974 17.0959 6.00974Z"
                    fill="#EEB80A"
                  ></path>
                </svg>
                {t("Notifications")}
              </li>
            </ul>
          </div>
          <div className="settings-content">
            {profile && (
              <div className="profile-setting">
                <h2>{t("Profile Settings")}</h2>
                <div className="settings-content-profile-input">
                  <div className="input-list">
                    {/*   <form action="">  */}
                    <ul>
                      <li>
                        <label htmlFor="name">{t("Name*")}</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="username">{t("Username*")}</label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter username"
                          required
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="bio">{t("Bio")}</label>
                        <textarea
                          name="bio"
                          placeholder="Tell the world your story!"
                          id="bio"
                          rows="8"
                          value={accountBio}
                          onChange={(e) => setAccountBio(e.target.value)}
                        ></textarea>
                      </li>
                      <li>
                        <label htmlFor="email">{t("Email Address*")}</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter Email"
                          required
                          value={emailName}
                          onChange={(e) => setEmailName(e.target.value)}
                        />
                      </li>
                      <li>
                        <label htmlFor="wallet">{t("Wallet Address")}</label>
                        <input
                          name="wallet"
                          id="wallet"
                          type="text"
                          autoComplete="off"
                          //value="0x29ac6C0185Bd6D14Cf56F10646f0151669fa6753"
                          value={account}
                          onChange={() => {}}
                        />
                      </li>
                    </ul>
                    <button onClick={updateProfileInformation}>
                      {t("Save")}
                    </button>
                    {/*}  <GradientButton
                  label={'Save'}
                  isNoPadding
                  height={'50px'}
                  width={'160px'}
                  fontSize={'18px'}
                  handleClick={updateProfileInformation}
            /> */}
                    {/*   </form>  */}
                  </div>
                  <div className="profile-setting-right">
                    <div className="profile-image">
                      <h4>{t("Profile Image")}</h4>
                      <div className="profile-image-inner">
                        {!profilesImage || profileFile ? (
                          <Image
                            src={profileImage}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : (
                          profilesImage && <img src={profilesImage} />
                        )}
                        <div className="img-overlay">
                          <FileUploader
                            label={"change"}
                            icon={<ChangeIcon />}
                            isOnlyIcon={true}
                            handleFile={changeProfileImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="profile-image">
                      <h4>{t("Profile Banner")}</h4>
                      <div className="profile-image-inner-banner">
                        {!coversImage || coverFile ? (
                          <Image
                            src={coverImage}
                            alt="profile_cover"
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : (
                          coversImage && (
                            <img
                              src={coversImage}
                            />
                          )
                        )}
                        {/* <Image
                          src={coverImage}
                          alt="profile_cover"
                          layout="fill"
                          objectFit="cover"
                        /> */}
                        <div className="img-overlay">
                          <FileUploader
                            label={"change"}
                            icon={<ChangeIcon />}
                            isOnlyIcon={true}
                            handleFile={changeCoverImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {stableProfile && (
              <div className="profile-setting">
                <h2>{t("Stable Profile")}</h2>
                <div className="settings-content-profile-input">
                  <div className="input-list">
                    {/*   <form action="">  */}
                    <ul>
                      <li>
                        <label htmlFor="name">{t("Stable name")}</label>
                        <input
                          type="text"
                          id="name"
                          name="stableName"
                          placeholder="Enter Name"
                          required
                          defaultValue={stableData?.title}
                          onChange={(e) => HandelStabeData(e)}
                        />
                      </li>
                      <li>
                        <label htmlFor="bio">{t("Stable description")}</label>
                        <textarea
                          name="stableDescription"
                          placeholder="Description you stable."
                          id="bio"
                          rows="8"
                          defaultValue={stableData?.description}
                          onChange={(e) => HandelStabeData(e)}
                        ></textarea>
                      </li>

                      <li>
                        <label htmlFor="wallet">{t("Wallet Address")}</label>
                        <input
                          name="stableWallet"
                          id="wallet"
                          type="text"
                          autoComplete="off"
                          // value="0x29ac6C0185Bd6D14Cf56F10646f0151669fa6753"
                          value={account}
                          onChange={() => {}}
                        />
                      </li>
                    </ul>
                    <button onClick={updateProfileStable}>{t("Save")}</button>
                  </div>
                  <div className="profile-setting-right">
                    <div className="profile-image">
                      <h4>{t("Stable profile image")}</h4>
                      <div className="profile-image-inner">
                        {!stableprofilesImage || stableprofileFile ? (
                          <Image
                            src={stableprofileImage}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : (
                          stableprofilesImage && (
                            <img
                              src={`${global?.serverURL}/public/${stableprofilesImage}`}
                            />
                          )
                        )}
                        <div className="img-overlay">
                          <FileUploader
                            label={"change"}
                            icon={<ChangeIcon />}
                            isOnlyIcon={true}
                            handleFile={stableProfileImage}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="profile-image">
                      <h4>{t("Stable profile banner")}</h4>
                      <div className="profile-image-inner-banner">
                        {!stablecoverImages || stablecoverFile ? (
                          <Image
                            src={stablecoverImage}
                            alt="profile_cover"
                            layout="fill"
                            objectFit="cover"
                          />
                        ) : (
                          stablecoverImages && (
                            <img
                              src={`${global?.serverURL}/public/${stablecoverImages}`}
                            />
                          )
                        )}
                        <div className="img-overlay">
                          <FileUploader
                            label={"change"}
                            icon={<ChangeIcon />}
                            isOnlyIcon={true}
                            handleFile={stableCoverImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* {handleReferral && <Referral walletDataInfo={walletDataInfo} />} */}

            {notification && (
              <div className="setting-notification">
                <h2>{t("Notifications")}</h2>
                <p>{t("Edit your notification preferences")}</p>
                <ul>
                  <li>
                    <div>
                      <h4>{t("New Item Sold")}</h4>
                      <p>{t("When someone purchased one of your items")}</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          New_Item_Sold: !prev.New_Item_Sold,
                        }))
                      }
                      checked={notificationSettings.New_Item_Sold}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>{t("New Bid Activity")}</h4>
                      <p>{t("When someone bids on one of your items")}</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          New_Bid_Activity: !prev.New_Bid_Activity,
                        }))
                      }
                      checked={notificationSettings.New_Bid_Activity}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>{t("Auction Expiration")}</h4>
                      <p>{t("When an auction you created ends")}</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Auction_Expiration: !prev.Auction_Expiration,
                        }))
                      }
                      checked={notificationSettings.Auction_Expiration}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>{t("Owned Asset Upadates")}</h4>
                      <p>
                        {t(
                          "When a siginificant update occurs for one of the item you have buyed"
                        )}
                      </p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Owned_Asset_Upadates: !prev.Owned_Asset_Upadates,
                        }))
                      }
                      checked={notificationSettings.Owned_Asset_Upadates}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>{t("Like on Post")}</h4>
                      <p>{t("When someone like on one of your items")}</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Like_On_Post: !prev.Like_On_Post,
                        }))
                      }
                      checked={notificationSettings.Like_On_Post}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>{t("Comment Post")}</h4>
                      <p>{t("When someone comment on one of your items")}</p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          Comment_Post: !prev.Comment_Post,
                        }))
                      }
                      checked={notificationSettings.Comment_Post}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                  <li>
                    <div>
                      <h4>{t("ROX Newsletter")}</h4>
                      <p>
                        {t("Get weekly newsletter with articles, tips, tricks")}
                      </p>
                    </div>
                    <Switch
                      onChange={() =>
                        setNotificationSettings((prev) => ({
                          ...prev,
                          HyperchainX_Newsletter: !prev.HyperchainX_Newsletter,
                        }))
                      }
                      checked={notificationSettings.HyperchainX_Newsletter}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      onColor="#f0b90c"
                      height={28}
                      width={57}
                      handleDiameter={25}
                    />
                  </li>
                </ul>
                <button onClick={updateNotificationInformation}>
                  {t("Update notification information")}
                </button>
              </div>
            )}
          </div>
        </div>
        <ToastListener />
      </div>
      <style jsx>
        {`
          .profile-image-inner-banner {
            position: relative;
            width: 100%;
            height: 150px;
          }

          .settings {
            display: grid;
            grid-template-columns: 1fr 3fr;
            gap: 50px;
            margin: 50px 0;
          }

          .settings-sidebar {
            background: var(--bigCtaBg);
            color: var(--colorWhite);
            border-radius: 10px;
          }

          .settings-content {
            background: var(--bigCtaBg);
            color: var(--colorWhite);
            border-radius: 10px;
            padding: 30px;
          }

          .settings-sidebar ul li {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            font-weight: 500;
            padding: 15px 30px;
            cursor: pointer;
          }

          .settings-sidebar ul {
            margin-top: 30px;
          }

          .settings-sidebar ul li:hover {
            background: #eab5090f;
          }

          .settings-sidebar ul li.active {
            background: #eab5090f;
          }

          .settings-content h2 {
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 30px;
          }

          .settings-content-profile-input {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 60px;
          }

          .input-list input,
          .input-list textarea {
            width: 100%;
            background: transparent;
            background: var(--profileInputBg);
            border: 1px solid var(--profileInputBorder);
            padding: 15px;
            border-radius: 5px;
            font-size: 14px;
          }
          .input-list input:focus,
          .input-list textarea:focus {
            border: 1px solid #eeb807;
            outline: none;
          }
          .input-list ul {
            display: grid;
            gap: 30px;
          }

          .input-list ul li label {
            margin-bottom: 15px;
            display: block;
            font-size: 14px;
            font-weight: 500;
          }

          .settings-content-profile-input button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            padding: 18px 80px;
            font-size: 16px;
            font-weight: 500;
            border: none;
            border-radius: 10px;
            margin-top: 50px;
            color: #fff;
            cursor: pointer;
          }
          .settings-content-profile-input button:hover {
            filter: brightness(1.15);
          }

          .profile-image h4 {
            font-weight: 500;
            margin-bottom: 20px;
          }

          .profile-image-inner {
            position: relative;
            width: 130px;
            height: 130px;
          }

          .img-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #00000061;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            visibility: hidden;
            opacity: 0;
            transition: 0.3s;
            cursor: pointer;
          }
          .profile-image-inner:hover .img-overlay,
          .profile-image-inner-banner:hover .img-overlay {
            visibility: visible;
            opacity: 1;
          }
          .profile-image {
            margin-bottom: 30px;
          }

          .profile-image-inner .img-overlay {
            border-radius: 100px;
          }
          .settings-content .setting-notification h2 {
            margin-bottom: 10px;
          }

          .setting-notification p {
            font-size: 12px;
            margin-bottom: 40px;
          }

          .setting-notification ul li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            gap: 30px;
          }

          .setting-notification ul li p {
            margin-bottom: 0;
            opacity: 0.5;
          }

          .setting-notification ul li h4 {
            font-weight: 500;
            font-size: 14px;
            margin-bottom: 2px;
          }
          .setting-notification button {
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            padding: 18px 30px;
            font-size: 16px;
            font-weight: 500;
            border: none;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
          }
          .setting-notification button:hover {
            filter: brightness(1.15);
          }
          @media screen and (max-width: 991px) {
            .settings {
              grid-template-columns: 1fr;
            }
            .settings-sidebar ul {
              margin: 10px 0;
            }
            .settings-content-profile-input {
              display: flex;
              flex-direction: column-reverse;
            }
          }
        `}
      </style>
    </Layout>
  ) : (
    ""
  );
}
