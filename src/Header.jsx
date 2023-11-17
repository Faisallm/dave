import React from "react";

// creating a seperate component in react
// header component
// can  I define a component inside a component?

const Header = ({ title }) => {
  return (
    <header>
      <h1> {title} </h1>
    </header>
  );
};

// default props values
Header.defaultProps = {
  title: "Default Title",
};

export default Header;
