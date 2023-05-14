import { useContext, useEffect } from "react";
import Banner from "../components/Banner";
import Event from "../components/Event";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Streaming from "../components/Streaming";
import Stud from "../components/Stud";
import GlobalContext from "../contexts/GlobalContext";

export default function Home() {
  const context = useContext(GlobalContext);

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname);
  // }, []);
  
  return (
    <>
      <Layout>
        <Hero />
        <Streaming />
        <Event />
        <Banner />
        <Stud />
      </Layout>
    </>
  );
}
