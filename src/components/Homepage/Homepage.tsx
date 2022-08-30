import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data.json";
import imageHomepageDesktop from "../../assets/images/homepage/desktop/image-homepage-hero.jpg";
import imageProfileDesktop from "../../assets/images/homepage/desktop/image-homepage-profile.jpg";
import imageHomepage from "../../assets/images/homepage/mobile/image-homepage-hero.jpg";
import imageProfile from "../../assets/images/homepage/mobile/image-homepage-profile.jpg";
import imageHomepageTablet from "../../assets/images/homepage/tablet/image-homepage-hero.jpg";
import imageProfileTablet from "../../assets/images/homepage/tablet/image-homepage-profile.jpg";
import CustomSvg from "../CustomSvg/CustomSvg";

const Homepage: React.FC = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [focus, setFocus] = useState(false);
  const aboutMe = useRef<HTMLElement>(null);
  const handleClick = () => {
    // if (focus) return;
    window.scrollTo({
      top: aboutMe.current?.offsetTop,
      behavior: "smooth",
    });
  };
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseFocus = () => {
    setFocus(true);
  };

  // useEffect(() => {
  //   setFocus(false);
  // }, [focus]);
  return (
    <>
      <main className="flex flex-col items-center w-10/12 tablet:w-[689px] tablet:mt-[2.9375rem] desktop:w-[1110px] desktop:mt-[54px]">
        <section className="w-full flex flex-col tablet:relative tablet:h-[600px] tablet:mb-[96px] desktop:mb-[150px]">
          <img
            src={imageHomepage}
            alt="image-homepage-hero"
            className="mb-6 tablet:hidden"
          />
          <img
            src={imageHomepageTablet}
            alt="image-homepage-hero-tablet"
            className="mb-6 max-tablet:hidden desktop:hidden"
          />
          <img
            src={imageHomepageDesktop}
            alt="image-homepage-hero-tablet"
            className="mb-6 max-desktop:hidden desktop:w-[1111px] desktop:h-[600px] desktop:mb-0"
          />
          <div
            className="tablet:absolute tablet:bg-white tablet:w-[514px] tablet:h-[278px] tablet:top-[323px] tablet:left-[-1px]
              desktop:w-[445px] desktop:h-[357px] desktop:top-[244px]"
          >
            <h2 className="text-h2 text-dark-blue mb-8 font-serif font-bold tablet:mb-12 tablet:mt-14 desktop:mt-14 desktop:w-[390px] desktop:text-h2-desktop desktop:mb-[53px]">
              {data.name}
            </h2>
            <button
              type="button"
              className={`w-btn h-12 btn1 desktop:hover:btn3 focus:btn4 relative mb-24 desktop:mb-0 ${
                focus && "pointer-events-none"
              }`}
              onClick={() => {
                handleClick();
                handleMouseFocus();
              }}
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={() => handleMouseLeave()}
              onBlur={() => setFocus(false)}
            >
              <div className="w-12 h-full btn2"></div>
              <div className="h-full w-38 absolute top-0 left-12 flex items-center justify-center">
                <p className="btn-text">ABOUT ME</p>
              </div>
              <CustomSvg
                fill={`${focus ? "#FFFFFF" : hover ? "#FFFFFF" : "#5FB4A2"}`}
              />
            </button>
          </div>
        </section>
        <article
          className="w-full border-b border-opacity tablet:flex tablet:justify-between tablet:border-0 tablet:h-[600px]"
          ref={aboutMe}
        >
          <img
            src={imageProfile}
            alt="image-profile"
            className="w-full tablet:hidden"
          />
          <img
            src={imageProfileTablet}
            alt="image-profile"
            className="max-tablet:hidden w-[281px] desktop:hidden"
          />
          <img
            src={imageProfileDesktop}
            alt="image-profile"
            className="max-desktop:hidden w-[540px]"
          />
          <div
            className="w-full h-article border-t border-opacity mt-8 tablet:w-[339px] tablet:h-full tablet:mt-0 tablet:border-y
            desktop:w-[350px]"
          >
            <h2 className="text-h2 text-dark-blue mt-8 font-bold font-serif tablet:mt-[50px]">
              About Me
            </h2>
            <p className="mt-7 opacity-p text-p text-dark-blue">
              {data.description}
            </p>
            <Link to="portfolio">
              <button className="border border-dark-blue w-btn h-12 mt-6 btn-text-black desktop:hover:bg-dark-blue desktop:hover:text-white">
                GO TO PORTFOLIO
              </button>
            </Link>
          </div>
        </article>
      </main>
      <div
        className="w-full flex justify-center tablet:w-[689px] tablet:h-[84px] tablet:mb-[96px] tablet:mt-[80px] 
          desktop:mb-[150px] desktop:mt-[115px] desktop:w-[1110px]"
      >
        <section
          className="w-10/12 h-[13.375rem] flex flex-col justify-between items-center mb-20 mt-[115px] tablet:mt-0 
            tablet:flex-row tablet:items-center tablet:w-full tablet:h-[84px] tablet:mb-0 desktop:mb-0 desktop:w-full"
        >
          <h2 className="text-h2 font-bold font-serif text-center h-[7.875rem] text-dark-blue tablet:w-[350px] tablet:h-[84px]">
            {data["contact me"]}
          </h2>
          <span className="max-tablet:hidden w-[113px] h-[1px] bg-dark-blue/15 desktop:w-[534px]"></span>
          <Link to="/contact-me">
            <button className="w-[10.125rem] h-12 border border-dark-blue text-btn text-dark-blue desktop:hover:bg-dark-blue desktop:hover:text-white">
              CONTACT ME
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Homepage;
