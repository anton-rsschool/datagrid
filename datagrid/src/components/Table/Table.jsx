/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { changeSort, selectRow } from '../../redux/actions';
import sortData from '../../utils/sortData';
import search from '../../utils/filterData';
import THead from './THead';
import TBody from './TBody';
import Row from './Row';
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
  const visibleColumns = useSelector((state) => state.visibleColumns.map((item) => item.value));
  const isVirtualize = useSelector((state) => state.virtualization);
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
    active: (value) => (value ? 'Yes' : 'No'),
    email: (value) => value,
    role: (value) => value,
    registration: (value) => moment(value).format('D MMM Y'),
  };

  const columns = (object, array) => {
    const keys = Object.keys(COLUMNS);
    const result = {};
    keys.forEach((item) => {
      if (array.includes(item)) {
        result[item] = object[item];
      }
    });
    return result;
  };

  const fields = columns(COLUMNS, visibleColumns);

  const row = ({ index, style }) => (
    <div className="row" style={style}>
      <Row
        key={data[index].id}
        data={data[index]}
        selected={data[index].id in selectedRows}
        columns={fields}
        onSelectRow={handleSelectRow}
      />
    </div>
  );

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div ref={ref} {...rest}>
      <div className="sticky">
        <THead
          columns={fields}
          onChangeSort={handleShangeSort}
          sort={sort}
        />
      </div>
      {children}
    </div>
  ));


  return (
    <div className="table">
      {isVirtualize ? (
        <List
          className="sticky-list"
          height={600}
          itemCount={data.length}
          itemSize={40}
          width={1200}
          overscanCount={10}
          innerElementType={innerElementType}
        >
          {row}
        </List>
      ) : (
        <div className="table__table">
          <THead
            columns={fields}
            onChangeSort={handleShangeSort}
            sort={sort}
          />
          <TBody
            data={data}
            columns={fields}
            selectedRows={selectedRows}
            onSelectRow={handleSelectRow}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
