import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deleteRow } from '../../redux/actions';
import './ToolBar.scss';

const ToolBar = () => {
  const selectedRows = useSelector((state) => state.selectedRows);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteRow());
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
    </div>
  );
};

export default ToolBar;
