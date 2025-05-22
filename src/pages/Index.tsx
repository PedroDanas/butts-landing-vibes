
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Roadmap />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
