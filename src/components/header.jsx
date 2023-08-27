const Header = ({ image }) => {
  return (
    <header className="w-full h-screen relative">
      <img
        src={image}
        alt="profile image"
        className="w-full absolute h-screen object-cover"
      />
      <div className="space-y-9 absolute top-1/3 left-14 text-center max-md:left-0 max-md:right-0">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-white">Abderhman Mohamed</h1>
          <h2 className="text-3xl text-white">web developer and designer</h2>
        </div>
        <button className="text-white mt-20 p-2 border border-slate-700 w-28 hover:bg-white hover:text-black hover:border-black transition">
          Contact Me
        </button>
      </div>
    </header>
  );
};

export default Header;
