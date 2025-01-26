"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  FlaskRound as Flask,
  HeartPulse,
  Mail,
  MapPin,
  Microscope,
  Phone,
  PlusCircle,
  ShieldCheck,
  Stethoscope,
  Timer,
  Trophy,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Header from "@/components/layout/header";
import Hero from "@/components/hero";
import WhoWeAre from "@/components/who-we-are";
import WhyChooseUs from "@/components/why-choose-us";
import Enquiry from "@/components/enquiry";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Header />
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <Enquiry />
      <Testimonials />
      <Footer />
    </main>
  );
}
