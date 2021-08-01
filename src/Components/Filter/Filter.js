import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterChange } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = (e) => dispatch(filterChange(e.target.value));

  return (
    <label className={styles.filterLabel}>
      <span>Find contacts by name and number</span>
      <input
        className={styles.filterInput}
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};
