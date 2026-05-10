"use client";

import { CollectionCard, CountCard, PickCard } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { getLikedQuotes } from "@/lib/likeStorage";  
import { Quote } from "lucide-react";
import { Timer } from "lucide-react";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(getLikedQuotes());
  }, []);
  
  return (
    <div className="bg-background">
 
      <Heading
        label={"Liked Quotes"}
        className="text-xl md:text-2xl font-semibold text-white tracking-tight p-2.5 font-comfortaa  mt-2"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4  p-2 ">
        {quotes.length > 0 ? (
          quotes.map((q) => (
            <CollectionCard key={q._id} text={q.text} _id={q._id} />
          ))
        ) : (
          <p>No liked quote yet 😔</p>
        )}
      </div> 
    </div>
  );
}
