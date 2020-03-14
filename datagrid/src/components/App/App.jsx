import React from 'react';

import FilterBar from '../FilterBar';
import Table from '../Table';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <FilterBar />
      <Table />
    </div>
  );
};

export default App;
