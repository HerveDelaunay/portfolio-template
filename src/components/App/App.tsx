import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App: React.FC = () => {
  const [projectIndexOpened, setProjectIndexOpened] = useState(false);
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Main
        projectIndexOpened={projectIndexOpened}
        setProjectIndexOpened={setProjectIndexOpened}
      />
      <Footer />
    </div>
  );
};

export default App;
