"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import { Button } from "./ui/button";

const Hero = () => {
  const [slideCount, setSlideCount] = useState(0);

  return (
    <section id="home" className="h-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        speed={1000}
        loop
        className="h-[calc(100vh-80px)]"
        onSlideChange={() => setSlideCount((prev) => prev + 1)}
      >
        {[
          {
            image: "/images/hero1.jpg",
            title: "Your Partner in Wellness",
            description:
              "MedZone Pharma specializes in the trading of pharmaceutical products, catering to diverse medical needs globally. We ensure the highest standards of quality and reliability, forging partnerships to deliver essential medications worldwide, fostering healthier communities through accessible healthcare solutions.",
          },
          {
            image: "/images/hero2.jpg",
            title: "Globally Connected. Locally Invested",
            description:
              "At MedZone Pharma, we don't just see ourselves as a pharmaceutical company; we're architects of hope, designing pathways to wellness",
          },
        ].map((slide, index) => (
          <SwiperSlide key={index} className="h-[calc(100vh-10rem)]">
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-start text-left container",
                  (index + 1) % 2 === 0 && "justify-end text-right"
                )}
              >
                <SlideContent
                  slide={slide}
                  index={index}
                  slideCount={slideCount}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

function SlideContent({
  index,
  slide,
  slideCount,
}: {
  index: number;
  slide: any;
  slideCount: number;
}) {
  const slideVariants = {
    initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
    animate: { opacity: 1, x: 0 },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={slideCount}
      initial="initial"
      animate="animate"
      variants={slideVariants}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="max-w-3xl space-y-4 px-4"
    >
      <motion.h1
        variants={itemVariants}
        className="text-7xl font-bold text-white mb-4"
      >
        {slide.title}
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-xl text-white/90 font-openSans font-normal"
      >
        {slide.description}
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button className="!p-4 !px-8 w-auto h-auto bg-blue-600 text-lg rounded-none shadow-lg">
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
