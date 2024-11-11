import About from "./Components/About";
import Destinations from "./Components/Destinations";
import Hero from "./Components/Hero";
import Logos from "./Components/Logos";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Subscribe from "./Components/Subscribe";
import Trip from "./Components/Trip";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <div className="md:px-20 md:py-8 px-9 py-6 ">
        <Navbar/>
        <Hero/>
        <Services/>
        <Destinations/>
        <Trip/>
        <About/>
        <Logos/>
        <Subscribe/>
        <Footer/>
    </div>
  );
}
