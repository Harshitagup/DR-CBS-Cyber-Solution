import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    {
      title: "Cyber (IT) Security Audit & Assurance",
      description: "A comprehensive audit of the entire IT infrastructure of an organization including its End point computers, Servers, Networking Devices, Wi-Fi, Firewall, Switches, Router, Web applications, Mobile applications, Communication devices, Storage technologies, Physical security etc.",
      symbol: "🔒",
      link: "/cyber-security-audit"
    },
    {
      title: "Data Security & Cyber Resilience Assessment",
      description: "In This type of audit we are doing like Formulation & Review of Cyber (IT) Security Policies as per legal mandates & International Standardization.",
      symbol: "🛡️",
      link: "/data-security"
    },
    {
      title: "Corporate Training",
      description: "We Provide training to corporate personnel about the legal mandate and international standardizations, awareness of IT Security Policies, various IT Security threats to an organization...",
      symbol: "🎓",
      link: "/corporate-training"
    },
    {
      title: "Cyber Crime Forensic and Investigation",
      description: "Training Program for “Investigation of Cyber Crime”, in which training is imparted to the investigating officers on legal, technical, forensic aspects regarding registration of FIR, SOP of evidences (relevant and admissible digital/ electronic) in the computer resource..",
      symbol: "🕵️‍♂️",
      link: "/cyber-crime-forensic"
    },
    {
      title: "Learning & Educations",
      description: "We also provide Training & Internship programs to engineering students, IT professionals, technocrats and law students to improve their skills in the field of cyber ....",
      symbol: "📚",
      link: "/learning-education"
    },
    {
      title: "Cyber Security Awareness",
      description: "Digital technology has made our lives easier, has brought innumerable benefits to the society but at the same time we are facing new serious threats.....",
      symbol: "🚨",
      link: "/cyber-security-awareness"
    },
    {
      title: "Prevention Through Awareness",
      description: "Secure Software Development: We are in the constant fear of unauthorized access to our valuable and secret data being revealed to hackers, due to some common loopholes and vulnerability in codes ....",
      symbol: "🛠️",
      link: "/prevention-through-awareness"
    },
    {
      title: "Secure Software Development",
      description: "We provide secure software development services, ensuring that your applications are built with robust security measures from the ground up.",
      symbol: "🔐",
      link: "/secure-software-development"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/forensic.jpg')" }}
    >
      <div className="container mx-auto px-4 py-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-4xl font-bold mb-8 text-center text-white"
        >
          Our Services
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              symbol={service.symbol}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ title, description, symbol, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
    >
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">{symbol}</span>
        <h3 className="text-xl font-bold text-blue-600">{title}</h3>
      </div>
      <p className="text-justify whitespace-pre-line mb-4">{description}</p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        href={link}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-700"
      >
        Know More
      </motion.a>
    </motion.div>
  );
};

export default Services;
