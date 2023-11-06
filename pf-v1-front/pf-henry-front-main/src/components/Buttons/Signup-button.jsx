import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/products",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <button  className="block px-4 py-2  mt-2 text-sm ml-2 w-[180px]  text-white hover:text-orangeFred-100" onClick={handleSignUp}>
      Sign Up
    </button>
  );
};
