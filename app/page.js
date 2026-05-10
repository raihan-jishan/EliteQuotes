import NewRelease from "@/components/widgets/home/newRelease";
import FeaturedQuote from "@/components/widgets/home/featuredQuote";
import InspiringMinds from "@/components/widgets/home/inspiringMinds";

export default function Home() {
  return (
    <div>
      <NewRelease />
      <FeaturedQuote />
      <InspiringMinds />
      {process.env.NAME}
    </div>
  );
}
