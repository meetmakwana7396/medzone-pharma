import { FlaskConical } from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <FlaskConical className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">PharmaCare</span>
            </div>
            <p className="">
              Leading the way in pharmaceutical innovation and healthcare
              excellence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className=" hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className=" hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className=" hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className=" hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="">Research & Development</li>
              <li className="">Clinical Trials</li>
              <li className="">Quality Control</li>
              <li className="">Healthcare Consulting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className=" mb-4">
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
        <div className="border-t border-gray-800 mt-8 pt-8 text-center ">
          <p>
            &copy; {new Date().getFullYear()} PharmaCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
