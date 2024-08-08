import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Cat, Heart } from "lucide-react";
import CatFacts from "./CatFacts";
import CatBreeds from "./CatBreeds";

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center text-purple-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Purrfect Cat World <Cat className="inline-block ml-2" />
        </motion.h1>
        
        <motion.img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="A cute cat" 
          className="mx-auto object-cover w-full h-[500px] rounded-lg mb-8 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <Tabs defaultValue="characteristics" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
            <TabsTrigger value="facts">Cat Facts</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <Card>
              <CardHeader>
                <CardTitle>Fascinating Cat Characteristics</CardTitle>
                <CardDescription>What makes our feline friends so special?</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
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
        </Tabs>

        <div className="text-center">
          <Button 
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            <Heart className="mr-2 h-4 w-4" /> Like This Page
          </Button>
          <p className="mt-2 text-gray-600">This page has been liked {likes} times</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
