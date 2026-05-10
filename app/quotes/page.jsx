"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { QuoteCard } from "@/components/ui/quoteCard";
import { Heading } from "@/components/ui/heading";
import { QuotesAPI } from "@/lib/api";
import { QuoteCardSkeleton, Skeleton } from "@/skeleton";
const Page = () => {
  const [quotes, setQuotes] = useState([]);
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const type = searchParams.get("type");
  const author = searchParams.get("author");
  const tag = searchParams.get("tag");

  useEffect(() => {
    const loadQuotes = async () => {
      let data = [];
      try {
        if (type === "new") {
          data = await QuotesAPI.getAll();
        } else if (author) {
          data = await QuotesAPI.getByAuthor(encodeURIComponent(author));
        } else if (tag) {
          data = await QuotesAPI.getByTag(encodeURIComponent(tag));
        } else {
          data = await QuotesAPI.getFeatured();
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }

      setQuotes(Array.isArray(data) ? data : []);
    };

    loadQuotes();
  }, [type, author, tag]);
  return (
    <>
      <div className="relative pt-12 pb-10 px-6 bg-linear-to-r from-emerald-300/60   to-emerald-900/30">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-0 left-10 w-72 h-72 bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="flex  ">
          <div className="relative group">
            <Heading
              label={
                type === "new"
                  ? "NEW RELEASE"
                  : author
                    ? `${author}`
                    : tag
                      ? `#${tag}`
                      : "ALL QUOTES"
              }
              className={
                "text-6xl md:text-6xl font-black tracking-tighter text-black   font-poppins leading-none"
              }
            />

            <p className="text-slate-900 text-lg font-medium tracking-wide   mt-2 ml-2 flex gap-1">
              {quotes.length} quotes
            </p>
          </div>
        </div>
      </div>
      <div className="bg-linear-to-r from-emerald-300/40 to-emerald-900/30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  p-2">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => <QuoteCardSkeleton key={i} />)
        ) : Array.isArray(quotes) && quotes.length > 0 ? (
          quotes.map((quote) => (
            <QuoteCard
              key={quote._id}
              quote={quote}
              author={quote.author}
              description={quote.text}
            />
          ))
        ) : (
          <p className="text-center text-slate-400 mt-6">No quotes found 😔</p>
        )}
      </div>
    </>
  );
};
export default Page;
