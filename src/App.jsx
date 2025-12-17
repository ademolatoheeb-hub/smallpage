import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Card from "./pages/Card";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products"> Products</Link>
        <Link to="/card"> Card</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;