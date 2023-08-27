import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-zinc-900">
      <div className="container flex justify-between items-center mx-auto py-5">
        <div>
          <h1 className="text-white text-2xl font-bold">Get in Touch</h1>
          <div className="text-white flex gap-2 items-center pt-6">
            <FaEnvelope className="h-8 w-8" color="white" />
            <span>mohamedsaad81973@gmail.com</span>
          </div>
          <div className="text-white flex gap-2 items-center pt-2">
            <FaPhone className="h-8 w-8" color="white" />
            <span>+201014269976</span>
          </div>
        </div>

        <button className="my-auto text-white h-12 p-2 border-2 border-slate-700 w-48 hover:bg-white hover:text-black hover:border-black transition">
          Contact ME
        </button>

        <div className="flex flex-col justify-center">
          <div className="flex justify-center items-center gap-5 pb-3 w-[345px]">
            <FaLinkedin className="h-8 w-8" color="white" />
            <FaFacebook className="h-8 w-8" color="white" />
            <FaTwitter className="h-8 w-8" color="white" />
          </div>
          <span className="text-white mt-3 text-center">
            copyright @2022-2023
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
