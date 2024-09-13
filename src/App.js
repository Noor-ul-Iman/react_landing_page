import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Cards from "./Components/Cards";
import Services from "./Components/Services";
import ServicesBlock from "./Components/ServicesBlock";
import Bussiness from "./Components/Bussiness";
import Attributes from "./Components/Attributes";
import BoxImages from "./Components/BoxImages";
import Clients from "./Components/Clients";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Cards />
      <Services></Services>
      <ServicesBlock />
      <Bussiness />
      <Attributes />
      <BoxImages />
      <Clients />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
    