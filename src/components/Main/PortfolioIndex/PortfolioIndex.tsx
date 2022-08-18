import data from "../../../assets/portfolio-index.json";
import bookmarkImage from "../../../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg";
import manageImage from "../../../assets/images/portfolio/mobile/image-portfolio-manage.jpg";
import fyloImage from "../../../assets/images/portfolio/mobile/image-portfolio-fylo.jpg";
import insureImage from "../../../assets/images/portfolio/mobile/image-portfolio-insure.jpg";
import Props from "./Type";

const PortfolioIndex: React.FC<Props> = ({
  setProjects,
  setProjectIndex,
  setProjectDetailsOpened,
  setProjectIndexOpened,
}) => {
  const images = [manageImage, bookmarkImage, insureImage, fyloImage];
  const handleClickProject = (index: number) => {
    setProjects([...images]);
    setProjectIndex(index);
    setProjectDetailsOpened(true);
    setProjectIndexOpened(false);
  };

  return (
    <main className="flex flex-col items-center w-10/12">
      {data.map((project, index) => (
        <article className="w-full mb-[4.5rem]" key={index}>
          <img src={images[index]} alt="image-profile" className="w-full" />
          <div className="w-full h-[23rem] border-t border-b border-opacity mt-8 flex flex-col justify-evenly">
            <h2 className="text-h2 text-dark-blue font-bold font-serif">
              {project["project-name"]}
            </h2>
            <p className="text-p2 text-dark-blue opacity-p">
              {project["project-description"]}
            </p>
            <button
              className="border w-btn h-12 btn-text-black"
              onClick={() => handleClickProject(index)}
            >
              VIEW PROJECT
            </button>
          </div>
        </article>
      ))}
    </main>
  );
};

export default PortfolioIndex;
