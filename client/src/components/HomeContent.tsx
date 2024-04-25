import { useEffect } from "react";
import { Navbar, Footer } from "../components";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "@/constants";
import toast from "react-hot-toast";

const HomeContent = () => {
  const navigate = useNavigate();
  let products: Product[] = [];
  useEffect(() => {
    axios
      .get(`${BASE_URL}/fetch-products`)
      .then((response) => {
        products = response.data?.products;
      })
      .catch((reason) => {
        toast.error(reason?.message);
      });
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <div className="min-h-screen">
        <section className="w-[86%] sm:w-[80%] mx-auto mt-4">
          <div className="w-full ">
            <div className="w-full flex justify-between">
              <h1 className="font-semibold text-lg">Top Products</h1>
            </div>
            <div
              className={`border-t h-1 mx-auto sm:w-[80%] my-4 border-[#0000000F] w-full `}
            />
          </div>
          <div className="w-full border border-[#B9B9B9]  flex flex-col lg:flex-row lg:items-start">
            <div className="h-44 border border-[#B9B9B9] border-t-0 border-x-0 w-full p-3 flex justify-start  lg:w-[40%] lg:h-full lg:flex-col lg:border-none lg:gap-5 lg:mt-20 lg:px-5">
              <div
                onClick={() => navigate(`/product-view?productId=${products?.[0]?._id}`)}
                className="h-full w-44 lg:flex lg:justify-center lg:w-full lg:h-80 cursor-pointer"
              >
                <img
                  src={
                    (products.length > 0) ?
                    products?.[0]?.image: 
                    `/med-product-example.jpg`}
                  className="h-full object-cover"
                />
              </div>
              <div className="h-full flex flex-col gap-y-2 lg:mt-3 justify-between">
                <span className="text-[#1AA5C3] text-[12px] font-semibold line-clamp-2 lg:text-center lg:font-normal uppercase">
                  {products?.[0]?.name}
                </span>
                <h4 className="text-sm line-clamp-2 lg:text-center lg:font-semibold lg:text-lg">
                {products?.[0]?.title}
                </h4>
                <div className="flex gap-1 items-center lg:justify-center lg:mt-5">
                  <span className="text-[11px] text-[#606060]">RS</span>
                  <span className="font-semibold text-sm">4,699.00</span>
                  <span className="text-[#606060] text-sm line-through">
                    4,699.00
                  </span>
                </div>
                <button className="p-text-[12px] bg-[#1AA5C3]  py-1 text-white lg:w-1/2 lg:mx-auto lg:h-10 lg:text-sm lg:mt-9 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 min-h-72 lg:grid-cols-3 lg:w-full">
              <ProductCard products={products} />
              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomeContent;
