import Image from "next/image";
import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      width={200}
      height={156}
      priority
      className={className}
    />
  );
}
