import './SkeletonCard.css'

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton skeleton-text skeleton-title"></div>
        <div className="skeleton-footer">
          <div className="skeleton skeleton-price"></div>
          <div className="skeleton skeleton-rating"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
