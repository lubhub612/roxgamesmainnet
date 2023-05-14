import Layout from "../components/Layout";
import RentList from "../components/RentList";
import LearnMenu from '../components/LearnMenu';

export default function rent() {
  return (
    <>
      <Layout>
      <LearnMenu active="rent" />
        <div className="stud">
          <div className="container">
            <div className="stud-inner">
              <RentList />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
