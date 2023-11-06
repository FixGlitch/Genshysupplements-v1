import { useDispatch, useSelector } from "react-redux";
import Filtered from "../../components/Filtered/Filtered";
import { Cards } from "../../components/cards/cards";
import { useContext, useEffect, useState } from "react";
import { getProductFiltered } from "../../redux/products/productsActions";
import { FiltersContext } from "../../context/filter";
import Loader from "../../components/Loader/Loader";
import Featured from "../../components/Featured/Featured";
import { useAuth0 } from "@auth0/auth0-react";
import { addProductToCart, loadCart } from "../../redux/Cart/cartActions";

export default function Products() {



  const dispatch = useDispatch()
  const { filters, setFilters } = useContext(FiltersContext)
  const [isLoading, setIsLoading] = useState(false)
  const { user, isAuthenticated } = useAuth0()
  const { user_detail } = useSelector((state) => state.users);
  

  useEffect(() => {
    setIsLoading(true)
    dispatch(getProductFiltered({...filters, active: true})).then(() => {setIsLoading(false)})
  }, [filters])

  useEffect(() => {
    if (isAuthenticated) { 
     const user_cart = localStorage.getItem("user-cart")
      console.log(user_cart)
     if (user_cart) {
       const userCart = JSON.parse(user_cart)
console.log(userCart)
       const loggedUserCart = userCart.filter((cart) => cart.user == user.sub)
      if (loggedUserCart.length) dispatch(loadCart(loggedUserCart[0].cart))
       const localCart = localStorage.getItem("cart")
       if (localCart != '{}'){
         const local_Cart = JSON.parse(localCart)
         const cartProducts = Object.entries(local_Cart)
         cartProducts.forEach((prod) => { dispatch(addProductToCart({id: prod[0], product: prod[1] }))
         })
         
       }      
     }}
   }, [])

  useEffect(() => {
    if (user_detail.role === "ADMIN") setFilters({
      orderBy: "",
      category: "",
      diet: "",
      flavor: "",
      weightType: "",
      weightMin: "",
      weightMax: "",
      page: 1,
      name: "",
    });
  }, [])

  return (
    <>
      <div>
        <span className="w-[0%]"></span>
        <div className="lg:flex lg:flex-row lg:ml-10 xl:flex xl:flex-row ">
          <Filtered />
          {!isLoading && <Cards />}
          <Featured />
        </div>

        <span className="min-h-[900px]"></span>
      </div>
    </>
  );
}
