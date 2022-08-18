import data from "../../../assets/projectDetailData.json";
import Props from "./Type";
import bookmarkHero from "../../../assets/images/detail/mobile/image-bookmark-hero.jpg";
import fyloHero from "../../../assets/images/detail/mobile/image-fylo-hero.jpg";
import insureHero from "../../../assets/images/detail/mobile/image-insure-hero.jpg";
import manageHero from "../../../assets/images/detail/mobile/image-manage-hero.jpg";
import bookmarkPreview1 from "../../../assets/images/detail/mobile/image-bookmark-preview-1.jpg";
import bookmarkPreview2 from "../../../assets/images/detail/mobile/image-bookmark-preview-2.jpg";
import fyloPreview1 from "../../../assets/images/detail/mobile/image-fylo-preview-1.jpg";
import fyloPreview2 from "../../../assets/images/detail/mobile/image-fylo-preview-2.jpg";
import insurePreview1 from "../../../assets/images/detail/mobile/image-insure-preview-1.jpg";
import insurePreview2 from "../../../assets/images/detail/mobile/image-insure-preview-2.jpg";
import managePreview1 from "../../../assets/images/detail/mobile/image-manage-preview-1.jpg";
import managePreview2 from "../../../assets/images/detail/mobile/image-manage-preview-2.jpg";
import arrowLeft from "../../../assets/images/icons/arrow-left.svg";
import arrowRight from "../../../assets/images/icons/arrow-right.svg";

const ProjectDetails: React.FC<Props> = ({
  setProjectDetailsOpened,
  projects,
  projectIndex,
  setProjectIndex,
}) => {
  const heroImages = [manageHero, bookmarkHero, insureHero, fyloHero];
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
  const handleClickPrevious = () => {
    if (projectIndex > 0) setProjectIndex(projectIndex + 1);
    if (projectIndex === 0) setProjectIndex(data.length - 1);
  };
  const handleClickNext = () => {
    if (projectIndex < data.length - 1) setProjectIndex(projectIndex + 1);
    if (projectIndex === data.length - 1) setProjectIndex(0);
  };
  return (
    <>
      <main className="flex flex-col items-center w-10/12">
        <article className="w-full mb-12">
          <img
            src={heroImages[projectIndex]}
            alt="image-project"
            className="w-full"
          />
          <div className="w-full h-[28.25rem] border-t border-b border-opacity mt-8 flex flex-col justify-evenly">
            <h2 className="text-h2 text-dark-blue font-bold font-serif">
              {data[projectIndex]["project-name"]}
            </h2>
            <p className="text-p2 text text-dark-blue opacity-p">
              {data[projectIndex]["project-description"]}
            </p>
            <p className="text-techno text-cyan">
              Interaction Design / Front End Development <br />
              HTML / CSS / JS
            </p>
            <button className="border w-btn h-12 btn-text-black">
              VISIT WEBSITE
            </button>
          </div>
        </article>
        <article className="w-full mb-[2.5rem] h-[25rem] flex flex-col justify-between">
          <h2 className="text-h3-mobile text-dark-blue font-serif">
            Project Background
          </h2>
          <p className="text-p2 opacity-p">
            {data[projectIndex]["project-background"]}
          </p>
        </article>
        <section className="mb-[4.0625rem]">
          <h3 className="text-h3-mobile text-dark-blue font-serif mb-10">
            Static Previews
          </h3>
          <img
            src={preview1[projectIndex]}
            alt="first static preview of the projet"
            className="mb-8"
          />
          <img
            src={preview2[projectIndex]}
            alt="second static preview of the projet"
          />
        </section>
      </main>
      <div className="flex flex-row w-[20.375rem] h-[9.125rem] border-t border-b border-dark-blue mb-16">
        <button
          className="w-1/2 h-full flex flex-col justify-center items-start border-r border-dark-blue"
          onClick={() => handleClickPrevious()}
        >
          <img src={arrowLeft} alt="grey arrow to the left" />
          <div className="mt-4">
            <h3 className="text-h3-mobile-btn text-dark-blue font-serif text-left">
              {projectIndex === 0
                ? data[data.length - 1]["project-name"]
                : data[projectIndex - 1]["project-name"]}
            </h3>
            <p className="text-p opacity-p-mobile-btn text-left">
              Previous Project
            </p>
          </div>
        </button>
        <button
          className="w-1/2 h-full flex flex-col justify-center items-end"
          onClick={() => handleClickNext()}
        >
          <img src={arrowRight} alt="grey arrow to the right" />
          <div className="mt-4">
            <h3 className="text-h3-mobile-btn text-dark-blue font-serif text-right">
              {projectIndex === data.length - 1
                ? data[0]["project-name"]
                : data[projectIndex + 1]["project-name"]}
            </h3>
            <p className="text-p opacity-p-mobile-btn text-right">
              Next Project
            </p>
          </div>
        </button>
      </div>
    </>
  );
};

export default ProjectDetails;
