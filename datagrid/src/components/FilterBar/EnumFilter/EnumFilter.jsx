/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './EnumFilter.scss';

const Filter = ({
  label,
  options,
  defaultOptions,
  isMulti,
  isSearchable,
  onChange,
}) => {
  const [value, changeValue] = useState(defaultOptions);
  const changeHandle = (selectedOptions) => {
    changeValue(selectedOptions);
    onChange(selectedOptions);
  };
  return (
    <div className="select-filter">
      <label
        className="select-filter__label"
        htmlFor={label}
      >
        {label}
      </label>
      <Select
        id={label}
        className="select-filter__select"
        placeholder="Select value"
        onChange={changeHandle}
        options={options}
        value={value}
        isMulti={isMulti}
        isSearchable={isSearchable}
      />
    </div>
  );
};

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  isMulti: PropTypes.bool,
  isSearchable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  defaultOptions: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

Filter.defaultProps = {
  isMulti: false,
  isSearchable: false,
};

export default Filter;
