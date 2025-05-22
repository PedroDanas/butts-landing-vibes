
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-pixel text-gradient">CryptoDickButts</span>
            </div>
            <p className="text-foreground/70 max-w-md">
              CryptoDickButts is a collection of 5,200 unique NFTs on the Ethereum blockchain, 
              created by the legendary comic artist K.C. Green.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-foreground/70 hover:text-cdb-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4c0 0-4 0-7 0s-7 5-8 5c-1 0-3 0-3 0v3c0 0 2 0 3 0s7 5 8 5 7 0 7 0z"></path><path d="M9 12h10" />
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-cdb-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12h8"></path>
                  <path d="M8 16h4"></path>
                  <path d="M9 8h1"></path>
                  <path d="M14 8h1"></path>
                  <path d="M19.364 6.364C21.879 8.879 21.879 12.121 19.364 14.636L14.121 19.879C12.879 21.121 10.879 21.121 9.636 19.879L4.364 14.636C1.879 12.121 1.879 8.879 4.364 6.364C6.879 3.879 10.121 3.879 12.636 6.364L14 7.636L15.364 6.364C17.879 3.879 21.121 3.879 23.636 6.364"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-cdb-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <ScrollLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-foreground/70 hover:text-cdb-purple cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="collection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-foreground/70 hover:text-cdb-purple cursor-pointer"
                >
                  Collection
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="roadmap"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-foreground/70 hover:text-cdb-purple cursor-pointer"
                >
                  Roadmap
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="faq"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-foreground/70 hover:text-cdb-purple cursor-pointer"
                >
                  FAQ
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-cdb-purple">OpenSea</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cdb-purple">LooksRare</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cdb-purple">Etherscan</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cdb-purple">DAO</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-cdb-purple">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center md:flex md:justify-between">
          <p className="text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} CryptoDickButts. All rights reserved.
          </p>
          <div className="flex space-x-8 justify-center">
            <a href="#" className="text-foreground/60 hover:text-cdb-purple">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-cdb-purple">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
