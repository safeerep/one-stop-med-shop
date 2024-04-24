import ProductCard from "./ProductCard";
import Navbar from "./shared/Navbar";
import { IoMdHeartEmpty } from "react-icons/io";
import Footer from "./shared/Footer";

const ProductView = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col w-[85%] md:w-[80%] justify-center mx-auto mt-4">
          <div className="flex flex-col w-full md:grid md:grid-cols-2  ">
            {/* product images */}
            <div
              className="w-full md:w-auto md:h-full   h-96 flex flex-col gap-2 justify-between mt-20 md:mt-0 lg:pr-14"
              id="scrollable2"
            >
              <div className="w-full h-64 md:h-full flex items-center justify-center ">
                <img
                  src={`/med-product-example.jpg`}
                  alt=""
                  className="h-72 md:w-1/2 md:h-auto "
                />
              </div>
              <div className="w-full h-28 md:h-48   overflow-x-auto whitespace-nowrap space-x-2 pt-2 px-">
                <div className="h-[92%] w-28 inline-block relative">
                  <img
                    src={`/med-product-example.jpg`}
                    alt="Ig"
                    className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                  />
                </div>
                <div className="h-[92%] w-28 inline-block relative">
                  <img
                    src={`/med-product-example.jpg`}
                    alt="Ig"
                    className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                  />
                </div>
                <div className="h-[92%] w-28 inline-block relative">
                  <img
                    src={`/med-product-example.jpg`}
                    alt="Ig"
                    className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                  />
                </div>
                <div className="h-[92%] w-28 inline-block relative">
                  <img
                    src={`/med-product-example.jpg`}
                    alt="Ig"
                    className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
                  />
                </div>
              </div>
            </div>
            {/* product images ending */}

            {/* product details */}
            <div className="w-full min-h-96 flex flex-col py-3 px-2 md:w-auto md:h-full md:py-0">
              <div className="text-xl">
                <h2>Air Purifier</h2>
              </div>
              <div className="flex gap-2 mt-3 h-6 items-center">
                <div className="flex gap-1">
                  <img src={`/star.svg`} alt="" />
                  <img src={`/star.svg`} alt="" />
                  <img src={`/star.svg`} alt="" />
                  <img src={`/star.svg`} alt="" />
                  <img src={`/star.svg`} alt="" />
                </div>
                <div className="text-[12px]">
                  ( There are no reviews yet )
                </div>
              </div>
              <div className="flex gap-2 mt-3 h-6 items-center">
                <div className="flex gap-1 text-[#606060] text-[12px]">
                  <span>RS</span>
                </div>
                <div className="text-lg flex gap-2">
                  <span className=" font-semibold">4,699.00</span>
                  <span className="text-[#606060] line-through">5,699.00</span>
                </div>
              </div>
              <div className="flex gap-2 mt-3 text-[12px] items-center">
                <p className="text-[#999999]">
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Vestibulum tortor quam,
                  feugiat vitae, ultricies eget, tempor sit amet, ante.{" "}
                </p>
              </div>
              <div>
                <div className="flex mt-4 gap-5 justify-between py-4 border-t border-b md:justify-start">
                  <button className="h-10 border border-cyan-500 w-full text-sm rounded-sm md:w-44">
                    Add to cart
                  </button>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  Add to whish list <IoMdHeartEmpty className="text-2xl" />
                </div>
              </div>
            </div>
            {/* producut details ending */}
          </div>
          <div className="w-full  mt-10 md:mt-28 flex flex-col gap-y-10">
            <div className="h-12 flex border-b">
              <div className="h-full w-44  flex items-center">Overview</div>
              <div className="h-full w-auto pr-3  flex items-center font-semibold border-b-2 dark:border-white border-black ">
                Specification
              </div>
            </div>
            <div className="w-full mb-4  px-5">
              <ul className="list-disc space-y-4 text-sm">
                <li>Air purifier</li>
                <li>5-in-1 UV Air Purifier Small Rooms</li>
                <li>5-in-1 UV Air Purifier Small Rooms</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="w-full font-semibold border-b h-12">
              Related Products
            </div>
          </div>
          <div className="w-full flex">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductView;
