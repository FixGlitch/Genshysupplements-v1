import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchReviewsByProductId } from '../../redux/Reviews/reviewsActions';
import Rating from '@mui/material/Rating';

const ProductReview = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [ratings, setRatings] = useState([]); 
  const [averageRating, setAverageRating] = useState(5); 

  useEffect(() => {
    dispatch(fetchReviewsByProductId(id)); // Obtén las reseñas por ID del producto
  }, [id]);

  const { reviews, isLoading } = useSelector((state) => state.reviews);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = ratings.reduce((sum, rating) => sum + rating, 0);
      const newAverageRating = totalRating / ratings.length;
      setAverageRating(newAverageRating);
    }
  }, [ratings]);
  
  return (
    <div className='lg:w-[90vw] xl:w-[70vw]  md:self-center md:mt-[3vh] bg-white xl:flex xl:self-center lg:flex lg:self-center	sm:w-[70vw] sm:flex sm:self-center md:w-[70vw] md:flex '>
      {isLoading ? (
        <p>Loading...</p>
      ) : reviews.length > 0 ? (
        <div className='grid grid-cols-3 place-content-evenly mx-[20px] sm:grid-cols-1 md:grid-cols-1 md:mx-[auto] sm:h-[100px] sm:my-[20px] lg:mx-[auto]  '>
          {reviews.map((review, index) => {
            ratings.push(review.rating);
            return(
              <span key={index} className='flex-row overflow-auto w-[400px] md:w-[270px]	md:mx-[auto] xl:mx-[auto] bg-graym rounded-none md:mb-[5vh] sm:w-[296px] lg:w-[350px] lg:mx-[20px]	'>
                <span className='flex items-center ml-[25px] mt-[25px] md:ml-[15px] md:mt-[10px] sm:mt-[10px] sm:ml-[15px]  '>
                  
                  <span className='grid justify-items-start	'>
                                
                    <Rating
                      name="read-only"
                      value={review.rating}
                      precision={1}
                      readOnly 
                      className=' '
                    />
                  </span>
                </span>
                <p className='font-bayon-bold flex items-center px-[20px] font-monse text-blackFred-300 text-left	mt-0	 overflow-auto	 h-[70px] md:h-[30px]	sm:h-[35px]'> {review.comments}</p>
              </span>
            )
          })}
        </div>
      ) : (
        <p className=' xl:mx-[auto] xl:mb-[13%] text-[30px] font-impact text-black xl:flex xl:justify-center xl:text-center md:text-[45px]'>No reviews available.</p>
      )}
    </div>
  );
};

export default ProductReview;