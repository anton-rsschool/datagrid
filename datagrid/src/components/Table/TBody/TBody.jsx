import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import './TBody.scss';

const TBody = ({
  data, columns, onSelectRow, selectedRows,
}) => {
  const rows = data.map((row) => (
    <Row
      key={row.id}
      data={row}
      selected={row.id in selectedRows}
      columns={columns}
      onSelectRow={onSelectRow}
    />
  ));

  return (
    <div className="tbody">
      {rows}
    </div>
  );
};

TBody.propTypes = {
  columns: PropTypes.instanceOf(Object).isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  selectedRows: PropTypes.instanceOf(Object).isRequired,
  onSelectRow: PropTypes.func.isRequired,
};

export default TBody;
