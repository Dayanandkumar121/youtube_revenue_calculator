import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import PopularTools from "@/components/home/PopularTools";
import RevenueCalculators from "@/components/home/RevenueCalculators";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="bg-slate-50">

      <Navbar />

      <Hero />

      <TrustBar />

      <PopularTools />

      <RevenueCalculators />

      <Footer />

    </main>
  );
}