"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Facebook,
  FlaskRound as Flask,
  HeartPulse,
  Linkedin,
  Mail,
  MailCheck,
  MapPin,
  Microscope,
  Phone,
  PlusCircle,
  ShieldCheck,
  Stethoscope,
  Timer,
  Trophy,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [slideCount, setSlideCount] = useState(0);
  return (
    <main className="min-h-screen relative">
      <div className="top-0 w-full text-white bg-blue-500">
        <div className="container flex justify-between">
          <div className="divide-x flex divide-white/20">
            <button className="flex gap-2 font-semibold items-center py-2 px-4 bg-blue-800 hover:bg-blue-700">
              <Phone className="h-6 w-6" />
              +91 84011 07297
            </button>
            <button className="flex gap-2 font-semibold items-center py-2 px-4 bg-blue-800 hover:bg-blue-700">
              <Mail className="h-6 w-6" />
              info@medzonepharmagroup.com
            </button>
          </div>
          <div className="divide-x flex divide-white/20">
            <button className="flex gap-2 font-semibold items-center px-3 bg-blue-800 hover:bg-blue-700">
              <FaFacebookF className="size-4" />
            </button>
            <button className="flex gap-2 font-semibold items-center px-3 bg-blue-800 hover:bg-blue-700">
              <FaXTwitter className="size-4" />
            </button>
            <button className="flex gap-2 font-semibold items-center px-3 bg-blue-800 hover:bg-blue-700">
              <FaLinkedinIn className="size-4" />
            </button>
            <button className="flex gap-2 font-semibold items-center px-3 bg-blue-800 hover:bg-blue-700">
              <FaYoutube className="size-4" />
            </button>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={200}
                height={156}
              />
              {/* <Flask className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-white">
                PharmaCare
              </span> */}
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a href="#home" className="text-black hover:text-black/80">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-black hover:text-black/80">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-black hover:text-black/80"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-black hover:text-black/80">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section id="home" className="h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={"fade"}
          // navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop
          className="h-[calc(100vh-120px)]"
          onSlideChange={() => setSlideCount((prev) => prev + 1)}
        >
          {[
            {
              image:
                "https://ik.imagekit.io/bfcpik1xc/carousel-1.jpg?updatedAt=1710322099198",
              title: "Your Partner in Wellness",
              description:
                "MedZone Pharma specializes in the trading of pharmaceutical products, catering to diverse medical needs globally. We ensure the highest standards of quality and reliability, forging partnerships to deliver essential medications worldwide, fostering healthier communities through accessible healthcare solutions.",
            },
            {
              image:
                "https://ik.imagekit.io/bfcpik1xc/carousel-2.jpg?updatedAt=1710322098972",
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

      {/* Who We Are */}
      <section id="about" className="py-20">
        <div className="container ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118"
                alt="Laboratory"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg">
                <p className="text-4xl font-bold">25+</p>
                <p>Years of Excellence</p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                PharmaCare is a leading pharmaceutical company dedicated to
                improving lives through innovative healthcare solutions. With
                over 25 years of experience, we combine cutting-edge research
                with compassionate care to deliver exceptional medical products
                and services.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {[
                  {
                    icon: <Microscope className="h-8 w-8 text-blue-600" />,
                    title: "Research",
                    description: "Advanced Research Facilities",
                  },
                  {
                    icon: <HeartPulse className="h-8 w-8 text-blue-600" />,
                    title: "Healthcare",
                    description: "Quality Patient Care",
                  },
                  {
                    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
                    title: "Safety",
                    description: "Rigorous Quality Control",
                  },
                  {
                    icon: <Trophy className="h-8 w-8 text-blue-600" />,
                    title: "Excellence",
                    description: "Industry Recognition",
                  },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
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

      {/* Enquiry Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? We're here to help. Contact
                us for more information or to schedule a consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <p>123 Healthcare Avenue, Medical District, NY 10001</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <p>contact@pharmacare.com</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-2xl font-semibold mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" className="h-32" />
                  <Button className="w-full">Send Message</Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            className="max-w-4xl mx-auto"
          >
            {[
              {
                text: "PharmaCare has consistently delivered exceptional service and quality products. Their commitment to healthcare excellence is truly remarkable.",
                author: "Dr. Sarah Johnson",
                role: "Medical Director",
              },
              {
                text: "The research and development team at PharmaCare is innovative and forward-thinking. They've been instrumental in advancing our medical capabilities.",
                author: "Prof. Michael Chen",
                role: "Research Scientist",
              },
              {
                text: "Outstanding customer service and professional support. PharmaCare has been a reliable partner in our healthcare journey.",
                author: "Emma Thompson",
                role: "Hospital Administrator",
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="p-8 text-center">
                  <p className="text-lg text-gray-600 mb-6">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Flask className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">PharmaCare</span>
              </div>
              <p className="text-gray-400">
                Leading the way in pharmaceutical innovation and healthcare
                excellence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Research & Development</li>
                <li className="text-gray-400">Clinical Trials</li>
                <li className="text-gray-400">Quality Control</li>
                <li className="text-gray-400">Healthcare Consulting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with our latest news and updates.
              </p>
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PharmaCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

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
