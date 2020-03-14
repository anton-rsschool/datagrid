import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/actions';
import Search from './Search';
import Toggle from './Toggle';
import './FilterBar.scss';

const FilterBar = () => {
  const dispatch = useDispatch();

  const handleToggle = (value) => {
    const values = value ? [value] : [];
    dispatch(changeFilter({ field: 'status', values }));
  };

  return (
    <div className="filter-bar">
      <Toggle onToggle={handleToggle} />
      <Search />
    </div>
  );
};

export default FilterBar;
