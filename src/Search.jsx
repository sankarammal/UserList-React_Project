import React, { useState } from "react";
import "../Style/Search.css";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div>
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Search Name/Email"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    </div>
  );
};

export default Search;
