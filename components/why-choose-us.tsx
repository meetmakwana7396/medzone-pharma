"use client";
import { Building2, PlusCircle, Stethoscope, Timer } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: <Building2 className="h-12 w-12" />,
              title: "State-of-the-art Facilities",
              description:
                "Modern laboratories and research centers equipped with the latest technology",
            },
            {
              icon: <Stethoscope className="h-12 w-12" />,
              title: "Expert Team",
              description:
                "Highly qualified professionals dedicated to healthcare excellence",
            },
            {
              icon: <Timer className="h-12 w-12" />,
              title: "24/7 Support",
              description:
                "Round-the-clock assistance for all your healthcare needs",
            },
            {
              icon: <PlusCircle className="h-12 w-12" />,
              title: "Comprehensive Care",
              description: "Complete healthcare solutions under one roof",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center group hover:bg-blue-600 transition-colors duration-300"
            >
              <div className="mb-4 text-blue-600 group-hover:text-white flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
