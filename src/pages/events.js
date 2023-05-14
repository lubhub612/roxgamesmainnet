import { useState } from "react";
import EventCarousel from "../components/EventCarousel";
import EventCountdown from "../components/EventCountdown";
import EventMenu from "../components/EventMenu";
import EventOpen from "../components/EventOpen";
import Layout from "../components/Layout";

export default function Events() {
  const [showHorse, setShowHorse] = useState([]);
  const [active, setActive] = useState(false);

  return (
    <Layout>
      <EventMenu active="events" />
      <EventCountdown active={active} setActive={setActive} />
      <EventCarousel showHorse={showHorse} />
      <EventOpen setShowHorse={setShowHorse} showHorse={showHorse} active={active} setActive={setActive} />
    </Layout>
  );
}
