import React from "react";
import imageHomepage from "../../assets/images/homepage/mobile/image-homepage-hero.jpg";
import data from "../../assets/data.json";

const Main = () => {
  return (
    <main className="flex flex-col items-center w-10/12">
      <section className="w-full flex flex-col ">
        <img src={imageHomepage} alt="image-homepage-hero" className="mb-6" />
        <h2 className="text-h2 mb-8 font-serif font-bold">{data.name}</h2>
        <button className="w-52 h-12 border border-solid border-black"></button>
      </section>
      <article>zgfege</article>
      <section>ezrgege</section>
    </main>
  );
};

export default Main;
