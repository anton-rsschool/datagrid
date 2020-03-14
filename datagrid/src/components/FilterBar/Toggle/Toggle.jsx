/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ReactToggle from 'react-toggle';
import PropTypes from 'prop-types';

import './Toggle.scss';

const Toggle = ({ onToggle, isChecked }) => {
  const handleChange = (event) => {
    const { checked } = event.target;
    onToggle(checked);
  };
  return (
    <div className="toggle__body">
      <label className="toggle__label">Active Only</label>
      <ReactToggle
        defaultChecked={isChecked}
        onChange={handleChange}
      />
    </div>
  );
};

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Toggle;
