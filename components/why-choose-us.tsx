"use client";
import { Building2, PlusCircle, Stethoscope, Timer } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import { BsBuilding, BsCart2, BsGlobe, BsHeartPulse } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: BsHeartPulse,
              title: "State-of-the-art Facilities",
              description:
                "Modern laboratories and research centers equipped with the latest technology",
            },
            {
              icon: BsGlobe,
              title: "Expert Team",
              description:
                "Highly qualified professionals dedicated to healthcare excellence",
            },
            {
              icon: BsBuilding,
              title: "24/7 Support",
              description:
                "Round-the-clock assistance for all your healthcare needs",
            },
            {
              icon: BsCart2,
              title: "Comprehensive Care",
              description: "Complete healthcare solutions under one roof",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-10 text-left h-[400px] border justify-between  group ring-2 ring-blue-600 ring-offset-2 transition-colors duration-300"
            >
              <div className="h-full flex flex-col">
                <div>
                  <feature.icon className="w-12 h-12" />
                </div>
                <div className="flex flex-col justify-end align-bottom mt-auto">
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
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
