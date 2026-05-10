export const getLikedQuotes = () => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("likedQuotes")) || [];
};

export const toggleLike = (quote) => {
  const liked = getLikedQuotes();

  const exists = liked.find((q) => q._id === quote._id);

  let updated;

  if (exists) {
    // remove
    updated = liked.filter((q) => q._id !== quote._id);
  } else {
    // add
    updated = [...liked, quote];
  }

  localStorage.setItem("likedQuotes", JSON.stringify(updated));

  return updated;
};

export const isLiked = (id) => {
  const liked = getLikedQuotes();
  return liked.some((q) => q._id === id);
};
