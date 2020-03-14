import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/actions';
import Search from './Search';
import EnumFilter from './EnumFilter';
import Toggle from './Toggle';
import './FilterBar.scss';

const FilterBar = () => {
  const dispatch = useDispatch();

  const options = [
    { value: 'mentor', label: 'Mentor' },
    { value: 'student', label: 'Student' },
    { value: 'activist', label: 'Activist' },
  ];

  const handleToggle = (value) => {
    const values = value ? [value] : [];
    dispatch(changeFilter({ field: 'status', values }));
  };

  const handleChange = (value) => {
    const values = value ? value.map((item) => item.value) : [];
    dispatch(changeFilter({ field: 'role', values }));
  };

  return (
    <div className="filter-bar">
      <Toggle onToggle={handleToggle} />
      <Search />
      <EnumFilter
        options={options}
        defaultOptions={[]}
        label="Role"
        onChange={handleChange}
        isMulti
      />
    </div>
  );
};

export default FilterBar;
