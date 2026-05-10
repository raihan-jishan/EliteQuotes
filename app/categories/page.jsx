import { CategorieCard } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { categories } from "@/constants";

export default function Categories() {
  return (
    <div className="p-3 mt-2">
      <Heading
        label={"Explore Topics"}
        className={" text-xl font-semibold text-white mb-4"}
      />

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {categories.map((cat, index) => {
          return <CategorieCard key={index} name={cat.name} icon={cat.icon} path={`/quotes?tag=${cat.name}`}/>;
        })}
      </div>
    </div>
  );
}
