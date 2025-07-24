import Benefits from "@/components/LandingPage/Benefits";
import CallToAction from "@/components/LandingPage/CallToAction"
import DJ from "@/components/LandingPage/DJ";
import FAQ from "@/components/LandingPage/FAQ";
import Footer from "@/components/LandingPage/Footer";
import Header from "@/components/LandingPage/Header"
import HeroHeader from "@/components/LandingPage/HeroSection";
import Price from "@/components/LandingPage/Price";

const LandingPage = () => {
  return (
    <>
      <div className='bg-[url("/header-bg.svg")] lg:pb-[120px] bg-center bg-cover rounded-[0px_0px_36px_36px]'>
        <Header />
        <HeroHeader />
      </div>
      <div className="bg-[#FFFBFF]">
        <DJ/>
        <Benefits/>
        <Price/>
        <FAQ/>
        <CallToAction />
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;