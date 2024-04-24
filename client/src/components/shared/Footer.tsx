import { 
    FaInstagram, 
    FaTwitter, 
    FaFacebook, 
    FaLinkedin 
} from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="flex flex-wrap p-4 mt-4 border-t-2 dark:border-white border-black">
        <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
          <ul className="list-none">
            <span className="font-bold">Home</span>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Businesses
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Suppliers
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Usecases
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                FAQ
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                About us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <span className="font-bold">Support</span>
          <ul className="list-none">
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Acoount
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Supper center
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Feedback
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <span className="font-bold">Contact</span>
          <ul className="list-none">
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Careers
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Terms of service
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Privacy policy
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                Cookies policy
              </a>
            </li>
            <li className="py-2">
              <a href="" className="text-dark text-decoration-none">
                @ 2024 safeer all rights reserved
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 px-4">
          <span className="font-bold">Tranch you later, innovator.</span>
          <form className="flex items-center py-4">
            <div className="">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
            </div>
            <div className="bg-slate-950 border border-cyan-600 text-center text-white p-2 items-center rounded-tr-md">
              Subscribe
            </div>
          </form>
          <div className="flex text-3xl gap-4 mt-2 py-4">
            <FaFacebook />
            <FaTwitter  />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;