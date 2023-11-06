import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiltersContext } from "../../../context/filter";
import fil from "../../../assets/filter.svg"
export default function NavBar({ selectedMenu, setSelectedMenu }) {
  const { filters, setFilters } = useContext(FiltersContext);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sm:absolute md:absolute lg:absolute xl:relative  xl:bg-blackFred-100 font-impact p-4">
      <div>
        <h2 className="text-left text-whiteFred-100 sm:hidden md:hidden lg:hidden">
          Dashboard
        </h2>
        <div className="sm:hidden md:hidden lg:hidden flex flex-col mt-4">
          <button
            onClick={() => {
              setSelectedMenu("Products");
              setFilters({ ...filters, page: 1 });
            }}
            className="my-2 bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 outline-none rounded-sm hover:border-transparent w-full"
          >
            Products
          </button>

          <button
            onClick={() => {
              setSelectedMenu("Users");
              setFilters({ ...filters, page: 1 });
            }}
            className="my-2 bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 outline-none rounded-sm hover:border-transparent w-full"
          >
            Users
          </button>

          <button
            onClick={() => {
              setSelectedMenu("Orders");
              setFilters({ ...filters, page: 1 });
            }}
            className="my-2 bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 py-2 px-4 outline-none rounded-sm hover:border-transparent w-full"
          >
            Orders
          </button>

          <NavLink to="/addproduct">
            <button className="my-2  bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 outline-none rounded-sm hover:border-transparent w-full">
              Add Product
            </button>
          </NavLink>
        </div>
      </div>
      <div className="sticky -ml-[10px] xl:hidden rounded-xl mx-2 w-[50px] h-[20px] z-10">
        <button
          onClick={toggleDropdown}
          className="  bg-redFred-100 text-blackFred-300 hover:text-orangeFred-300 outline-none rounded-sm"
        >
            <img className="relative m-auto" src={fil} alt="" />
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 mt-2 bg-black p-2 rounded-md w-[200px]">
            <button
              onClick={() => {
                setSelectedMenu("Products");
                setFilters({ ...filters, page: 1 });
                toggleDropdown();
              }}
              className="my-2 text-whiteFred-100 hover:text-orangeFred-300 outline-none w-full"
            >
              Products
            </button>
            <button
              onClick={() => {
                setSelectedMenu("Users");
                setFilters({ ...filters, page: 1 });
                toggleDropdown();
              }}
              className="my-2 text-whiteFred-100 hover:text-orangeFred-300 outline-none w-full"
            >
              Users
            </button>
            <button
              onClick={() => {
                setSelectedMenu("Orders");
                setFilters({ ...filters, page: 1 });
                toggleDropdown();
              }}
              className="my-2 text-whiteFred-100 hover:text-orangeFred-300 outline-none w-full"
            >
              Orders
            </button>
            <NavLink to="/addproduct">
              <button className="my-2 text-whiteFred-100 hover:text-orangeFred-300 outline-none w-full">
                Add Product
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
//:3
