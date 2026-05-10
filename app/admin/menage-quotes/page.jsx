"use client";
import { QuotesAPI } from "@/lib/api";
import { useState, useEffect } from "react";

export default function MenegeQuotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // edit state
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editAuthor, setEditAuthor] = useState("");

  // fetch all quotes
  const loadQuotes = async () => {
    try {
      const data = await QuotesAPI.getAll();
      setQuotes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  // delete quotes
  const handleDelete = async (id) => {
    const confirDelete = confirm("Are you sure you want to delete this quote?");

    if (!confirDelete) return;

    try {
      await QuotesAPI.delete(id);

      setQuotes((prev) => prev.filter((quote) => quote._id === id));
    } catch (err) {
      alert("Failed to delete");
    }
  };

  // start editing
  const handleEdit = (quote) => {
    setEditingId(quote._id);
    setEditText(quote.text);
    setEditAuthor(quote.author);
  };

  // update quote
  const handleUpdate = async () => {
    try {
      const update = await QuotesAPI.update(editingId, {
        text: editText,
        author: editAuthor,
      });

      setQuotes((prev) =>
        prev.map((quote) => (quote._id === editingId ? update : quote)),
      );

      setEditingId(null);
      setEditText("");
      setEditAuthor("");
    } catch (err) {
      console.error(err);
      alert("Failed to update");
    }
  };
  return (
    <div className="p-6">
      <Header />
      {/* LOADING */}
      {loading ? (
        <p className="text-slate-400">Loading quotes...</p>
      ) : (
        <div className="grid gap-4 grid-cols-3 max-lg:grid-cols-1">
          {quotes.map((quote) => (
            <div
              key={quote._id}
              className="bg-emerald-100/2 border border-slate-800 rounded-2xl p-5"
            >
              {/* EDIT MODE */}
              {editingId === quote._id ? (
                <div className="space-y-4">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none"
                    rows={4}
                  />

                  <input
                    type="text"
                    value={editAuthor}
                    onChange={(e) => setEditAuthor(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none"
                  />

                  <div className="flex gap-3">
                    <button
                      onClick={handleUpdate}
                      className="px-5 py-2 rounded-xl bg-emerald-500 text-black font-semibold"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditingId(null)}
                      className="px-5 py-2 rounded-xl bg-slate-700 text-white"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  {/* QUOTE */}
                  <p className="text-white text-lg leading-relaxed">
                    “{quote.text}”
                  </p>

                  {/* AUTHOR */}
                  <p className="text-emerald-400 mt-4">— {quote.author}</p>

                  <ActionBtns
                    quote={quote}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-black text-white">Manage Quotes</h1>

      <p className="text-slate-400 mt-2">Update or delete your quotes</p>
    </div>
  );
}

function ActionBtns({ handleEdit, quote, handleDelete }) {
  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={() => handleEdit(quote)}
        className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30"
      >
        Edit
      </button>

      <button
        onClick={() => handleDelete(quote._id)}
        className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30"
      >
        Delete
      </button>
    </div>
  );
}
