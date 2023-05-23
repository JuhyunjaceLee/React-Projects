import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import LoginPage from "./page/LoginPage";
import Navbar from "./component/Navbar";
import { useState } from "react";

function App() {
  const [log, setLog] = useState("로그인");
  return (
    <div>
      <Navbar log={log} setLog={setLog} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/login"
          element={<LoginPage log={log} setLog={setLog} />}
        />
      </Routes>
    </div>
  );
}

export default App;
