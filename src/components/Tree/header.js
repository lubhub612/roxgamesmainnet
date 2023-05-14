import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import TreeGlobalContext from "../../contexts/TreeContext";
// import { setActiveNode, setFilter, resize } from '../Reducers/actions';
import Filter from "./filter";

export default function Header(props) {
  const { setActiveNode, resize, setFilter } = useContext(TreeGlobalContext);

  useEffect(resize, []);

  function handleClick() {
    setActiveNode(null);
    setFilter("");
  }
  return (
    <div>
      <header id="header" className="main">
        <Filter filter={props.filter} />
        <button onClick={handleClick}>Reset</button>
      </header>
      <style jsx>{`
        .main {
          padding: 15px;
        }
        .main button { 
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}

Header.propTypes = {
  filter: PropTypes.string.isRequired,
  timestamp: PropTypes.string,
};
