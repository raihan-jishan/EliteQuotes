"use client";

import { useEffect, useState } from "react";
import SectionHeader from "@/components/shared/sectionHeader";
import { QuoteCard } from "@/components/ui/quoteCard";
import { QuotesAPI } from "@/lib/api";
import { QuoteCardSkeleton } from "@/skeleton";

export default function FeaturedQuote() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await QuotesAPI.getFeatured();
        setQuotes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadFeatured();
  }, []);

  return (
    <div className="p-2 m-3">
      <div className="mt-10">
        <SectionHeader
          heading={"Featured Quotes"}
          description={"Handpicked quotes to inspire your day"}
          path={'/quotes?type=featured'}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <QuoteCardSkeleton key={i} />
            ))
          ) : Array.isArray(quotes) && quotes.length > 0 ? (
            quotes.map((q) => (
              <QuoteCard
                key={q._id}
                _id={q._id}
                quote={q}
                description={q.text}
                author={q.author}
              />
            ))
          ) : (
            <p className="text-slate-400">No featured quotes 😔</p>
          )}
        </div>
      </div>
    </div>
  );
}
