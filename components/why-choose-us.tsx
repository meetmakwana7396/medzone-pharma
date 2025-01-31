"use client";
import { Building2, PlusCircle, Stethoscope, Timer } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import { BsBuilding, BsCart2, BsGlobe, BsHeartPulse } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-blue-800">
      <div className="container">
        <h2 className="text-4xl font-bold text-white text-left mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: BsHeartPulse,
              title: "Quality Assurance",
              description:
                "Following strict regulatory guidelines to deliver safe and effective pharmaceutical products.",
            },
            {
              icon: BsGlobe,
              title: "Global Reach",
              description:
                "Our extensive partner network enables seamless distribution to clients across all regions.",
            },
            {
              icon: BsBuilding,
              title: "Industry Expertise",
              description:
                "With 10+ years of experience and expertise in the pharmaceutical industry",
            },
            {
              icon: BsCart2,
              title: "Flexible Ordering Options",
              description:
                "Customized ordering solutions designed to meet each client's unique business requirements.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="py-10 text-left bg-transparent justify-between text-white border-none"
            >
              <div className="h-full flex flex-col gap-4">
                <div>
                  <feature.icon className="w-12 h-12" />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className=" text-lg">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
