import { Link } from "react-router-dom";
import { ModeToggle } from "@/shadcn/mode-toggle";
import { GiMedicines } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EasilyAddProduct from "../modals/EasilyAddProduct";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addProduct } from "@/store/actions/actions";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [addProductModalOpen, setAddProductModalOpen] = useState<boolean>(false);

  const addOneProduct = (productObject: object) => {
    console.log(productObject);
    setAddProductModalOpen(!addProductModalOpen)
    dispatch(addProduct({
      product: productObject
    }))
    .then((response: any) => {
      console.log(response);
      if (response?.payload && response?.payload?.message) {
        toast.success(response?.payload?.message)
      } else {
        toast.error("something went wrong")
      }
    })
    .catch(() => {
      toast.error("something went wrong")
    })
  };
  return (
    <header
      className={`mx-auto sticky top-0 left-0 z-10 h-20 w-full overflow-hidden flex flex-col items-center justify-center border-b dark:bg-slate-900 bg-white`}
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <header
        className={`h-20 flex items-center justify-center  w-[90%] md:w-[85%] mx-auto`}
      >
        <div className="h-[90%] bg-transparent w-full  flex justify-between">
          <div className="flex items-center gap-20">
            <GiMedicines
              onClick={() => navigate("/")}
              className="text-3xl hover:text-cyan-500 cursor-pointer"
            />
            <div className=" gap-10 hidden md:flex">
              <Link to={"/"}>About us</Link>
            </div>
          </div>
          <div className="flex items-center text-2xl gap-4 ">
            <div className="text-sm flex gap-10 items-center z-20">
              <Link to={"/"}>
                <BiHeart className="text-2xl hover:text-red-600" />
              </Link>

              <Link to={"/"}>
                <AiOutlineShoppingCart className="text-2xl hover:text-red-600" />
              </Link>
              <button 
              onClick={() => {
                setAddProductModalOpen(!addProductModalOpen)
              }}>
                <BsPlusSquare className="text-2xl hover:text-red-600" />
              </button>
              <div className="h-8 w-8 rounded-full overflow-hidden ">
                <img className="object-cover" src="/profile.jpg" alt="" />
              </div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </header>
      {addProductModalOpen && (
        <EasilyAddProduct
          isModalOpen={addProductModalOpen}
          setModalOpen={setAddProductModalOpen}
          afterConfirmation={addOneProduct}
        />
      )}
    </header>
  );
};

export default Navbar;
