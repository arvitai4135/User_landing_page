import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications tailored to your specific business needs and goals.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/web-development",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/mobile-development",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that enhances usability and creates engaging digital experiences.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/ui-ux-design",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to increase your online presence and drive growth.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/digital-marketing",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of services to help your business
            succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
