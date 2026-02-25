import CoffeeCard from './CoffeeCard'
import SkeletonCard from './SkeletonCard'
import './CoffeeList.css'

function CoffeeList({ coffees, loading, hasResults }) {
  if (loading) {
    return (
      <div className="coffee-list">
        {[...Array(6)].map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    )
  }

  if (!hasResults) {
    return (
      <div className="empty-state">
        <div className="empty-icon">☕</div>
        <h2>Sin Café Disponible</h2>
        <p>Lo sentimos, no hay productos de café que coincidan con tus filtros. ¡Intenta cambiar tu selección!</p>
      </div>
    )
  }

  return (
    <div className="coffee-list">
      {coffees.map((coffee) => (
        <CoffeeCard key={coffee.id} coffee={coffee} />
      ))}
    </div>
  )
}

export default CoffeeList
