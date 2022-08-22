import { Link } from "react-router-dom";
import Props from "./Type";

const MobileMenu: React.FC<Props> = ({ setMobileMenuOpened }) => {
  const handleClick = () => {
    setMobileMenuOpened(false);
  };
  return (
    <nav className="absolute top-[5.5rem] right-8 flex items-center w-56 h-[11.625rem] bg-dark-blue text-white text-btn">
      <div className="w-full h-[6.625rem] flex flex-col justify-between items-center">
        <Link to="/" onClick={() => handleClick()}>
          HOME
        </Link>
        <Link to="/portfolio" onClick={() => handleClick()}>
          PORTFOLIO
        </Link>
        <Link to="/contact-me" onClick={() => handleClick()}>
          CONTACT ME
        </Link>
      </div>
    </nav>
  );
};

export default MobileMenu;
