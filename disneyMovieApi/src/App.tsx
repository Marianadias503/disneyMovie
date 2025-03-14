import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import Details from "./pages/Details";
import Pokemon from "./pages/Pokemon"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allmovies" element={<AllMovies />} />
      <Route path="/details/:id" element={ <Details/>} /> {/*vai mostrar o filme com base no id fornecido */}
      <Route path="/pokemon" element={<Pokemon/>} />
    </Routes>
  );
}
