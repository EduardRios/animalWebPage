import { useState, useEffect } from "react";
import { getAllDogs } from "../services/api";
import AnimalCard from "../components/AnimalCard";
import "../css/Home.css";

function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const result = await getAllDogs();
        setDogs(result);
      } catch (error) {
        console.error("Error al cargar perros", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  if (loading) return <p>Cargando razas de perros...</p>;

  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for breeds..."
          className="search-input"
        ></input>

        <button type="sumbit" className="search-button">
          Search
        </button>
      </form>

      <div className="dog-grid">
        {dogs.map((dog) => (
          <AnimalCard key={dog.name} animal={dog} />
        ))}
      </div>
    </div>
  );
}

export default Home;
