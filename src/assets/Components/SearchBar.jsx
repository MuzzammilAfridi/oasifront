import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const response = await fetch(
          `https://oasback.onrender.com/product/search?query=${query}`
        );
        const data = await response.json();
        
        
        setSuggestions(data.slice(0, 5)); // Show top 5 suggestions
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [query]);

  const handleSearch = () => {
    if (query.trim() === "") return;

    // Navigate to ProductList component with search query as a parameter
    navigate(`/products?query=${query}`);
    setShowSuggestions(false);
    setQuery('')
  };

  const handleSelectSuggestion = (suggestion) => {
    setQuery(suggestion.name);
    setShowSuggestions(false);
    handleSearch();
  };

  return (
    <div className="relative p-4">
      <div className="flex items-center max-w-screen justify-between gap-3">
        <input
          type="text"
          placeholder="Search for products..."
          className="border p-2 w-full rounded-md shadow-sm focus:ring focus:ring-blue-300"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute w-[80vw] bg-white border rounded-md mt-1 shadow-md max-h-48 overflow-auto z-10">
          {suggestions.map((product) => (
            <li
              key={product._id}
              className="p-2 border-b bg-slate-100 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelectSuggestion(product)}
            >
              {product.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
