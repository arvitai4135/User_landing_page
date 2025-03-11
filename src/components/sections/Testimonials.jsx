import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Working with this team has been an absolute pleasure. They delivered our project on time and exceeded our expectations in every way.",
      author: "Emily Johnson",
      position: "CEO, TechStart Inc.",
      image: "/placeholder.svg?height=100&width=100&text=EJ",
    },
    {
      quote:
        "The attention to detail and level of customer service we received was outstanding. I highly recommend their services to anyone looking for quality work.",
      author: "David Wilson",
      position: "Marketing Director, GrowthCo",
      image: "/placeholder.svg?height=100&width=100&text=DW",
    },
    {
      quote:
        "Their innovative approach to problem-solving helped us overcome challenges we'd been facing for years. A truly transformative partnership.",
      author: "Sophia Martinez",
      position: "CTO, InnovateX",
      image: "/placeholder.svg?height=100&width=100&text=SM",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div
            className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-primary/10"
            aria-hidden="true"
          >
            <Quote className="h-24 w-24" />
          </div>

          <div className="relative z-10 bg-card rounded-lg p-8 md:p-12 shadow-md">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  <img
                    src={"/placeholder.svg"}
                    alt={testimonials[current].author}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-bold">
                  {testimonials[current].author}
                </h4>
                <p className="text-primary">{testimonials[current].position}</p>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 hidden md:block">
              <button
                onClick={() => {
                  prev();
                  setAutoplay(false);
                }}
                className="bg-background rounded-full p-2 shadow-md hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 hidden md:block">
              <button
                onClick={() => {
                  next();
                  setAutoplay(false);
                }}
                className="bg-background rounded-full p-2 shadow-md hover:bg-muted transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
