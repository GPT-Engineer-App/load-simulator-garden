import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const catBreeds = [
  {
    name: "Siamese",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg",
    description: "Known for their distinctive appearance and vocal nature.",
  },
  {
    name: "Persian",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg",
    description: "Recognized for their long fur and flat faces.",
  },
  {
    name: "Maine Coon",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG",
    description: "One of the largest domesticated cat breeds with a distinctive physical appearance.",
  },
  {
    name: "Bengal",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg",
    description: "Known for their wild appearance and energetic personality.",
  },
];

const CatBreeds = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {catBreeds.map((breed) => (
        <Card key={breed.name}>
          <CardHeader>
            <CardTitle>{breed.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-md mb-2" />
            <p>{breed.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CatBreeds;
