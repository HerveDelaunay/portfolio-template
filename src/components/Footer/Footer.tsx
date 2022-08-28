import { Link } from "react-router-dom";
import data from "../../assets/data.json";
import github from "../../assets/images/icons/github.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";
import logo from "../../assets/images/logo-white.svg";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[22.125rem] flex justify-center items-center bg-dark-blue tablet:h-[80px]">
      <section
        className="w-[6.5rem] h-[15.125rem] flex flex-col items-center tablet:flex-row tablet:w-full 
        tablet:justify-between tablet:h-full desktop:w-[1110px]"
      >
        <div
          className="flex flex-col items-center tablet:flex-row tablet:ml-[39px] tablet:justify-between tablet:w-[418px] 
          tablet:h-full desktop:w-[418px] desktop:justify-between desktop:ml-0"
        >
          <img
            src={logo}
            alt="website-logo"
            className="h-8 w-[3.8125rem] mb-[2.4375rem] tablet:mb-0"
          />
          <nav className="text-center w-[6.125rem] h-[6.625rem] mb-[2.5625rem] tablet:w-[309px] tablet:h-3.5 tablet:mb-0">
            <ul className="flex flex-col justify-between h-full text-btn text-white tablet:flex-row ">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="portfolio">PORTFOLIO</Link>
              </li>
              <li>
                <Link to="/contact-me">CONTACT ME</Link>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="w-[6.5rem] h-6 flex justify-between items-center tablet:mr-[40px] desktop:mr-0">
          <a href="https://github.com">
            <img src={github} alt="github-icon" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter-icon" />
          </a>
          <a href="https://linkedin.com">
            <img src={linkedin} alt="linkedin-logo" />
          </a>
        </nav>
      </section>
    </div>
  );
};

export default Footer;
