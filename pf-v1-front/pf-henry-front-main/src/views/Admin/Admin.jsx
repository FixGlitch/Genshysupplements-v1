import { useDispatch, useSelector } from "react-redux";
import SideBar from '../../components/Admin/SideBar/SideBar';
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ProductDashboard from "../../components/Admin/AdminDashboards/ProductDashboard";
import UsersDashboard from "../../components/Admin/AdminDashboards/UsersDashboard";
import OrdersDashboard from "../../components/Admin/AdminDashboards/OrdersDashboard";

export default function Products() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedMenu, setSelectedMenu] = useState('');

  useEffect(() => {
  }, [selectedMenu])

  const renderComponentBasedOnMenu = () => {
    switch (selectedMenu) {
      case "Products":
        return <ProductDashboard />;
      case "Users":
        return <UsersDashboard />;
      case "Orders":
        return <OrdersDashboard />;
      default:
        return <ProductDashboard />;
    }
  };

  return (
    <div className="flex flex-row">
      <SideBar 
      selectedMenu={selectedMenu}
      setSelectedMenu={setSelectedMenu}/>
      {isLoading 
      ?  <Loader/> 
      : renderComponentBasedOnMenu()}
    </div>
  );
}