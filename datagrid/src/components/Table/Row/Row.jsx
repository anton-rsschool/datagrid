import React from 'react';
import PropTypes from 'prop-types';

import './Row.scss';

const Row = ({
  data, columns, onSelectRow, selected,
}) => {
  const { id } = data;
  const handleChange = () => {};
  const handleClick = (event) => {
    const { target: { checked }, shiftKey } = event;
    onSelectRow({ id, checked }, shiftKey);
  };
  const items = Object.keys(columns).map((item) => {
    const className = `row__item row__item--${item}`;
    return (
      <div className={className} key={item}>
        {columns[item](data[item])}
      </div>
    );
  });
  return (
    <div className={`row${selected ? ' row--active' : ''}`}>
      <div className="row__selected">
        <input
          type="checkbox"
          checked={selected}
          onClick={handleClick}
          onChange={handleChange}
        />
      </div>
      {items}
    </div>
  );
};

Row.propTypes = {
  selected: PropTypes.bool.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  columns: PropTypes.instanceOf(Object).isRequired,
  onSelectRow: PropTypes.func.isRequired,
};

export default Row;
