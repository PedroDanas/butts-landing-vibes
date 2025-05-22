import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Collection = () => {
  const [visibleNFTs, setVisibleNFTs] = useState(8);

  const nftsData = [
    { id: 1, name: "CDB #1204", rarity: "Legendary", price: "4.2 ETH" },
    { id: 2, name: "CDB #3542", rarity: "Rare", price: "2.8 ETH" },
    { id: 3, name: "CDB #859", rarity: "Uncommon", price: "1.5 ETH" },
    { id: 4, name: "CDB #2371", rarity: "Common", price: "1.2 ETH" },
    { id: 5, name: "CDB #4892", rarity: "Legendary", price: "5.1 ETH" },
    { id: 6, name: "CDB #123", rarity: "Ultra Rare", price: "7.3 ETH" },
    { id: 7, name: "CDB #3801", rarity: "Uncommon", price: "1.6 ETH" },
    { id: 8, name: "CDB #925", rarity: "Common", price: "1.0 ETH" },
    { id: 9, name: "CDB #2145", rarity: "Rare", price: "2.5 ETH" },
    { id: 10, name: "CDB #3682", rarity: "Common", price: "1.1 ETH" },
    { id: 11, name: "CDB #710", rarity: "Uncommon", price: "1.7 ETH" },
    { id: 12, name: "CDB #4021", rarity: "Legendary", price: "6.2 ETH" },
  ];

  const loadMore = () => {
    setVisibleNFTs((prev) => Math.min(prev + 4, nftsData.length));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="collection" className="py-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cdb-pink/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cdb-green/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Browse the <span className="text-gradient">Collection</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Explore the wide variety of unique CryptoDickButts NFTs, each with their own distinct traits and characteristics.
          </p>
        </motion.div>
        
        <Tabs defaultValue="all" className="mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="legendary">Legendary</TabsTrigger>
              <TabsTrigger value="rare">Rare</TabsTrigger>
              <TabsTrigger value="common">Common</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nftsData.slice(0, visibleNFTs).map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NFTCard nft={nft} />
                </motion.div>
              ))}
            </div>
            
            {visibleNFTs < nftsData.length && (
              <div className="flex justify-center mt-10">
                <Button 
                  onClick={loadMore} 
                  className="bg-cdb-purple hover:bg-cdb-purple/80 text-white"
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="legendary" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nftsData.filter(nft => nft.rarity === "Legendary").map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NFTCard nft={nft} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rare" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nftsData.filter(nft => nft.rarity === "Rare").map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NFTCard nft={nft} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="common" className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nftsData.filter(nft => nft.rarity === "Common").map((nft, index) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <NFTCard nft={nft} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-cdb-purple/20 via-cdb-teal/20 to-cdb-green/20 rounded-2xl p-1"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to get your own CryptoDickButt?</h3>
              <p className="text-foreground/70 max-w-lg">
                Join thousands of collectors who own a piece of internet culture history. Browse available CDBs on the marketplace.
              </p>
            </div>
            <Button className="bg-cdb-teal hover:bg-cdb-teal/80 text-white whitespace-nowrap btn-glow">
              View on OpenSea
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const NFTCard = ({ nft }: { nft: any }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary": return "text-cdb-purple bg-cdb-purple/10";
      case "Ultra Rare": return "text-pink-500 bg-pink-500/10";
      case "Rare": return "text-cdb-teal bg-cdb-teal/10";
      case "Uncommon": return "text-cdb-green bg-cdb-green/10";
      default: return "text-cdb-yellow bg-cdb-yellow/10";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cdb-purple/10 group">
      <div className="relative aspect-square overflow-hidden bg-[#a5ffa5] flex items-center justify-center p-2">
        <img 
          src="/lovable-uploads/4ae412c7-e663-4cd5-a091-92cafa32200a.png" 
          alt={nft.name} 
          className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <span className="text-white font-semibold">{nft.name}</span>
            <span className="text-white font-medium">{nft.price}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getRarityColor(nft.rarity)}`}>
            {nft.rarity}
          </span>
          <Button variant="ghost" size="sm" className="text-cdb-purple hover:text-cdb-purple/80 p-0">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Collection;
