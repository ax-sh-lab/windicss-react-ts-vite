import React from "react";

const ProductPage = () => {
  const [show, hide] = React.useState(true);
  return (
    <div className="ProductPage">
      <section className="h-screen flex">
        <div className="flex h-full w-2/3">
          <div className="flex-1"></div>
          <div className="bg-gray-300 w-10 grid place-items-center">
            <span
              className="cursor-pointer transform -rotate-90"
              onClick={() => hide(!show)}
            >
              {show ? "HIDE" : "SHOW"}
            </span>
          </div>
        </div>
        <div className="bg-green-400 h-full w-1/3"></div>
      </section>
    </div>
  );
};
export default ProductPage;