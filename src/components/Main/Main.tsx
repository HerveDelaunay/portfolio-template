import React from "react";
import imageHomepage from "../../assets/images/homepage/mobile/image-homepage-hero.jpg";
import data from "../../assets/data.json";
import downArrows from "../../assets/images/icons/down-arrows.svg";

const Main = () => {
  return (
    <main className="flex flex-col items-center w-10/12">
      <section className="w-full flex flex-col ">
        <img src={imageHomepage} alt="image-homepage-hero" className="mb-6" />
        <h2 className="text-h2 mb-8 font-serif font-bold">{data.name}</h2>
        <button type="button" className="w-btn-w h-12 btn1 relative mb-24">
          <div className="w-12 h-full btn2"></div>
          <div className="h-full w-38 absolute top-0 left-12 flex items-center justify-center">
            <p className="btn-text">ABOUT ME</p>
          </div>
          <img
            src={downArrows}
            alt="down-arrows"
            className="w-4 h-3 absolute left-4 top-btn-top-center"
          ></img>
        </button>
      </section>
      <article>zgfege</article>
      <section>ezrgege</section>
    </main>
  );
};

export default Main;
