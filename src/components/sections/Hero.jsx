import { Button } from "../ui/button";
import { motion } from "framer-motion";
import image from "../../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Healthcare at Your{" "}
              <span className="text-primary">Fingertips</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Connect with top doctors, schedule virtual consultations, and get
              medications delivered to your doorstep - all in one secure app.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> */}
            {/* <Button size="lg" className="text-base bg-primary text-white">
                Register Now
              </Button> */}
            {/* <Button
                size="lg"
                variant="outline"
                className="text-base border-primary text-primary"
              >
                Learn More
              </Button> */}
            {/* </div> */}
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <img
                      src={`../../assets/hero-image.png?height=40&width=40&text=${i}`}
                      alt={`User ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div> */}
              <div className="ml-4">
                <p className="text-sm font-medium">
                  Trusted by{" "}
                  <span className="text-primary font-bold">10,000+</span>{" "}
                  patients
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            {/* <div className="relative z-10 rounded-lg overflow-hidden shadow-xl"> */}
            <img
              // src="../../assets/hero-image.png?height=600&width=800&text=Healthcare+App"
              src={image}
              alt="Healthcare App Interface"
              className="w-96 h-auto"
            />
            {/* </div> */}

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
