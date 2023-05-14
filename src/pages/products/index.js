import React from "react";
import { useRouter } from "next/router";
import Offer from "../../components/Offer";
import { OfferProvider } from "../../contexts/OfferContext";
import Layout from "../../components/Layout";

export default function Index(props) {
  const router = useRouter();
  const { collection, tokenId } = router.query;

  return (
    <div>
      <OfferProvider contract={collection} tokenId={tokenId}>
        <Layout>
          <Offer {...props} />
        </Layout>
      </OfferProvider>
    </div>
  );
}
