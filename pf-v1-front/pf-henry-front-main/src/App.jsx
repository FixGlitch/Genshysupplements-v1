import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import CardDetail from "./components/CardDetail/CardDetail";
import Home from "./views/Home/Home";
import Product from "./views/Products/Products";
import Profile from "./views/AddProduct/AddProduct";
import Us from "./views/Aboutus/us";
import NavBar from "./components/navBar/navBar";
import NavBarAdmin from "./components/Admin/navBarAdmin/navBarAdmin";
import Admin from "./views/Admin/Admin";
import { Footer } from "./components/Footer/Footer";
import { CallbackPage } from "./components/Callback/callback";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "./redux/users/usersActions";
import Error from "./views/error/error";
import MyAccount from "./views/MyAccount/MyAccount";
import CreateReview from "./views/CreateReview/CreateReview";
import Form from "./components/FormProduct/FormProduct";
import { loadCart } from "./redux/Cart/cartActions";

const cartFromLocalStorageRaw = localStorage.getItem("cart");
const cartFromLocalStorage = JSON.parse(cartFromLocalStorageRaw || "{}");

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isLoading, user, isAuthenticated } = useAuth0();
  const { productsInCart } = useSelector((state) => state.cart);
  const { user_detail } = useSelector((state) => state.users);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(postUser(user)).then(() => console.log(user_detail));
    }
  }, [user, dispatch]);

  useEffect(() => {
    console.log(cartFromLocalStorageRaw);
    dispatch(loadCart(cartFromLocalStorage));
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const user_cart = localStorage.getItem("user-cart")
      console.log("user_cart")
      console.log(user_cart)
      console.log(user.sub)
      if (!user_cart) {
        localStorage.setItem("user-cart", JSON.stringify([{ user: user.sub, cart: productsInCart }]))
      } else {
        const user_cart_arr = JSON.parse(user_cart)
        const loggedUserCart = user_cart_arr.filter((cart) => cart.user == user.sub)
        console.log(loggedUserCart);
        console.log(loggedUserCart[0]?.user);
        if (loggedUserCart.length > 0) {
          const updatedUserCart = user_cart_arr.map(item => {
            if (item.user === user.sub) {
              return { ...item, cart: productsInCart };
            }
            return item;
          });
          localStorage.setItem("user-cart", JSON.stringify(updatedUserCart))
        } 
        else localStorage.setItem("user-cart", JSON.stringify( [...user_cart_arr, {user: user.sub, cart: productsInCart}] ))
    }}
    localStorage.setItem("cart", JSON.stringify(productsInCart))
  }, [productsInCart])



  return (
    <>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          {" "}
          <div class="sticky top-0 z-10">
            {pathname !== "/" &&
              (user_detail.role === "ADMIN" ? <NavBarAdmin /> : <NavBar />)}
          </div>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/products"
              element={user_detail.role === "ADMIN" ? <Admin /> : <Product />}
            />
            <Route path="/createReview" element={<CreateReview />} />
            <Route path="/aboutus" element={<Us />} />
            <Route path="/addproduct" element={<Profile />} />
            <Route path="/edit/:id" element={<Form />} />
            <Route path="/callback" element={<CallbackPage />} />
            <Route path="/myaccount/orders/:id" element={<MyAccount />} />
            <Route path="/myaccount/orders" element={<MyAccount />} />
            <Route path="/myaccount/users" element={<MyAccount />} />
            <Route path="/Detail/:id" element={<CardDetail />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          {pathname !== "/" && <Footer />}
        </>
      )}
    </>
  );
}

export default App;
