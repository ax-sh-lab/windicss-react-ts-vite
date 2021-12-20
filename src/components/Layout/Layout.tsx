import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

interface ListProps {
  readonly children: NonNullable<React.ReactNode>;
}

const List = ({ children, ...props }: ListProps) => {
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
      <List className={"nav"}>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>CONTACT</a>
      </List>
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
