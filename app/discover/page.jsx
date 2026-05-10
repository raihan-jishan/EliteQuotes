 
import SectionHeader from "@/components/shared/sectionHeader";
import { CollectionCard } from "@/components/ui/card";
import { discoverData } from "@/constants/data";

export default function Discover() {
  return (
    <div className="p-2 m-3">
      <div className="mt-3">
        <SectionHeader
          heading={"Billionaire Mindset"}
          description={"Daily wisdom to elevate your thinking"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
           {discoverData.map((item) => {
            return (
              <CollectionCard 
              key={item.id}
              path={item.path}
              _id={item.id}
              text={item.title}
              description={item.description}
              />
            )
           })}
        </div>
      </div>

      
    </div>
  );
}
