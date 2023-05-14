import Layout from '../components/Layout';
import EventMenu from '../components/EventMenu';
import EventCountdown from '../components/EventCountdown';
import TournamentsBanner from '../components/TournamentsBanner';
import TournamentTable from '../components/TournamentTable';

export default function tournaments() {
  return (
    <>
      <Layout>
        <EventMenu active="tournaments" />
        <EventCountdown />
        <TournamentsBanner />
        <TournamentTable />
      </Layout>
    </>
  );
}
