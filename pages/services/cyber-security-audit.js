import { useState } from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: "Comprehensive IT Security Audit",
    description: "A comprehensive audit of the entire IT infrastructure of an organization including its End point computers, Servers, Networking Devices, Wi-Fi, Firewall, Switches, Router, Web applications, Mobile applications, Communication devices, Storage technologies, Physical security etc.",
    symbol: "🔒"
  },
  {
    title: "IT Compliance Audit as per legal mandate",
    description: "Formulation & Review of Cyber (IT) Security Policies as per legal mandates & International Standardization.",
    symbol: "📜"
  },
  {
    title: "Data Security & Cyber Resilience Assessment",
    description: "Evaluation of data security measures and resilience strategies against cyber threats.",
    symbol: "🛡️"
  },
  {
    title: "Corporate Training",
    description: "Training sessions for corporate personnel on IT Security Policies and threats awareness.",
    symbol: "🎓"
  },
  {
    title: "Cyber Crime Forensic and Investigation",
    description: "Training and consulting for investigation procedures related to cyber crimes.",
    symbol: "🕵️‍♂️"
  },
  {
    title: "Learning & Education",
    description: "Training and internship programs for students and professionals in cyber security.",
    symbol: "📘"
  },
  {
    title: "Cyber Security Awareness",
    description: "Raising awareness about cyber security threats and best practices.",
    symbol: "🚨"
  },
  {
    title: "Prevention Through Awareness",
    description: "Educational programs aimed at preventing cyber threats through awareness.",
    symbol: "🔍"
  },
  {
    title: "Secure Software Development",
    description: "Consulting and training for secure software development practices.",
    symbol: "🛠️"
  }
];

const CyberSecurityAudit = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (index) => {
    setSelectedService(servicesData[index]);
  };

  return (
    <div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto p-4 relative"
        style={{ backgroundImage: "url('/securityaudit.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-4xl font-bold mb-4 text-white"
        >
          Cyber (IT) Security Audit & Assurance
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 flex"
        >
          <ul className="list-disc pl-5 mr-8">
            {servicesData.map((service, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="mb-2 text-gray-700 cursor-pointer"
                onClick={() => handleServiceClick(index)}
              >
                {service.symbol} {service.title}
              </motion.li>
            ))}
          </ul>
          <div className="flex-1">
            {selectedService && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">{selectedService.title}</h3>
                <p className="text-justify">{selectedService.description}</p>
                <a href="#" className="text-blue-500 underline mt-2 inline-block">Know More</a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default CyberSecurityAudit;
