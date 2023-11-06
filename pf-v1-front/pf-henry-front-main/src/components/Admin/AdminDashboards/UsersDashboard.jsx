import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FiltersContext } from "../../../context/filter";
import { activateUser, deleteUser, getAllUsers } from "../../../redux/users/usersActions";
import Swal from "sweetalert2";
import Loader from "../../Loader/Loader";
import { Paginated } from "../../Paginated/Paginated";

export default function UsersDashboard() {
  const { users, currentPage, totalPages } = useSelector((state) => state.users);
  const [isLoading, setIsLoading] = useState(false);
  const { filters, setFilters } = useContext(FiltersContext);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllUsers({ ...filters })).then(() => {
      setIsLoading(false);
    });
    console.log(users);
  }, [filters]);

  const banUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user won't be able to log in!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, delete it!",
      iconColor: "#d33",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(userId))
          .then(() => {
            setIsLoading(true);
            dispatch(getAllUsers({ ...filters })).then(() => {
              setIsLoading(false);
            });
          })
          .catch((error) => {
            console.error("Error al eliminar el usuario: ", error);
          });
      }
    });
  };

  const unbanUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will allow the user to log in!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, activate it!",
      iconColor: "#d33",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(activateUser(userId))
          .then(() => {
            setIsLoading(true);
            dispatch(getAllUsers("")).then(() => {
              setIsLoading(false);
            });
          })
          .catch((error) => {
            console.error("Error al activar usuario: ", error);
          });
      }
    });
  };

  const sortColumn = (target) => {
    if (filters.orderBy === target) setFilters({ ...filters, orderBy: "-" + target });
    else setFilters({ ...filters, orderBy: target });
  };

  return (
    <div  className="overflow-x-auto m-auto sm:mt-[50px] md:mt-[50px]lg:mt-[50px]   rounded-md">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative m-auto p-5 my-10 rounded-md bg-blackFred-100 w-1200">
          <div className="min-w-full">
            <div className="overflow-x-auto">
            <table className="min-w-full m-auto">
              <thead>
                <tr>
                  <th className="bg-gray-200 rounded-md text-blackFred-100 px-4 py-2">
                    Given Name
                  </th>
                  <th className="bg-gray-200 rounded-md text-blackFred-100 px-4 py-2">
                    Family Name
                  </th>
                  <th className="bg-gray-200 rounded-md text-blackFred-100 px-4 py-2" onClick={() => sortColumn("email")}>
                    Email {filters.orderBy === "email" ? "↑" : filters.orderBy === "-email" ? "↓" : ""}
                  </th>
                  <th className="bg-gray-200 rounded-md text-blackFred-100 px-4 py-2">Address</th>
                  <th className="bg-gray-200 rounded-md text-blackFred-100 px-4 py-2" onClick={() => sortColumn("role")}>
                    Role {filters.orderBy === "role" ? "↑" : filters.orderBy === "-role" ? "↓" : ""}
                  </th>
                  <th className="bg-gray-200 rounded-md text-blackFred-100 px-4 py-2">Status</th>
                  <th className="bg-gray-200 rounded-md text-blackFred-100 px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 bg-gray-200 text-blackFred-100 rounded-sm py-2">{user.given_name}</td>
                    <td className="px-4 bg-gray-200 text-blackFred-100 rounded-sm py-2">{user.family_name}</td>
                    <td className="px-4 bg-gray-200 text-blackFred-100 rounded-sm py-2">{user.email}</td>
                    <td className="px-4 bg-gray-200 text-blackFred-100 rounded-sm py-2">{user.address}</td>
                    <td className="px-4 bg-gray-200 text-blackFred-100 rounded-sm py-2">{user.role}</td>
                    <td className="px-4 bg-gray-200 text-blackFred-100 rounded-sm py-2">{user.isActive ? "Active" : "Not Active"}</td>
                    <td className="px-4 bg-gray-200 text-blackFred-100 rounded-sm py-2">
                      <div>
                        <button className="mx-2 text-white" onClick={() => banUser(user._id)}>Ban User</button>
                        <button className="mx-2 text-white" onClick={() => unbanUser(user._id)}>Unban User</button>
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
