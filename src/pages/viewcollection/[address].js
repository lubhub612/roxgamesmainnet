import React from "react";
import Layout from "../../components/Layout";
import ViewCollection from "../../components/ViewCollection";

export default function Address(props) {
  return (
    <div>
      <Layout>
        <ViewCollection {...props} />
      </Layout>
    </div>
  );
}
