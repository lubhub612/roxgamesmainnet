import React from "react";
import { CollectionCreator as CollectionCreatorController } from "../../components/CollectionCreator";
import Layout from "../../components/Layout";

export default function Index(props) {
  return (
    <div>
      <Layout>
        <CollectionCreatorController {...props} />
      </Layout>
    </div>
  );
}
