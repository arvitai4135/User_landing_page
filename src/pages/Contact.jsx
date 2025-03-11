// import Header from "@/components/header";
// import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Button } from "../components/ui/Button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
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
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <p className="text-lg text-center text-muted-foreground mb-12">
            We'd love to hear from you. Please fill out the form below or use
            our contact information.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Our Location</h3>
                  <p className="text-muted-foreground">
                    123 Business Avenue, Suite 100
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Phone Number</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Email Address</h3>
                  <p className="text-muted-foreground">
                    contact@yourcompany.com
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <iframe
                  className="w-full h-64 rounded-lg border"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143067466!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647886100000!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input id="name" placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input id="email" type="email" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input id="subject" placeholder="How can we help you?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message here..."
                  className="min-h-[150px]"
                />
              </div>

              <Button className="w-full">Send Message</Button>
            </motion.div>
          </div>
        </motion.div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
