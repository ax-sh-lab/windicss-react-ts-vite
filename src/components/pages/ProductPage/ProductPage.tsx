import classNames from "classnames";
import React from "react";

const ToggleButton = ({
  setHide,
}: {
  setHide: React.SetStateAction<boolean>;
}) => {
  const [show, hide] = React.useState(false);
  React.useEffect(() => {
    setHide(show);
  }, [setHide, show]);
  return (
    <div className="bg-white shadow grid place-content-center">
      <span
        className="cursor-pointer transform -rotate-90"
        onClick={() => hide(!show)}
      >
        {show ? "SHOW" : "HIDE"}
      </span>
    </div>
  );
};

const ProductPage = () => {
  const [show, hide] = React.useState(true);
  const uiClasses = classNames("bg-green-400 h-full w-1/3 transition-all", {
    "transform translate-x-full": !show,
  });
  return (
    <div className="ProductPage">
      <section className={"flex min-h-screen overflow-hidden"}>
        <main className="flex flex-grow bg-green-300">
          <div className="flex-grow bg-red-400">main</div>
          <ToggleButton setHide={hide} />
        </main>
        {/*  translate-x-full md:translate-x-0  */}
        <aside
          className={classNames(
            "sidebar w-100 transition-all transition-transform duration-300 ease-in text-white bg-gray-900",
            show && "-mr-100"
          )}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ducimus
            nemo saepe exercitationem dignissimos nulla sequi. Exercitationem,
            alias odio! Expedita sequi tempora excepturi hic. Labore recusandae
            accusamus aperiam dignissimos ratione!
          </p>
        </aside>
      </section>
    </div>
  );
};
export default ProductPage;
