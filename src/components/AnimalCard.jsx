function AnimalCard({ animal }) {
  function onFavoriteClick() {
    alert(`Favorito: ${animal.name}`);
  }

  // Imagen placeholder si no hay URL
  const placeholderImage = "https://via.placeholder.com/300x200?text=Dog";

  return (
    <div className="animal-card">
      <div className="animal-poster">
        <img src={animal.image_link || placeholderImage} alt={animal.name} />
        <div className="animal-overlay">
          <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
        </div>
      </div>
      <div className="animal-info">
        <h3>{animal.name}</h3>
      </div>
    </div>
  );
}

export default AnimalCard;
