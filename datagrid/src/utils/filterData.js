export default (data, searchQuery, filters) => {
  const search = (item) => {
    if (!searchQuery) return true;
    const { query, fields } = searchQuery;
    const keys = fields.map(({ value }) => value);
    return keys.some((key) => {
      const string = String(item[key]).toLowerCase();
      return string.indexOf(query.toLowerCase()) !== -1;
    });
  };
  const filter = (item) => {
    const keys = Object.keys(filters);
    if (keys.length === 0) return true;
    return keys.every((key) => {
      const value = item[key];
      return filters[key].some((elem) => elem === value);
    });
  };
  return data.filter((item) => search(item) && filter(item));
};
