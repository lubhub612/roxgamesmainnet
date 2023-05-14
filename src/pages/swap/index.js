import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/Layout";
import PerfectScrollbar from "react-perfect-scrollbar";
import Terms from "../../components/Terms";
import { useTranslation } from "react-i18next";
//import { ToastContainer, toast } from 'react-toastify';
//import bigInt from 'big-integer';
//import BigNumber from 'big-number';
import { ethers } from 'ethers';
import roxabi from '../../abi/ROX_Sell.json';
import usdt from '../../abi/USDT_token.json';
import weth from '../../abi/WETH.json';
import { useCustomWallet } from '../../contexts/WalletContext';



const ROX_CONTRACT_ADDRESS = '0x275ab6E05E20Cb3E951a96633e8E1858022f6Ee8';
const USDT_TETHER_TOKEN_ADDRESS = '0xc2132D05D31c914a87C6611C10748AEb04B58e8F';
const WETH_TOKEN_ADDRESS = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619';


export default function Swap() {
  const { wallet } = useCustomWallet();


  const [coinBox, setCoinBox] = useState(false);
  const [coinData, setCoinData] = useState({ name: "USDT", img: "tether.svg" });
 

  const { t } = useTranslation();

  const [userInputValue, setUserInputValue] = useState('0');
  const [estimateValue, setEstimateValue] = useState('');
  const [buttonStatusUSDT, setButtonStatusUSDT] = useState('approveUSDT');
  const [buttonStatusWETH, setButtonStatusWETH] = useState('approveWETH');

  const RoxContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const ZmzContract = new ethers.Contract(
        ROX_CONTRACT_ADDRESS,
        roxabi,
        signer
      );
      return ZmzContract;
    } catch (error) {
      console.log(error);
    }
  };

  const UsdtContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const UsdtContract = new ethers.Contract(
        USDT_TETHER_TOKEN_ADDRESS,
        usdt,
        signer
      );
      return UsdtContract;
    } catch (error) {
      console.log(error);
    }
  };


  const WethContract = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const WethContract = new ethers.Contract(
        WETH_TOKEN_ADDRESS,
        weth,
        signer
      );
      return WethContract;
    } catch (error) {
      console.log(error);
    }
  };
   
  const handleEstimate = async (val) => {


    try {
      if (!wallet.address) {

        setEstimateValue(0)
        setUserInputValue(val);
  
        return null;
      }
    let _RoxContract = await RoxContract();
    setUserInputValue(val);
    if (!val) {
      setEstimateValue('0');
    }

    if (val > 0) {
      
    if( coinData.name === 'USDT') {
    let  _getEstimate = await _RoxContract.estimateWithUsdt(
        ethers.utils.parseEther(val)
      );
      
      setEstimateValue((_getEstimate.toString() / 10 ** 18).toFixed(2));
    } else if (coinData.name === 'WETH') {
     let  _getEstimate = await _RoxContract.estimateWithWeth(
        ethers.utils.parseEther(val)
      );
      
      setEstimateValue((_getEstimate.toString() / 10 ** 18).toFixed(6));
    } else {
    let  _getEstimate = await _RoxContract.estimateWithMatic(
        ethers.utils.parseEther(val)
      );
      
      setEstimateValue((_getEstimate.toString() / 10 ** 18).toFixed(6));
     }
    }  
  } catch (error) {
    console.log(error);
  }
  };

  const handleApproveUSDT = async () => {
    
    try {
      let _UsdtContract = await UsdtContract();
      
      let _approve = await _UsdtContract.approve(
        ROX_CONTRACT_ADDRESS,
        (estimateValue * 10 ** 18).toFixed(0)
      );
      let waitForTx = await _approve.wait();
      if (waitForTx) {
        console.log('wait handleApproveUSDT', waitForTx);
        setButtonStatusUSDT('buyUSDT');
       // toast.success('Approved successfull.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleApproveWETH = async () => {

    try {
      let _WethContract = await WethContract();
      
      let _approve = await _WethContract.approve(
        ROX_CONTRACT_ADDRESS,
        (estimateValue * 10 ** 18).toFixed(0)
      );
      let waitForTx = await _approve.wait();
      if (waitForTx) {
        
        setButtonStatusWETH('buyWETH');
       // toast.success('Approved successfull.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyUsdt = async () => {
   

    try {
      let _RoxContract = await RoxContract();


      if (userInputValue <= 0) {
        return toast.error('Value should be positive.');
      }
      let roxVal = (userInputValue) * (10 ** 18);
     
      let _buy = await _RoxContract.buyWithUsdt(
        ethers.utils.parseEther(userInputValue) 
      );
      let waitForTx = await _buy.wait();
      if (waitForTx) {
       // toast.success('Transaction successfull.');
      }
   
    } catch (error) {
      console.log(error);
    }
  };


  const handleBuyWeth = async () => {
 

    try {
      let _RoxContract = await RoxContract();

      if (userInputValue <= 0) {
        return toast.error('Value should be positive.');
      }
      let roxVal = (userInputValue) * (10 ** 18);
     
      let _buy = await _RoxContract.buyWithWeth(
        ethers.utils.parseEther(userInputValue) 
      );
      let waitForTx = await _buy.wait();
      if (waitForTx) {
       // toast.success('Transaction successfull.');
      }
  
    } catch (error) {
      console.log(error);
    }
  };


  const handleBuyMatic = async () => {
    

    try {
      let _RoxContract = await RoxContract();
  

      if (userInputValue <= 0) {
        return toast.error('Value should be positive.');
      }
     let roxVal = (userInputValue) * (10 ** 18);
      
      let _buy = await _RoxContract.buyWithMatic(
        ethers.utils.parseEther(userInputValue) ,  { value: (estimateValue * 10 ** 18).toFixed(0) }
      );
      let waitForTx = await _buy.wait();
      if (waitForTx) {
       // toast.success('Transaction successfull.');
      }
     
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Layout>
      <Terms />
      {coinBox && (
        <div className="swap-coin-list-area">
          <div className="swap-coin-list">
            <span onClick={() => setCoinBox(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </span>
            <h2>{t("Select Token")}</h2>
            <PerfectScrollbar>
              <ul>
                <li
                  onClick={() => {
                    setCoinBox(false);
                    setCoinData({ name: "USDT", img: "tether.svg" });
                  }}
                >
                  <Image
                    src="/images/token/tether.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("USDT")}
                </li>
                <li
                  onClick={() => {
                    setCoinBox(false);
                    setCoinData({ name: "MATIC", img: "matic.svg" });
                  }}
                >
                  <Image
                    src="/images/token/matic.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("MATIC")}
                </li>
                <li
                  onClick={() => {
                    setCoinBox(false);
                    setCoinData({ name: "WETH", img: "eth.svg" });
                  }}
                >
                  <Image
                    src="/images/token/eth.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("WETH")}
                </li>
                {/* <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/ftm.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("Fantom")}
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/arbitrum.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("WETH")}
                </li> */}
                {/* <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/optimism.png"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("Optimism")}
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/ropsten-chain.png"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("Ethereum")}
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/harmony.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("Harmony")}
                </li>
                <li onClick={() => setCoinBox(false)}>
                  <Image
                    src="/images/coin/cro-chain.svg"
                    alt="coin"
                    width={32}
                    height={32}
                  />
                  {t("Cronos")}
                </li> */}
              </ul>
            </PerfectScrollbar>
          </div>
        </div>
      )}

      <div className="swap">
        <div className="swap-inner">
          <h2>{t("Swap")}</h2>
          <div className="swap-coin">
            <div className="swap-coin-inner">
              <div className="swap-coin-item">
                <h3>{t("Buy ROX tokens in an instant")}</h3>
                {/* <button onClick={() => setCoinBox(true)}>
                  <Image
                    src="/images/usdt.png"
                    alt="coin"
                    width={18}
                    height={18}
                  />
                  {t("USDT")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button> */}
                <div className="swap-input-area ">
                  <div className="input-coin-select">
                    <button
                      className="pointer"
                      onClick={() => setCoinBox(true)}
                    >
                      <Image
                        src={`/images/token/${coinData.img}`}
                        alt="coin"
                        width={18}
                        height={18}
                      />
                      {/* {t("USDT")} */}
                      {coinData.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                 {/*} <div className="input-price-update">~$0</div> */}
                  <input type="number" placeholder="0.0" value={estimateValue} readOnly />
                  <div className="input-price-balance">{t("Balance:")} ~</div>
                </div>
              </div>
              <div className="swap-coin-item swap-icon">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                </svg>
              </div>
              <div className="swap-coin-item">
                {/* <h3>{t("To")}</h3> */}
                {/* <button onClick={() => setCoinBox(true)}>
                  <Image
                    src="/images/eth.png"
                    alt="coin"
                    width={18}
                    height={18}
                  />
                  {t("Eth")}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button> */}
                <div className="swap-input-area swap-input-area-2">
                  <div className="input-coin-select">
                    <button>
                      <Image
                        src="/images/token/rox.svg"
                        alt="coin"
                        width={18}
                        height={18}
                      />
                      {t("ROX")}
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                      </svg> */}
                    </button>
                  </div>
                 {/*} <div className="input-price-update">~$0</div> */}
                  <input type="number" placeholder="0.0"  value={userInputValue}  onChange={(e) => handleEstimate(e.target.value)}/>
                  <div className="input-price-balance">{t("Balance:")} ~</div>
                </div>
              </div>
            </div>
           {/*} <div className="swap-now">{t("SWAP")}</div> */}
           <>
            {coinData.name === 'MATIC' ? (
              <button className="swap-now"  onClick={handleBuyMatic}>{t("SWAP ")}</button>
            ) : (
              <>
            {coinData.name === 'USDT' && buttonStatusUSDT === 'approveUSDT' ? (
              <button className="swap-now" onClick={handleApproveUSDT}>{t('APPROVE')}</button>
            ) : (
              <>
              {coinData.name === 'WETH' && buttonStatusWETH === 'approveWETH' ? (
                <button className="swap-now" onClick={handleApproveWETH}>{t('APPROVE')}</button>
              ) : (
              <button className="swap-now"  onClick={handleBuyWeth}>{t('SWAP')}</button>
            )}
          

          {/*}  <button className="swap-now">{t('SWAP USDT')}</button>  */}
            </>
               )}
               <>
              {coinData.name === 'USDT' && buttonStatusUSDT === 'buyUSDT' ? (
            <button className="swap-now"  onClick={handleBuyUsdt}>{t('SWAP')}</button>
              ) : ( 
                    ''
              )}
              
            </>
           
            </>
         )} 
            
          </>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .pointer {
            cursor: pointer;
          }
          .swap {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 100px 30px;
          }
          .swap-coin-item.swap-icon svg path {
            fill: var(--colorWhite);
          }

          .swap-coin-inner {
            background: var(--bigCtaBg);
            display: grid;
            grid-template-columns: 3fr 0.8fr 3fr;
            gap: 10px;
            border-radius: 10px;
            padding: 40px 40px 70px;
            width: 800px;
            align-items: center;
          }

          .swap-inner h2 {
            font-size: 30px;
            margin-bottom: 20px;
          }

          .swap-coin-item h3 {
            font-size: 14px;
            font-weight: 300;
            opacity: 0.5;
            margin-bottom: 20px;
          }
          .swap-input-area-2 {
            margin-top: 54px !important;
          }
          .swap-coin-item button {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 30px;
            border-radius: 10px;
            border: none;
            background: var(--swapBtnBg);
          }

          .swap-coin-item button svg {
            width: 10px;
            height: 10px;
          }

          .swap-input-area {
            position: relative;
            margin-top: 40px;
          }

          .swap-input-area input {
            width: 100%;
            background: var(--background);
            border: 1px solid var(--borderColor);
            border-radius: 10px;
            padding: 15px 12px 30px;
            box-shadow: rgb(0 0 0 / 10%) 3px 3px 10px 4px;
            font-size: 20px;
          }

          .input-coin-select {
            position: absolute;
            right: 2px;
            top: 5px;
          }

          .input-coin-select button {
            padding: 10px;
            background: transparent;
          }

          .input-price-update {
            position: absolute;
            bottom: 5px;
            left: 13px;
            font-size: 12px;
            opacity: 0.5;
          }

          .input-price-balance {
            position: absolute;
            right: 13px;
            bottom: 5px;
            font-size: 12px;
            opacity: 0.5;
          }

          .swap-now {
            position: absolute;
            bottom: -40px;
            background: linear-gradient(90deg, #f0b90b, #8a6900);
            width: 80px;
            height: 80px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 50%;
            transform: translate(-50%);
            cursor: pointer;
            font-weight: 600;
            font-size: 16px;
            color: #fff;
          }
          .swap-now:hover {
            filter: brightness(1.15);
          }
          .swap-coin {
            position: relative;
          }
          /* Chrome, Safari, Edge, Opera */
          .swap-input-area input::-webkit-outer-spin-button,
          .swap-input-area input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* Firefox */
          .swap-input-area input[type="number"] {
            -moz-appearance: textfield;
          }
          .swap-coin-item.swap-icon svg {
            width: 30px;
            height: 30px;
            color: var(--colorWhite);
          }

          .swap-coin-item.swap-icon {
            display: flex;
            justify-content: center;
            margin-top: 65px;
          }

          .swap-coin-list-area {
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 9999;
            background: #000c;
            backdrop-filter: blur(10px);
          }

          .swap-coin-list {
            background: var(--background);
            width: 500px;
            padding: 30px 0;
            border-radius: 10px;
            position: relative;
            margin: 30px;
          }

          .swap-coin-list > span {
            position: absolute;
            right: 20px;
            top: 20px;
            cursor: pointer;
          }

          .swap-coin-list h2 {
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 20px;
            padding: 0 30px;
          }

          // .swap-coin-list ul {
          //   height: 300px;
          // }

          .swap-coin-list ul li {
            display: flex;
            align-items: center;
            gap: 20px;
            border-bottom: 1px solid var(--borderColor);
            padding: 15px 30px;
            cursor: pointer;
          }

          .swap-coin-list ul li:last-child {
            border-bottom: 0;
          }

          .swap-coin-list ul li:hover {
            background: #ffffff12;
          }
          @media screen and (max-width: 991px) {
            .swap-coin-inner {
              grid-template-columns: 1fr;
              width: 100%;
            }

            .swap {
              margin: 50px 30px 100px;
              display: block;
            }

            .swap-coin-item.swap-icon {
              margin-top: 30px;
            }
          }
        `}
      </style>
    </Layout>
  );
}
