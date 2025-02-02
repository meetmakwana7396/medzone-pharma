import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import React from "react";

export default function ProductListingPage() {
  return (
    <section>
      <div className="relative">
        <div className="absolute inset-0 bg-black/70 w-full h-full mix-blend-multiply" />
        <div className="absolute inset-0 w-full h-full flex justify-center items-center">
          <h1 className="font-bold text-4xl text-white">Products</h1>
        </div>
        <Image
          quality={100}
          src={"/images/dna.jpg"}
          alt="Hero"
          width={600}
          height={400}
          className="object-cover h-80 w-full"
        />
      </div>
      <div className="container my-20">
        <div className="flex gap-4 mb-10">
          <Input placeholder="Search" className="grow-1" />
          <Select>
            <SelectTrigger className="w-[180px] rounded-none">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent className="shrink-0">
              <SelectItem value="1">One</SelectItem>
              <SelectItem value="2">Two</SelectItem>
              <SelectItem value="3">Three</SelectItem>
              <SelectItem value="4">Four</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <a href="#" className="group block overflow-hidden" key={item}>
              <div className="relative h-[350px] sm:h-[350px] transition-all">
                <Image
                  src="/images/medicin.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-100 transition-all group-hover:opacity-0"
                  width={600}
                  height={400}
                />

                <Image
                  src="/images/medicin2.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0  transition-all group-hover:opacity-100"
                  width={600}
                  height={400}
                />
              </div>

              <div className="relative bg-white pt-3">
                <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Limited Edition Sports Trainer
                </h3>

                <div className="mt-1.5 flex items-center justify-between text-gray-900">
                  <p className="tracking-wide">$189.99</p>

                  {/* <p className="text-xs uppercase tracking-wide">6 Colors</p> */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
