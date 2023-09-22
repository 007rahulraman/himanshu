import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetail } from "./pages/ProductDetail";
import { Products } from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
