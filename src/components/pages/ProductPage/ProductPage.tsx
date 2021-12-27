import classNames from "classnames";
import React from "react";

const ProductPage = () => {
  const [show, hide] = React.useState(true);
  const uiClasses = classNames("bg-green-400 h-full w-1/3 transition-all", {
    "w-0": !show,
  });
  return (
    <div className="ProductPage">
      <section className="h-screen flex">
        <div
          className={classNames("flex h-full  transition-all", {
            "w-2/3": show,
            "w-full": !show,
          })}
        >
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
        <div className={uiClasses}></div>
      </section>
    </div>
  );
};
export default ProductPage;
