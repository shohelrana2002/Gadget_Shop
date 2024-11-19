import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import useGetAuth from "../../../Hooks/useGetAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const { user } = useGetAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const title = data.Title;
    const brand = data.Brand;
    const description = data.Description;
    const price = parseFloat(data.Price);
    const stock = parseInt(data.Stock);
    const category = data.Category;
    const imageURL = data.Image;
    const sellerEmail = user?.email;
    const productsInfo = {
      title,
      imageURL,
      brand,
      price,
      stock,
      category,
      sellerEmail,
      description,
    };

    const token = localStorage.getItem("access-token");
    axios
      .post("http://localhost:3000/add-products", productsInfo, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Add To Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    // console.log(productsInfo);
  };
  return (
    <div className="w-full h-full">
      <div>
        <Helmet>
          <title>Gadget Shop | Add Products</title>
        </Helmet>
        <div>
          <h3 className="text-center font-semibold text-3xl text-green-400 mb-4">
            Add Products
          </h3>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Product Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="input w-full input-bordered"
                  {...register("Title", { required: true })}
                />
                {errors.Title && <p>Title is Required</p>}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Product Brand</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand"
                  className="input w-full input-bordered"
                  {...register("Brand", { required: true })}
                />
                {errors.Brand && <p>Brand is Required</p>}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  min={1}
                  inputmode="decimal"
                  pattern="[0-9]*[.,]?[0-9]*"
                  type="text"
                  placeholder="Product Price"
                  className="input w-full input-bordered"
                  {...register("Price", { required: true })}
                />
                {errors.Price && <p>Price is Required</p>}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Product Stock</span>
                </label>
                <input
                  min={1}
                  type="number"
                  placeholder="Product Stock"
                  className="input w-full input-bordered"
                  {...register("Stock", { required: true })}
                />
                {errors.Stock && <p>Stock is Required</p>}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Seller Email"
                  className="input w-full input-bordered"
                  {...register("SellerEmail", { required: true })}
                />
                {errors.SellerEmail && <p>Seller Email is Required</p>}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Product Category</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Category"
                  className="input w-full input-bordered"
                  {...register("Category", { required: true })}
                />
                {errors.Category && <p>Category is Required</p>}
              </div>
              <div className="w-full">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="url"
                  placeholder="Product Image"
                  className="input w-full input-bordered"
                  {...register("Image", { required: true })}
                />
                {errors.Image && <p>Image is Required</p>}
              </div>
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input w-full input-bordered"
                {...register("Description", { required: true })}
              />
              {errors.Description && <p>brand is Required</p>}
            </div>
            <div className="form-control justify-center mt-6">
              <button type="submit" className="btn  btn-outline btn-success">
                Add Products
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
