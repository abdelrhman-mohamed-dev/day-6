import Resume from "../assets/Abdelrhman Mohamed CV.pdf";
const About = () => {
  return (
    <section className="h-full w-full mb-40 ">
      <div className="flex max-md:flex-col gap-20 mt-40 ">
        <div className="w-[400px]">
          <h1 className="text-5xl font-bold ml-6 w-72">About Me</h1>
        </div>
        <div className=" space-y-10">
          <p className="text-sm max-md:p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni omnis
            cumque sint possimus iure velit quisquam sit expedita, voluptatem,
            quas nihil totam fuga fugit, commodi perferendis sapiente nobis
            repellendus? Ipsam Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora a, eos perspiciatis repellat cum aut
            reprehenderit optio temporibus rem? Tempora rerum est quasi iste at
            accusantium saepe expedita ea adipisci Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Earum beatae, iste id assumenda
            tempore corporis perferendis molestias nostrum doloremque, animi,
            totam possimus ipsa deleniti aut suscipit porro. Officiis, culpa
            voluptate?
          </p>
          <a
            download
            href={Resume}
            className="inline-block bg-zinc-800 p-4 border border-zinc-400 w-38 text-white mr-20 max-md:m-4"
          >
            Dawnload Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
