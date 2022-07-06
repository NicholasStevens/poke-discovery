import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokemonDetailPage() {
  const [specificPoke, setSpecificPoke] = useState(null);
  const routeParams = useParams();

  useEffect(() => {
    async function fetchPoke() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${routeParams.pokemon_name}`
      );
      setSpecificPoke(response.data);
    }
    fetchPoke();
  }, []);

  return specificPoke ? (
    <div>
      <h2>{specificPoke.name}</h2>
      <img alt="" src={specificPoke.sprites.front_default} />
      <p>
        Types:{" "}
        {specificPoke.types.map((typeObj) => (
          <span>{typeObj.type.name} </span>
        ))}
      </p>
      <p>Weight: {specificPoke.weight} hectograms</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
