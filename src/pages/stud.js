import Layout from '../components/Layout';
import StudList from '../components/StudList';
import LearnMenu from '../components/LearnMenu';

export default function stud() {
  return (
    <>
      <Layout>
      <LearnMenu active="stud" />
        <div className="stud">
          <div className="container">
            <div className="stud-inner">
              <StudList />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
