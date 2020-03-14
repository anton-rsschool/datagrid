import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import THead from './THead';
import TBody from './TBody';
import './Table.scss';

const Table = () => {
  const data = useSelector((state) => state.data);

  const COLUMNS = {
    name: (value) => value,
    age: (value) => value,
    city: (value) => value,
    status: (value) => (value ? 'Yes' : 'No'),
    email: (value) => value,
    role: (value) => value,
    registration: (value) => moment(value).format('D MMM Y'),
  };

  return (
    <div className="table">
      <table>
        <THead
          columns={COLUMNS}
        />
        <TBody data={data} columns={COLUMNS} />
      </table>
    </div>
  );
};

export default Table;
