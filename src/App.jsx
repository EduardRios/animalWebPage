import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
