import data from "../../assets/portfolio-index.json";
import contactData from "../../assets/data.json";
import bookmarkImage from "../../assets/images/portfolio/mobile/image-portfolio-bookmark.jpg";
import manageImage from "../../assets/images/portfolio/mobile/image-portfolio-manage.jpg";
import fyloImage from "../../assets/images/portfolio/mobile/image-portfolio-fylo.jpg";
import insureImage from "../../assets/images/portfolio/mobile/image-portfolio-insure.jpg";
import Props from "./Type";
import { Link } from "react-router-dom";

const PortfolioIndex: React.FC<Props> = ({ setProjects, setProjectIndex }) => {
  const images = [manageImage, bookmarkImage, insureImage, fyloImage];
  const handleClickProject = (index: number) => {
    setProjects([...images]);
    setProjectIndex(index);
  };

  return (
    <>
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
              <Link to={project["project-name"]}>
                <button
                  className="border w-btn h-12 btn-text-black"
                  onClick={() => handleClickProject(index)}
                >
                  VIEW PROJECT
                </button>
              </Link>
            </div>
          </article>
        ))}
      </main>
      <section className=" mb-20 w-10/12 h-[13.375rem] flex flex-col justify-between items-center">
        <h2 className="text-h2 font-bold font-serif text-center h-[7.875rem] text-dark-blue">
          {contactData["contact me"]}
        </h2>
        <Link to="contact-me">
          <button className="w-[10.125rem] h-12 border text-btn text-dark-blue">
            CONTACT ME
          </button>
        </Link>
      </section>
    </>
  );
};

export default PortfolioIndex;
