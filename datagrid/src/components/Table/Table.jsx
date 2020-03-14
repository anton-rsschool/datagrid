import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { changeSort, selectRow } from '../../redux/actions';
import sortData from '../../utils/sortData';
import search from '../../utils/filterData';
import THead from './THead';
import TBody from './TBody';
import './Table.scss';

const Table = () => {
  const data = useSelector((state) => {
    const {
      data: initData,
      sort,
      searchQuery,
      filters,
    } = state;
    const filteredData = search(initData, searchQuery, filters);
    return sortData(filteredData, sort);
  });
  const sort = useSelector((state) => state.sort);
  const lastSelectedRow = useSelector((state) => state.lastSelectedRow);
  const selectedRows = useSelector((state) => state.selectedRows);
  const dispatch = useDispatch();

  const handleSelectRow = (args, shiftKey) => {
    const endIndex = data.findIndex((item) => item.id === args.id);
    if (shiftKey && lastSelectedRow) {
      const startIndex = data.findIndex((item) => item.id === lastSelectedRow);
      const elements = data
        .slice(startIndex > endIndex ? endIndex : startIndex,
          (startIndex > endIndex ? startIndex : endIndex) + 1)
        .map((item) => item.id);
      dispatch(selectRow({ elements, lastSel: data[endIndex].id }));
    } else {
      dispatch(selectRow({ elements: [args.id], lastSel: data[endIndex].id }));
    }
  };

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
        <TBody
          data={data}
          columns={COLUMNS}
          selectedRows={selectedRows}
          onSelectRow={handleSelectRow}
        />
      </table>
    </div>
  );
};

export default Table;
