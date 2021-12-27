import "./App.scss";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";

// https://windicss.org/
// https://tailwindcss.com/
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<ProductPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
