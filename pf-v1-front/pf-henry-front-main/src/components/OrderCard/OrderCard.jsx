import { NavLink, Link } from "react-router-dom";

export default function OrderCard({ orderId, image, title, price, productId, review }) {

  return (
    <span className="flex justify-evenly text-blackFred-300">
      <span className="w-full flex justify-between items-center">
        <span className="grid justify-start text-left	 text-blackFred-100">
          <NavLink to={`/Detail/${productId}`}>
            <span className="justify-start text-orangeFred-100 text-[25px] font-bebas">
              <span>{title}</span>
            </span>
          </NavLink>
          <span className="text-[20px] text-black">
            <span>${price}</span>
          </span>
        </span>
      <span className="justify-center">
        <NavLink to={`/Detail/${productId}`}>
          <img
            src={image}
            className="object-contain h-[100px] w-[100px]"
            srcSet={`${image} 352w, ${image} 832w, ${image} 1200w`}
            alt="Product Image"
          />
        </NavLink>
      </span>
      </span>
      <span className="flex justify-center flex-col ml-2">
        {
          !review ?
          <NavLink to={`/createReview/?id=${productId}&orderId=${orderId}`}>
            <button type="button" className="font-bebas py-[8px] px-[24px] rounded-sm bg-redFred-300 text-blackFred-300 outline-none hover:border-transparent" >Review</button>
          </NavLink>
        :
          <button type="button" disabled={true} className="cursor-not-allowed font-bebas py-[8px] px-[24px] rounded-sm bg-redFred-300 text-blackFred-300 outline-none hover:border-transparent" >Review</button>
        }
        
      </span>
    </span>
  );
}
