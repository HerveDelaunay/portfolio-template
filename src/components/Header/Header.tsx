import React from "react";
import hamburger from "../../assets/images/icons/hamburger.svg";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <section className="flex flex-row justify-between items-center mt-8 mb-10 w-full">
      <img src={logo} className="ml-8" />
      <img src={hamburger} className="mr-8" />
    </section>
  );
};

export default Header;
