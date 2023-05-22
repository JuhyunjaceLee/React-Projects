import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
