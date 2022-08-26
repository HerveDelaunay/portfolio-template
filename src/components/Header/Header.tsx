import React from "react";
import hamburger from "../../assets/images/icons/hamburger.svg";
import logo from "../../assets/images/logo.svg";
import Props from "./Type";
import { Link } from "react-router-dom";

const Header: React.FC<Props> = ({ setMobileMenuOpened, mobileMenuOpened }) => {
  const handleClickMobileMenu = () => {
    mobileMenuOpened ? setMobileMenuOpened(false) : setMobileMenuOpened(true);
  };
  return (
    <section className="flex flex-row justify-between items-center mt-8 mb-10 w-full tablet:w-[689px] tablet:mt-16 tablet:mb-[2.9375rem]">
      <img src={logo} className="ml-8 tablet:ml-0" />
      <img
        src={hamburger}
        className="mr-8 tablet:hidden"
        onClick={handleClickMobileMenu}
      />
      <nav className="max-tablet:hidden w-[309px] flex justify-between text-link-tablet">
        <Link to="/">HOME</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/contact-me">CONTACT ME</Link>
      </nav>
    </section>
  );
};

export default Header;
