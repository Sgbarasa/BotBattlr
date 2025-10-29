function SortBar({ setSortBy }) {
  return (
    <div className="sort-bar">
      <h3>Sort by</h3>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">None</option>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
