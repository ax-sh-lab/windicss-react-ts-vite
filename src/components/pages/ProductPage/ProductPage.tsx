import classNames from "classnames";
import React, { Fragment } from "react";
import faker from "faker";

const ToggleButton = ({ setHide }: { setHide: (state: boolean) => void }) => {
  const [show, hide] = React.useState(false);
  React.useEffect(() => {
    setHide(show);
  }, [setHide, show]);
  return (
    <div className="HideToggle bg-white shadow grid place-content-center">
      <span
        className="cursor-pointer transform -rotate-90"
        onClick={() => hide(!show)}
      >
        {show ? "SHOW" : "HIDE"}
      </span>
    </div>
  );
};

function ProfileCard({ id, image_url, label }: any) {
  return (
    <label className={"profile inline-block h-30 w-50 m-2"}>
      <input className={"hidden "} type={"radio"} name={"profile"} value={id} />
      <div
        className={
          "card cursor-pointer relative h-full w-full rounded-md bg-black rounded-md border-transparent overflow-hidden"
        }
      >
        <img
          alt={"card"}
          className={"absolute h-full w-full object-fill rounded-md"}
          src={image_url}
        />
        <h6 className={"absolute bottom-4 left-4 right-8 font-bold truncate"}>{label}</h6>
      </div>
    </label>
  );
}

function getProduct() {
  const { productName, product, productAdjective, productDescription } =
    faker.commerce;

  console.log(product(), productAdjective(), productDescription());
  // , product
  //     // color: ƒ ()
  //     // department: ƒ ()
  //     // price: ƒ (min, max, dec, symbol)
  //     // product: ƒ ()
  //     // productAdjective: ƒ ()
  //     // productDescription: ƒ ()
  //     // productMaterial: ƒ ()
  //     // productName: ƒ ()
  //     //     [[Prototype]]: Object
  return {
    label: productName(),
    // image_url: faker.image.fashion(),
    image_url: "https://source.unsplash.com/xJkTCbtuqAY",
  };
}

function Profiles({ profileItems, seletedProfile }) {
  const handleChange = React.useCallback(
    ({ target }: any) => {
      const profileID = target.value;
      seletedProfile(profileID);
    },
    [seletedProfile]
  );

  return (
    <form
      className={"profiles relative whitespace-nowrap overflow-auto p-4"}
      onChange={handleChange}
    >
      {profileItems.map((i) => {
        return (
          <Fragment key={i.id}>
            <ProfileCard {...i} />
          </Fragment>
        );
      })}
    </form>
  );
}

function Description() {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ducimus nemo
      saepe exercitationem dignissimos nulla sequi. Exercitationem, alias odio!
      Expedita sequi tempora excepturi hic. Labore recusandae accusamus aperiam
      dignissimos ratione!
    </p>
  );
}
const getProfileItems = () => {
  return [1, 2, 3, 4, 5].map((i) => {
    return { id: i, ...getProduct() };
  });
};
const ProductPage = () => {
  const [show, hide] = React.useState(true);
  const data = JSON.stringify({ ds: "ko" });
  const [profileItems] = React.useState(getProfileItems());
  // const uiClasses = classNames("bg-green-400 h-full w-1/3 transition-all", {
  //   "transform translate-x-full": !show,
  // });
  const handleSelectedProfile = (i) => {
    console.log(">>>>>", i);
  };
  return (
    <div className="ProductPage">
      <section className={"flex min-h-screen overflow-hidden  transition-all "}>
        <main className="flex flex-grow bg-green-300 transition-all ">
          <div className="flex-grow bg-red-400">{data}</div>
          <ToggleButton setHide={hide} />
        </main>
        {/*  translate-x-full md:translate-x-0  */}
        <aside
          className={classNames(
            "sidebar w-100 transition-all transition-transform duration-300 ease-in text-white bg-gray-900",
            show && "-mr-100"
          )}
        >
          <div className={"p-8"}>
            <Description />
            <Profiles
              profileItems={profileItems}
              seletedProfile={handleSelectedProfile}
            />
          </div>
        </aside>
      </section>
    </div>
  );
};
export default ProductPage;
