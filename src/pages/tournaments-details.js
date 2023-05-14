import EventCountdown from '../components/EventCountdown';
import Layout from '../components/Layout';
import TournamentsDetailsBanner from '../components/TournamentsDetailsBanner';
import TournamentsStandings from '../components/TournamentsStandings';

export default function tournamentsDetails() {
  return (
    <Layout>
      <EventCountdown />
      <TournamentsDetailsBanner />
      <TournamentsStandings />
    </Layout>
  );
}
