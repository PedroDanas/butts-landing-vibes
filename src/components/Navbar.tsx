
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-cdb-dark/80 backdrop-blur-md shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-pixel text-gradient">CDB</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
        
        <div className="hidden md:block">
          <Button className="bg-cdb-purple hover:bg-cdb-purple/80 text-white">
            Connect Wallet
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-cdb-purple">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => {
  return (
    <>
      <ScrollLink
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-foreground hover:text-cdb-purple cursor-pointer font-medium"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="collection"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-foreground hover:text-cdb-purple cursor-pointer font-medium"
      >
        Collection
      </ScrollLink>
      <ScrollLink
        to="roadmap"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-foreground hover:text-cdb-purple cursor-pointer font-medium"
      >
        Roadmap
      </ScrollLink>
      <ScrollLink
        to="faq"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="text-foreground hover:text-cdb-purple cursor-pointer font-medium"
      >
        FAQ
      </ScrollLink>
    </>
  );
};

export default Navbar;
