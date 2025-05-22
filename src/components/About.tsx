
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cdb-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cdb-teal/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            About <span className="text-gradient">CryptoDickButts</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-foreground/70"
          >
            CryptoDickButts is not just another NFT collection - it's a cultural phenomenon and a community united by humor, art, and web3 innovation.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cdb-purple via-cdb-teal to-cdb-green rounded-xl blur-md opacity-75"></div>
              <div className="relative bg-background rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://source.unsplash.com/random/800x800/?pixel,nft,collection" 
                  alt="CryptoDickButts Collection" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">The CryptoDickButts Story</h3>
            <p className="text-foreground/70 mb-6">
              Born from the creative mind of the renowned comic artist K.C. Green in 2021, CryptoDickButts started as Series 1 with 161 unique characters. The collection expanded with Series 3, featuring 5,200 randomly generated CDBs with various attributes and accessories.
            </p>
            <p className="text-foreground/70 mb-6">
              What began as a joke quickly evolved into one of the most recognizable and beloved collections in the NFT space, known for its irreverent humor and distinctive pixel art style.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-cdb-purple/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cdb-purple">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Community-Driven</h4>
                  <p className="text-foreground/70">Our passionate community drives the project's evolution and success.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-cdb-teal/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cdb-teal">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Cultural Impact</h4>
                  <p className="text-foreground/70">CryptoDickButts has transcended NFTs to become a cultural meme.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-cdb-green/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cdb-green">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Future Innovation</h4>
                  <p className="text-foreground/70">Constantly evolving with new features and collaborative projects.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
