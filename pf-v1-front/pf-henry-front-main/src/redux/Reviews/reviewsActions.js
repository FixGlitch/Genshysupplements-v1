import axios from 'axios';
import { setReviews } from './reviewsSlice';

const URLBASE = import.meta.env.VITE_URL_BASE;

export const createReview = (reviewData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URLBASE}/reviews/create`, reviewData);
      if (response.status === 201) {
        // La revisión se creó exitosamente, puedes realizar acciones adicionales si es necesario.
        // Por ejemplo, actualizar el estado de Redux.
      } else {
        // Manejar errores si es necesario.
        console.error('Error al crear la revisión');
      }
    } catch (error) {
      console.error('Error al crear la revisión', error);
    }
  };
};



export const fetchReviewsByProductId = (productId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URLBASE}/reviews/${productId}`); // Ajusta la URL según tu estructura de rutas
      const reviews = response.data;
      dispatch(setReviews(reviews)); // Esta acción almacenará las reseñas en el estado de Redux
    } catch (error) {
      console.error('Error al obtener las reseñas', error);
      throw error;
    }
  };
};