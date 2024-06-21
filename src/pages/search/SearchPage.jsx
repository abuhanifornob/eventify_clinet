import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "./SearchResults ";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://eventify-server-beta.vercel.app/search?q=${searchQuery}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <SearchResults results={results} />
    </div>
  );
};

export default SearchPage;
