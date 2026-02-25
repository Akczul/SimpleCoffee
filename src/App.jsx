import { useState, useEffect } from 'react'
import FilterBar from './components/FilterBar'
import CoffeeList from './components/CoffeeList'
import './App.css'

function App() {
  const [coffees, setCoffees] = useState([])
  const [filteredCoffees, setFilteredCoffees] = useState([])
  const [loading, setLoading] = useState(true)
  const [availableOnly, setAvailableOnly] = useState(false)
  const [sortBy, setSortBy] = useState('popular')

  // Obtener datos de la API
  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://raw.githubusercontent.com/devchallenges-io/web-app-resources/main/data/simple-coffee-listing.json'
        )
        const data = await response.json()
        setCoffees(data)
      } catch (error) {
        console.error('Error al obtener datos de café:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCoffees()
  }, [])

  // Filtrar y ordenar cafés
  useEffect(() => {
    let filtered = coffees

    // Aplicar filtro de disponibilidad
    if (availableOnly) {
      filtered = filtered.filter(coffee => coffee.available)
    }

    // Aplicar ordenamiento
    if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => (b.votes || 0) - (a.votes || 0))
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    setFilteredCoffees(filtered)
  }, [coffees, availableOnly, sortBy])

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Nuestra Colección</h1>
          <p>Explora nuestra selección curada de café premium</p>
        </div>
      </header>

      <main className="main-content">
        <FilterBar 
          availableOnly={availableOnly}
          onAvailableChange={setAvailableOnly}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <CoffeeList 
          coffees={filteredCoffees}
          loading={loading}
          hasResults={filteredCoffees.length > 0}
        />
      </main>
    </div>
  )
}

export default App
