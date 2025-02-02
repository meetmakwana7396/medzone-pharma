"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Hero from "@/components/hero";
import WhoWeAre from "@/components/who-we-are";
import WhyChooseUs from "@/components/why-choose-us";
import Enquiry from "@/components/enquiry";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* <Header /> */}
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <Testimonials />
      <Enquiry />
      {/* <Footer /> */}
    </main>
  );
}
