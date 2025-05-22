
import { motion } from "framer-motion";

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q3 2023",
      title: "Community Expansion",
      description: "Grow our Discord community and establish partnerships with other NFT projects.",
      completed: true
    },
    {
      quarter: "Q4 2023",
      title: "Merch Store Launch",
      description: "Release exclusive merchandise available only to CryptoDickButts holders.",
      completed: true
    },
    {
      quarter: "Q1 2024",
      title: "CDB Metaverse Integration",
      description: "Create interactive experiences in popular metaverse platforms.",
      completed: false
    },
    {
      quarter: "Q2 2024",
      title: "Community Treasury",
      description: "Establish a community-controlled treasury for future development.",
      completed: false
    },
    {
      quarter: "Q3 2024",
      title: "CDB Mini-Game",
      description: "Launch an interactive game featuring CryptoDickButts characters.",
      completed: false
    },
    {
      quarter: "Q4 2024",
      title: "Series 4 Expansion",
      description: "Explore possibilities for expanding the CDB universe with new characters.",
      completed: false
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cdb-yellow/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cdb-pink/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-lg text-foreground/70">
            The journey of CryptoDickButts is full of exciting milestones and community-driven innovations.
          </p>
        </motion.div>
        
        <div className="relative mx-auto max-w-5xl">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cdb-purple via-cdb-teal to-cdb-green rounded-full"></div>
          
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeIn}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                <div className="mb-2">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    item.completed 
                      ? "bg-cdb-green/20 text-cdb-green" 
                      : "bg-cdb-yellow/20 text-cdb-yellow"
                  }`}>
                    {item.quarter}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
              
              <div className="absolute left-1/2 top-2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center">
                <div className={`w-6 h-6 rounded-full ${
                  item.completed 
                    ? "bg-cdb-green animate-pulse-glow" 
                    : "bg-foreground/20"
                }`}></div>
              </div>
              
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
