import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of services including web development, mobile app development, UI/UX design, digital marketing, and IT consulting. Our team of experts works closely with clients to deliver tailored solutions that meet their specific needs and goals.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your project specifications.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer flexible pricing options including fixed-price quotes for well-defined projects and time-and-materials billing for projects with evolving requirements. We work with clients to find a pricing structure that fits their budget and project needs. Contact us for a customized quote.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer various maintenance and support packages to ensure your digital products continue to perform optimally after launch. These packages include regular updates, security patches, performance monitoring, and technical support. We can tailor a support plan to meet your specific needs.",
    },
    {
      question: "How do you ensure the security of my website or application?",
      answer:
        "Security is a top priority in all our development projects. We implement industry best practices including secure coding standards, regular security audits, encryption, secure authentication methods, and protection against common vulnerabilities. We also provide recommendations for ongoing security maintenance.",
    },
    {
      question:
        "Can you help with an existing project that needs improvements?",
      answer:
        "We frequently work with clients to improve, update, or expand existing digital products. Our team can perform a thorough assessment of your current project, identify areas for improvement, and implement the necessary changes to enhance functionality, performance, and user experience.",
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
            Find answers to common questions about our services, process, and
            more.
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
                // onClick={() => toggleFaq(index)}
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
