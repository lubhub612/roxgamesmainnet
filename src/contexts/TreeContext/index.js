import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { typeOf } from "react-is";
import GlobalContext from "../GlobalContext";

const TreeGlobalContext = React.createContext();

const TreeGlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState();
  const [activeNode, setActiveNode] = useState();
  const { invokeServer, data: userData } = useContext(GlobalContext);

  function resize(state) {
    if (typeof state === "undefined") {
      return window.innerHeight - 42;
    } else {
      return (
        window.innerHeight - document.getElementById("header").offsetHeight - 16
      );
    }
    return state;
  }

  return (
    <TreeGlobalContext.Provider
      value={{
        data,
        setData,
        setActiveNode,
        resize,
        filter,
        setFilter,
        activeNode,
        invokeServer,
        userData
      }}
    >
      {children}
    </TreeGlobalContext.Provider>
  );
};

export default TreeGlobalContext;
export { TreeGlobalProvider };
