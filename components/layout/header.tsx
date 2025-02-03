import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { ChevronDown, Mail, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../custom/logo";

const Header = () => {
  const categories = [
    {
      name: "Injectable",
      items: [
        "Antibiotics",
        "Hormones",
        "Vaccines",
        "Anesthetics",
        "Pain medications",
        "Cancer treatments",
        "Blood thinners",
        "Immunosuppressants",
        "Cardiovascular drugs",
        "Emergency medications",
      ],
    },
    {
      name: "Oral",
      items: [
        "Antibiotics",
        "Pain relievers",
        "Antidepressants",
        "Diabetes medications",
        "Heart medications",
        "Vitamins/supplements",
        "Allergy medications",
        "Gastrointestinal drugs",
        "Blood pressure medications",
        "Psychiatric medications",
      ],
    },
    {
      name: "Topical",
      items: [
        "Antibacterial creams",
        "Steroid creams",
        "Pain relief gels",
        "Antifungal treatments",
        "Acne medications",
        "Wound healing ointments",
        "Psoriasis treatments",
        "Burn/skin repair creams",
        "Hormone replacement creams",
        "Insect bite/rash treatments",
      ],
    },
  ];

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
      <div className="w-full text-white bg-blue-800 h-12">
        <div className="container flex justify-between h-full">
          <nav className="flex gap-2 items-center h-full">
            <Link
              href="/#about"
              className="font-semibold h-full px-4 flex items-center hover:bg-neutral-200/20"
            >
              About
            </Link>
            <Link
              href="/products"
              className="font-semibold h-full px-4 flex items-center hover:bg-neutral-200/20"
            >
              Products
            </Link>
            {categories?.map((category) => (
              <div
                className="h-full group px-4 flex items-center relative hover:bg-neutral-200/20 font-semibold"
                role="button"
              >
                <div className="flex gap-2 items-center">
                  {category.name} <ChevronDown className="w-4 h-4" />
                </div>
                <div className="group-hover:block hidden text-black bg-white border absolute top-full left-0 z-10 shadow shadow-white">
                  <div className="flex flex-col ">
                    {category.items?.map((item) => (
                      <Link
                        href={"#"}
                        className="hover:font-semibold whitespace-nowrap hover:underline hover:text-blue-500 text-sm p-2"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/#contact"
              className="font-semibold h-full px-4 flex items-center hover:bg-neutral-200/20"
            >
              Contact
            </Link>
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
