import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import hamburger from "../../assets/images/icons/hamburger.svg";
import logo from "../../assets/images/logo.svg";
import Props from "./Type";

const Header: React.FC<Props> = ({
  setMobileMenuOpened,
  mobileMenuOpened,
  // homeLinkActive,
  // setHomeLinkActive,
  // contactMeLinkActive,
  // setContactMeLinkActive,
  // portfolioLinkActive,
  // setPortfolioLinkActive,
  // slug,
}) => {
  const [homeLinkActive, setHomeLinkActive] = useState(false);
  const [portfolioLinkActive, setPortfolioLinkActive] = useState(false);
  const [contactMeLinkActive, setContactMeLinkActive] = useState(false);
  const location = useLocation();
  const handleClickMobileMenu = () => {
    mobileMenuOpened ? setMobileMenuOpened(false) : setMobileMenuOpened(true);
  };
  const handleClickTabletMenu = () => {
    if (location.pathname === "/") {
      setHomeLinkActive(true);
      setContactMeLinkActive(false);
      setPortfolioLinkActive(false);
      return;
    }
    if (location.pathname === "/portfolio") {
      setHomeLinkActive(false);
      setPortfolioLinkActive(true);
      setContactMeLinkActive(false);
      return;
    }
    if (location.pathname === "/contact-me") {
      setHomeLinkActive(false);
      setPortfolioLinkActive(false);
      setContactMeLinkActive(true);
      return;
    }
  };
  //have to get rid of the active animation on the header's links (blue square)
  useEffect(() => {
    handleClickTabletMenu();
  }, [location]);

  return (
    <section className="flex flex-row justify-between items-center mt-8 mb-10 w-full tablet:w-[689px] tablet:mt-16 tablet:mb-0">
      <img src={logo} className="ml-8 tablet:ml-0" />
      <img
        src={hamburger}
        className="mr-8 tablet:hidden"
        onClick={handleClickMobileMenu}
      />
      <nav className="max-tablet:hidden w-[309px] flex justify-between text-link-tablet">
        <Link
          to="/"
          className={`${
            homeLinkActive ? " tablet:text-cyan" : "text-dark-blue"
          }`}
        >
          HOME
        </Link>
        <Link
          to="/portfolio"
          className={`${
            portfolioLinkActive ? " tablet:text-cyan" : "text-dark-blue"
          }`}
        >
          PORTFOLIO
        </Link>
        <Link
          to="/contact-me"
          className={`${
            contactMeLinkActive ? " tablet:text-cyan" : "text-dark-blue"
          }`}
        >
          CONTACT ME
        </Link>
      </nav>
    </section>
  );
};

export default Header;
