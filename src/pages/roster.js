import React from 'react';
import Layout from '../components/Layout';
import LearnMenu from '../components/LearnMenu';
import RosterBanner from '../components/RosterBanner';
import RosterList from '../components/RosterList';
export default function roster() {
  return (
    <Layout>
      <LearnMenu active="roster" />
      <RosterBanner />
      <RosterList />
    </Layout>
  );
}
