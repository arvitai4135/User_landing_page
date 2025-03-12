import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "How do I register as a patient?",
      answer:
        "Registering as a patient is simple. Download our app, click on the 'Register' button, and follow the prompts to create your account. You'll need to provide basic information and verify your email or phone number to complete the registration process.",
    },
    {
      question: "How do video consultations work?",
      answer:
        "After booking an appointment, you'll receive a notification 10 minutes before your scheduled time. Simply open the app, go to your appointments section, and click on the 'Join Consultation' button. Ensure you have a stable internet connection and your device's camera and microphone permissions are enabled.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept multiple payment options including Credit/Debit Cards, UPI, Net Banking, and various digital wallets. All payment information is securely processed using industry-standard encryption to protect your financial data.",
    },
    {
      question: "How does medication delivery work?",
      answer:
        "You can upload your prescription through the app's 'Pharmacy' section. Our team will verify the prescription, process your order, and arrange for delivery to your specified address. You can track your order in real-time through the app and receive automated updates via SMS and email.",
    },
    {
      question: "How do doctors join the platform?",
      answer:
        "Doctors can be added by the Head Doctor or administrator. The admin will invite you via your Gmail address, and you'll receive a verification link with a default password. Upon first login, you'll be prompted to change your password and complete your professional profile.",
    },
    {
      question: "Is my medical data secure on the app?",
      answer:
        "Yes, we take data security very seriously. All medical records and personal information are encrypted and stored securely following healthcare industry standards and regulations. We implement strict access controls, and your data is never shared with third parties without your explicit consent.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our healthcare platform,
            features, and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center ${
                  openIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-muted"
                } transition-colors`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-card/50 rounded-b-lg border-t-0">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
