import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="text-xl font-bold mb-4 border-b-2 border-yellow-300 inline-block pb-2">Organization</h5>
            <ul className="text-sm">
              {[
                { name: 'Home', link: '/' },
                { name: 'About', link: '/about' },
                { name: 'Services', link: '/services' },
                { name: 'Contact', link: '/contact' },
                { name: 'Activities', link: '/activities' },
                { name: 'News & Events', link: '/news-events' },
                { name: 'Our Team', link: '/our-team' },
                { name: 'Videos', link: '/videos' },
                { name: 'Safe Use', link: '/safe-use' },
              ].map((item, index) => (
                <li key={index} className="mb-2 transition-colors duration-300 hover:text-yellow-300">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="text-xl font-bold mb-4 border-b-2 border-yellow-300 inline-block pb-2">Get In Touch</h5>
            <div className="text-sm">
              <p className="mb-2">113 Suraj Nagar (East) Civil Lines Jaipur - 302006</p>
              <p className="mb-2">contact(at)drcbscyber(dot)com</p>
              <p className="mb-2">98288 77777</p>
              <p className="mb-2">98875 33721</p>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h5 className="text-xl font-bold mb-4 border-b-2 border-yellow-300 inline-block pb-2">Nodal Officer</h5>
            <div className="text-sm">
              <p className="mb-2">Mr. Satyendra Singh, Cyber Security Analyst</p>
              <p className="mb-2">Satyendra(at)drcbscyber(dot)com</p>
              <p className="mb-2">+91 97833 80412</p>
              <p className="mb-2">0141 - 222 9475</p>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ul className="flex space-x-4">
            {[
              { icon: 'fab fa-facebook-f', link: 'https://facebook.com' },
              { icon: 'fab fa-twitter', link: 'https://twitter.com' },
              { icon: 'fab fa-linkedin-in', link: 'https://linkedin.com' },
              { icon: 'fab fa-instagram', link: 'https://instagram.com' },
            ].map((social, index) => (
              <li key={index}>
                <a href={social.link} className="text-white hover:text-yellow-300 transition duration-300 text-2xl">
                  <i className={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
