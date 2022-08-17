import { useState } from "react";
import Homepage from "./Homepage/Homepage";
import PortfolioIndex from "./PortfolioIndex/PortfolioIndex";
import ProjectDetails from "./ProjectDetails/ProjectDetails";
import Props from "./Type";
// interface Props {
//   projectIndexOpened: boolean;
//   setProjectIndexOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }
const Main: React.FC<Props> = ({
  projectIndexOpened,
  setProjectIndexOpened,
  projects,
  setProjects,
  projectIndex,
  setProjectIndex,
}) => {
  const [projectDetailsOpened, setProjectDetailsOpened] =
    useState<boolean>(false);
  return (
    <>
      {projectIndexOpened ? (
        <PortfolioIndex
          setProjects={setProjects}
          setProjectIndex={setProjectIndex}
          setProjectDetailsOpened={setProjectDetailsOpened}
          setProjectIndexOpened={setProjectIndexOpened}
        />
      ) : projectDetailsOpened ? (
        <ProjectDetails
          setProjectDetailsOpened={setProjectDetailsOpened}
          projects={projects}
          projectIndex={projectIndex}
        />
      ) : (
        <Homepage setProjectIndexOpened={setProjectIndexOpened} />
      )}
    </>
  );
};

export default Main;
