import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

export default function PokemonDiscoveryPage() {
  const [pokeList, setPokeList] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function getPoke() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokeList(response.data.results);
    }
    getPoke();
  }, []);

  const updateFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={updateFilter} />
      {pokeList ? (
        pokeList
          .filter((pokeObject) => pokeObject.name.startsWith(filter))
          .map((pokeObject, i) => (
            <PokemonCard key={i} name={pokeObject.name} />
          ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
