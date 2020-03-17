import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import ReactToggle from 'react-toggle';

import { deleteRow, changeVisibleColumns, toggleVirtualization } from '../../redux/actions';
import saveSCV from '../../utils/saveSCV';
import './ToolBar.scss';

const ToolBar = () => {
  const selectedRows = useSelector((state) => state.selectedRows);
  const visibleColumns = useSelector((state) => state.visibleColumns);
  const params = useSelector(({
    data, filters, searchQuery, sort,
  }) => ({
    data, filters, searchQuery, sort,
  }));

  const dispatch = useDispatch();

  const options = [
    { value: 'name', label: 'Name', isFixed: true },
    { value: 'age', label: 'Age', isFixed: false },
    { value: 'city', label: 'City', isFixed: false },
    { value: 'status', label: 'Status', isFixed: false },
    { value: 'email', label: 'Email', isFixed: false },
    { value: 'role', label: 'Role', isFixed: false },
    { value: 'registration', label: 'Registration', isFixed: false },
  ];

  const saveTable = () => {
    saveSCV(
      params.data, params.filters, params.searchQuery, params.sort, visibleColumns,
    );
  };

  const handleChangeFields = (value, { action, removedValue }) => {
    switch (action) {
      case 'remove-value':
      case 'pop-value':
        if (removedValue.isFixed) {
          return;
        }
        break;
      case 'clear':
        // eslint-disable-next-line no-param-reassign
        value = options.filter((v) => v.isFixed);
        break;
      default:
    }
    dispatch(changeVisibleColumns(value));
  };

  const styles = {
    multiValue: (base, state) => (state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base),
    multiValueLabel: (base, state) => (state.data.isFixed
      ? {
        ...base, fontWeight: 'bold', color: 'white', paddingRight: 6,
      }
      : base),
    multiValueRemove: (base, state) => (state.data.isFixed ? { ...base, display: 'none' } : base),
  };

  const handleClick = () => {
    dispatch(deleteRow());
  };

  const handleToggle = (event) => {
    const { target: { checked } } = event;
    dispatch(toggleVirtualization(checked));
  };

  return (
    <div className="tool-bar">
      <button
        className="tool-bar__button"
        type="button"
        disabled={selectedRows.size === 0}
        onClick={handleClick}
      >
        Delete
      </button>
      <Select
        className="tool-bar__select"
        placeholder="Select column"
        onChange={handleChangeFields}
        options={options}
        isClearable={visibleColumns.some((v) => !v.isFixed)}
        styles={styles}
        value={visibleColumns}
        isMulti
        isSearchable={false}
      />
      <button
        type="button"
        onClick={saveTable}
      >
        Save SCV
      </button>
      <ReactToggle
        defaultChecked
        onChange={handleToggle}
      />
    </div>
  );
};

export default ToolBar;
