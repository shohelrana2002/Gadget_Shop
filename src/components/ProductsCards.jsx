import React from "react";
import errorImg from "/error.jpg";
import useUserData from "../Hooks/useUserData";
import axios from "axios";
import Swal from "sweetalert2";

const ProductsCards = ({ product }) => {
  const userData = useUserData();
  const userEmail = userData.email;
  const handleWishlist = async () => {
    await axios
      .patch(`http://localhost:3000/wishlist/add`, {
        userEmail: userEmail,
        productId: product._id,
      })
      .then((res) => {
        if (res.data.modifiedCount === 1) {
          Swal.fire({
            position: "top-right",
            icon: "success",
            title: "Add To Wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-right",
            icon: "warning",
            title: "Already Add To Wishlist",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <div className=" bg-base-100 h-full p-5  border-2 rounded-xl w-full shadow-xl">
          <div className="flex justify-center items-center">
            <div>
              <figure>
                <img
                  src={product?.imageURL || errorImg}
                  className="rounded-t-md h-60 w-full object-cover"
                  alt={product?.imageURL || errorImg}
                />
              </figure>
            </div>
          </div>
          <div className=" w-full">
            <p className="text-xl  text-secondary font-semibold">
              <p>Price: {product?.price}</p>
            </p>
            <p className="text-xl text-secondary font-semibold"></p>
            <p>
              {product?.title?.length < 50
                ? `${product?.title}`
                : `${product?.title?.slice(0, 30)}...`}
            </p>
            <p>
              {product?.description?.length < 20
                ? `${product?.description}`
                : `${product?.description?.slice(0, 30)}...`}
            </p>
            <p>{`Stock :${product?.stock}`}</p>

            <div className="justify-end">
              <button
                onClick={handleWishlist}
                className="btn btn-secondary btn-outline"
              >
                Add Whitelist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCards;
