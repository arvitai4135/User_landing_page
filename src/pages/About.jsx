import { motion } from "framer-motion";
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
          <h1 className="text-4xl font-bold text-center mb-8">
            About MediCare
          </h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Learn more about our healthcare facility, our mission, and the
            dedicated medical professionals behind our success.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2015, MediCare began with a clear vision: to provide
                accessible, high-quality healthcare with a patient-centered
                approach. What started as a small clinic with dedicated
                physicians has grown into a comprehensive healthcare facility
                serving thousands of patients.
              </p>
              <p className="text-muted-foreground mb-4">
                Over the years, we've helped countless individuals and families
                achieve better health outcomes through personalized care plans,
                preventive medicine, and the latest treatment options. Our
                commitment to excellence and compassionate care has made us one
                of the most trusted healthcare providers in the region.
              </p>
              <div className="space-y-2 mt-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Over 20,000+ patients treated successfully</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Team of 30+ board-certified specialists</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>State-of-the-art medical equipment and facilities</span>
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
                src="/team.png"
                alt="MediCare medical team"
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
                <h3 className="text-xl font-bold mb-3">
                  Patient-Centered Care
                </h3>
                <p className="text-muted-foreground">
                  We place patients at the center of everything we do, listening
                  to their needs and involving them in treatment decisions.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Medical Excellence</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards of medical practice, staying
                  current with the latest advances in healthcare.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p className="text-muted-foreground">
                  We treat each patient with empathy, dignity, and respect,
                  understanding the human side of healthcare.
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
              Our mission is to improve the health and wellbeing of the
              communities we serve through exceptional care, innovative
              treatments, and preventive health education. We are committed to
              making quality healthcare accessible to all and building lasting
              relationships with our patients based on trust and personalized
              attention.
            </p>
          </motion.div>
        </motion.div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
