import { useState, useEffect } from "react";
import { getAllDogs, searchDogs } from "../services/api";
import AnimalCard from "../components/AnimalCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(null);

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

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchDogs(searchQuery);
      setDogs(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search dog...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for breeds..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>

        <button type="submit" className="search-button">
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
