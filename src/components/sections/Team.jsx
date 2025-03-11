import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";
// import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in the industry, John leads our company with vision and expertise.",
      image: "/placeholder.svg?height=400&width=400&text=JD",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Jane Smith",
      position: "CTO",
      bio: "Jane brings technical excellence and innovation to our team, overseeing all technological developments.",
      image: "/placeholder.svg?height=400&width=400&text=JS",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Michael Brown",
      position: "Design Director",
      bio: "Michael's creative vision ensures our products are not only functional but also beautifully designed.",
      image: "/placeholder.svg?height=400&width=400&text=MB",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Manager",
      bio: "Sarah develops and implements our marketing strategies to drive growth and brand awareness.",
      image: "/placeholder.svg?height=400&width=400&text=SJ",
      social: {
        twitter: "#",
        linkedin: "#",
        facebook: "#",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Our talented team of professionals is dedicated to delivering
            exceptional results for our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    to={member.social.facebook}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Facebook`}
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    to={member.social.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    to={member.social.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
