"use client";
import { ThumbsUp, Forward, Copy } from "lucide-react";
import Avatar from "./avatar";
import { PencilRuler } from "lucide-react";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isLiked, toggleLike } from "@/lib/likeStorage";
import { playLikeSound } from "@/lib/sound";
import { copyQuote } from "@/lib/copy-text";

export const QuoteCard = ({
  maintainance,
  hideAuthor,
  description,
  _id,
  author,
  quote = [],
}) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(isLiked(quote._id));
  }, [quote._id]);

  const handleLike = () => {
    const alreadyLiked = isLiked(quote._id);

    toggleLike(quote);
    setLiked(!alreadyLiked);

    //  sound logic
    if (alreadyLiked) {
      playLikeSound("unlike");
    } else {
      playLikeSound("like");
    }
  };

  function getAuthorImage(author) {
    if (!author) return "assets//authors/default.jpg";
    return `/assets/authors/${author.toLowerCase().replace(/\s+/g, "")}.jpg`;
  }

  const imageUrl = `https://picsum.photos/seed/${_id}/400/300`;
  const authorImage = getAuthorImage(author);
  return (
    <div className="group relative max-w-sm mx-auto rounded-3xl overflow-hidden border border-white/8 bg-[#030712] shadow-2xl transition-all duration-500 hover:border-emerald-500/40  h-fit w-full">
      {/* Layer 1: Subtle Background Image (Texture only) */}
      {hideAuthor ? null : (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            className="object-cover opacity-25 grayscale transition-all duration-700 group-hover:scale-105   group-hover:opacity-30  "
            width={500}
            height={100}
            alt="background"
          />
          {/* Soft vignette overlay to focus center */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#030712]/50 to-[#34d3990d]" />
        </div>
      )}

      {/* Layer 2: Content Container */}
      <div className="relative z-10 p-8 flex flex-col justify-between min-h-80 ">
        {/* Top: Minimal Header */}
        {hideAuthor ? null : (
          <div className="flex justify-between items-center">
            <div className="flex items-center ">
              <Avatar
                imageUrl={authorImage}
                path={`/quotes?author=${quote.author}`}
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-white tracking-tight leading-none">
                  {author}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1"></span>
              </div>
            </div>
          </div>
        )}

        {/* Center: The Quote (Hero Typography) */}
        <div className="mt-5">
          <p className="text-[22px] leading-[1.4] text-slate-100 font-medium tracking-tight">
            <span className="text-emerald-500/50 text-4xl leading-none mr-1 select-none font-serif">
              “
            </span>
            {description}
          </p>
        </div>

        {/* Bottom: Action Bar */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] px-3 py-1 bg-white/5 rounded-md border border-white/5">
            {quote.tags.map((tag, i) => {
              return <span key={i}>{tag}</span>;
            })}
          </span>

          {/* Sleek Tool Group */}
          <div className="flex items-center justify-between p-1 bg-gray-50/2 backdrop-blur-xl rounded-2xl border border-white/8 shadow-inner">
            {maintainance ? (
              <div className="flex gap-1">
                <button className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                  <PencilRuler size={18} />
                </button>
                <button className="p-2.5 text-slate-400 hover:text-red-400 hover:bg-red-400/5 rounded-xl transition-all">
                  <Trash size={18} />
                </button>
              </div>
            ) : (
              <div className="flex gap-0.5">
                <button
                  className="p-2.5 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-xl transition-all"
                  onClick={handleLike}
                >
                  {liked ? (
                    <ThumbsUp
                      size={18}
                      className="text-emerald-400"
                      fill="currentColor"
                    />
                  ) : (
                    <ThumbsUp size={18} />
                  )}
                </button>
                <button
                  className="p-2.5 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-xl transition-all"
                  onClick={() => copyQuote(quote.text)}
                >
                  <Copy size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
