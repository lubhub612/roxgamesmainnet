import React, { useEffect, useState } from "react";
import EventCountdown from "../components/EventCountdown";
import EventMenu from "../components/EventMenu";
import Layout from "../components/Layout";
import ResultBanner from "../components/ResultBanner";

export default function Results() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Layout>
        <EventMenu active="results" />
        <EventCountdown active={active} setActive={setActive} />
        <ResultBanner active={active} setActive={setActive} />
      </Layout>
    </>
  );
}
