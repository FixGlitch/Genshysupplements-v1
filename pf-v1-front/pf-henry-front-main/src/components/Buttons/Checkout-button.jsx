import axios from "axios";
import { useDispatch } from "react-redux";
import { loadCart } from "../../redux/Cart/cartActions";


export const CheckoutButton = ({ products, totalPrice, userId }) => {
  const dispatch = useDispatch()
  const URLBASE = import.meta.env.VITE_URL_BASE;
  const handleCheckout = async ({ products, totalPrice, userId }) => {
    const order = { products, totalPrice, userId };
    try {
      const { data } = await axios.post(
        `${URLBASE}/payment/create-checkout-session`,
        order
      )
      window.open(data, "_self");
      dispatch(loadCart({}))
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
    }
  };

  return (
    <button
      className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100"
      onClick={() => {
        handleCheckout({ products, totalPrice, userId });
      }}
      >
      Checkout
    </button> 
  );
};

