
import HeroSection from "@/components/HeroSection";
import DetectionForm from "@/components/DetectionForm";
import Statistics from "@/components/Statistics";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4">
        <HeroSection />
        <div className="my-8">
          <DetectionForm />
        </div>
        <Statistics />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
