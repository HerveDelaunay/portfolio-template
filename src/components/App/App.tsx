import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
