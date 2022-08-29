import { Link } from "react-router-dom";
import contactData from "../../assets/data.json";
import bookmarkImageDesktop from "../../assets/images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";
import fyloImageDesktop from "../../assets/images/portfolio/desktop/image-portfolio-fylo@2x.jpg";
import insureImageDesktop from "../../assets/images/portfolio/desktop/image-portfolio-insure@2x.jpg";
import manageImageDesktop from "../../assets/images/portfolio/desktop/image-portfolio-manage@2x.jpg";
import bookmarkImage from "../../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg";
import fyloImage from "../../assets/images/portfolio/mobile/image-portfolio-fylo.jpg";
import insureImage from "../../assets/images/portfolio/mobile/image-portfolio-insure.jpg";
import manageImage from "../../assets/images/portfolio/mobile/image-portfolio-manage.jpg";
import bookmarkImageTablet from "../../assets/images/portfolio/tablet/image-portfolio-bookmark.jpg";
import fyloImageTablet from "../../assets/images/portfolio/tablet/image-portfolio-fylo.jpg";
import insureImageTablet from "../../assets/images/portfolio/tablet/image-portfolio-insure.jpg";
import manageImageTablet from "../../assets/images/portfolio/tablet/image-portfolio-manage.jpg";
import data from "../../assets/portfolio-index.json";
import Props from "./Type";

const PortfolioIndex: React.FC<Props> = ({ setProjects, setProjectIndex }) => {
  const images = [manageImage, bookmarkImage, insureImage, fyloImage];
  const imagesTablet = [
    manageImageTablet,
    bookmarkImageTablet,
    insureImageTablet,
    fyloImageTablet,
  ];
  const imagesDesktop = [
    manageImageDesktop,
    bookmarkImageDesktop,
    insureImageDesktop,
    fyloImageDesktop,
  ];
  const handleClickProject = (index: number) => {
    setProjects([...images]);
    setProjectIndex(index);
  };

  return (
    <>
      <main
        className="flex flex-col items-center w-10/12 tablet:w-[689px] tablet:h-[1912px] tablet:mt-[94px] tablet:justify-between 
        desktop:w-[1111px] desktop:h-[2240px] desktop:justify-between"
      >
        {data.map((project, index) => (
          <article
            className={`w-full mb-[4.5rem] tablet:h-[418px] tablet:mb-0 tablet:flex tablet:flex-row tablet:items-center 
              tablet:justify-between desktop:w-[1015px] desktop:h-[500px]
              ${index % 2 === 0 ? "desktop:self-start" : "desktop:self-end"}`}
            key={index}
          >
            <img
              src={images[index]}
              alt="image-profile"
              className="w-full tablet:hidden"
            />
            <img
              src={imagesTablet[index]}
              alt="image-profile-tablet"
              className={`w-[339px] max-tablet:hidden desktop:hidden h-[314px] ${
                index % 2 === 0 ? "order-first" : "order-last"
              }`}
            />
            <img
              src={imagesDesktop[index]}
              alt="image-profile-tablet"
              className={`w-[540px] max-desktop:hidden h-[500px] ${
                index % 2 === 0 ? "order-first" : "order-last"
              }`}
            />
            <div
              className="w-full h-[23rem] border-y border-opacity mt-8 flex flex-col max-tablet:justify-evenly tablet:w-[281px] tablet:h-[418px] tablet:mt-0
              desktop:h-full desktop:w-[350px] desktop:justify-center"
            >
              <h2 className="text-h2 text-dark-blue font-bold font-serif tablet:mt-8 desktop:mt-0">
                {project["project-name"]}
              </h2>
              <p className="text-p2 text-dark-blue opacity-p tablet:mt-[29px] desktop:mt-7">
                {project["project-description"]}
              </p>
              <Link to={project["project-name"]}>
                <button
                  className="border w-btn h-12 btn-text-black tablet:mt-[35px] desktop:mt-6"
                  onClick={() => handleClickProject(index)}
                >
                  VIEW PROJECT
                </button>
              </Link>
            </div>
          </article>
        ))}
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
            {contactData["contact me"]}
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

export default PortfolioIndex;
