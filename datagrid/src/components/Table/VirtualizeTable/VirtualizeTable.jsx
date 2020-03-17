/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { createContext, forwardRef } from 'react';
import { FixedSizeList as List } from 'react-window';
import PropTypes from 'prop-types';

import Row from '../Row';
import THead from '../THead';

const VirtualizeTable = ({
  data, selectedRows, sort, columns, handleSelectRow, handleShangeSort,
}) => {
  const StickyListContext = createContext();
  StickyListContext.displayName = 'StickyListContext';

  const ItemWrapper = ({ data, index, style }) => {
    const { ItemRenderer, stickyIndices } = data;
    if (stickyIndices && stickyIndices.includes(index)) {
      return null;
    }
    return <ItemRenderer index={index} style={style} />;
  };

  const row = ({ index, style }) => {
    return (
      <div className="row" style={style}>
        <Row
          key={data[index].id}
          data={data[index]}
          selected={data[index].id in selectedRows}
          columns={columns}
          onSelectRow={handleSelectRow}
        />
      </div>
    );
  };

  const StickyRow = ({ style }) => (
    <div className="sticky" style={style}>
      <THead
        columns={columns}
        onChangeSort={handleShangeSort}
        sort={sort}
      />
    </div>
  );

  const innerElementType = forwardRef(({ children, ...rest }, ref) => (
    <StickyListContext.Consumer>
      {({ stickyIndices }) => (
        <div ref={ref} {...rest}>
          {stickyIndices.map((index) => (
            <StickyRow
              index={index}
              key={index}
              style={{ top: 0, width: '100%', height: 35, position: 'sticky', zIndex: 5 }}
            />
          ))}

          {children}
        </div>
      )}
    </StickyListContext.Consumer>
  ));

  const StickyList = ({ children, stickyIndices, ...rest }) => (
    <StickyListContext.Provider value={{ ItemRenderer: children, stickyIndices }}>
      <List itemData={{ ItemRenderer: children, stickyIndices }} {...rest}>
        {ItemWrapper}
      </List>
    </StickyListContext.Provider>
  );

  return (
    <StickyList
      className="sticky-list"
      height={500}
      innerElementType={innerElementType}
      itemCount={data.length}
      itemSize={35}
      stickyIndices={[0]}
      width={1000}
      overscanCount={10}
    >
      {row}
    </StickyList>
  );
};

VirtualizeTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  columns: PropTypes.instanceOf(Object).isRequired,
  handleSelectRow: PropTypes.func.isRequired,
  handleShangeSort: PropTypes.func.isRequired,
};

export default VirtualizeTable;
