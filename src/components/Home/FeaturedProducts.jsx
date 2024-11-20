import ProductsCards from "../ProductsCards";

const FeaturedProducts = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center overflow-x-scroll gap-4">
      <ProductsCards></ProductsCards>
      <ProductsCards></ProductsCards>
      <ProductsCards></ProductsCards>
      <ProductsCards></ProductsCards>
    </div>
  );
};

export default FeaturedProducts;
