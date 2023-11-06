import { useDispatch, useSelector } from "react-redux";
import { Paginated } from "../../Paginated/Paginated";
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Loader from "../../Loader/Loader";
import { FiltersContext } from "../../../context/filter";
import { getAllOrders } from "../../../redux/Orders/orderActions";


export default function OrdersDashboard() {
  const { orders, currentPage, totalPages } = useSelector((state) => state.orders);
  const [isLoading, setIsLoading] = useState(false)
  const { filters } = useContext(FiltersContext);
  const dispatch = useDispatch()

  useEffect(() => {
    setIsLoading(true)
    dispatch(getAllOrders({ ...filters })).then(() => { setIsLoading(false) })
    console.log('orders: ');
    console.log(orders);
  }, [filters])


  return (
    <div className="overflow-x-auto m-auto z-1 sm:mt-20 md:mt-20 lg:mt-20">
      {isLoading ? <Loader /> : <div className="relative m-auto p-5 my-10 rounded-md bg-blackFred-100 w-1200">
        <div className="min-w-full">
          <div className="overflow-x-auto">
            <table className=" min-w-full xl:mb-[40px] ">
              <thead>
                <tr>
                  <th className="bg-graym rounded-lg text-blackFred-100 py-[20px] px-[80px]">Order Id</th>
                  <th className="bg-graym rounded-lg text-blackFred-100 py-[20px] px-[80px]">Products</th>
                  <th className="bg-graym rounded-lg text-blackFred-100 py-[20px] px-[80px]">Status</th>
                  <th className="bg-graym rounded-lg text-blackFred-100 py-[20px] px-[80px]">Total</th>
                  <th className="bg-graym rounded-lg text-blackFred-100 py-[20px] px-[80px]">UserId</th>
                </tr>
              </thead>
              <tbody>
                {
                  orders.map((order) => (
                    <tr key={order._id}>
                      <td className="bg-graym rounded-sm text-blackFred-100">{order._id}</td>
                      <td className="bg-graym rounded-sm text-blackFred-100">{order.products.map((p, i) => <span key={i}>{p.title}</span>)}</td>
                      <td className="bg-graym rounded-sm text-blackFred-100">{order.status}</td>
                      <td className="bg-graym rounded-sm text-blackFred-100">{order.total}</td>
                      <td className="bg-graym rounded-sm text-blackFred-100">{order.userId}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <Paginated currentPage={currentPage} totalPages={totalPages} />
      </div>}
    </div>
  )
}