import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import VisitorCounter from "@/components/VisitorCounter";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <VisitorCounter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
