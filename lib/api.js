const BASE_URL =  process.env.NEXT_PUBLIC_SERVER_URL;

async function request(endpoint, method = "GET", body = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, options);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "API Error");
  }
  return data;
}

// Quotes API
export const QuotesAPI = {
  getAll: () => request("/quotes"),
  getCount: () => request("/quotes/count"),
  create: (data) => request("/quotes", "POST", data),
  update: (id, data) => request(`/quotes/${id}`, "PUT", data),
  delete: (id) => request(`/quotes/${id}`, "DELETE"),
  getByAuthor: (author) => request(`/quotes/author/${author}`),
  getByTag: (tag) => request(`/quotes/tag/${tag}`),
  getFeatured: () => request("/quotes/featured"),
};
