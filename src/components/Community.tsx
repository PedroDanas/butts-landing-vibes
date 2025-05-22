
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Community = () => {
  const communities = [
    {
      name: "Discord",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 12h8"></path>
          <path d="M8 16h4"></path>
          <path d="M9 8h1"></path>
          <path d="M14 8h1"></path>
          <path d="M19.364 6.364C21.879 8.879 21.879 12.121 19.364 14.636L14.121 19.879C12.879 21.121 10.879 21.121 9.636 19.879L4.364 14.636C1.879 12.121 1.879 8.879 4.364 6.364C6.879 3.879 10.121 3.879 12.636 6.364L14 7.636L15.364 6.364C17.879 3.879 21.121 3.879 23.636 6.364"></path>
        </svg>
      ),
      description: "Join over 25,000 members in our Discord community for daily discussions.",
      buttonText: "Join Discord",
      buttonColor: "bg-cdb-purple hover:bg-cdb-purple/80"
    },
    {
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4c0 0-4 0-7 0s-7 5-8 5c-1 0-3 0-3 0v3c0 0 2 0 3 0s7 5 8 5 7 0 7 0z"></path><path d="M9 12h10" />
        </svg>
      ),
      description: "Follow us on Twitter for the latest news and announcements.",
      buttonText: "Follow on Twitter",
      buttonColor: "bg-cdb-teal hover:bg-cdb-teal/80"
    },
    {
      name: "OpenSea",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6h10"></path><path d="M6 12h9"></path><path d="M11 18h7"></path>
        </svg>
      ),
      description: "Browse and trade CryptoDickButts NFTs on OpenSea.",
      buttonText: "View Collection",
      buttonColor: "bg-cdb-green hover:bg-cdb-green/80"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-10 left-1/4 w-96 h-96 bg-cdb-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-10 right-1/4 w-96 h-96 bg-cdb-teal/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our <span className="text-gradient">Community</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Connect with fellow CryptoDickButts enthusiasts and stay updated on the latest developments.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              className="bg-background/50 backdrop-blur-md rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:shadow-cdb-purple/10 transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-muted/50 rounded-full mb-4">
                  {community.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{community.name}</h3>
                <p className="text-foreground/70 mb-6">{community.description}</p>
                <Button className={`w-full ${community.buttonColor} text-white`}>
                  {community.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
          className="mt-20 bg-gradient-to-r from-cdb-purple/20 via-cdb-teal/20 to-cdb-green/20 rounded-2xl p-1"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-foreground/70">
                  Stay up to date with all things CryptoDickButts, including drop announcements, community events, and more.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button className="bg-cdb-purple hover:bg-cdb-purple/80 text-white whitespace-nowrap btn-glow">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
