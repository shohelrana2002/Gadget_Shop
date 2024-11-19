import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SearchBar from "../components/Home/SearchBar";
import SortByPrice from "../components/Home/SortByPrice";
import FilterBar from "../components/Products/FilterBar";
import axios from "axios";
import Loading from "./Loading";
import ProductsCards from "../components/ProductsCards";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      await axios.get(`http://localhost:3000/all-products`).then((res) => {
        setProduct(res.data);
        setLoading(false);
      });
    };
    fetch();
  }, []);
  return (
    <div className="px-5">
      <Helmet>
        <title>Gadget Shop | Product</title>
      </Helmet>
      <h4 className="text-2xl font-bold  text-center mt-6">All Products</h4>
      <div className="flex justify-between text-2xl font-semibold">
        <SearchBar></SearchBar>
        <SortByPrice></SortByPrice>
      </div>
      {/* // content */}
      <div className="grid md:grid-cols-12 grid-rows-1  mt-5">
        <div className="col-span-12 mb-4 md:mb-0 md:col-span-2">
          <FilterBar></FilterBar>
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
        </div>
      </div>
    </div>
  );
};

export default Products;
