import React from "react";

export type LayoutProps = {
  children: React.ReactNode;
};

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
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
