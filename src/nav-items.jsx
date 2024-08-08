import { Home, Cat, Info } from "lucide-react";
import Index from "./pages/Index.jsx";
import CatBreeds from "./pages/CatBreeds.jsx";
import CatFacts from "./pages/CatFacts.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Cat Breeds",
    to: "/breeds",
    icon: <Cat className="h-4 w-4" />,
    page: <CatBreeds />,
  },
  {
    title: "Cat Facts",
    to: "/facts",
    icon: <Info className="h-4 w-4" />,
    page: <CatFacts />,
  },
];
