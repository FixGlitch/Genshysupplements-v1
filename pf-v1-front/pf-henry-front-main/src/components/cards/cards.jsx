import React, { useEffect } from "react";
import { Card } from "../card/card";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../redux/products/productSlice";
import NotFound from "../notFound/notFound";
import { Paginated } from "../Paginated/Paginated";
import Loader from "../Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function Cards() {
  const { products, currentPage, totalPages, isLoading } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());

    setTimeout(() => {
      dispatch(stopLoading());
    }, 3000);
  }, [products, currentPage]);

  return (
    <div className="relative overflow-hidden w-auto h-auto mx-[auto]">
      <ToastContainer />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="sm:grid sm:grid-cols-2 sm:gap-2 md:grid md:grid-cols-3 md:gap-2 lg:grid lg:grid-cols-2 lg:gap-20 xl:grid xl:grid-cols-3 xl:gap-20  ">
          {products.length > 0 ? (
            products.map((product) => ( 
              <Card
                key={product._id}
                id={product._id}
                image={product.image ?? null}
                title={product.title}
                category={product.category}
                price={product.price}
                stock={product.stock}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
      )}
      <Paginated  currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
