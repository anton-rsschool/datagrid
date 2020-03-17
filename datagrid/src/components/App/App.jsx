import React from 'react';

import FilterBar from '../FilterBar';
import ToolBar from '../ToolBar';
import Table from '../Table';
import './App.scss';

const App = () => (
  <div className="app">
    <FilterBar />
    <ToolBar />
    <Table />
  </div>
);

export default App;
