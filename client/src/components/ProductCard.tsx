import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }: { products?: Product[] }) => {
  const navigate = useNavigate()
  return (
    <>
      {products &&
        products?.length > 1 &&
        products?.map((product: Product) => (
          <div className="flex flex-col relative border py-2 lg:h-96 lg:px-5 lg:pt-2 cursor-pointer">
            <div className="absolute top-2 left-2 bg-[#44961D] text-[12px] px-2 text-white">
              HOT
            </div>
            <div
            onClick={() => navigate(`/product-view?productId=${product?._id}`)}
             className="w-full  h-40 flex justify-center py-3 lg:h-56">
              <img
                src={product?.image}
                alt="Product image"
                className="h-full"
              />
            </div>
            <div className="px-3 space-y-1 lg:space-y-3">
              <div className="flex items-center justify-between lg:items-end">
                <span className="text-[#1AA5C3] text-[10px] font-semibold uppercase">
                  {product.name}
                </span>
                <div className="border rounded-full p-2 text-sm">
                  <FaPlus />
                </div>
              </div>
              <div className="text-center lg:text-start">
                <span className="text-[12px] line-clamp-2 lg:font-semibold lg:text-[14px]">
                  {product.name}
                </span>
              </div>
              <div className="flex gap-1 items-center lg:text-start ">
                <span className="text-[11px] text-[#606060]">RS</span>
                <span className="font-semibold text-sm">4,699.00</span>
                <span className="text-[#606060] text-sm line-through">
                  4,699.00
                </span>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductCard;
