/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './SortToggle.scss';
import sortNot from './img/sort-not.svg';
import sortAsc from './img/sort-asc.svg';
import sortDesc from './img/sort-desc.svg';

const SortToggle = ({
  children, order, onChangeSort, index,
}) => {
  const handleClick = (event) => {
    const { shiftKey } = event;
    onChangeSort({ field: children, isPressedShift: shiftKey });
  };

  const IMAGES = {
    asc: sortAsc,
    desc: sortDesc,
    not: sortNot,
  };

  return (
    <button
      className="toggle"
      type="button"
      onClick={handleClick}
    >
      { children }
      <div className="toggle__indicator">
        {index}
        <img className="toggle__image" src={IMAGES[order]} alt="sorting" />
      </div>
    </button>
  );
};

SortToggle.propTypes = {
  children: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

export default SortToggle;
