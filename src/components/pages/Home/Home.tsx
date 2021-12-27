import { Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <>
      <nav>
        <Link to="/product">Product</Link>
      </nav>
    </>
  );
}

export default Home;
