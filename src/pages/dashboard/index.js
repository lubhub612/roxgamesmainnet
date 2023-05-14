import React from "react";
import Layout from "../../components/Layout";

export default function Index() {
  return (
    <div>
      <Layout>
        <div className="page-header">
          <div className="row align-items-center" alignitems="center">
            <div className="col">
              <div className="h1 page-title">Dashboard</div>
            </div>
          </div>
        </div>
      </Layout>
      <style jsx>{`
        .page-header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            min-height: 2.25rem;
            margin: 0 0 1.25rem;
        }
        .align-items-center {
            align-items: center!important;
        }
        .col {
            flex: 1 0;
        }
        .page-title {
            margin: 0;
            font-size: 1.125rem;
            line-height: 1.55556;
            font-weight: 500;
            color: inherit;
            display: flex;
            align-items: center;
        }
      `}</style>
    </div>
  );
}
