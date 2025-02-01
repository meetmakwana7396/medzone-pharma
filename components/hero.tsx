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
    <section id="home">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
        // navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        speed={1000}
        loop
        className="h-[calc(100vh-128px)]"
        onSlideChange={() => setSlideCount((prev) => prev + 1)}
      >
        {[
          {
            image: "/images/thermometer-with-high-temperature-pills.jpg",
            title: "Your Partner in Wellness",
            description:
              "MedZone Pharma specializes in the trading of pharmaceutical products, catering to diverse medical needs globally. We ensure the highest standards of quality and reliability, forging partnerships to deliver essential medications worldwide, fostering healthier communities through accessible healthcare solutions.",
          },
          {
            image: "/images/bandages-medical-tools-arrangement.jpg",
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
              <div className="absolute inset-0 bg-black/20" />
              <div
                className={cn(
                  "absolute inset-0 flex items-center justify-center text-center container"
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
      transition={{ duration: 0.5, delay: 0.5 }}
      className="max-w-5xl space-y-4 px-4"
    >
      <motion.h1
        variants={itemVariants}
        className="text-7xl font-bold text-white mb-4"
      >
        {slide.title}
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-xl text-white mx-auto max-w-3xl font-normal"
      >
        {slide.description}
      </motion.p>
      <motion.div variants={itemVariants}>
        <Button size={"lg"}>
          Learn More
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
