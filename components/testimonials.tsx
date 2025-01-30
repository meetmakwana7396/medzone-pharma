import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager at TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    initials: "SJ",
    quote: "The innovative approach to problem-solving has dramatically improved our product development cycle. A game-changer for our team. The implementation strategy and attention to detail were exactly what we needed to take our project to the next level. We've seen remarkable improvements in team productivity and project outcomes since implementation.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer at InnovateTech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    initials: "MC",
    quote: "Exceptional service and outstanding results. The team went above and beyond my expectations.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UX Designer at DesignLab",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    initials: "ER",
    quote: "The attention to detail and creative solutions provided were exactly what we needed for our project. Their user-centered approach and innovative thinking helped us create an interface that our users absolutely love. The feedback from our customer base has been overwhelmingly positive since the launch. We're already planning our next collaboration.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO at StartupX",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    initials: "DK",
    quote: "Working with this team has transformed our workflow. Highly recommended for any tech project.",
  },
  {
    id: 5,
    name: "Lisa Patel",
    role: "Marketing Director at GrowthCo",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    initials: "LP",
    quote: "The impact on our business metrics has been remarkable. Since implementing their solutions, we've seen a 200% increase in user engagement and a significant boost in conversion rates. Couldn't be happier with the results and the ongoing support we receive. Their data-driven approach has transformed how we make marketing decisions.",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Frontend Developer at WebFlex",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    initials: "JW",
    quote: "The technical expertise and commitment to quality made our collaboration successful.",
  },
  {
    id: 7,
    name: "Sofia Martinez",
    role: "Product Designer at DesignHub",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    initials: "SM",
    quote: "Their understanding of user experience principles has elevated our product to new heights. The iterative design process and constant feedback loops ensured we were always moving in the right direction. The final product exceeded all our expectations and has received numerous industry accolades. The impact on our user satisfaction metrics has been nothing short of extraordinary.",
  },
  {
    id: 8,
    name: "Alex Thompson",
    role: "Engineering Lead at CloudTech",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    initials: "AT",
    quote: "The scalability and performance improvements have exceeded our expectations. Brilliant work!",
  },
  {
    id: 9,
    name: "Rachel Chang",
    role: "Data Scientist at AnalyticsPro",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    initials: "RC",
    quote: "Their data-driven approach and analytical skills have provided invaluable insights for our business. The custom dashboards and reporting tools they developed have transformed how we make decisions. The ROI on this project has been outstanding. We're particularly impressed with their ability to translate complex data into actionable insights.",
  },
  // {
  //   id: 10,
  //   name: "Marcus Foster",
  //   role: "DevOps Engineer at ServerPlus",
  //   avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  //   initials: "MF",
  //   quote: "The implementation of our new infrastructure has been flawless. Simply outstanding.",
  // },
  // {
  //   id: 11,
  //   name: "Nina Patel",
  //   role: "UI/UX Director at CreativeLabs",
  //   avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
  //   initials: "NP",
  //   quote: "Their creative solutions and attention to user needs have helped us create truly exceptional experiences. The way they balanced aesthetics with functionality was impressive. Our users have noticed the difference, and our satisfaction scores have improved significantly since the redesign. The documentation and handoff process were exceptionally well-managed.",
  // },
  // {
  //   id: 12,
  //   name: "Thomas Wright",
  //   role: "Tech Lead at InnovateX",
  //   avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
  //   initials: "TW",
  //   quote: "The level of technical excellence made every collaboration smooth and successful.",
  // }
];


const Testimonials = () => {
  return (
    <section className="py-20 relative bg-gradient-to-br from-blue-300 via-green-100 to-blue-100">
      <div className="container">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          What Clients Say About MedZone Pharma
        </h2>

        <section className="pb-12 mx-auto md:pb-20">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 [column-fill:_balance] mb-6">
            {testimonials?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 break-inside-avoid rounded-xl flex gap-4 flex-col"
              >
                <div className="flex gap-4 items-center">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.avatar}
                      alt="@shadcn"
                      className="object-cover"
                    />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-neutral-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p>{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
