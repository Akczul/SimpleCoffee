import './FilterBar.css'

function FilterBar({ availableOnly, onAvailableChange, sortBy, onSortChange }) {
  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${!availableOnly ? 'active' : ''}`}
          onClick={() => onAvailableChange(false)}
        >
          Todos los Productos
        </button>
        <button 
          className={`filter-btn ${availableOnly ? 'active' : ''}`}
          onClick={() => onAvailableChange(true)}
        >
          Disponibles Ahora
        </button>
      </div>

      <div className="sort-section">
        <label htmlFor="sort">Ordenar por:</label>
        <select 
          id="sort"
          className="sort-select"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="popular">Popular</option>
          <option value="rating">Mayor Calificación</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
