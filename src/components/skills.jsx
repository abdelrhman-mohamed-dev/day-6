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
          elit. Tempora a, eos perspiciatis repellat cum aut reprehenderit optio
          temporibus rem? Tempora rerum est quasi iste at accusantium saepe
          expedita ea adipisci Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum beatae, iste id assumenda tempore corporis
          perferendis molestias nostrum doloremque, animi, totam possimus ipsa
          deleniti aut suscipit porro. Officiis, culpa voluptate?
        </p>
        <div className="container mx-auto md:mx-0">
          <div className="flex justify-between px-40 pt-20 ">
            <div className="space-y-9 ">
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
            <div className="w-[700px] space-y-5">
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
