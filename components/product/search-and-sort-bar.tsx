'use client'
import React from "react";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SearchAndSortBar() {
  return (
    <div className="flex gap-4 mb-10">
      <Input placeholder="Search" className="grow-1" />
      <Select>
        <SelectTrigger className="w-[180px] rounded-none">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="shrink-0">
          <SelectItem value="1">One</SelectItem>
          <SelectItem value="2">Two</SelectItem>
          <SelectItem value="3">Three</SelectItem>
          <SelectItem value="4">Four</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
