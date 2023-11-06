import React, { Fragment, useState, useEffect } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { useSelector, useDispatch } from "react-redux"
import {
  deleteProductFromCart,
  updateProductQuantityInCart,
} from "../../redux/Cart/cartActions"
import { useAuth0 } from "@auth0/auth0-react"
import { LoginButton } from "../Buttons/Login-button"
import { CheckoutButton } from "../Buttons/Checkout-button"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Cart() {
  const { user_detail} = useSelector((state) => state.users)
  const [open, setOpen] = useState(true)
  const { productsInCart, totalPrice } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const { isLoading, user, isAuthenticated } = useAuth0()
  const handleClose = () => {
    setOpen(false);
  };
  function aumentar(evt) {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  }
  function disminuir(evt) {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }
  
  const handleDeleteClick = (productId) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E83B46',
      cancelButtonColor: '#a5dc86',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductFromCart(productId));
        MySwal.fire(
          'Removed!',
          'Your file has been Removed.',
          'success'
        );
      }
    });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    dispatch(updateProductQuantityInCart(productId, newQuantity))
  }

  useEffect(() => {}, [open])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-blackFred-100 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="relative inset-0">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-[100vh] flex-col overflow-y-scroll bg-whiteFred-100 shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-roboto-bold text-blackFred-300">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative py-[8px] px-[24px] font-bebas bg-redFred-100 rounded-sm text-blackFred-300 outline-none hover:border-transparent"
                            onClick={handleClose}
                          >
                            <span className="relative -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root rounded-sm bg-graym p-[20px]">
                          <ul role="list" className="m-0 p-0">
                            {Object.keys(productsInCart).map((productId) => (
                              <li key={productId} className="flex">
                                <div className="h-24 w-24 flex-shrink-0 rounded-md border border-redFred-200">
                                  <img
                                    src={productsInCart[productId].imageSrc}
                                    alt={productsInCart[productId].imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 mt-[-20px] flex flex-col">
                                  <div className="w-[200px] h-[80px]">
                                    <div className="flex justify-between text-base font-roboto-bold text-blackFred-100">
                                      <h3>
                                        <a
                                          href={productsInCart[productId].href}
                                          className="text-blackFred-100  hover:text-orangeFred-300"
                                        >
                                          {productsInCart[productId].title}
                                        </a>
                                      </h3>
                                    </div>
                                    <div className="flex mt-[-40px] justify-between text-base font-roboto-bold text-blackFred-100">
                                      <h3 className="text-blackFred-100 hover:text-orangeFred-300">
                                        {productsInCart[productId].price}
                                      </h3>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="mt-2 first-letter:font-roboto-bold text-[15px] text-blackFred-100">
                                      Stock {productsInCart[productId].stock}{" "}
                                    </p>
                                    <p className="mt-4 font-roboto-bold text-[15px] text-blackFred-100 text-white-300">
                                      Quantity:{" "}
                                    </p>
                                  </div>
                                  <div className="-mt-6 mb-10 flex flex-1 items-end justify-between text-sm">
                                    <div className="flex mt-3">
                                    { productsInCart[productId].quantity>1? <button 
                                      onClick={() => handleQuantityChange(productId, productsInCart[productId].quantity - 1)}
                                      type="button"
                                      className="font-impact py-1 px-2 rounded-xl bg-redFred-300 text-blackFred-300 outline-none hover:border-transparent"
                                    >
                                      -
                                    </button>:<button className="font-impact py-1 px-2 rounded-xl bg-blackFred-300 text-redFred-300 outline-none hover:border-transparent">-</button>}
                                    <span className="mx-2 text-blackFred-300">
                                      {productsInCart[productId].quantity}
                                    </span>
                                      { productsInCart[productId].quantity<productsInCart[productId].stock? <button 
                                      onClick={() => handleQuantityChange(productId, productsInCart[productId].quantity + 1)}
                                      type="button"
                                      className="font-impact py-1 px-2 rounded-xl bg-redFred-300 text-blackFred-300 outline-none hover:border-transparent"
                                    >
                                      +
                                    </button>:<button className="font-impact py-1 px-2 rounded-xl bg-blackFred-300 text-redFred-300 outline-none hover:border-transparent">+</button>}
                                    
                                    <div className="flex ml-4">
                                      <button
                                        onClick={() =>
                                          handleDeleteClick(productId)
                                        }
                                        type="button"
                                        className="font-bebas py-[8px] px-[24px] rounded-sm bg-redFred-300 text-blackFred-300 outline-none hover:border-transparent"
                                      >
                                        Remove
                                      </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p className="text-blackFred-300">Subtotal</p>
                        <p className="text-blackFred-300">{(totalPrice).toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-blackFred-300">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div>
                        {isAuthenticated ? (
                          <CheckoutButton
                            products={Object.keys(productsInCart).map(
                              (productId) => ({
                                title: productsInCart[productId].title,
                                image: productsInCart[productId].imageSrc,
                                price: productsInCart[productId].price,
                                quantity: productsInCart[productId].quantity,
                                productId: productId
                              })
                            )}
                            totalPrice={totalPrice}
                            userId={user_detail._id}
                          />
                        ) : (
                          <LoginButton />
                        )}
                      </div>
                      <div className="mt-6 flex place-content-evenly text-center text-sm text-whiteFred-100">
                        <p>or</p>
                        <button
                          type="button"
                          className="font-roboto-bold rounded-lm py-[8px] px-[24px] bg-redFred-300 text-blackFred-300 outline-none hover:border-transparent"
                          onClick={handleClose}
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

