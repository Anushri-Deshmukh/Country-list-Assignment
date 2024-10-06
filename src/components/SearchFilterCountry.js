import React, { useContext, useState} from "react";
import { Context } from "../Context";

const SearchFilterCountry = ({onSearch, onSelect, getAllCountries}) => {
  const { darkMode } = useContext(Context);
    const [query, setQuery] = useState("");

  const option = [
    { value: "Africa" },
    { value: "America" },
    { value: "Asia" },
    { value: "Europe" },
    { value: "Oceania" },
  ];

  const handleSearch = (e) => {
    let countryName = e.target.value;
    setQuery(countryName);  // Update the query state

    if (countryName.trim() === "") {
      getAllCountries();  // Fetch all countries if the search input is empty
    } else {
      onSearch(countryName);  // Search by name otherwise
    }
  };
  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <div className="search-icon-position">
        <label htmlFor="search" className="hide">
          Search for a country
        </label>
        <input
          type="text"
          id="search"
          name="search-form"
          className={darkMode ? "search-field-dark" : "search-field"}
          placeholder="Search for a country..."
          value={query}
            onChange={(e) => handleSearch(e)}
          />
      </div>

      <select
        className={darkMode ? "select-dark" : "select"}
        aria-label="filter by region"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="All">Filter by Region</option>
        {option?.map((item) => (
          <option key={item?.value} value={item?.value}>
            {item?.value}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchFilterCountry;
