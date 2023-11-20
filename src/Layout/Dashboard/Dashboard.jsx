import { NavLink, Outlet } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import useAdmin from "../../Hooks/useAdmin";
import useCart from "../../Hooks/useCart";

const Dashboard = () => {
  // todo: get admin data from the database
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen p-9 bg-[#D1A054] text-black ">
        <ul className="space-y-6">
          {isAdmin ? (
            <>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/adminHome"}
                >
                  <IoHome />
                  Admin Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/addItems"}
                >
                  <SlCalender />
                  Add items
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/manageItems"}
                >
                  <MdOutlinePayment />
                  Manage Items
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/allUsers"}
                >
                  <PiShoppingCartSimpleBold /> All users
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/review"}
                >
                  <MdOutlineReviews /> Add Review
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/booking"}
                >
                  <TbBrandBooking /> My Booking
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/userHome"}
                >
                  <IoHome />
                  User Home
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/payment"}
                >
                  <SlCalender />
                  Reservation
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/paymentHistory"}
                >
                  <MdOutlinePayment />
                  Payment History
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/cart"}
                >
                  <PiShoppingCartSimpleBold /> My cart({cart.length})
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/review"}
                >
                  <MdOutlineReviews /> Add Review
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                  className={({ isActive }) =>
                    isActive ? " bg-none text-white font-medium" : ""
                  }
                  to={"/dashboard/booking"}
                >
                  <TbBrandBooking /> My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li className="">
            <NavLink
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
              className={({ isActive }) =>
                isActive ? " bg-none text-white font-medium" : ""
              }
              to={"/"}
            >
              <IoHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
