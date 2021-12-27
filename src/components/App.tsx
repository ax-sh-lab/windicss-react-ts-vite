import "./App.scss";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

// https://windicss.org/
// https://tailwindcss.com/
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </Layout>
  );
}

export default App;
