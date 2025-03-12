import { motion } from "framer-motion";
import {
  Video,
  MessageSquare,
  Calendar,
  CreditCard,
  Pill,
  FileText,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Video className="h-10 w-10 text-primary" />,
      title: "Video Consultations",
      description:
        "Connect with doctors through high-quality video calls for face-to-face consultations from the comfort of your home.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Secure Messaging",
      description:
        "Chat with your healthcare providers through our encrypted messaging system for quick questions and follow-ups.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Easy Scheduling",
      description:
        "Book, reschedule, or cancel appointments with just a few taps. Receive timely reminders for upcoming consultations.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Multiple Payment Options",
      description:
        "Pay securely using Credit/Debit Cards, UPI, Net Banking, or Digital Wallets with our integrated payment gateway.",
    },
    {
      icon: <Pill className="h-10 w-10 text-primary" />,
      title: "Medication Delivery",
      description:
        "Upload prescriptions and get medicines delivered to your doorstep. Track orders in real-time through our app.",
    },
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: "Digital Health Records",
      description:
        "Store and access all your medical records, prescriptions, and test results in one secure, centralized location.",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Features</h2>
          <p className="text-lg text-muted-foreground">
            Discover the powerful features that make healthcare accessible,
            convenient, and secure for patients and healthcare providers.
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
