import { useAuth0 } from "@auth0/auth0-react";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../../assets/Logo(1).png";
import Lmenu from "../../../assets/Logo(2).png";
import SearchBar from "../../SearchBar/SearchBar";
import { SignupButton } from "../../Buttons/Signup-button";
import { LogoutButton } from "../../Buttons/Logout-button";
import Cart from "../../Cart/Cart";
import Profile from "../../../assets/Profile.png";
import { LoginButton } from "../../Buttons/Login-button";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  const { pathname } = useLocation();
  const { isAuthenticated } = useAuth0();
  const [toggleCart, setToggleCart] = useState(false);

  const desplegarCart = () => {
    toggleCart === false ? setToggleCart(true) : setToggleCart(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="sticky z-20 bg-whiteFred-100">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="xl:hidden lg:hidden flex">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="bg-redFred-100 relative inline-block p-2 text-blackFred-300 hover:text-orangeFred-300">
                  <img src={Lmenu} alt="" className="h-6 w-8 rounded-full" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute sm:right-auto z-10 mt-2 w-48 origin-top-left bg-whiteFred-100 py-1 rounded-md shadow-lg">
                  <div>
                    {pathname !== "/" && (
                      <NavLink
                        to="/home"
                        className="block px-4 py-2 text-blackFred-300 hover:text-orangeFred-300"
                      >
                        Home
                      </NavLink>
                    )}
                    {pathname !== "/" && (
                      <NavLink
                        to="/products"
                        className="block px-4 py-2 text-blackFred-300 hover:text-orangeFred-300"
                      >
                        Dashboard
                      </NavLink>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="sm:hidden md:hidden lg:flex lg:items-center xl:flex xl:items-center">
            <div className="sm:hidden md:hidden relative xl:flex">
              <NavLink to="/home">
                <img src={Logo} alt="" className="sm:hidden ml-[0px] mt-[15px] h-[80px] w-[120px]" />
              </NavLink>
            </div>
            <div className="sm:hidden md:hidden font-bayon-bold sm:ml-6 space-x-[80px]">
              {pathname !== "/" && (
                <NavLink
                  to="/home"
                  className="text-blackFred-300 hover:text-orangeFred-300"
                >
                  Home
                </NavLink>
              )}
              {pathname !== "/" && (
                <NavLink
                  to="/products"
                  className="text-blackFred-300 hover:text-orangeFred-300"
                >
                  Dashboard
                </NavLink>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <SearchBar />
            <button
              onClick={desplegarCart}
              type="button"
              className="ml-4 relative bg-redFred-100 py-2 px-4 rounded-sm text-blackFred-300 hover:border-transparent"
            >
              <ShoppingCartIcon className="h-4 w-4" aria-hidden="true" />
              {toggleCart ? <Cart /> : null}
            </button>
            <div className="sm:hidden">
            </div>
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="relative flex rounded-none py-[2.5px] px-[24px] h-[39] bg-redFred-100 text-sm">
                  <img className="h-8 w-8 rounded-full" src={Profile} alt="" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right bg-whiteFred-100 py-1 rounded-md shadow-lg">
                  <div>
                    {!isAuthenticated ? (
                      <>
                        <SignupButton />
                        <LoginButton />
                      </>
                    ) : (
                      <>
                        <LogoutButton />
                      </>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
