import React from "react";
import { Collections as CollectionsController } from "../../components/Collections";
import Layout from "../../components/Layout";

const Collections = (props) => {
  return (
    <Layout>
      <CollectionsController {...props} />
    </Layout>
  );
};
export default Collections;
