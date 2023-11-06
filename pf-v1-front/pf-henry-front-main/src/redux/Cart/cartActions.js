import { addProduct, deleteProduct, updateProductQuantity, loadProducts } from './cartSlice';
import { toast } from "react-toastify";

export const loadCart = (products) => (dispatch) => {
  dispatch(loadProducts(products));
};

export const addProductToCart = (product) => (dispatch) => {
  dispatch(addProduct(product));
};

export const deleteProductFromCart = (productId) => (dispatch) => {
  dispatch(deleteProduct(productId));
};

export const updateProductQuantityInCart = (productId, quantity) => (dispatch) => {
  dispatch(updateProductQuantity({ id: productId, quantity }));
};

export const processPayment = (order) => async (dispatch) => {
  try {
    const response = await axios.post("`${URLBASE}/payment/create-checkout-session`", order);
    console.log("Pago procesado con éxito:", response.data);
  } catch (error) {
    console.error("Error al procesar el pago:", error);
  }
}

export const showToast = (message, options = {}) => {
  return (dispatch) => {
    toast.success(message, {
      position: options.position || "top-left",
      autoClose: options.autoClose || 5000,
      hideProgressBar: options.hideProgressBar || false,
      closeOnClick: options.closeOnClick || true,
      pauseOnHover: options.pauseOnHover || true,
      draggable: options.draggable || true,
      progress: options.progress || undefined,
      theme: options.theme || "light",
    });
  };
};
  //delete eliminar productos del estado global del carrito (en el carrito)
  //Agregar productos del carrito al estado global (se usa en detalle y en producto)
  // Funcion multiplicar mismo producto (producto en si ) 
