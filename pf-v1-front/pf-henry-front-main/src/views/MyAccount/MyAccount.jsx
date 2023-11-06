import { useLocation, useParams } from "react-router-dom";
import Dashboard from "../../components/Dashboard/Dashboard";
import UserMyAccount from "../../components/UserMyAccount/UserMyAccount";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function MyAccount() {
    const { pathname } = useLocation();
    return (
        <div>
            <h3 className="font-impact text-blackFred-300 ">My Account</h3>
            {   pathname.startsWith('/myaccount/users') && <UserMyAccount/>  }
            {   pathname.startsWith('/myaccount/orders') && <Dashboard/>  }
        </div>
      )
}