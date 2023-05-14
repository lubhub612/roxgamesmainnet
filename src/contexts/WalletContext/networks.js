import { utils } from 'ethers';

export const networkParams = {
    /*"0x38": {
      chainId: "0x38",
      rpcUrls: ["https://dataseed1.binance.org/"],
      chainName: "BSC Mainnet",
      nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
      blockExplorerUrls: ["https://bscscan.com"],
      iconUrls: ["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]
    },
    "0x61": {
      chainId: "0x61",
      rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
      chainName: "BSC Testnet",
      nativeCurrency: { name: "BNB", decimals: 18, symbol: "BNB" },
      blockExplorerUrl: ["https://testnet.bscscan.com"],
      iconUrls: [
        "https://celo.org/images/marketplace-icons/icon-celo-CELO-color-f.svg"
      ]
    } */
    "0x89": {
      chainId: utils.hexValue(137), // 
      chainName: "Matic(Polygon) Mainnet", 
      nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      rpcUrls: ["https://polygon-rpc.com"],
      blockExplorerUrls: ["https://www.polygonscan.com/"],
    },
    "0x13881": {
      chainId: utils.hexValue(80001), // 
      chainName: "Matic(Polygon) Mumbai Testnet",
      nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18 },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
    },
  };