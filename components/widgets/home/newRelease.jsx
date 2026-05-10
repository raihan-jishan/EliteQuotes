"use client";
import { useEffect, useState } from "react";
import { QuotesAPI } from "@/lib/api";
import SectionHeader from "@/components/shared/sectionHeader";
import { QuoteCard } from "@/components/ui/quoteCard";
import { QuoteCardSkeleton } from "@/skeleton";
const NewRelease = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuotes = async () => {
      try {
        const data = await QuotesAPI.getAll();
        setQuotes(data.slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadQuotes();
  }, []);
  return (
    <div className="p-2 m-3 bg-linear-to-r from-emerald-500/1 to-slate-800/20">
      <div className="mt-6  ">
        <SectionHeader
          heading={"New Release"}
          description={"New quotes added daily."}
          path={"/quotes?type=new"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => (
                <QuoteCardSkeleton key={i} />
              ))
            : quotes.map((quote) => (
                <QuoteCard
                  key={quote._id}
                  description={quote.text}
                  _id={quote._id}
                  author={quote.author}
                  quote={quote}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
export default NewRelease;
