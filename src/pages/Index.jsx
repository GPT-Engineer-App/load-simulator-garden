import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Cat, Heart, Paw } from "lucide-react";
import CatFacts from "./CatFacts";
import CatBreeds from "./CatBreeds";

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [showPaw, setShowPaw] = useState(false);

  useEffect(() => {
    if (showPaw) {
      const timer = setTimeout(() => setShowPaw(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showPaw]);

  const handleLike = () => {
    setLikes(likes + 1);
    setShowPaw(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-7xl font-bold mb-8 text-center text-purple-800 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Purrfect Cat World 
          <motion.span
            className="inline-block ml-2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Cat className="h-16 w-16 text-pink-600" />
          </motion.span>
        </motion.h1>
        
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
            alt="A cute cat" 
            className="mx-auto object-cover w-full h-[500px] rounded-lg shadow-2xl"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.p
            className="absolute bottom-4 left-4 text-white text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Discover the Fascinating World of Cats
          </motion.p>
        </motion.div>

        <Tabs defaultValue="characteristics" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="characteristics" className="text-lg">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds" className="text-lg">Popular Breeds</TabsTrigger>
            <TabsTrigger value="facts" className="text-lg">Cat Facts</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={Tabs.value}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="characteristics">
                <Card className="bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Fascinating Cat Characteristics</CardTitle>
                    <CardDescription className="text-lg">What makes our feline friends so special?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-6 space-y-3 text-lg">
                      <li>Independent yet affectionate nature</li>
                      <li>Excellent hunters with razor-sharp claws and teeth</li>
                      <li>Incredibly flexible bodies and lightning-quick reflexes</li>
                      <li>Exceptional senses, particularly acute hearing and night vision</li>
                      <li>Complex communication through vocalizations, body language, and scent marking</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="breeds">
                <CatBreeds />
              </TabsContent>
              <TabsContent value="facts">
                <CatFacts />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <div className="text-center relative">
          <Button 
            onClick={handleLike}
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl py-6 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Heart className="mr-2 h-6 w-6" /> Like This Page
          </Button>
          <p className="mt-4 text-gray-700 text-xl">This page has been liked {likes} times</p>
          <AnimatePresence>
            {showPaw && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: -50 }}
                exit={{ opacity: 0, scale: 0.5, y: -100 }}
                className="absolute left-1/2 transform -translate-x-1/2"
              >
                <Paw className="text-pink-500 h-12 w-12" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Index;
