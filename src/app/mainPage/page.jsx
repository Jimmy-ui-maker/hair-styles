import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import MainPage from "@/components/MainPage";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Team from "@/components/Team";

export default function page() {
  return (
    <>
      <Navbar />
      <MainPage />
      <About />
      <Services />
      <CTA />
      <Team />
      <Footer />
    </>
  );
}
