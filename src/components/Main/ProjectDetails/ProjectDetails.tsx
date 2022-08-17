import data from "../../../assets/projectDetailData.json";
import Props from "./Type";
import bookmarkHero from "../../../assets/images/detail/mobile/image-bookmark-hero.jpg";
import fyloHero from "../../../assets/images/detail/mobile/image-fylo-hero.jpg";
import insureHero from "../../../assets/images/detail/mobile/image-insure-hero.jpg";
import manageHero from "../../../assets/images/detail/mobile/image-manage-hero.jpg";

const ProjectDetails: React.FC<Props> = ({
  setProjectDetailsOpened,
  projects,
  projectIndex,
}) => {
  const heroImages = [bookmarkHero, manageHero, fyloHero, insureHero];
  return (
    <main className="flex flex-col items-center w-10/12">
      <article className="w-full mb-[4.5rem]">
        <img
          src={heroImages[projectIndex]}
          alt="image-project"
          className="w-full"
        />
        <div className="w-full h-[23rem] border-t border-b border-opacity mt-8 flex flex-col justify-evenly">
          <h2 className="text-h2 font-bold font-serif">
            {data[projectIndex]["project-name"]}
          </h2>
          <p className="text-p opacity-p">
            {data[projectIndex]["project-description"]}
          </p>
          <button className="border w-btn h-12 btn-text-black">
            VISIT WEBSITE
          </button>
        </div>
      </article>
      <article className="w-full mb-[4.5rem]">
        <div className="w-full h-[23rem] mt-8 flex flex-col justify-evenly">
          <h2 className="text-h2 font-bold font-serif">Project Background</h2>
          <p className="text-p opacity-p">
            {data[projectIndex]["project-background"]}
          </p>
        </div>
      </article>
    </main>
  );
};

export default ProjectDetails;
