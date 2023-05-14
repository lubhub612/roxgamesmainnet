import PropTypes from "prop-types";
import React, { useContext } from "react";
import TreeGlobalContext from "../../contexts/TreeContext";
// import { setFilter } from '../Reducers/actions';

export default function Filter(props) {
  const { setFilter } = useContext(TreeGlobalContext);
  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <input
      aria-label="Filter nodes"
      id="search"
      type="text"
      placeholder="Filter nodes..."
      value={props.filter}
      onChange={handleChange}
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
