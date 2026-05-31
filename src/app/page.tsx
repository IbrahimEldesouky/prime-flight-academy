import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import News from "@/components/News";
import Gallery from "@/components/Gallery";
import VisionSection from "@/components/VisionSection";
import AdmissionConditions from "@/components/AdmissionConditions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <VisionSection />
      <Departments />
      <Gallery />
      <AdmissionConditions />
      <ContactSection />
      <Footer />
    </main>
  );
}