import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import './TBody.scss';

const TBody = ({ data, columns }) => {
  const rows = data.map((row) => (
    <Row
      key={row.id}
      data={row}
      columns={columns}
    />
  ));

  return (
    <tbody className="tbody">
      {rows}
    </tbody>
  );
};

TBody.propTypes = {
  columns: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default TBody;
