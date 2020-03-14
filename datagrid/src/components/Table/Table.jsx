import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { changeSort } from '../../redux/actions';
import sortData from '../../utils/sortData';
import THead from './THead';
import TBody from './TBody';
import './Table.scss';

const Table = () => {
  const data = useSelector((state) => {
    const { data: initData, sort } = state;
    return sortData(initData, sort);
  });
  const sort = useSelector((state) => state.sort);
  const dispatch = useDispatch();

  const handleShangeSort = (payload) => {
    dispatch(changeSort(payload));
  };

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
          onChangeSort={handleShangeSort}
          sort={sort}
        />
        <TBody data={data} columns={COLUMNS} />
      </table>
    </div>
  );
};

export default Table;
