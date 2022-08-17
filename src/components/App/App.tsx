import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App: React.FC = () => {
  const [projectIndexOpened, setProjectIndexOpened] = useState<boolean>(false);
  const [projects, setProjects] = useState<string[]>([]);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Main
        projectIndexOpened={projectIndexOpened}
        setProjectIndexOpened={setProjectIndexOpened}
        projects={projects}
        setProjects={setProjects}
        projectIndex={projectIndex}
        setProjectIndex={setProjectIndex}
      />
      <Footer />
    </div>
  );
};

export default App;
