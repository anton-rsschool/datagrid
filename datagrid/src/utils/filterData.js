export default (data, searchQuery) => {
  const search = (item) => {
    if (!searchQuery) return true;
    const { query, fields } = searchQuery;
    const keys = fields.map(({ value }) => value);
    return keys.some((key) => {
      const string = String(item[key]).toLowerCase();
      return string.indexOf(query.toLowerCase()) !== -1;
    });
  };
  return data.filter((item) => search(item));
};
