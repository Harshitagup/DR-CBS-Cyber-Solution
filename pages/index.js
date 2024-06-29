import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      
      <main className="container mx-auto p-4 bg-cover bg-center" style={{ backgroundImage: 'url(/about.jpg)', color: '#fff' }}>
        {isClient && (
          <>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8 p-4 rounded-lg shadow-lg text-center"
              
            >
              <motion.h1
                className="text-4xl font-bold mb-4"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-white"
                >
                  Welcome to{' '}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white-300"
                >
                  DR CBS Cyber Security Services LLP
                </motion.span>
              </motion.h1>
            </motion.section>

            <motion.section
              id="cert-in-empanelled"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-8 p-4 bg-black bg-opacity-70 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-center text-white">CERT-In Empanelled</h2>
              <p className="text-justify text-yellow hover:text-white-700">
                DR CBS Cyber Security Services LLP is now CERT-In Empanelled IT Security Auditing Organisation. DR CBS Cyber Security Services LLP is the first and only CERT-In Empanelled IT Security Auditing Organisation in Rajasthan. Only the CERT-In empanelled organisation is authorized to conduct IT Security Audit of Critical IT Infrastructure of Government and Body Corporates connected with Indian Economy.
              </p>
            </motion.section>

            <motion.section
              id="ceo"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mb-8 p-4 bg-white bg-opacity-40 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-center text-red">Meet Our CEO</h2>
              <div className="flex flex-wrap justify-center items-start gap-8">
                <div className="flex flex-col items-center">
                  <img src="/download.jpg" alt="Dr. C.B. Sharma IPS (R.)" className="w-48 h-48 rounded-full mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-center text-red">Dr. C.B. Sharma IPS (R.)</h3>
                  <p className="text-xl font-semibold mb-4 text-center text-red">Founder & CEO</p>
                  
                  
                </div>
                <div className="bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-w-md">
                  <h4 className="text-xl font-semibold mt-4 mb-2 text-center text-white">Qualifications & Experience</h4>
                  <p className="text-blue-200 text-justify hover:text-blue-500">
                    Dr. CB Sharma has over three decades of experience in crime investigation and cyber security. He has held various prestigious positions and received numerous accolades, including President’s Police Medal for Distinguished Services.
                  </p>
                </div>
              </div>
            </motion.section>

            <motion.section
              id="services"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mb-8 p-4 bg-white bg-opacity-40 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-4 text-center text-white">Our Services</h2>
              <div className="flex flex-wrap justify-center items-start gap-8">
                <div className="bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-w-sm">
                  <h3 className="text-xl font-semibold mb-2 text-center text-white">Cyber Security Consulting</h3>
                  <p className="text-white-200 text-justify hover:text-yellow-500">
                    We offer expert consultancy services to help organizations enhance their cyber security posture, assess risks, and implement effective security strategies.
                  </p>
                </div>
                <div className="bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-w-sm">
                  <h3 className="text-xl font-semibold mb-2 text-center text-white">IT Security Audits</h3>
                  <p className="text-white-200 text-justify hover:text-blue-500">
                    Our comprehensive IT security audits ensure that your systems and networks are secure, compliant, and protected against potential threats.
                  </p>
                </div>
                <div className="bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-w-sm">
                  <h3 className="text-xl font-semibold mb-2 text-center text-white">Incident Response</h3>
                  <p className="text-white-200 text-justify hover:text-red-500">
                    We provide rapid incident response services to help you quickly recover from security breaches and mitigate damage.
                  </p>
                </div>
                <div className="bg-black bg-opacity-70 p-4 rounded-lg shadow-lg max-w-sm">
                <h3 className="text-xl font-semibold mb-2 text-center" style={{ color: '#fffff0' }}>Training & Awareness</h3>
                <p className="text-white-500 text-justify hover:text-green-700">
                    Our training programs are designed to educate your staff on the latest cyber threats and best practices to keep your organization secure.
                  </p>
                </div>
              </div>
            </motion.section>
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
