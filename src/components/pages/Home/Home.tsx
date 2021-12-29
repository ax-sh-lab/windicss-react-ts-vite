import {Link} from "react-router-dom";

function Hero() {
  let banner_image_url = "https://via.placeholder.com/1920x1080";
  return (
    <section>
      <img alt={"banner"} src={banner_image_url} />
    </section>
  );
}

function Home() {
  return (
    <div className={"Home min-h-screen"}>
        <Link to={"/product"}>Product</Link>
      <header>
        <Hero />
      </header>
    </div>
  );

  // return (
  //   <>
  //     <nav>
  //       <Link to="/product">Product</Link>
  //     </nav>
  //   </>
  // );
}

export default Home;
