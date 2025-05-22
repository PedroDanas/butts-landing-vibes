
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-cdb-purple/20 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cdb-teal/20 filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cdb-pink/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Welcome to <span className="text-gradient font-pixel">CryptoDickButts</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-2xl mx-auto lg:mx-0">
              The most hilariously irreverent NFT collection on the blockchain. 
              Own a piece of digital art history that doesn't take itself too seriously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-cdb-purple hover:bg-cdb-purple/80 text-white btn-glow text-lg py-6 px-8">
                Explore Collection
              </Button>
              <Button variant="outline" className="border-cdb-teal text-cdb-teal hover:bg-cdb-teal/10 text-lg py-6 px-8">
                Join Discord
              </Button>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start space-x-6">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-cdb-purple">5,200+</span>
                <span className="text-sm text-foreground/60">Total Items</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-cdb-teal">3.2 ETH</span>
                <span className="text-sm text-foreground/60">Floor Price</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-cdb-green">24K+</span>
                <span className="text-sm text-foreground/60">Owners</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-2 gap-4 relative max-w-[400px] mx-auto">
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="rounded-2xl overflow-hidden shadow-lg shadow-cdb-purple/20 bg-[#a5ffa5]"
              >
                <img 
                  src="/lovable-uploads/4ae412c7-e663-4cd5-a091-92cafa32200a.png" 
                  alt="CryptoDickButt NFT" 
                  className="w-full h-auto max-w-[150px] mx-auto"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg shadow-cdb-teal/20 mt-12 bg-[#a5ffa5]"
              >
                <img 
                  src="/lovable-uploads/4ae412c7-e663-4cd5-a091-92cafa32200a.png" 
                  alt="CryptoDickButt NFT" 
                  className="w-full h-auto max-w-[150px] mx-auto"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
                className="rounded-2xl overflow-hidden shadow-lg shadow-cdb-green/20 bg-[#a5ffa5]"
              >
                <img 
                  src="/lovable-uploads/4ae412c7-e663-4cd5-a091-92cafa32200a.png" 
                  alt="CryptoDickButt NFT" 
                  className="w-full h-auto max-w-[150px] mx-auto"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
                className="rounded-2xl overflow-hidden shadow-lg shadow-cdb-yellow/20 mt-12 bg-[#a5ffa5]"
              >
                <img 
                  src="/lovable-uploads/4ae412c7-e663-4cd5-a091-92cafa32200a.png" 
                  alt="CryptoDickButt NFT" 
                  className="w-full h-auto max-w-[150px] mx-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col">
        <span className="text-foreground/60 mb-2">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-cdb-purple"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
