import React, { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Homepage from "../Homepage/Homepage";
import MobileMenu from "../MobileMenu/MobileMenu";
import PortfolioIndex from "../PortfolioIndex/PortfolioIndex";
import ProjectDetails from "../ProjectDetails/ProjectDetails";

const App: React.FC = () => {
  const [projects, setProjects] = useState<string[]>([]);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [mobileMenuOpened, setMobileMenuOpened] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center w-full">
      <Header
        setMobileMenuOpened={setMobileMenuOpened}
        mobileMenuOpened={mobileMenuOpened}
      />
      {mobileMenuOpened && (
        <MobileMenu setMobileMenuOpened={setMobileMenuOpened} />
      )}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="portfolio">
          <Route
            index
            element={
              <PortfolioIndex
                setProjects={setProjects}
                setProjectIndex={setProjectIndex}
              />
            }
          />
          <Route
            path=":slug"
            element={
              <ProjectDetails
                projects={projects}
                projectIndex={projectIndex}
                setProjectIndex={setProjectIndex}
              />
            }
          />
        </Route>
        <Route path="contact-me" element={<ContactMe />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
