import React, { useState } from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const countries = [
  {
    country: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    official_language: "English",
    currency: "United States Dollar"
  },
  {
    country: "Canada",
    capital: "Ottawa",
    population: 37742154,
    official_language: ["English", "French"],
    currency: "Canadian Dollar"
  },
  {
    country: "Brazil",
    capital: "Brasília",
    population: 212559417,
    official_language: "Portuguese",
    currency: "Brazilian Real"
  },
  {
    country: "United Kingdom",
    capital: "London",
    population: 67886011,
    official_language: "English",
    currency: "Pound Sterling"
  },
  {
    country: "Australia",
    capital: "Canberra",
    population: 25409800,
    official_language: "English",
    currency: "Australian Dollar"
  },
  {
    country: "Germany",
    capital: "Berlin",
    population: 83783942,
    official_language: "German",
    currency: "Euro"
  },
  {
    country: "France",
    capital: "Paris",
    population: 65273511,
    official_language: "French",
    currency: "Euro"
  },
  {
    country: "Italy",
    capital: "Rome",
    population: 60244639,
    official_language: "Italian",
    currency: "Euro"
  },
  {
    country: "Spain",
    capital: "Madrid",
    population: 46754778,
    official_language: "Spanish",
    currency: "Euro"
  },
  {
    country: "Japan",
    capital: "Tokyo",
    population: 126476461,
    official_language: "Japanese",
    currency: "Japanese Yen"
  },
  {
    country: "China",
    capital: "Beijing",
    population: 1393409038,
    official_language: "Mandarin",
    currency: "Renminbi"
  },
  {
    country: "India",
    capital: "New Delhi",
    population: 1380004385,
    official_language: ["Hindi", "English"],
    currency: "Indian Rupee"
  },
  {
    country: "Chile",
    capital: "Santiago",
    population: 19116201,
    official_language: "Spanish",
    currency: "Chilean Peso"
  },
  {
    country: "Colombia",
    capital: "Bogotá",
    population: 50882891,
    official_language: "Spanish",
    currency: "Colombian Peso"
  },
  {
    country: "Peru",
    capital: "Lima",
    population: 32971854,
    official_language: ["Spanish", "Quechua", "Aymara"],
    currency: "Peruvian Sol"
  },
  {
    country: "Egypt",
    capital: "Cairo",
    population: 91250000,
    official_language: "Arabic",
    currency: "Egyptian Pound"
  },
  {
    country: "Turkey",
    capital: "Ankara",
    population: 84339067,
    official_language: "Turkish",
    currency: "Turkish Lira"
  }
];

const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    const filteredSuggestions = countries.filter(item =>
      item.country.toLowerCase().includes(value) ||
      item.capital.toLowerCase().includes(value)
    );

    setSuggestions(filteredSuggestions);
  };

  const handleSelect = (item) => {
    setQuery(item.country);
    setSuggestions([]);
    setSelectedCountry(item);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setSelectedCountry(null);
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by country or capital..."
          className="search-input"
        />
        {query && (
          <button className="clear-btn" onClick={clearSearch}>
            <i className="fas fa-times"></i>
          </button>
        )}
        <i className="fas fa-search search-icon"></i>
      </div>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => handleSelect(item)}>
              {item.country} - {item.capital}
            </li>
          ))}
        </ul>
      )}

      {selectedCountry && (
        <div className="selected-country-info">
          <h2>{selectedCountry.country}</h2>
          <p><strong>Capital:</strong> {selectedCountry.capital}</p>
          <p><strong>Population:</strong> {selectedCountry.population.toLocaleString()}</p>
          <p><strong>Official Language(s):</strong> {Array.isArray(selectedCountry.official_language) ? selectedCountry.official_language.join(', ') : selectedCountry.official_language}</p>
          <p><strong>Currency:</strong> {selectedCountry.currency}</p>
        </div>
      )}
    </div>
  );
};

export default CountrySearch;
