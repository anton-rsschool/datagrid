import React from 'react';
import PropTypes from 'prop-types';

import './Row.scss';

const Row = ({
  data, columns,
}) => {
  const items = Object.keys(columns).map((item) => {
    const className = `row__item row__item--${item}`;
    return (
      <td className={className} key={item}>
        {columns[item](data[item])}
      </td>
    );
  });
  return (
    <tr className="row">
      <td className="row__selected">
        <input
          type="checkbox"
        />
      </td>
      {items}
    </tr>
  );
};

Row.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  columns: PropTypes.instanceOf(Object).isRequired,
};

export default Row;
