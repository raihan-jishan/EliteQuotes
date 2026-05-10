import { TrendingUp, Smile, Clock, Crown, Heart, Activity } from "lucide-react";

export const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Discover",
    path: "/discover",
  },
  {
    label: "Categories",
    path: '/categories'
  }
];

export const categories = [
  { name: "Growth", icon: TrendingUp },
  { name: "Resilience", icon: Activity },
  { name: "Happiness", icon: Smile },
  { name: "Creativity", icon: Activity },
  { name: "Patience", icon: Clock },
  { name: "Mindfulness", icon: Activity },
  { name: "Leadership", icon: Crown },
  { name: "Life", icon: Activity },
  { name: "Wisdom", icon: Crown },
  { name: "Love", icon: Heart },
];
