import React from "react";

function Search({setSearch, searched}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {searched}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
