import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Mail, Phone } from "lucide-react";

const Header = () => {
  return (
    <>
      {" "}
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
                    href="#category"
                    className="text-black hover:text-black/80"
                  >
                    Category
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-black hover:text-black/80"
                  >
                    Products
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
    </>
  );
};

export default Header;
