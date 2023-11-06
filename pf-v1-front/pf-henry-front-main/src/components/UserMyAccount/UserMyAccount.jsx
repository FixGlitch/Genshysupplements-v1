import { useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react";

export default function UserMyAccount () {
    const { user_detail} = useSelector((state) => state.users);
    const { user } = useAuth0();

    return (
        <div>
                <div className="flex justify-end m-auto w-1/2">
                    <a className="text-blackFred-300 hover:text-orangeFred-300 cursor-pointer" href="/myaccount/orders">Orders</a>
                </div>
                <div className="flex flex-col text-blackFred-300 justify-around w-1/2 m-auto rounded-sm bg-graym p-[20px] flex-wrap">
                    <div>
                        <img src={user_detail.picture} alt="" />
                    </div>
                    <div>
                        <h4>Name</h4>
                        <p>{user.nickname}</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>{user_detail.email}</p>
                    </div>
                </div>
        </div>
    )
}