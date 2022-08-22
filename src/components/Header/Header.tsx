import React from "react";
import hamburger from "../../assets/images/icons/hamburger.svg";
import logo from "../../assets/images/logo.svg";
import Props from "./Type";

const Header: React.FC<Props> = ({ setMobileMenuOpened, mobileMenuOpened }) => {
  const handleClickMobileMenu = () => {
    mobileMenuOpened ? setMobileMenuOpened(false) : setMobileMenuOpened(true);
  };
  return (
    <section className="flex flex-row justify-between items-center mt-8 mb-10 w-full">
      <img src={logo} className="ml-8" />
      <img src={hamburger} className="mr-8" onClick={handleClickMobileMenu} />
    </section>
  );
};

export default Header;
