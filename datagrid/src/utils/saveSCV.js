import sortData from './sortData';
import filterData from './filterData';

export default (
  data, filters, searchQuery, sort, visibleColumn,
) => {
  const filteredData = filterData(data, searchQuery, filters);
  const sortingData = sortData(filteredData, sort);
  const columns = visibleColumn.map((item) => item.value);
  const keys = Object.keys(data[0]).filter((key) => columns.includes(key));
  const header = `${keys.join(',')}\n`;
  let string = header;
  sortingData.forEach((item) => {
    const row = [];
    keys.forEach((key) => {
      row.push(item[key]);
    });
    string = `${string}${row.join(',')}\n`;
  });
  const hiddenElement = document.createElement('a');
  hiddenElement.href = `data:text/csv;charset=utf-8,${encodeURI(string)}`;
  hiddenElement.target = '_blank';
  hiddenElement.download = 'table.csv';
  hiddenElement.click();
};
