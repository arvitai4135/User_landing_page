import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "For Patients",
      description:
        "Register, create profiles, schedule appointments, chat with doctors, make secure payments, and order medications with doorstep delivery.",
      image: "/placeholder.svg?height=300&width=400&text=Patients",
      // link: "/patient-services",
    },
    {
      title: "For Doctors",
      description:
        "Manage your profile, schedule, and patient interactions. Conduct video consultations, provide prescriptions, and manage your practice efficiently.",
      image: "/placeholder.svg?height=300&width=400&text=Doctors",
      // link: "/doctor-services",
    },
    {
      title: "For Head Doctors",
      description:
        "Manage your clinic, add new doctors, assign patient cases, review prescriptions, and manage the entire healthcare workflow seamlessly.",
      image: "/placeholder.svg?height=300&width=400&text=Administrators",
      // link: "/admin-services",
    },
    {
      title: "Pharmacy Services",
      description:
        "Integrated medicine ordering, prescription verification, real-time delivery tracking, and automated order updates for a complete healthcare experience.",
      image: "/placeholder.svg?height=300&width=400&text=Pharmacy",
      // link: "/pharmacy-services",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">User Services</h2>
          <p className="text-lg text-muted-foreground">
            Our comprehensive healthcare platform offers tailored services for
            patients, doctors, administrators, and pharmacy integration.
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
                    className="object-cover transition-transform duration-500 group-hover:scale-105 w-full h-full"
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
