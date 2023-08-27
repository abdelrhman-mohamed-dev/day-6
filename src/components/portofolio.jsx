import Card from "./card";

const Portofolio = () => {
  return (
    <section className="space-y-9 my-20">
      <h1 className="text-black text-5xl font-bold ml-6 mb-20">Portoflio</h1>
      <div className="mx-20 space-y-9">
        <div className="justify-center flex gap-20 ">
          <Card title="Web Devolper" backGround="#262626" />
          <Card title="Mobie Devolper" backGround="#a1a1aa" />
          <Card title="Logo Desgin" backGround="#262626" />
        </div>
        <div className="justify-center flex gap-20 ">
          <Card title="Web Design" backGround="#a1a1aa" />
          <Card title="Web Devolper" backGround="#262626" />
          <Card title="Web Devolper" backGround="#a1a1aa" />
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
