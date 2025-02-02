import CountUp from "react-countup";
import React from "react";
import { BsBox2, BsGlobe, BsPeople, BsTrophy } from "react-icons/bs";
import "@/components/custom/feature-hover-card.css";
import { Button } from "./ui/button";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section id="about" className="py-20">
      <div className="container ">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <Image
              src="/images/who-we-are.jpg"
              alt="Laboratory"
              width={600}
              height={400}
              className="h-auto w-auto"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
              <p className="text-4xl font-bold">25+</p>
              <p>Years of Excellence</p>
            </div> */}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are?</h2>
            <p className="text-gray-600 text-xl mb-6">
              We are a dynamic pharmaceutical and surgical products trading
              company dedicated to providing high-quality medical solutions to
              meet the diverse needs of healthcare professionals and
              institutions. With a focus on excellence, integrity, and
              innovation, we strive to deliver cutting-edge products that
              enhance patient care and improve outcomes. Our commitment to
              customer satisfaction drives us to continuously seek out the
              latest advancements in the industry, ensuring that we offer a
              comprehensive range of reliable and cost-effective solutions.
            </p>
            <div className="space-x-4">
              <Button size={"lg"} className="font-semibold text-md">
                Contact us
              </Button>
              <Button
                size={"lg"}
                variant={"secondary"}
                className="font-semibold text-md"
              >
                Services
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20 bg-blue-50 p-4 py-8 divide-x-2 divide-blue-800/50 shadow-md">
          {[
            {
              icon: BsTrophy,
              statStart: 5,
              statEnd: 10,
              title: "Years Experience",
              description: "Advanced Research Facilities",
            },
            {
              icon: BsBox2,
              statStart: 448,
              statEnd: 548,
              title: "Products",
              description: "Quality Patient Care",
            },
            {
              icon: BsPeople,
              statStart: 168,
              statEnd: 268,
              title: "Happy Clients",
              description: "Rigorous Quality Control",
            },
            {
              icon: BsGlobe,
              statStart: 4,
              statEnd: 8,
              title: "Countries",
              description: "Industry Recognition",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-left text-black px-8 transition-all duration-300 cursor-default"
            >
              <div className="flex justify-center items-center text-4xl font-bold mb-4 rounded-full w-fit">
                {/* <service.icon className="h-10 w-10" /> */}
                <CountUp
                  start={service.statStart}
                  end={service.statEnd}
                  duration={5}
                  enableScrollSpy
                  scrollSpyDelay={500}
                  separator=" "
                  //   decimals={4}
                  decimal=","
                  //   prefix="+"
                  suffix="+"
                  //   onEnd={() => console.log("Ended! 👏")}
                  //   onStart={() => console.log("Started! 💨")}
                  className="font-bold text-4xl text-blue-800 flex w-fit mx-auto"
                />
              </div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        {/* <FeatureHoverCard /> */}
      </div>
    </section>
  );
};

export default WhoWeAre;
