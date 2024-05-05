/*import './App.css';*/
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About"
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
