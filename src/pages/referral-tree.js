import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Tree } from "react-tree-graph";
import "react-tree-graph/dist/style.css";
import Layout from "../components/Layout";
import Header from "../components/Tree/header";
import TreeContainer from "../components/Tree/treeContainer";
import TreeGlobalContext from "../contexts/TreeContext";

export default function ReferralTree() {
  const { setActiveNode, resize, filter, activeNode, invokeServer, userData } =
    useContext(TreeGlobalContext);

  //   window.onresize = resize;
  const [account, setAccount] = useState("");
  const router = useRouter();
  const [referralData, setReferralData] = useState({});

  const data = {
    name: "Colour",
    textProps: { x: -25, y: 25 },
    children: [
      {
        name: "Black",
        pathProps: "black",
        textProps: { x: -25, y: 25 },
        children: [],
      },
      {
        name: "Blue",
        textProps: { x: -25, y: 25 },
        children: [
          {
            name: "Aquamarine",
            children: [],
          },
          {
            name: "Cyan",
            children: [],
          },
          {
            name: "Navy",
            children: [],
          },
          {
            name: "Turquoise",
            children: [],
          },
        ],
      },
      {
        name: "Green",
        textProps: { x: -25, y: 25 },
        children: [],
      },
      {
        name: "Purple",
        textProps: { x: -25, y: 25 },
        children: [
          {
            name: "Indigo",
            children: [],
          },
          {
            name: "Violet",
            children: [],
          },
        ],
      },
      {
        name: "Red",
        textProps: { x: -25, y: 25 },
        children: [
          {
            name: "Crimson",
            children: [],
          },
          {
            name: "Maroon",
            children: [],
          },
          {
            name: "Scarlet",
            children: [],
          },
        ],
      },
      {
        name: "White",
        textProps: { x: -25, y: 25 },
        children: [],
      },
      {
        name: "Yellow",
        textProps: { x: -25, y: 25 },
        children: [],
      },
    ],
  };

  const walletSessionKey = "walletHyperXV1";
  useEffect(() => {
    let oldAddr = window.localStorage.getItem(walletSessionKey);
    setAccount(oldAddr);
    if (!oldAddr) {
      router.push("/");
      return;
    }
    // Fetch referral data from your backend API
    const fetchReferralData = async () => {
      await setReferralData(userData[0]);
    };

    fetchReferralData();
  }, [userData]);

  // Recursively generate tree data from referral data, starting from the user
  const generateTreeData = (referrals, user) => {
    if (referrals?.address === user) {
      const refdata = referrals?.refs.map((item) => {
        item.textProps = { x: -25, y: 25 };
        return item;
      });
      // User found, generate node with children
      return {
        name: referrals.name,
        address: referrals.address,
        children: refdata,
        textProps: { x: -25, y: 25 , },
      };
    } else {
      // User not found, traverse children
      for (let child of referrals?.refs ?? []) {
        const result = generateTreeData(child, user);
        if (result) {
          return result;
        }
      }
      // User not found in any children, return null
      return [];
    }
  };

  // Generate the tree data from referral data for the current user
  const datas = generateTreeData(referralData, account);
  console.log("🚀 ~ file: referral-tree.js:145 ~ ReferralTree ~ datas:", datas);
 
  const renderNode = (nodeProps) => {
    console.log("🚀 ~ file: referral-tree.js:149 ~ renderNode ~ nodeProps:", nodeProps)
    return (
      <g>
        <text x={-25} y={0} textAnchor="middle" dominantBaseline="central">
          {nodeProps.name}
        </text>
        <text x={-25} y={20} textAnchor="middle" dominantBaseline="central">
          {nodeProps.label}
        </text>
      </g>
    );
  };

  return (
    account && (
      <div>
        <Layout>
          <div className="main">
            <Header filter={filter} />
            <TreeContainer
              activeNode={activeNode}
              data={datas}
              filter={filter}
              height={resize}
              width={resize}
              nodeLabelComponent={renderNode} // Use the custom node component to render both name and label

            />
          </div>
        </Layout>

        <style jsx>{`
          .main {
            display: flex;
            justify-content: center;
            min-height: calc(100vh - 14rem);
          }
        `}</style>
      </div>
    )
  );
}
