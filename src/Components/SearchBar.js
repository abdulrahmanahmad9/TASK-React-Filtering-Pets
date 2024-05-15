// SearchBar.js
import React from "react";

function SearchBar({ searchBar }) {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={searchBar}
      />
    </div>
  );
}

export default SearchBar;
