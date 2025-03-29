import CallToAction from "@/sections/CallToAction";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <Introduction />
      <Features />
      <Integrations />

      <CallToAction />
      <Footer />
    </>
  );
}
