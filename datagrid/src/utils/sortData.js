export default (data, fields) => data.slice().sort((item1, item2) => {
  const keys = Object.keys(fields);
  const { length } = keys;
  for (let i = 0; i < length; i += 1) {
    const key = keys[i];
    if (fields[keys[i]] === 'asc') {
      if (item1[key] > item2[key]) {
        return 1;
      }
      if (item1[key] < item2[key]) {
        return -1;
      }
    }

    if (fields[keys[i]] === 'desc') {
      if (item1[key] > item2[key]) {
        return -1;
      }
      if (item1[key] < item2[key]) {
        return 1;
      }
    }
  }
  return 0;
});
