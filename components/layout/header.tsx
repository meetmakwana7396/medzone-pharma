import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { Mail, Phone, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Logo from "../custom/logo";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <Logo />

            <div className="px-8 flex gap-8 border-l-2">
              <div className="flex gap-5 items-center">
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <PhoneCall className="size-6 text-blue-500" />
                </div>
                <div className="block">
                  <span className="text-sm font-semibold text-blue-500">
                    Call us
                  </span>
                  <p className="font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <Mail className="size-6 text-blue-500" />
                </div>
                <div className="block">
                  <span className="text-sm font-semibold text-blue-500">
                    Email
                  </span>
                  <p className="font-semibold">info@medzonepharmagroup.com</p>
                </div>
              </div>
            </div>
          </div>

          <Button size={"lg"} className="font-semibold">
            Contact us
          </Button>
        </div>

        {/* Header */}
      </div>
      <div className="w-full text-white bg-blue-800">
        <div className="container flex justify-between">
          <nav>
            <ul className="flex space-x-14">
              <li>
                <Link
                  href="#about"
                  className="text-white py-2 pt-3 hover:border-white border-b-4 border-transparent flex hover:text-white/80 font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#category"
                  className="text-white py-2 pt-3 hover:border-white border-b-4 border-transparent flex hover:text-white/80 font-semibold"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-white py-2 pt-3 hover:border-white border-b-4 border-transparent flex hover:text-white/80 font-semibold"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white py-2 pt-3 hover:border-white border-b-4 border-transparent flex hover:text-white/80 font-semibold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex">
            <Link
              href="/about"
              className="flex px-4 items-center h-full hover:bg-neutral-200/20"
            >
              <FaFacebookF className="size-5" />
            </Link>
            <Link
              href="/about"
              className="flex px-4 items-center h-full hover:bg-neutral-200/20"
            >
              <FaXTwitter className="size-5" />
            </Link>
            <Link
              href="/about"
              className="flex px-4 items-center h-full hover:bg-neutral-200/20"
            >
              <FaLinkedinIn className="size-5" />
            </Link>
            <Link
              href="/about"
              className="flex px-4 items-center h-full hover:bg-neutral-200/20"
            >
              <FaYoutube className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
