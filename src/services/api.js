const API_KEY = "c5cB3N9L/jA54tIuJHXFSw==PANlt1vY03uMxAgw";
const BASE_URL = "https://api.api-ninjas.com/v1/dogs";

export const getAllDogs = async () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const allDogs = new Map(); // No duplicates

  for (let letter of alphabet) {
    try {
      const res = await fetch(`${BASE_URL}?name=${letter}`, {
        method: "GET",
        headers: { 
          "X-Api-Key": API_KEY,
        },
      });

      const data = await res.json();

      data.forEach((dog) => {
        if (!allDogs.has(dog.name)) {
          allDogs.set(dog.name, dog);
        }
      });

      
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.error("Error al obtener razas con letra", letter, err);
    }
  }

  return Array.from(allDogs.values());
};
