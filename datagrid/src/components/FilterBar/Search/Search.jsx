/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import { changeSearchQquery } from '../../../redux/actions';
import './Search.scss';

const Search = () => {
  const searchQuery = useSelector((state) => state.searchQuery);
  const initialQuery = searchQuery ? searchQuery.query : '';
  const initialSelectedOptions = searchQuery ? searchQuery.fields
    : [{ value: 'name', label: 'Name' }];
  const [selectedOptions, changeSelectedOptions] = useState(initialSelectedOptions);
  const [query, changeQuery] = useState(initialQuery);
  const dispatch = useDispatch();
  const options = [
    { value: 'name', label: 'Name' },
    { value: 'city', label: 'City' },
    { value: 'age', label: 'Age' },
    { value: 'email', label: 'Email' },
  ];

  const handleChange = (event) => {
    const { value } = event.target;
    changeQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(changeSearchQquery({ query, fields: selectedOptions }));
  };

  const handleChangeFields = (opts) => {
    changeSelectedOptions(opts);
    dispatch(changeSearchQquery({ query, fields: opts }));
  };


  return (
    <div className="search">
      <label className="search__label" htmlFor="search">Search</label>
      <form className="search__control" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          value={query}
          onChange={handleChange}
        />
        <Select
          className="search__select"
          placeholder="Select column"
          onChange={handleChangeFields}
          options={options}
          value={selectedOptions}
          isMulti
          isSearchable={false}
        />
        <button className="search__button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
