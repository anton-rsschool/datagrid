import React from 'react';
import PropTypes from 'prop-types';

import './THead.scss';

const THead = ({ columns }) => {
  const keys = Object.keys(columns);
  const row = keys.map((key) => (
    <th
      className={`thead__item thead__item--${key}`}
      key={key}
    >
      <div className="thead__content">
        {key}
      </div>
    </th>
  ));

  return (
    <thead className="thead">
      <tr>
        <th className="thead__selected">
          #
        </th>
        {row}
      </tr>
    </thead>
  );
};

THead.propTypes = {
  columns: PropTypes.instanceOf(Object).isRequired,
};

export default THead;
