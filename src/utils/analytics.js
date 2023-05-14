import ReactGA4 from "react-ga4";

export const GA4_TRACKING_ID = "G-DVN7PXR44C";

export const initGA4 = () => {
  ReactGA4.initialize(GA4_TRACKING_ID);
};
