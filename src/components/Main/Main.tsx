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
        <button type="button" className="w-52 h-12 btn1">
          <div className="w-1/4 h-full btn2 flex justify-center items-center">
            <img src={downArrows} alt="down-arrows" className="w-4 h-3"></img>
          </div>
          <span className="w-3/4 inline-block h-full"></span>
        </button>
      </section>
      <article>zgfege</article>
      <section>ezrgege</section>
    </main>
  );
};

export default Main;
