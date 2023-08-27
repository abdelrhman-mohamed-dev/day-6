import HeroImage from "./assets/home.jpeg";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Portofolio from "./components/portofolio";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header image={HeroImage} />
      <About />
      <Skills />
      <Portofolio />
      <Footer />
    </div>
  );
}

export default App;
