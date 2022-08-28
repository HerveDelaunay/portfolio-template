import imageHomepage from "../../assets/images/homepage/mobile/image-homepage-hero.jpg";
import imageHomepageTablet from "../../assets/images/homepage/tablet/image-homepage-hero.jpg";
import imageHomepageDesktop from "../../assets/images/homepage/desktop/image-homepage-hero.jpg";
import data from "../../assets/data.json";
import downArrows from "../../assets/images/icons/down-arrows.svg";
import imageProfile from "../../assets/images/homepage/mobile/image-homepage-profile.jpg";
import imageProfileTablet from "../../assets/images/homepage/tablet/image-homepage-profile.jpg";
import imageProfileDesktop from "../../assets/images/homepage/desktop/image-homepage-profile.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Homepage: React.FC = () => {
  const aboutMe = useRef<HTMLElement>(null);
  const handleClick = () => {
    window.scrollTo({
      top: aboutMe.current?.offsetTop,
      behavior: "smooth",
    });
  };
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
              className="w-btn h-12 btn1 relative mb-24 desktop:mb-0"
              onClick={() => handleClick()}
            >
              <div className="w-12 h-full btn2"></div>
              <div className="h-full w-38 absolute top-0 left-12 flex items-center justify-center">
                <p className="btn-text">ABOUT ME</p>
              </div>
              <img
                src={downArrows}
                alt="down-arrows"
                className="w-4 h-3 absolute left-4 top-btn-top-center"
              ></img>
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
              <button className="border w-btn h-12 mt-6 btn-text-black">
                GO TO PORTFOLIO
              </button>
            </Link>
          </div>
        </article>
      </main>
      <div
        className="w-full h-[25.5625rem] flex justify-center tablet:w-[689px] tablet:h-[84px] tablet:my-[96px] 
        desktop:my-[150px] desktop:w-[1110px]"
      >
        <section
          className="w-10/12 h-[13.375rem] flex flex-col justify-between items-center mt-[7.1875rem] tablet:mt-0 
          tablet:flex-row tablet:items-center tablet:w-full tablet:h-[84px] desktop:w-full"
        >
          <h2 className="text-h2 font-bold font-serif text-center h-[7.875rem] text-dark-blue tablet:w-[350px] tablet:h-[84px]">
            {data["contact me"]}
          </h2>
          <span className="max-tablet:hidden w-[113px] h-[1px] bg-dark-blue/15 desktop:w-[534px]"></span>
          <Link to="/contact-me">
            <button className="w-[10.125rem] h-12 border text-btn text-dark-blue">
              CONTACT ME
            </button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Homepage;
