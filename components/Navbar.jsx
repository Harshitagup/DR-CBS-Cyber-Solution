import Link from 'next/link';
import Image from 'next/image';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  const homeItems = [
    { name: 'About', link: '/about' },
    { name: 'Home 2', link: '/' },
  ];

  const servicesItems = [
    { name: 'Cyber Security Audit', link: '/services/cyber-security-audit' },
    { name: 'Service', link: '/services' },
  ];

  return (
    <nav className="p-4 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/images.jpg" alt="Company Logo" width={300} height={70} />
          </a>
        </Link>
        <div className="flex space-x-4">
          <DropdownMenu title="Home" items={homeItems} />
          <Link href="/about">
            <a className="text-black px-3 py-2 hover:text-blue-500 transition duration-300">About</a>
          </Link>
          <DropdownMenu title="Services" items={servicesItems} />
          <Link href="/contact">
            <a className="text-black px-3 py-2 hover:text-blue-500 transition duration-300">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
