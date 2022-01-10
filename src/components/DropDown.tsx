import React from "react";
import List from "./common/List";

export default function DropDown() {
  const [dropdownOpen, setDropdownOpen] = React.useState(true);
  const [options, setOpations] = React.useState(["sheep", "buff"]);
  const [selected, setSelected] = React.useState(options[0]);
  const Selected = (
    <div
      className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white "
      onClick={() => setDropdownOpen((x) => !x)}
    >
      {selected}
    </div>
  );
  const handleSelect = (value: string) => {
    setSelected(value);
    setDropdownOpen(false);
  };
  return (
    <div className="w-100 relative my-32 rounded-md">
      {Selected}
      {/* <button className="relative z-10 block rounded-md bg-white p-2 focus:outline-none">
        <svg
          className="h-5 w-5 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button> */}
      {/* <div
        x-show="dropdownOpen"
        //@click="dropdownOpen = false"
        onClick={() => setDropdownOpen(false)}
        className="fixed inset-0 h-full w-full z-10"
      ></div> */}
      {dropdownOpen && (
        <List className="absolute right-0 left-0  mt-2 py-2 bg-white rounded-md shadow-xl z-20">
          {options.map((i) => {
            return (
              <div
                key={i}
                className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
                onClick={() => handleSelect(i)}
              >
                {i}
              </div>
            );
          })}
        </List>
      )}
    </div>
  );
}
