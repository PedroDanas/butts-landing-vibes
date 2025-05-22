
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What are CryptoDickButts?",
      answer: "CryptoDickButts (CDBs) are a collection of 5,200 uniquely generated NFTs on the Ethereum blockchain. Created by artist K.C. Green, they feature pixelated characters with various traits and accessories, known for their irreverent humor."
    },
    {
      question: "How can I buy a CryptoDickButt NFT?",
      answer: "CryptoDickButts can be purchased on secondary marketplaces like OpenSea, LooksRare, and X2Y2. You'll need an Ethereum wallet (like MetaMask) and ETH to make a purchase."
    },
    {
      question: "What's the difference between Series 1 and Series 3?",
      answer: "Series 1 consists of the original 161 CDBs, which are hand-drawn and considered rare collectibles. Series 3 expanded the collection to 5,200 CDBs with algorithmically generated traits and more variety."
    },
    {
      question: "Do I own the rights to my CryptoDickButt NFT?",
      answer: "Yes, CDB NFT holders receive full commercial rights to the specific CryptoDickButt they own, allowing for merchandise creation and other commercial uses of your specific CDB."
    },
    {
      question: "Is there a CryptoDickButts DAO?",
      answer: "Yes, the CryptoDickButts DAO (Decentralized Autonomous Organization) allows holders to participate in community governance and decision-making regarding the project's future."
    },
    {
      question: "What utility do CryptoDickButts provide?",
      answer: "Beyond their collectible value, CDBs provide access to holder-exclusive community events, merchandise, airdrops, and voting rights in the DAO. The project continues to develop new utility opportunities."
    }
  ];

  return (
    <div id="faq" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 -mr-20 w-72 h-72 bg-cdb-purple/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 -ml-20 w-72 h-72 bg-cdb-teal/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know about CryptoDickButts NFTs.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-foreground/70 mb-4">
            Still have questions? Join our Discord community and get help directly from the team and other collectors.
          </p>
          <a 
            href="#" 
            className="text-cdb-purple hover:text-cdb-purple/80 underline underline-offset-4 font-medium"
          >
            Join Discord Community
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
