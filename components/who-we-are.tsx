import { HeartPulse, Microscope, ShieldCheck, Trophy } from "lucide-react";
import React from "react";
import { BsAirplane, BsCashCoin, BsHeadphones, BsPeople } from "react-icons/bs";
import "@/components/custom/feature-hover-card.css";

const WhoWeAre = () => {
  return (
    <section id="about" className="py-20">
      <div className="container ">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <img
              src="/images/who-we-are.png"
              alt="Laboratory"
              className="rounded-lg"
            />
            {/* <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
              <p className="text-4xl font-bold">25+</p>
              <p>Years of Excellence</p>
            </div> */}
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are?</h2>
            <p className="text-gray-600 mb-6">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 justify-center">
              {/* Circle 1 */}
              <div className="sm:justify-self-end">
                <div className="w-56 h-56 flex flex-col items-center justify-center rounded-full bg-blue-500 text-center">
                  <p className="text-white mb-0">Products</p>
                  <h1
                    className="text-white text-4xl font-bold"
                    data-toggle="counter-up"
                  >
                    548
                  </h1>
                </div>
              </div>
              {/* Circle 2 */}
              <div className="sm:justify-self-start">
                <div className="w-56 h-56 flex flex-col items-center justify-center rounded-full bg-gray-400 text-center">
                  <p className="text-white mb-0">Countries</p>
                  <h1
                    className="text-white text-4xl font-bold"
                    data-toggle="counter-up"
                  >
                    8
                  </h1>
                </div>
              </div>
              {/* Circle 3 */}
              <div className="sm:col-span-2 sm:flex sm:justify-center">
                <div className="w-56 h-56 flex flex-col items-center justify-center rounded-full bg-blue-900 text-center -mt-32 sm:-mt-32">
                  <p className="text-white mb-0">Happy Clients</p>
                  <h1
                    className="text-white text-4xl font-bold"
                    data-toggle="counter-up"
                  >
                    268
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-20 gap-4">
          {[
            {
              icon: BsAirplane,
              title: "Research",
              description: "Advanced Research Facilities",
            },
            {
              icon: BsPeople,
              title: "Healthcare",
              description: "Quality Patient Care",
            },
            {
              icon: BsCashCoin,
              title: "Safety",
              description: "Rigorous Quality Control",
            },
            {
              icon: BsHeadphones,
              title: "Excellence",
              description: "Industry Recognition",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="text-left text-black p-10 bg-white hover:shadow-lg transition-all duration-300 cursor-default border"  
            >
              <div className="flex justify-center items-center mb-8 p-4 rounded-full w-fit bg-blue-300">
                <service.icon className="h-10 w-10" />
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
