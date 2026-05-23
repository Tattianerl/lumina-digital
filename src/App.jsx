import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import About from "./sections/About/About";
import Features from "./sections/Features/Features";
import Pricing from "./sections/Pricing/Pricing";
import CTA from "./sections/CTA/CTA";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App(){
  return(
      <>
      <Navbar />

      <main>

        <Hero />
        <Services />
        <About />
        <Features />
        <Pricing />
        <CTA />
        <Contact />

      </main>

      <Footer />
      </>
  );
}
export default App;