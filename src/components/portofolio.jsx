import Card from "./card";

const Portofolio = () => {
  return (
    <section className="space-y-9 my-20">
      <h1 className="text-black text-5xl font-bold ml-6 mb-20">Portoflio</h1>
      <div className="mx-20 space-y-9">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          <Card title="Web Developer" backGround="#262626" />
          <Card title="Mobile Developer" backGround="#a1a1aa" />
          <Card title="Logo Design" backGround="#262626" />
          <Card title="Web Design" backGround="#a1a1aa" />
          <Card title="Web Developer" backGround="#262626" />
          <Card title="Web Developer" backGround="#a1a1aa" />
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
