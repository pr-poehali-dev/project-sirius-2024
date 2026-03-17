import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import History from "@/components/History";
import Style from "@/components/Style";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <History />
      <Style />
      <Promo />
      <Footer />
    </main>
  );
};

export default Index;