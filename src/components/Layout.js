import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, HandelTheme,fromError }) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (HandelTheme) {
      HandelTheme(theme);
    }
  }, [theme]);
  return (
    <>
      <Header fromError={fromError} setTheme={setTheme} />
      {children}
      {!fromError&&<Footer />}
    </>
  );
}
