"use client";
import { useState } from "react";
import DashLayout from "@/wrapper/dashLayout";
import { QuotesAPI } from "@/lib/api";

export default function AddQuoteForm() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const authors = [
    "Bill Gates",
    "Albert Einstein",
    "Steve Jobs",
    "Elon Musk",
    "Mark Zuckerberg",
    "Warren Buffett",
    "Oprah Winfrey",
    "Nelson Mandela",
    "Mahatma Gandhi",
    "Apj AbdulKalam"
  ];

  const tagOptions = [
    "Growth",
    "Resilience",
    "Happiness",
    "Creativity",
    "Patience",
    "Mindfulness",
    "Leadership",
    "Life",
    "Wisdom",
    "Love",
  ];

  const handlePublish = async () => {
    if (!text || !author) {
      alert("Quote text and author required");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await QuotesAPI.create({
        text,
        author,
        tags: tags ? tags.split(",").map((t) => t.trim()) : [],
        isFeatured,
      });

      // reset form
      setText("");
      setAuthor("");
      setTags("");
      setIsFeatured(false);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <DashLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-lg:mt-8">
        {/* LEFT COLUMN: The Content (2/3 Width) */}
        <LeftSideColumn text={text} setText={setText} />
        {/* RIGHT COLUMN: The Metadata (1/3 Width) */}
        <RightSideColumn
          author={author}
          setAuthor={setAuthor}
          tags={tags}
          setTags={setTags}
          authors={authors}
          handlePublish={handlePublish}
          loading={loading}
          tagOptions={tagOptions}
          isFeatured={isFeatured} 
          setIsFeatured={setIsFeatured}  
        />
      </div>
    </DashLayout>
  );
}

function LeftSideColumn({ text, setText }) {
  return (
    <div className="lg:col-span-2 space-y-6">
      <div className=" border border-emerald-100/10    rounded-3xl p-8 backdrop-blur-md shadow-2xl">
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
          The Wisdom (Quote Text)
        </label>
        <textarea
          rows="8"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="“Enter the quote here...”"
          className="w-full bg-transparent text-2xl font-medium text-white placeholder:text-slate-700 outline-none resize-none leading-relaxed italic"
        />
        <div className="mt-6 flex items-center justify-between border-t border-slate-800/50 pt-6">
          <span className="text-xs text-slate-500 font-mono">
            CHAR COUNT: {text.length}/500
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
              Ready to Publish
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RightSideColumn({
  author,
  setAuthor,
  tags,
  setTags,
  authors,
  handlePublish,
  loading,
  error,
  tagOptions,
  isFeatured,
  setIsFeatured
}) { 
  return (
    <div className="space-y-6">
      <div className="border border-emerald-100/10 rounded-3xl p-6 space-y-6">
        {/* AUTHOR SELECT */}
        <div>
          <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-3">
            Assign Legend
          </label>

          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          >
            <option value="">Select Author</option>
            {authors.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* TAGS */}
        <div>
          <label className="block text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-3">
            Category Tags
          </label>

          <select
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-emerald-500"
          >
            <option value="">Select Tag</option>
            {tagOptions.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
          {/* error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        {/* FEATURED TOGGLE (UI ONLY) */}
        <div className="pt-4 border-t border-slate-800">
          <button
            type="button"
            onClick={() => setIsFeatured(!isFeatured)}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${
              isFeatured
                ? "bg-emerald-500/20 border-emerald-500"
                : "bg-slate-950 border-slate-800"
            }`}
          >
            <span className="text-sm font-semibold text-slate-300">
              Featured Quote
            </span>

            <div
              className={`w-10 h-5 rounded-full relative ${
                isFeatured ? "bg-emerald-500" : "bg-slate-800"
              }`}
            >
              <div
                className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${
                  isFeatured ? "right-1" : "left-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* ACTIONS */}
        <div className="space-y-3 pt-4">
          <button
            onClick={handlePublish}
            disabled={loading}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-black font-bold rounded-2xl transition-all active:scale-[0.98]"
          >
            {loading ? "Publishing..." : "Publish to Feed"}
          </button>

          <button className="w-full py-4 bg-transparent border border-slate-700 text-slate-400 font-bold rounded-2xl hover:bg-slate-800 transition-all">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
}
