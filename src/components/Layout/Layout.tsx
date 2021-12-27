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
      <ul>
        <List
          className={
            "nav flex justify-end space-x-4 p-8 bg-black text-white children:cursor-pointer children:group-hover:bg-blue-300"
          }
        >
          <a>HOME</a>
          <a>ABOUT</a>
          <a>CONTACT</a>
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
