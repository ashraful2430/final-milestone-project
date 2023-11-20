import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxios();
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl">
        Hi , Welcome Back {user?.displayName ? user?.displayName : ""}
      </h3>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaMoneyCheckDollar className="text-4xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUserCircle className="text-4xl" />
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">{stats.user}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <MdRestaurantMenu className="text-4xl" />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats.menuItems}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <MdLocalShipping className="text-4xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
