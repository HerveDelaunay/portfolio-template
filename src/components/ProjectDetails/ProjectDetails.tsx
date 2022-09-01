import data from "../../assets/projectDetailData.json";
import contactData from "../../assets/data.json";
import projectIndexData from "../../assets/portfolio-index.json";
import Props from "./Type";
import bookmarkHero from "../../assets/images/detail/mobile/image-bookmark-hero.jpg";
import fyloHero from "../../assets/images/detail/mobile/image-fylo-hero.jpg";
import insureHero from "../../assets/images/detail/mobile/image-insure-hero.jpg";
import manageHero from "../../assets/images/detail/mobile/image-manage-hero.jpg";
import bookmarkPreview1 from "../../assets/images/detail/mobile/image-bookmark-preview-1.jpg";
import bookmarkPreview2 from "../../assets/images/detail/mobile/image-bookmark-preview-2.jpg";
import fyloPreview1 from "../../assets/images/detail/mobile/image-fylo-preview-1.jpg";
import fyloPreview2 from "../../assets/images/detail/mobile/image-fylo-preview-2.jpg";
import insurePreview1 from "../../assets/images/detail/mobile/image-insure-preview-1.jpg";
import insurePreview2 from "../../assets/images/detail/mobile/image-insure-preview-2.jpg";
import managePreview1 from "../../assets/images/detail/mobile/image-manage-preview-1.jpg";
import managePreview2 from "../../assets/images/detail/mobile/image-manage-preview-2.jpg";
import bookmarkHeroTablet from "../../assets/images/detail/tablet/image-bookmark-hero@2x.jpg";
import fyloHeroTablet from "../../assets/images/detail/tablet/image-fylo-hero@2x.jpg";
import insureHeroTablet from "../../assets/images/detail/tablet/image-insure-hero@2x.jpg";
import manageHeroTablet from "../../assets/images/detail/tablet/image-manage-hero@2x.jpg";
import bookmarkPreview1Tablet from "../../assets/images/detail/tablet/image-bookmark-preview-1@2x.jpg";
import bookmarkPreview2Tablet from "../../assets/images/detail/tablet/image-bookmark-preview-2@2x.jpg";
import fyloPreview1Tablet from "../../assets/images/detail/tablet/image-fylo-preview-1@2x.jpg";
import fyloPreview2Tablet from "../../assets/images/detail/tablet/image-fylo-preview-2@2x.jpg";
import insurePreview1Tablet from "../../assets/images/detail/tablet/image-insure-preview-1@2x.jpg";
import insurePreview2Tablet from "../../assets/images/detail/tablet/image-insure-preview-2@2x.jpg";
import managePreview1Tablet from "../../assets/images/detail/tablet/image-manage-preview-1@2x.jpg";
import managePreview2Tablet from "../../assets/images/detail/tablet/image-manage-preview-2@2x.jpg";
import bookmarkHeroDesktop from "../../assets/images/detail/desktop/image-bookmark-hero@2x.jpg";
import fyloHeroDesktop from "../../assets/images/detail/desktop/image-fylo-hero@2x.jpg";
import insureHeroDesktop from "../../assets/images/detail/desktop/image-insure-hero@2x.jpg";
import manageHeroDesktop from "../../assets/images/detail/desktop/image-manage-hero@2x.jpg";
import bookmarkPreview1Desktop from "../../assets/images/detail/desktop/image-bookmark-preview-1@2x.jpg";
import bookmarkPreview2Desktop from "../../assets/images/detail/desktop/image-bookmark-preview-2@2x.jpg";
import fyloPreview1Desktop from "../../assets/images/detail/desktop/image-fylo-preview-1@2x.jpg";
import fyloPreview2Desktop from "../../assets/images/detail/desktop/image-fylo-preview-2@2x.jpg";
import insurePreview1Desktop from "../../assets/images/detail/desktop/image-insure-preview-1@2x.jpg";
import insurePreview2Desktop from "../../assets/images/detail/desktop/image-insure-preview-2@2x.jpg";
import managePreview1Desktop from "../../assets/images/detail/desktop/image-manage-preview-1@2x.jpg";
import managePreview2Desktop from "../../assets/images/detail/desktop/image-manage-preview-2@2x.jpg";
import arrowLeft from "../../assets/images/icons/arrow-left.svg";
import arrowRight from "../../assets/images/icons/arrow-right.svg";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails: React.FC<Props> = ({
  projects,
  projectIndex,
  setProjectIndex,
}) => {
  const heroImages = [manageHero, bookmarkHero, insureHero, fyloHero];
  const heroImagesTablet = [
    manageHeroTablet,
    bookmarkHeroTablet,
    insureHeroTablet,
    fyloHeroTablet,
  ];
  const heroImagesDesktop = [
    manageHeroDesktop,
    bookmarkHeroDesktop,
    insureHeroDesktop,
    fyloHeroDesktop,
  ];
  const preview1 = [
    managePreview1,
    bookmarkPreview1,
    insurePreview1,
    fyloPreview1,
  ];
  const preview2 = [
    managePreview2,
    bookmarkPreview2,
    insurePreview2,
    fyloPreview2,
  ];
  const preview1Tablet = [
    managePreview1Tablet,
    bookmarkPreview1Tablet,
    insurePreview1Tablet,
    fyloPreview1Tablet,
  ];
  const preview2Tablet = [
    managePreview2Tablet,
    bookmarkPreview2Tablet,
    insurePreview2Tablet,
    fyloPreview2Tablet,
  ];
  const preview1Desktop = [
    managePreview1Desktop,
    bookmarkPreview1Desktop,
    insurePreview1Desktop,
    fyloPreview1Desktop,
  ];
  const preview2Desktop = [
    managePreview2Desktop,
    bookmarkPreview2Desktop,
    insurePreview2Desktop,
    fyloPreview2Desktop,
  ];
  const { slug } = useParams();
  useEffect(() => {
    const slugToIndex = projectIndexData.findIndex(
      (project) => project["project-name"] === slug
    );
    setProjectIndex(slugToIndex);
  });
  return (
    <>
      <main className="flex flex-col items-center w-10/12 tablet:w-[689px] tablet:mt-[94px] desktop:w-[1110px]">
        <div className="w-full mb-10 tablet:mb-10 desktop:mb-[115px]">
          <img
            src={heroImages[projectIndex]}
            alt="image-project"
            className="w-full tablet:hidden desktop:hidden"
          />
          <img
            src={heroImagesTablet[projectIndex]}
            alt="image-project"
            className="w-full max-tablet:hidden tablet:h-[310px] desktop:hidden"
          />
          <img
            src={heroImagesDesktop[projectIndex]}
            alt="image-project"
            className="w-full max-desktop:hidden h-[500px]"
          />
        </div>
        <div className="flex flex-col items-center desktop:flex-row desktop:items-start desktop:justify-between desktop:w-full">
          <article className="w-full desktop:w-[350px]">
            <div
              className="w-full h-[28.25rem] border-t border-b border-opacity tablet:flex tablet:flex-row tablet:items-center 
                tablet:justify-between tablet:h-[248px] desktop:h-[498px] desktop:w-full"
            >
              <div
                className="w-full h-full flex flex-col justify-evenly tablet:w-[338px] tablet:h-[182px] tablet:flex-col tablet:justify-between
              desktop:w-full desktop:h-[400px]"
              >
                <h2 className="text-h2 text-dark-blue font-bold font-serif">
                  {data[projectIndex]["project-name"]}
                </h2>
                <p className="text-p2 text text-dark-blue opacity-p tablet:hidden desktop:flex">
                  {data[projectIndex]["project-description"]}
                </p>
                <p className="text-techno text-cyan">
                  Interaction Design / Front End Development <br />
                  HTML / CSS / JS
                </p>
                <button className="border border-dark-blue w-btn h-12 btn-text-black desktop:hover:bg-dark-blue desktop:hover:text-white">
                  VISIT WEBSITE
                </button>
              </div>
              <p className="text-p2 text text-dark-blue opacity-p max-tablet:hidden w-[339px] tablet:h-[182px] desktop:hidden">
                {data[projectIndex]["project-description"]}
              </p>
            </div>
          </article>
          <div className="desktop:flex desktop:flex-col desktop:w-[635px] desktop:justify-between">
            <article className="w-full mb-[2.5rem] h-[25rem] flex flex-col justify-between tablet:h-[220px] desktop:h-[250px] mt-12 tablet:my-10">
              <h2 className="text-h3-mobile text-dark-blue font-serif">
                Project Background
              </h2>
              <p className="text-p2 opacity-p">
                {data[projectIndex]["project-background"]}
              </p>
            </article>
            <section className="mb-[4.0625rem] tablet:w-full tablet:mb-[80px] desktop:h-[902px] desktop:mb-[64px]">
              <h3 className="text-h3-mobile text-dark-blue font-serif mb-10 desktop:mb-7">
                Static Previews
              </h3>
              <img
                src={preview1Desktop[projectIndex]}
                alt="first static preview of the projet"
                className="mb-8 max-desktop:hidden"
              />
              <img
                src={preview2Desktop[projectIndex]}
                alt="second static preview of the projet"
                className="max-desktop:hidden"
              />
              <img
                src={preview1Tablet[projectIndex]}
                alt="first static preview of the projet"
                className="mb-8 max-tablet:hidden desktop:hidden"
              />
              <img
                src={preview2Tablet[projectIndex]}
                alt="second static preview of the projet"
                className="max-tablet:hidden desktop:hidden"
              />
              <img
                src={preview1[projectIndex]}
                alt="first static preview of the projet"
                className="mb-8 tablet:hidden"
              />
              <img
                src={preview2[projectIndex]}
                alt="second static preview of the projet"
                className="tablet:hidden"
              />
            </section>
          </div>
        </div>
      </main>
      <div
        className="flex flex-row w-[20.375rem] h-[9.125rem] border-t border-b border-dark-blue border-opacity-15 mb-16
       tablet:w-[691px] tablet:h-[132px] tablet:mb-0 desktop:w-[1110px] desktop:h-[132px]"
      >
        <Link
          to={
            projectIndex === 0
              ? `/portfolio/${data[data.length - 1]["project-name"]}`
              : `/portfolio/${data[projectIndex - 1]["project-name"]}`
          }
          className="w-1/2 h-full flex flex-col justify-center items-start border-r border-dark-blue border-opacity-15 
          tablet:flex-row tablet:items-center tablet:justify-start"
        >
          <img src={arrowLeft} alt="grey arrow to the left" />
          <div className="mt-4 tablet:mt-0 tablet:ml-8">
            <h3 className="text-h3-mobile-btn text-dark-blue font-serif text-left">
              {projectIndex === 0
                ? data[data.length - 1]["project-name"]
                : data[projectIndex - 1]["project-name"]}
            </h3>
            <p className="text-p opacity-p-mobile-btn text-left">
              Previous Project
            </p>
          </div>
        </Link>
        <Link
          to={
            projectIndex === data.length - 1
              ? `/portfolio/${data[0]["project-name"]}`
              : `/portfolio/${data[projectIndex + 1]["project-name"]}`
          }
          className="w-1/2 h-full flex flex-col justify-center items-end tablet:flex-row tablet:items-center tablet:justify-end"
        >
          <img src={arrowRight} alt="grey arrow to the right" />
          <div className="mt-4  tablet:mt-0 tablet:mr-8 tablet:order-first">
            <h3 className="text-h3-mobile-btn text-dark-blue font-serif text-right">
              {projectIndex === data.length - 1
                ? data[0]["project-name"]
                : data[projectIndex + 1]["project-name"]}
            </h3>
            <p className="text-p opacity-p-mobile-btn text-right">
              Next Project
            </p>
          </div>
        </Link>
      </div>
      <div
        className="w-full flex justify-center tablet:w-[689px] tablet:h-[84px] tablet:mb-[96px] tablet:mt-[80px] 
          desktop:mb-[150px] desktop:mt-[115px] desktop:w-[1110px]"
      >
        <section
          className="w-10/12 h-[13.375rem] flex flex-col justify-between items-center mb-20 tablet:mt-0 
            tablet:flex-row tablet:items-center tablet:w-full tablet:h-[84px] tablet:mb-0 desktop:mb-0 desktop:w-full"
        >
          <h2 className="text-h2 font-bold font-serif text-center h-[7.875rem] text-dark-blue tablet:w-[350px] tablet:h-[84px]">
            {contactData["contact me"]}
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

export default ProjectDetails;
