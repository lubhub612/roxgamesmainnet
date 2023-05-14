import React, {useState } from "react";
import EventCountdown from "../components/EventCountdown";
import EventMenu from "../components/EventMenu";
import Layout from "../components/Layout";
import UpcomingTable from "../components/UpcomingTable";

export default function Upcoming() {
  const [active, setActive] = useState(false);

  return (
    <>
      <Layout>
        <EventMenu active="upcoming" />
        <EventCountdown active={active} setActive={setActive} />
        <UpcomingTable active={active} setActive={setActive}/>
      </Layout>
    </>
  );
}
