import React from 'react';
import PropTypes from 'prop-types';

import SortToggle from '../SortToggle';
import './THead.scss';

const THead = ({ columns, sort, onChangeSort }) => {
  const keys = Object.keys(columns);
  const row = keys.map((key) => (
    <th
      className={`thead__item thead__item--${key}`}
      key={key}
    >
      <div className="thead__content">
        <SortToggle
          order={key in sort ? sort[key] : 'not'}
          onChangeSort={onChangeSort}
        >
          {key}
        </SortToggle>
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
  sort: PropTypes.instanceOf(Object).isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

export default THead;
