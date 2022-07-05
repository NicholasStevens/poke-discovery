import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import PokemonDiscoveryPage from "./pages/PokemonDiscoveryPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Discovery App</h1>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />} />
        <Route path="/details/:pokemon_name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
