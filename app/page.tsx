import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import PopularTools from "@/components/home/PopularTools";
import Footer from "@/components/Footer";
import PlatformStats from "@/components/home/PlatformStats";
import CTA from "@/components/home/CTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LatestBlogs from "@/components/home/LatestBlogs";
import FAQ from "@/components/FAQ";
import RevenueCalculators from "@/components/home/RevenueCalculators"; 
import Features from "@/components/home/Features";
import BlogPreview from "@/components/home/BlogPreview";
import HomeFAQ from "@/components/home/HomeFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free YouTube Revenue Calculator & Channel Analytics",
  description:
    "Estimate YouTube earnings, analyze channels, compare creators, and access free YouTube creator tools.",
};


export default function Home() {
  return (
    <main className="bg-slate-50">


<Hero />

<TrustBar />

<PopularTools />

<RevenueCalculators />

<WhyChooseUs />

<BlogPreview />

<HomeFAQ />

<Features />

<PlatformStats />

<CTA />

<LatestBlogs />

<FAQ />



    </main>
  );
}