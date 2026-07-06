function Filter({ yearFilter, setYearFilter }) {
  return (
    <select
      value={yearFilter}
      onChange={(e) => setYearFilter(e.target.value)}
    >
      <option value="All">All Years</option>
      <option value="Before 1950">Before 1950</option>
      <option value="1950-1999">1950–1999</option>
      <option value="2000+">2000+</option>
    </select>
  );
}

export default Filter;