import { FlaskConical } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Logo from "./custom/logo";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaLocationPin,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Separator } from "./ui/separator";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative text-white/80 bg-blue-950">
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/footer.png')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
      </div> */}
      <div className="bg-[url('/images/footer.png')] bg-cover bg-center bg-no-repeat py-12">
        <div className="container relative">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              {/* <div className="flex items-center space-x-2 mb-6">
              <FlaskConical className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">PharmaCare</span>
            </div> */}
              <Logo className="p-2 mb-4 rounded-lg bg-white" />
              <p className="text-lg text-white">
                At MedZone Pharma, we don't just see ourselves as a
                pharmaceutical company; we're architects of hope, designing
                pathways to wellness.
              </p>
              <div className="mt-4 space-y-4  ">
                <p className="flex items-start ">
                  <FaLocationDot className="mr-2 w-5 mt-1 h-5 shrink-0" />
                  223, Shaswat Plaza, Nr. Punagam BRTS,Canal Road, Surat,
                  Gujarat, India - 395010
                </p>
                <Separator className="bg-white/40" />
                <p className="flex items-start ">
                  <FaPhone className="mr-2 w-5 mt-1 h-5 shrink-0" />
                  +91 84011 07297
                </p>
                <Separator className="bg-white/40" />
                <p className="flex items-start ">
                  <FaEnvelope className="mr-2 w-5 mt-1 h-5 shrink-0" />
                  info@medzonepharmagroup.com
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <Link
                  href="/about"
                  className="flex h-10 w-10 rounded bg-white/10 items-center justify-center text-white hover:bg-white/20"
                >
                  <FaFacebookF className="size-5" />
                </Link>

                <Link
                  href="/about"
                  className="flex h-10 w-10 rounded bg-white/10 items-center justify-center text-white hover:bg-white/20"
                >
                  <FaXTwitter className="size-5" />
                </Link>

                <Link
                  href="/about"
                  className="flex h-10 w-10 rounded bg-white/10 items-center justify-center text-white hover:bg-white/20"
                >
                  <FaLinkedinIn className="size-5" />
                </Link>

                <Link
                  href="/about"
                  className="flex h-10 w-10 rounded bg-white/10 items-center justify-center text-white hover:bg-white/20"
                >
                  <FaYoutube className="size-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About Us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Services
                </h3>
                <ul className="space-y-2">
                  <li className="">Research & Development</li>
                  <li className="">Clinical Trials</li>
                  <li className="">Quality Control</li>
                  <li className="">Healthcare Consulting</li>
                </ul>
              </div>
              <div className="max-w-sm">
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Newsletter
                </h3>
                <p className=" mb-4">
                  Stay updated with our latest news and updates.
                </p>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/10 border-none placeholder:text-white"
                  />
                  <Button className="bg-black">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="border-t border-gray-800 mt-8 pt-8 text-center ">
          <p>
            &copy; {new Date().getFullYear()} PharmaCare. All rights reserved.
          </p>
        </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
