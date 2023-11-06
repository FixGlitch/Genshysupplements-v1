import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductId } from "../../redux/products/productsActions";
import ProductReviews from "../ProductReviews/ProductReviews"
import { NavLink } from "react-router-dom"
import { resetReviews } from "../../redux/Reviews/reviewsSlice";
import { resetDetail } from "../../redux/products/productSlice"
import { addProductToCart } from "../../redux/Cart/cartActions";
import Rating from '@mui/material/Rating';
import logo from "../../assets/Logo(2).png"
export default function CardDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [averageRating, setAverageRating] = useState(5);

  useEffect(() => {
    dispatch(resetDetail());
    dispatch(resetReviews());
    dispatch(getProductId(id));
  }, [id]);
  
  const { detail, loading } = useSelector((state) => state.products);
  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      const newAverageRating = totalRating / reviews.length;
      setAverageRating(newAverageRating);
    }
  }, [reviews]);
  console.log(detail)
  
  const handleAddClick = () => {
    if (detail) {
      const product = detail;
      console.log(product)
      const imageSrc = product.image;
      dispatch(
        addProductToCart({
          id: product._id,
          product: {
            imageSrc,
            imageAlt: product.title,
            href: `/Detail/${id}`,
            title: product.title,
            price: product.price,
            stock: product.stock,
          },
        })
      );
    }
  }

  return (
    <div className="flex flex-col sm:mt-[25px]">
      <div className="lg:grid lg:my-[5%] lg:justify-items-center lg:justify-center xl:grid xl:justify-items-center xl:mt-[8%] xl:mb-[2%] md:w-[70vw] md:justify-items-center md:mx-[auto] md:mt-[3%] md:justify-center sm:flex-col sm:w-[355px] sm:mx-[auto] ">        
        {loading ? (
          <p className=" font-impact text-black">Loading...</p>
          ) : detail ? (                           
              <div className="flex place-items-center	md:max-w-[400px] md:mx-[auto]   border border-gray-900 bg-graym md:flex-col sm:flex-col" >
                {detail.image ? (
                  
                  <div className=" w-[418px] md:my-[auto] h-[425px] p-[25px] sm:h-[298px] md:h-[350px] md:w-[336px] md:px-0 md:pb-0 ">
                    <div className="  items-center justify-center mb-[10px] md:mb-[0px] hidden md:flex sm:flex">
                    <img src={logo} alt="" className=" h-[33px] mr-[10px]"/>
                    <h6 className=" font-bayon-bold text-blackFred-100 text-[15px] ml-[10px] my-0">GENSHY</h6>
                  </div>
                    <img
                      className=" h-[400px] md:h-[300px] md:mt-[15px]  rounded-tl-lg rounded-tr-xl rounded-bl-xl rounded-br-xl border sm:h-[250px]"
                      src={detail.image}
                      srcSet={`${detail.image} 352w, ${detail.image} 832w, ${detail.image} 1200w`}
                      alt="Product Image"
                      />
                  </div>
                ) : null}
                <div>
                  <div className=" flex items-center justify-center md:mb-[0px] md:hidden sm:hidden">
                    <img src={logo} alt="" className=" h-[40px] mr-[10px]"/>
                    <h6 className=" font-bayon-bold text-blackFred-100 text-[25px] ml-[10px] my-0">GENSHY</h6>
                  </div>
                  <div className="grid grid-cols-1 space-auto place-content-evenly text-start	md:pt-[10px] md:px-[15px]  text-blackFred-300 p-[50px] md:w-[290px] items-start sm:pt-0">  
                    <div className=" flex ">
                      <h1 className="font-impact w-[360px] md:w-[290px] text-[2rem] my-[10px] md:text-[1.5rem] sm:w-[255px] sm:text-[26px]">{detail.title}</h1>
                      <div className=" flex flex-wrap content-center sm:hidden md:hidden	">
                      <Rating name="read-only" value={averageRating} readOnly />                 
                      </div>
                    </div>  
                    <div className=" sm:flex flex-wrap content-center hidden md:flex 	">
                      <Rating name="read-only" value={averageRating} readOnly />                 
                      </div>              
                    <h2 className="font-bayon-bold text-[20px] w-[560px] my-[10px] md:text-[18px] sm:w-[255px] sm:mb-0 sm:text-[16px] md:w-[290px]">Flavor:    {detail.flavor}</h2>
                    <div className="flex">                      
                      <h2 className="font-bayon-bold text-[20px] w-[335px] my-[10px] md:h-[25px] md:w-[230px] md:text-[18px] sm:w-[255px] sm:mb-0 sm:text-[16px]">Ammount:   {detail.weight?.value} {detail.weight?.type}</h2>
                      <h2 className="font-bayon-bold text-[20px] w-[185px] my-[10px] md:text-[18px] md:hidden sm:hidden">Units available:   {detail.stock}</h2>
                    </div>
                    <h2 className="font-bayon-bold text-[20px] w-[185px] my-[10px] md:text-[18px] hidden md:flex sm:flex sm:w-[255px] sm:text-[16px]">Units available:   {detail.stock}</h2>
                    <div className="flex"> 
                      <h1 className="font-impact w-[320px] my-[10px] md:w-[230px] md:text-[40px] sm:w-[255px]">${detail.price}</h1>
                      <button
                      onClick={handleAddClick}
                      className="rounded-sm bg-redFred-100 text-whiteFred-100 w-[200px] outline-none hover:text-orangeFred-100 sm:hidden md:hidden"
                      >
                        Add to Cart
                      </button>
                    </div>
                    <button
                      onClick={handleAddClick}
                      className="rounded-sm bg-redFred-100 text-whiteFred-100 w-[200px] outline-none hover:text-orangeFred-100 hidden sm:flex md:flex"
                      >
                        Add to Cart
                      </button>
                  </div>
                </div>
              </div>
            
            ) : (
          <p>No product data available.</p>
        )}
      </div>       
       <ProductReviews/>
    </div>
  );
}
//:3