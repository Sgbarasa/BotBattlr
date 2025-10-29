const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ setFilters }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prev) =>
      checked ? [...prev, value] : prev.filter((f) => f !== value)
    );
  };

  return (
    <div className="filter-bar">
      <h3>Filter by Class</h3>
      {classes.map((cls) => (
        <label key={cls}>
          <input type="checkbox" value={cls} onChange={handleChange} /> {cls}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;
