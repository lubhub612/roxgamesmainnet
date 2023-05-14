import React, { useEffect, useState } from "react";
import EventCountdown from '../components/EventCountdown';
import EventMenu from '../components/EventMenu';
import Layout from '../components/Layout';
import WinnerBanner from '../components/WinnerBanner';

export default function Winnings() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Layout>
        <EventMenu active="winnings" />
        <EventCountdown active={active} setActive={setActive}/>
        <WinnerBanner active={active} setActive={setActive}/>
      </Layout>
    </>
  );
}
