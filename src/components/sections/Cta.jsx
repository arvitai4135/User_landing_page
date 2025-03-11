import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center text-primary-foreground relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground/5 to-primary-foreground/0"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-foreground/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary-foreground/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have taken their business
              to the next level with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base">
                Get Started Today
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
