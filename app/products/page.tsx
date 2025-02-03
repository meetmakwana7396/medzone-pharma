import FilterBar from "@/components/product/filter-bar";
import ProductCard from "@/components/product/product-card";
import SearchAndSortBar from "@/components/product/search-and-sort-bar";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProductListingPage() {
  return (
    <section className="bg-neutral-100">
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
      <div className="container py-20 space-y-10">
        <SearchAndSortBar />

        <div className="flex gap-10">
          <FilterBar />
          <div className="space-y-10">
            <div className="grid grid-cols-4 gap-6">
              {Array.from(Array(16).keys()).map((item) => (
                <ProductCard item={item} />
              ))}
            </div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </section>
  );
}
