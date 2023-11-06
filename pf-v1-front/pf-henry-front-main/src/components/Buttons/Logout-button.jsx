import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


export const LogoutButton = () => {
  const { user, logout } = useAuth0();
  const { pathname } = useLocation();
  const { productsInCart } = useSelector((state) => state.cart)
  
  const handleLogout = () => {
    // localStorage.clear()
    if(pathname !== '/callback') {
      MySwal.fire({
        title: 'Are you sure you want to log out?',
        icon:'info',
        showCancelButton: true,
        confirmButtonColor: '#a5dc86',
        cancelButtonColor: '#E83B46',
        confirmButtonText: 'Yes, log out'
      }).then((result) => {
        if (result.isConfirmed) {
          logout({
            logoutParams: {
              returnTo: window.location.origin,
            },
          });
        }
      });  
    }
    else {
      logout({
        logoutParams: {
          returnTo: window.location.origin,
        },
      });
    }
    localStorage.setItem("cart", "{}");
    // localStorage.setItem("user-cart", "[]");
  };
  
  

 

  return (
    <>
  {pathname === '/callback'
   ?<button  className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100" onClick={handleLogout}>
    Back to Home
  </button>
   :<button  className="block px-4 py-2 mt-2 text-sm ml-2 w-[180px] text-white hover:text-orangeFred-100" onClick={handleLogout}>
      Log Out
    </button>}
    </>
  );
};