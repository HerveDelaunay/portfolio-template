import imageHomepage from "../../assets/images/homepage/mobile/image-homepage-hero.jpg";
import data from "../../assets/data.json";
import downArrows from "../../assets/images/icons/down-arrows.svg";
import imageProfile from "../../assets/images/homepage/mobile/image-homepage-profile.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";

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
      <main className="flex flex-col items-center w-10/12">
        <section className="w-full flex flex-col ">
          <img src={imageHomepage} alt="image-homepage-hero" className="mb-6" />
          <h2 className="text-h2 text-dark-blue mb-8 font-serif font-bold">
            {data.name}
          </h2>
          <button
            type="button"
            className="w-btn h-12 btn1 relative mb-24"
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
        </section>
        <article className="w-full border-b border-opacity" ref={aboutMe}>
          <img src={imageProfile} alt="image-profile" className="w-full" />
          <div className="w-full h-article border-t border-opacity mt-8">
            <h2 className="text-h2 text-dark-blue mt-8 font-bold font-serif">
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
      <div className="w-full h-[25.5625rem] flex justify-center">
        <section className="w-10/12 h-[13.375rem] flex flex-col justify-between items-center mt-[7.1875rem]">
          <h2 className="text-h2 font-bold font-serif text-center h-[7.875rem] text-dark-blue">
            {data["contact me"]}
          </h2>
          <Link to="contact-me">
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
