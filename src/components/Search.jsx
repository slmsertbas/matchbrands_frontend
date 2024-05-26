import React from "react";
import filter from "../Assets/filter.svg";

function Search() {
  return (
    <div className="mt-5 pt-5" id="services">
      <div className="container">
        <div className="serach-card mt-5">
          <h3>Find Influencers</h3>
          <p>
            Search for influencers based on keywords, categories, or social
            media platforms.
          </p>
          <div className="input-box pt-2 d-flex align-items-center justify-content-center">
            <input
              type="text"
              placeholder="Enter keywords to search for your influencer ...."
            />
            <span>
              <img src={filter} alt="search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
