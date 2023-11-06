import { useDispatch, useSelector } from "react-redux";
import { Paginated } from "../../Paginated/Paginated";
import { activateProduct, deleteProduct, getProductFiltered } from "../../../redux/products/productsActions";
import { useEffect, useContext, useState } from "react";
import { FiltersContext } from "../../../context/filter";
import Loader from "../../Loader/Loader";
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from "react-router-dom";


export default function ProductDashboard() {
  const { products, currentPage, totalPages } = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false)
  const { filters, setFilters } = useContext(FiltersContext);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // console.log(products);
  // const arrowIcon = isSorted ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '';
  const arrowIcon = '↑'



  useEffect(() => {
    setIsLoading(true)
    dispatch(getProductFiltered({ ...filters, limit: 13 })).then(() => { setIsLoading(false) })
  }, [filters])

  const sortColumn = (target) => {
    if (filters.orderBy === target) setFilters({ ...filters, orderBy: '-' + target })
    else setFilters({ ...filters, orderBy: target })
  }

  const deleteProductById = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This way the product will not be visible for clients anymore !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red ',
      cancelButtonColor: 'green',
      confirmButtonText: 'Yes, delete it!',
      iconColor: '#d33',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(productId))
          .then(() => {
            setIsLoading(true)
            setTimeout(() => {
              dispatch(getProductFiltered({ ...filters, limit: 13 })).then(() => { setIsLoading(false) });
            }, 2000);
          })
          .catch((error) => {
            console.error("Error al eliminar el producto: ", error);
          });
      }
    });
  };

  const activateProductById = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This way your product will be visible for clients !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, activate it!',
      iconColor: '#d33',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(activateProduct(productId))
          .then(() => {
            setIsLoading(true)
            setTimeout(() => {
              dispatch(getProductFiltered({ ...filters, limit: 13 })).then(() => { setIsLoading(false) });
            }, 2000);
          })
          .catch((error) => {
            console.error("Error al activar el producto: ", error);
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto m-auto z-1 sm:mt-20 md:mt-20 lg:mt-20">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative m-auto p-5 my-10 rounded-md bg-blackFred-100 w-1200">
          <div className="min-w-full">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer" onClick={() => sortColumn('title')}> Title {filters.orderBy === 'title' ? '↑' : (filters.orderBy === '-title' ? '↓' : '')}</th>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer" onClick={() => sortColumn('category')}> Category {filters.orderBy === 'category' ? '↑' : (filters.orderBy === '-category' ? '↓' : '')}</th>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer" onClick={() => sortColumn('price')}> Price {filters.orderBy === 'price' ? '↑' : (filters.orderBy === '-price' ? '↓' : '')}</th>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer" onClick={() => sortColumn('flavor')}> Flavor {filters.orderBy === 'flavor' ? '↑' : (filters.orderBy === '-flavor' ? '↓' : '')}</th>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer" onClick={() => sortColumn('stock')}>Stock {filters.orderBy === 'stock' ? '↑' : (filters.orderBy === '-stock' ? '↓' : '')}</th>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer" onClick={() => sortColumn('sold')}>Sold {filters.orderBy === 'sold' ? '↑' : (filters.orderBy === '-sold' ? '↓' : '')}</th>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer">Status</th>
                    <th className="py-3 text-blackFred-300 bg-redFred-100 px-4 cursor-pointer">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4"><NavLink className="text-black hover:text-orangeFred-300" to={`/Detail/${product._id}`}>{product.title}</NavLink></td>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4">{product.category}</td>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4">${product.price}</td>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4">{product.flavor}</td>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4">{product.stock}</td>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4">{product.sold}</td>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4">{product.isActive ? 'Active' : 'Not Active'}</td>
                      <td className="py-2 rounded-sm text-blackFred-300 bg-graym px-4">
                        <div className="flex">
                          <button className="mx-1  text-white" onClick={() => navigate(`/edit/${product._id}`)}>Edit</button>
                          <button className="mx-1  text-white" onClick={() => deleteProductById(product._id)}>Delete</button>
                          <button className="mx-1  text-white" onClick={() => activateProductById(product._id)}>Activate</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Paginated currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}  

const SortableHeader = ({ title, columnKey, onSort, sortConfig }) => {
  const isSorted = sortConfig.key === columnKey;

  const arrowIcon = isSorted ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '';

  return (
    <th className="bg-graym text-whiteFred-100" onClick={() => onSort(columnKey)}>
      {title} {arrowIcon}
    </th>
  );
};