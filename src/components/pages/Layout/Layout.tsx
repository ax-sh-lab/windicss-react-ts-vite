import React from "react";
import { Link } from "react-router-dom";

export type LayoutProps = {
  children: React.ReactNode;
};

interface ListProps extends React.ComponentProps<any> {}

export const List = ({ children, ...props }: ListProps) => {
  return (
    <ul {...props}>
      {children.map((child: React.ReactNode) => (
        <li>{child}</li>
      ))}
    </ul>
  );
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
          <Link to={"/"}>HOME</Link>
          <Link to={"/about"}>ABOUT</Link>
          <Link to={"/contact"}>CONTACT</Link>
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
