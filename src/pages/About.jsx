// import Header from "../components/header";
// import Footer from "../components/footer";
import { motion } from "framer-motion";
// import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main className="container mx-auto py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Learn more about our company, our mission, and the team behind our
            success.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, our company began with a simple mission: to
                create innovative solutions that make a difference. What started
                as a small team of passionate individuals has grown into a
                thriving organization dedicated to excellence.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've helped hundreds of businesses transform
                their digital presence and achieve their goals. Our commitment
                to quality and customer satisfaction has been the cornerstone of
                our success.
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Over 500+ completed projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Team of 50+ experts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Serving clients in 20+ countries</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Our team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries and explore new technologies to
                  deliver cutting-edge solutions.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty and transparency in all our business
                  dealings and relationships.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from customer
                  service to product development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Our mission is to empower businesses with innovative digital
              solutions that drive growth, enhance customer experiences, and
              create lasting value. We are committed to excellence, continuous
              improvement, and building long-term partnerships with our clients.
            </p>
          </motion.div>
        </motion.div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
