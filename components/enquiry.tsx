import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Enquiry = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              We Ensure You Will Always Get The Best Result
            </h2>
            <p className="text-gray-600">
              Experience the MedZone Pharma difference today. Whether you have
              inquiries about our products or would like to explore partnership
              opportunities, we're here to assist you.
            </p>
            <br />
            <p className="text-gray-600 mb-8">
              Contact us to learn more about how we can support your
              pharmaceutical needs. Welcome to MedZone Pharma, your trusted
              partner in healthcare solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-blue-600" />
                <p>123 Healthcare Avenue, Medical District, NY 10001</p>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <p>contact@pharmacare.com</p>
              </div>
            </div>
          </div>
          <div>
            <Card className="bg-transparent border-none shadow-none">
              <h3 className="text-3xl mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <Input
                    placeholder="First Name"
                    className="py-4 px-4 text-lg h-16"
                  />
                  <Input
                    placeholder="Last Name"
                    className="py-4 px-4 text-lg h-16"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="py-4 px-4 text-lg h-16"
                />
                <Input
                  placeholder="Subject"
                  className="py-4 px-4 text-lg h-16"
                />
                <Textarea
                  placeholder="Your Message"
                  className="h-48 py-4 px-4 text-lg"
                />
                <Button className="!p-4 !px-8 w-auto h-auto bg-blue-600 hover:bg-blue-800 text-lg rounded-none shadow-lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enquiry;
