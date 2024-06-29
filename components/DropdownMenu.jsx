import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black px-3 py-2 hover:text-blue-500 transition duration-300 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50"
        >
          {items.map((item, index) => (
            <Link key={index} href={item.link}>
              <a className="block px-4 py-2 text-black hover:bg-blue-500 hover:text-white transition duration-200">
                {item.name}
              </a>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
