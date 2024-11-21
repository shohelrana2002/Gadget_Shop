import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";

const FilterBar = ({
  setBrand,
  setCategory,
  handleReset,
  uniqBrand,
  uniqCategory,
}) => {
  return (
    <div className=" md:min-h-screen  rounded-t-2xl bg-gray-200 h-full p-4">
      <div className="flex justify-center items-center gap-1 ">
        <p className="text-xl font-semibold">Filters</p>
        <TbFilter size={24}></TbFilter>
      </div>
      <div className="flex flex-col gap-3 mt-4 items-center max-w-full w-full">
        <div className="w-full">
          <select
            onChange={(e) => setBrand(e.target.value)}
            className="select select-bordered w-full"
          >
            <option disabled selected>
              Brand
            </option>
            {uniqBrand.map((brand, i) => (
              <option key={i} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full max-w-full"
          >
            <option disabled selected>
              Category
            </option>
            {uniqCategory.map((category, i) => (
              <option value={category} key={i}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleReset}
          className="btn btn-outline btn-secondary w-full"
        >
          <span className="text-xl font-semibold ">Reset</span>{" "}
          <GrPowerReset size={20} />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
