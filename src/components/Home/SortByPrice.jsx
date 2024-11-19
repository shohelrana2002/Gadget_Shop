import React from "react";

const SortByPrice = ({ setSort }) => {
  return (
    <div>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="select select-bordered w-full max-w-full"
      >
        <option value="asc">Low To High</option>
        <option value="desc">High To Low</option>
      </select>
    </div>
  );
};

export default SortByPrice;
