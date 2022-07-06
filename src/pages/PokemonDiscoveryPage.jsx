import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

export default function PokemonDiscoveryPage() {
  const [pokeList, setPokeList] = useState(null);
  const [filter, setFilter] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function getPoke() {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      setPokeList(response.data.results);
    }
    getPoke();
    if (params.filter) {
      setFilter(params.filter);
    }
  }, []);

  const updateFilter = (e) => {
    setFilter(e.target.value);
    navigate(`/${e.target.value}`);
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
