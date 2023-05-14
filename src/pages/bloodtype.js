import React from 'react';
import BigCTA from '../components/BigCTA';
import GenesisBanner from '../components/GenesisBanner';
import GenesisLearn from '../components/GenesisLearn';
import GenesisTab from '../components/GenesisTab';
import Layout from '../components/Layout';
import LearnMenu from '../components/LearnMenu';
export default function Genesis() {
  return (
    <Layout>
      <LearnMenu active="genesis" />
      {/* <GenesisBanner /> */}
      <GenesisTab />  
      {/* <GenesisLearn /> */}
      <BigCTA />
    </Layout>
  );
}
