import React, { useState, useEffect, useCallback } from "react";

import Header from "../Header/header";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("finance");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching news: ${response.statusText}`);
      }
      const data = await response.json();
      setNews(data.articles.filter((article) => article.urlToImage));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 bg-teal-50 py-8 min-h-screen overflow-auto">
        <h1 className="text-4xl font-bold mb-4 px-10 text-center overflow-hidden text-blue-800">
          Trending News
        </h1>

        <form onSubmit={handleSearch} className="mb-8 px-10 text-center">
          <input
            type="text"
            name="search"
            defaultValue={searchTerm}
            placeholder="Search for news..."
            className="border p-2 w-2/3 rounded-l outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="border p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </form>

        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {news.length === 0 ? (
              <p className="text-center col-span-full">No news found.</p>
            ) : (
              news.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
                >
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-700">{article.description}</p>
                  </div>
                </a>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
