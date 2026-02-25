import './CoffeeCard.css'

function CoffeeCard({ coffee }) {
  const {
    name,
    image,
    price,
    rating,
    votes,
    popular,
    available
  } = coffee

  return (
    <div className="coffee-card">
      <div className="card-image">
        <img src={image} alt={name} />
        {popular && <div className="popular-badge">Popular</div>}
        {!available && <div className="unavailable-overlay">Agotado</div>}
      </div>

      <div className="card-content">
        <h3 className="coffee-name">{name}</h3>

        <div className="card-footer">
          <span className="price">${price}</span>

          <div className="rating">
            {rating ? (
              <>
                <span className="star">★</span>
                <span className="rating-value">{rating}</span>
                {votes && <span className="votes">({votes})</span>}
              </>
            ) : (
              <span className="no-rating">Sin calificación</span>
            )}
          </div>
        </div>

        {!available && <div className="sold-out-text">Agotado</div>}
      </div>
    </div>
  )
}

export default CoffeeCard
