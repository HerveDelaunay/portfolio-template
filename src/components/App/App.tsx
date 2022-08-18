import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MobileMenu from "../MobileMenu/MobileMenu";

const App: React.FC = () => {
  const [projectIndexOpened, setProjectIndexOpened] = useState<boolean>(false);
  const [projects, setProjects] = useState<string[]>([]);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [mobileMenuOpened, setMobileMenuOpened] = useState(true);
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <MobileMenu />
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
