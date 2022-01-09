import { Link } from "react-router-dom";
import React from "react";

function Hero() {
  let banner_image_url = "https://via.placeholder.com/1920x1080";
  return (
    <section>
      <img alt={"banner"} src={banner_image_url} />
    </section>
  );
}
interface Order {
  readonly id: number;
  name: string;
}

function OrderConfig() {
  const [orders, setOrders] = React.useState<Order[]>([
    { id: 0, name: "" }, // initial order
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
    { id: 4, name: "" },
  ]);
  const [selected, setSelected] = React.useState(0);
  const selectedOrder = orders[Math.abs(selected)];

  function handleSwitch({ target }) {
    switch (target.dataset.action) {
      case ">":
        return setSelected((x) => (x + 1) % orders.length);
      case "<":
        return setSelected((x) => (x + orders.length - 1) % orders.length);
      case "+":
        return setOrders((x) => [...x, { id: x.length, name: "" }]);
      case "-":
        return;
    }
  }

  function handleTextEdit({ target }) {
    const o = [...orders];
    o[target.name].name = target.value;
    setOrders(o);
  }

  return (
    <section className={"grid place-center"}>
      <span>{orders.length}</span>
      <h1 className={"text-2xl"}>{selected}</h1>
      <div className={"flex flex-col w-12"}>
        <button
          className={"p-4 bg-red-300"}
          data-action={">"}
          onClick={handleSwitch}
        >
          {">"}
        </button>
        <button
          className={"p-4 bg-red-300"}
          data-action={"<"}
          onClick={handleSwitch}
        >
          {"<"}
        </button>
      </div>
      <div className={"flex flex-col w-12"}>
        <button
          className={"p-4 bg-blue-300"}
          data-action={"+"}
          onClick={handleSwitch}
        >
          +
        </button>
        <button
          className={"p-4 bg-blue-300"}
          data-action={"-"}
          onClick={handleSwitch}
        >
          -
        </button>
      </div>
      <input
        type={"text"}
        value={selectedOrder.name}
        name={"" + selectedOrder.id}
        onChange={handleTextEdit}
      />
      {JSON.stringify(selectedOrder)}
    </section>
  );
}

function Home() {
  return (
    <div className={"Home min-h-screen"}>
      {/*<Link to={"/product"}>Product</Link>*/}
      <header>
        {/*<Hero />*/}
        <OrderConfig />
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
