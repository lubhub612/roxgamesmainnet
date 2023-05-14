import "react-perfect-scrollbar/dist/css/styles.css";
import "../app.css";
// import "../style.css";

import { ThemeProvider } from "next-themes";
import { GlobalProvider } from "../contexts/GlobalContext";
import { RoxGlobalProvider } from "../contexts/RoxGlobalContext";
import ToastListener from "../components/Toast";
import { ToastsProvider } from "../contexts/ToastsContext";
import "lightgallery.js/dist/css/lightgallery.css";
import "react-dropdown/style.css";

// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';

import { useEffect } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import Contact from "./contact";
import { TreeGlobalProvider } from "../contexts/TreeContext";
import { initGA4 } from "../utils/analytics";
import { ReactGA4 } from "react-ga4";
import { useRouter } from "next/router";
import { ContractProvider } from "../contexts/ContractContext";
import { WalletProvider } from "../contexts/WalletContext";
import { AuthProvider } from "../contexts/AuthContext";
import { DataProvider } from "../contexts/DataContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGA4();
    // Log page view
    ReactGA4?.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    // <ErrorBoundary FallbackComponent={Contact}>

    <GlobalProvider>
      <ToastsProvider>
        <ContractProvider>
          <WalletProvider>
            <RoxGlobalProvider>
              <AuthProvider>
                <DataProvider>
                  <TreeGlobalProvider>
                    <ThemeProvider>
                      <Component {...pageProps} />
                    </ThemeProvider>
                  </TreeGlobalProvider>
                </DataProvider>
              </AuthProvider>
            </RoxGlobalProvider>
          </WalletProvider>
        </ContractProvider>
      </ToastsProvider>
    </GlobalProvider>
    // </ErrorBoundary>
  );
}

export default MyApp;
