"use client";
import Link from "next/link";
import React from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export default function FilterBar() {
  return (
    <div className="w-80 bg-white p-4 space-y-8">
      <div>
        <h1 className="font-bold uppercase">Categories</h1>
        <ul className="space-y-1">
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Sleep Aids
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Weight Loss
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Skin Care
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Hair Care
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Eye Care
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Foot Care
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Hand Care
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-sm hover:text-blue-500 hover:underline"
            >
              Body Care
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold uppercase">Product Form</h1>
        <div className="space-y-2 mt-2">
          <Label className="flex items-center gap-2">
            <Checkbox /> Powder
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Liquid
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Oil
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Cream
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Gel
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Tonic
          </Label>
        </div>
      </div>
      <div>
        <h1 className="font-bold uppercase">Brands</h1>
        <div className="space-y-2 mt-2">
          <Label className="flex items-center gap-2">
            <Checkbox /> Powder
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Liquid
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Oil
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Cream
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Gel
          </Label>
          <Label className="flex items-center gap-2">
            <Checkbox /> Tonic
          </Label>
        </div>
      </div>
    </div>
  );
}
