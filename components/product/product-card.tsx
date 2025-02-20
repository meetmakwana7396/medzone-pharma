"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import Image from "next/image";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { MessagesSquare } from "lucide-react";

export default function ProductCard({ item }: { item: any }) {
  return (
    <div className="block overflow-hidden shadow p-4 bg-white hover:shadow-lg">
      <Link href={`/products/${item}`}>
        <div className="relative aspect-square transition-all">
          <Image
            src="/images/medicin.avif"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-100 transition-all" //group-hover:opacity-0
            width={600}
            height={400}
          />

          {/* <Image
                  src="/images/medicin2.jpg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0  transition-all group-hover:opacity-100"
                  width={600}
                  height={400}
                /> */}
        </div>
      </Link>

      <div className="relative pt-4">
        <Link href={`/products/${item}`} className="hover:underline">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
            Nutrisrot Liver Nava-DS Syrup for Liver Detox Sugar Free
          </h3>
        </Link>
        <p className="text-xs text-neutral-400 mt-2">bottle of 225 ml Syrup</p>
        <button className="text-xs hover:underline font-semibold text-blue-500">
          Cipla
        </button>

        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">$20-24</p>

          {/* <p className="text-xs uppercase tracking-wide">6 Colors</p> */}
          <Dialog>
            <DialogTrigger
              className="text-green-500 font-semibold text-sm "
              asChild
            >
              <button
                onClick={(e) => e.stopPropagation()}
                className="flex hover:text-green-600 items-center gap-2"
              >
                <MessagesSquare className="h-4 w-4" />
                Inquiry
              </button>
            </DialogTrigger>
            <DialogContent width="1000px" className="">
              <EnquiryForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export function EnquiryForm() {
  return (
    <form className="space-y-4">
      <div className="flex gap-8">
        <div className="relative">
          <Image
            src="/images/medicin.avif"
            alt=""
            className="aspect-square h-[360px] mx-auto w-auto object-cover opacity-100 transition-all" //group-hover:opacity-0
            width={600}
            height={400}
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 grow-1 w-full max-w-lg">
          <div className="space-y-2 col-span-2">
            <Label htmlFor="quantity">Required Quantity*</Label>
            <Input
              id="quantity"
              name="quantity"
              type="number"
              placeholder="Enter quantity"
              required
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="customerName">Your Name*</Label>
            <Input
              id="customerName"
              name="customerName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name*</Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number*</Label>
            <Input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              placeholder="Enter your contact number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="space-y-2 col-span-2">
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Any specific requirements or questions?"
              className="h-20"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Submit Inquiry</Button>
      </div>
    </form>
  );
}
