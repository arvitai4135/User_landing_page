import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This app has transformed how I access healthcare. I can connect with my doctor instantly, and the medicine delivery is so convenient!",
      author: "Sarah Johnson",
      position: "Patient",
      image: "/placeholder.svg?height=100&width=100&text=SJ",
    },
    {
      quote:
        "As a doctor, this platform has helped me manage my patients more efficiently. The video consultation features are seamless and secure.",
      author: "Dr. Michael Chen",
      position: "Cardiologist",
      image: "/placeholder.svg?height=100&width=100&text=MC",
    },
    {
      quote:
        "The prescription upload feature and medicine delivery service saved me so much time. I highly recommend this app to everyone!",
      author: "Priya Sharma",
      position: "Patient",
      image: "/placeholder.svg?height=100&width=100&text=PS",
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
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Read about the experiences of patients and healthcare providers who
            use our platform.
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
                    src={testimonials[current].image}
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
