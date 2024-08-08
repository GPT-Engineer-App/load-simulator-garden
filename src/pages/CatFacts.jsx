import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const catFacts = [
  "Cats sleep for about 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats can jump up to six times their length.",
  "A cat's nose print is unique, like a human's fingerprint.",
  "Cats have a third eyelid called the nictitating membrane.",
  "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus.",
];

const CatFacts = () => {
  const [currentFact, setCurrentFact] = useState(catFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setCurrentFact(catFacts[randomIndex]);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Did You Know?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg mb-4">{currentFact}</p>
        <Button onClick={getRandomFact}>Get Another Fact</Button>
      </CardContent>
    </Card>
  );
};

export default CatFacts;
