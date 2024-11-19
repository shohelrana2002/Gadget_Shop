import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SearchBar from "../components/Home/SearchBar";
import SortByPrice from "../components/Home/SortByPrice";
import FilterBar from "../components/Products/FilterBar";
import axios from "axios";
import Loading from "./Loading";
import ProductsCards from "../components/ProductsCards";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  // search option dhwon to start
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqBrand, setUniqBrand] = useState([]);
  const [uniqCategory, setUniqCategory] = useState([]);
  // pagenation
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      await axios
        .get(
          `http://localhost:3000/all-products?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
        )
        .then((res) => {
          // console.log(res.data);
          setProduct(res.data.products);
          setUniqBrand(res.data.brands);
          setUniqCategory(res.data.categories);
          setTotalPage(Math.ceil(res.data.totalProducts / 9));
          setLoading(false);
        });
    };
    fetch();
  }, [search, sort, brand, category, page]);
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };
  const handleReset = () => {
    setSearch("");
    setSort("");
    setBrand("");
    setCategory("");
    window.location.reload();
  };
  const handlePageChange = (direction) => {
    const newPage = page + direction; // Calculate the new page based on the direction
    if (newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // const handlePageChange = (newPage) => {
  //   if (newPage > 0 && newPage <= totalPage) {
  //     setPage(newPage);
  //     console.log(newPage);
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }
  // };
  return (
    <div className="px-5">
      <Helmet>
        <title>Gadget Shop | Product</title>
      </Helmet>
      <h4 className="text-2xl font-bold  text-center mt-6">All Products</h4>
      <div className="flex justify-between text-2xl font-semibold">
        <SearchBar handleSearch={handleSearch}></SearchBar>
        <SortByPrice setSort={setSort}></SortByPrice>
      </div>
      {/* // content */}
      <div className="grid md:grid-cols-12 grid-rows-1  mt-5">
        <div className="col-span-12 mb-4 md:mb-0 md:col-span-2">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            handleReset={handleReset}
            uniqBrand={uniqBrand}
            uniqCategory={uniqCategory}
          ></FilterBar>
        </div>
        {/*  product  */}
        <div className="col-span-10 mx-6">
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              {products.length === 0 ? (
                <div className="  min-h-screen w-full h-full flex justify-center items-center">
                  <h2 className="text-2xl font-bold">Nod Product Found</h2>
                </div>
              ) : (
                <div className="lg:min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-8">
                  {products.map((product) => (
                    <ProductsCards
                      key={product._id}
                      product={product}
                    ></ProductsCards>
                  ))}
                </div>
              )}
            </>
          )}
          {/* pagenation */}
          {/* <div>
            <button onClick={() => handlePageChange(-1)}>
              <FaRegArrowAltCircleLeft></FaRegArrowAltCircleLeft>
            </button>
            <p>
              Page {page} of {totalPage}
            </p>
            <button onClick={() => handlePageChange(1)}>
              <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
            </button> 
          </div>*/}
          <div className="flex mx-auto justify-center items-center gap-4 my-8">
            <button
              className="btn btn-sm btn-primary"
              disabled={page === 1}
              onClick={() => handlePageChange(-1)}
            >
              <FaRegArrowAltCircleLeft size={24}></FaRegArrowAltCircleLeft>
            </button>
            <p>
              Page{page}of{totalPage}
            </p>
            <button
              className="btn btn-sm btn-primary"
              disabled={page === totalPage}
              onClick={() => handlePageChange(+1)}
            >
              <FaRegArrowAltCircleRight size={24}></FaRegArrowAltCircleRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
