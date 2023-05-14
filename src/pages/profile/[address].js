import React from "react";
import Layout from "../../components/Layout";
import Profiles from "../../components/Profile/index";

export default function Index(props) {
  return (
    <div>
      <Layout>
        <Profiles {...props} />
      </Layout>
    </div>
  );
}
