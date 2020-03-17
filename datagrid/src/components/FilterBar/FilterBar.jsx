import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/actions';
import Search from './Search';
import EnumFilter from './EnumFilter';
import Toggle from './Toggle';
import './FilterBar.scss';

const FilterBar = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const options = [
    { value: 'mentor', label: 'Mentor' },
    { value: 'student', label: 'Student' },
    { value: 'activist', label: 'Activist' },
  ];
  const defaultOptions = 'role' in filters
    ? filters.role.map((item) => ({ value: item, label: `${item[0].toUpperCase()}${item.slice(1)}` }))
    : [];
  const handleToggle = (value) => {
    const values = value ? [value] : [];
    dispatch(changeFilter({ field: 'active', values }));
  };

  const handleChange = (value) => {
    const values = value ? value.map((item) => item.value) : [];
    dispatch(changeFilter({ field: 'role', values }));
  };

  return (
    <div className="filter-bar">
      <Toggle
        onToggle={handleToggle}
        isChecked={'active' in filters}
      />
      <Search />
      <EnumFilter
        options={options}
        defaultOptions={defaultOptions}
        label="Role"
        onChange={handleChange}
        isMulti
      />
    </div>
  );
};

export default FilterBar;
