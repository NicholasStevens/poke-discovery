import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import PokemonDiscoveryPage from "./pages/PokemonDiscoveryPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Discovery App</h1>
      <div>
        <NavLink end to="/">
          Home
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />}>
          <Route path=":filter" element={<PokemonDiscoveryPage />} />
        </Route>
        <Route path="/details/:pokemon_name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
