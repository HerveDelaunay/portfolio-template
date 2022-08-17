import logo from "../../assets/images/logo-white.svg";
import github from "../../assets/images/icons/github.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";
import twitter from "../../assets/images/icons/twitter.svg";

const Footer = () => {
  return (
    <div className="w-full h-[22.125rem] flex justify-center items-center bg-dark-blue">
      <section className="w-[6.5rem] h-[15.125rem] flex flex-col items-center">
        <img
          src={logo}
          alt="website-logo"
          className="h-8 w-[3.8125rem] mb-[2.4375rem]"
        />
        <nav className="text-center w-[6.125rem] h-[6.625rem] mb-[2.5625rem]">
          <ul className="flex flex-col justify-between h-full text-btn text-white">
            <li>HOME</li>
            <li>PORTFOLIO</li>
            <li>CONTACT ME</li>
          </ul>
        </nav>
        <nav className="w-[6.5rem] h-6 flex justify-between">
          <img src={github} alt="github-icon" />
          <img src={twitter} alt="twitter-icon" />
          <img src={linkedin} alt="linkedin-logo" />
        </nav>
      </section>
    </div>
  );
};

export default Footer;
