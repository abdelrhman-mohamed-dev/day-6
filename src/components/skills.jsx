import React from "react";
import ProgressBar from "./progressBar";

const Skills = () => {
  return (
    <section className="w-full pb-20 bg-neutral-800">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl text-white pt-20">Skills</h1>
        <p className="text-center text-sm text-white pt-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis
          cumque sint possimus iure velit quisquam sit expedita, voluptatem,
          quas nihil totam fuga fugit, commodi perferendis sapiente nobis
          repellendus? Ipsam Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <div className="container mx-auto md:mx-0">
          <div className="flex justify-between items-center xl:px-40 pt-20 max-lg:flex-col gap-2">
            <div className="space-y-9 max-lg:mb-8">
              <h1 className=" text-3xl md:text-2xl text-white font-bold p-8 border-b border-white">
                My Foucs
              </h1>
              <h2 className="text-white text-2xl md:text-2xl font-semibold pl-4">
                UI/UX design
              </h2>
              <h2 className="text-white text-2xl md:text-2xl font-semibold pl-4">
                Web devolpment
              </h2>
              <h2 className="text-white text-2xl md:text-2xl font-semibold pl-4">
                UI/UX design
              </h2>
              <h2 className="text-white text-2xl md:text-2xl font-semibold pl-4">
                Mobile App devolpment
              </h2>
            </div>
            <div className="w-full space-y-5 p-2">
              <ProgressBar progressPercentage={80} progressName="HTML" />
              <ProgressBar progressPercentage={75} progressName="CSS" />
              <ProgressBar progressPercentage={55} progressName="JS" />
              <ProgressBar progressPercentage={65} progressName="SASS" />
              <ProgressBar progressPercentage={95} progressName="REACT" />
              <ProgressBar progressPercentage={68} progressName="NEXT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
