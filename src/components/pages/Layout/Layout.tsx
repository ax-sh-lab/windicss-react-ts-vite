import React from "react";
import { Link } from "react-router-dom";
import List from "../../common/List";

export type LayoutProps = {
  children: React.ReactNode;
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <List
          className={
            "nav flex justify-end space-x-4 p-8 bg-black text-white children:cursor-pointer children:group-hover:bg-blue-300"
          }
        >
          <Link key={"home"} to={"/"}>
            HOME
          </Link>
          <Link key={"about"} to={"/about"}>
            ABOUT
          </Link>
          <Link key={"contact"} to={"/contact"}>
            CONTACT
          </Link>
        </List>
      </ul>
    </nav>
  );
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
