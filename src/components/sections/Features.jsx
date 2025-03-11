import { motion } from "framer-motion";
import { Zap, Shield, BarChart, Users, Globe, Cpu } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description:
        "Our solutions are optimized for speed and performance, ensuring your business operates efficiently.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Reliable",
      description:
        "We implement the highest security standards to keep your data safe and your systems running smoothly.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Data Analytics",
      description:
        "Gain valuable insights with our advanced analytics tools and make data-driven decisions.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "User-Friendly",
      description:
        "Intuitive interfaces designed with the user in mind, making technology accessible to everyone.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Global Reach",
      description:
        "Expand your business globally with our international solutions and support services.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-primary" />,
      title: "AI-Powered",
      description:
        "Leverage the power of artificial intelligence to automate processes and enhance productivity.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Key Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the powerful features that set our solutions apart and help
            your business thrive in today's competitive landscape.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
