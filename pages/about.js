import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto p-4 relative"
        style={{ backgroundImage: "url('/about.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-4xl font-bold mb-4 text-white text-center"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">Our Mission</h3>
            <p className="text-gray-700 text-justify">
              Our mission is to provide top-notch cyber security services to help organizations protect their data and systems from cyber threats. We aim to educate and empower our clients to understand and mitigate cyber risks effectively.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">Our Vision</h3>
            <p className="text-gray-700 text-justify">
              Our vision is to become a leading cyber security firm recognized for our expertise, innovative solutions, and commitment to client success. We strive to create a safer digital world for everyone.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">Our Values</h3>
            <p className="text-gray-700 text-justify">
              Integrity, excellence, and innovation are the core values that drive our approach to cyber security. We are dedicated to providing exceptional service and building long-term relationships with our clients.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">Our Services</h3>
            <p className="text-gray-700 text-justify">
              We offer a wide range of cyber security services, including risk assessments, penetration testing, incident response, and more. Our team of experts is equipped with the knowledge and tools to protect your organization from cyber threats.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">Our Team</h3>
            <p className="text-gray-700 text-justify">
              Our team comprises experienced cyber security professionals dedicated to helping our clients secure their digital assets. We work collaboratively to deliver effective solutions tailored to your specific needs.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2 text-center">Contact Us</h3>
            <p className="text-gray-700 text-justify">
              If you have any questions or would like to learn more about our services, please don't hesitate to contact us. We are here to help you navigate the complex world of cyber security.
            </p>
          </motion.div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default About;
