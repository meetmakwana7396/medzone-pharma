"use client";
import { EnquiryForm } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProductDetailPage() {
  const router = useRouter();
  
  const composition = [
    {
      compostion_name: "Vitamin D3",
      quantity: 5000,
      unit: "IU",
    },
    {
      compostion_name: "Vitamin K2",
      quantity: 100,
      unit: "mcg",
    },
  ];

  const ingredients = [
    "Bhringraj Extract (Eclipta Alba) Whole Plant Extract",
    "Bhumiamla (Phyllanthus Niruri) Whole Plant Extract",
    "Kasni (Cichorium Intybus) Seed Extract",
    "Himsra (Capparis Spinosa) Root Extract",
    "Kakamachi (Solanum Nigrum) Whole Plant Extract",
    "Haritaki (Terminalia Chebula) Fruit Extract",
    "Arjuna (Terminalia Arjuna) Bark Extract",
    "Kasamarda (Cassia Occidentalis) Seed Extract",
    "Amla (Emblica Ocinalis) Root Extract",
    "Biranjasipha (Achillea Millefolium) Aerial Part Extract",
    "Jhavuka (Tamarix Gallica) Whole Plant Extract",
    "Guduchi (Tinospora Cordifolia) Stem Extract",
    "Chitraka mool (Plumbago Indica) Root Extract",
    "Daruharidra (Berberis Aristata) Root Extract",
    "Vidanga (Embelia Ribes) Fruit Extract",
    "Mulaka (Raphanus Sativus) Root Extract",
    "Parpata (Fumaria Indica) Whole Plant Extract",
  ];

  const benefits = [
    "It contains antioxidants such as bhringraj, bhumiamla, and others which helps to reduce toxin",
    "It contains kasani, himsra, haritaki and other herbs that help deal with fatty liver",
    "It helps supports metabolism",
    "It helps improve appetite and digestion",
    "It helps support healthy liver functions",
    "It has no added preservatives",
  ];

  const directions = [
    "5-10 ml twice daily with or without water or as advised by the physician",
    "Shake well before use",
  ];

  const safety = [
    "Store in a cool and dry place, away from direct sunlight",
    "Keep out of reach of children",
    "Keep the container tightly closed",
    "Do not use it if the seal is broken",
    "Consult your physician before using this product if you are pregnant, nursing, taking medication or have a medical condition",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900"
            asChild
          >
            <button onClick={() => router.back()}>
              <ChevronLeft className="h-5 w-5" />
              <span className="font-medium">Back</span>
            </button>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <Image
                src={"/images/medicin.avif"}
                alt={"product-image"}
                width={500}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4].map((image) => (
                <div
                  key={image}
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={"/images/medicin.avif"}
                    alt={"product-name"}
                    width={100}
                    height={100}
                    className="h-full w-full cursor-pointer object-cover transition-all hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="p-4 bg-white h-fit rounded-lg border">
            <div className="mb-6">
              <h1 className="mb-2 text-2xl font-bold">
                Nutrisrot Liver Nava-DS Syrup for Liver Detox Sugar Free
              </h1>
              <p className="mb-4 text-muted-foreground">by Cipla</p>

              <div className="mb-6 space-y-3">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-muted-foreground">Medicine Type:</div>
                  <div className="font-medium">Tablet</div>

                  <div className="text-muted-foreground">Quantity:</div>
                  <div className="font-medium">10 strips</div>

                  <div className="text-muted-foreground">Category:</div>
                  <div className="font-medium">XYZ</div>

                  <div className="text-muted-foreground">Subcategory:</div>
                  <div className="font-medium">ACI</div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="mb-2 text-lg font-semibold">Composition</h2>
                <ul className="list-inside list-disc space-y-1">
                  {composition.map((comp, index) => (
                    <li key={index} className="text-gray-700">
                      {comp.compostion_name}: {comp.quantity} {comp.unit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">SEND INQUIRY</Button>
              </DialogTrigger>
              <DialogContent>
                <EnquiryForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Product Description */}
        <Card className="mt-8 p-6">
          <h2 className="mb-4 text-xl font-bold">Product Description</h2>
          <div className="prose max-w-none">
            <p className="mb-6">
              A blend of pure ayurvedic herbs such as bhringaraja, bhumiamla,
              himsra, kasni, arjuna, kakamachi, guduchi with other ayurvedic
              extracts. This syrup helps protect the liver from hepatotoxins,
              prevents fatty liver, and supports healthy liver function to
              increase appetite and improve digestion. It has no added
              preservatives.
            </p>

            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">Key Ingredients</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-700">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">Key Benefits</h2>
                <ul className="list-disc pl-6 space-y-1">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-700">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Directions For Use
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  {directions.map((direction, index) => (
                    <li key={index} className="text-gray-700">
                      {direction}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">
                  Safety Information
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  {safety.map((info, index) => (
                    <li key={index} className="text-gray-700">
                      {info}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </Card>

        {/* Similar Products */}
        {/* {similarProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="mb-6 text-xl font-bold">Similar Products</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {similarProducts.map((similarProduct) => (
                <ProductCard
                  key={similarProduct.id}
                  product={similarProduct}
                  price={mockPriceData}
                  rating={mockRatingData}
                  badges={{
                    isSale: Math.random() > 0.5,
                    isBestSeller: Math.random() > 0.7,
                  }}
                />
              ))}
            </div>
          </div>
        )} */}

        {/* Inquiry Modal */}
        {/* <Dialog open={showInquiryModal} onOpenChange={setShowInquiryModal}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Product Inquiry</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    value={inquiryForm.firstName}
                    onChange={(e) =>
                      setInquiryForm({
                        ...inquiryForm,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    required
                    value={inquiryForm.lastName}
                    onChange={(e) =>
                      setInquiryForm({
                        ...inquiryForm,
                        lastName: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email (optional)</Label>
                <Input
                  id="email"
                  type="email"
                  value={inquiryForm.email || ""}
                  onChange={(e) =>
                    setInquiryForm({
                      ...inquiryForm,
                      email: e.target.value || null,
                    })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex gap-2">
                  <CountrySelect
                    value={inquiryForm.countryCode}
                    onValueChange={(value) =>
                      setInquiryForm({ ...inquiryForm, countryCode: value })
                    }
                  />
                  <Input
                    id="mobile"
                    type="tel"
                    required
                    value={inquiryForm.mobile_no}
                    onChange={(e) =>
                      setInquiryForm({
                        ...inquiryForm,
                        mobile_no: e.target.value,
                      })
                    }
                    placeholder="Mobile number"
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Quantity</Label>
                <div className="flex items-center space-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(false)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    min="1"
                    value={inquiryForm.quantity}
                    onChange={(e) =>
                      setInquiryForm({
                        ...inquiryForm,
                        quantity: Math.max(1, parseInt(e.target.value) || 1),
                      })
                    }
                    className="w-20 text-center"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(true)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={inquiryForm.message}
                  onChange={(e) =>
                    setInquiryForm({ ...inquiryForm, message: e.target.value })
                  }
                  placeholder="Enter any additional information or questions..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </DialogContent>
        </Dialog> */}
      </div>
    </div>
  );
}
