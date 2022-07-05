import React from "react";
import { NavLink } from "react-router-dom";

export default function PokemonCard({ name }) {
  return (
    <div>
      <NavLink to={`/details/${name}`}>{name}</NavLink>
    </div>
  );
}
