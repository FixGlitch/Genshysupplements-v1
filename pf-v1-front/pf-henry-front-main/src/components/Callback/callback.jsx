import React, { useEffect } from "react";
import NavBar from "../navBar/navBar"
import { useLocation } from "react-router-dom";
import { LogoutButton } from "../Buttons/Logout-button";
import { useAuth0 } from "@auth0/auth0-react";

export const CallbackPage = () => {
  const location = useLocation();
  const { search } = location;
  const params = new URLSearchParams(search);
  const error = params.get('error');
  const errorDescription = params.get('error_description');
  const {user } = useAuth0()

  useEffect(() => {
    const attemptedUser = error?.response?.config?.data;
      console.log('User data from the error:', attemptedUser);


    // Now you can use these values as needed
    console.log('Error:', error);
    console.log('Error Description:', errorDescription);
    console.log(user);
  }, []);


  return (
    <div className="text-blackFred-100">
      <h1>{error}</h1>
       <h2> {errorDescription}</h2>
       <LogoutButton />

    </div>
  );
};