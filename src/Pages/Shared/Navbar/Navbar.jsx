import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    const navLinks = <>

        <NavLink
            to={'/'}
            className={({ isActive }) =>
                isActive ?
                    ' bg-none text-[#EEFF25] font-bold'
                    : ''}
        >
            <li className="mr-5">HOME</li>
        </NavLink>

        <NavLink
            to={'/contact-us'}
            className={({ isActive }) =>
                isActive ?
                    ' bg-none text-[#EEFF25] font-bold'
                    : ''}
        >
            <li className="mr-5">CONTACT US</li>
        </NavLink>
        <NavLink
            to={'/dashboard'}
            className={({ isActive }) =>
                isActive ?
                    ' bg-none text-[#EEFF25] font-bold'
                    : ''}
        >
            <li className="mr-5">DASHBOARD</li>
        </NavLink>
        <NavLink
            to={'/our-menu'}
            className={({ isActive }) =>
                isActive ?
                    ' bg-none text-[#EEFF25] font-bold'
                    : ''}
        >
            <li className="mr-5">OUR MENU</li>
        </NavLink>
        <NavLink to={'/shop/salad'}
            className={({ isActive }) =>
                isActive ?
                    ' bg-none text-[#EEFF25] font-bold'
                    : ''}
        >
            <li className="mr-5">OUR SHOP</li>
        </NavLink>
        <NavLink to={'/dashboard/cart'}
            className={({ isActive }) =>
                isActive ?
                    ' bg-none text-[#EEFF25] font-bold'
                    : ''}
        >
            <li className="mr-5">
                <button className="">
                    <PiShoppingCartSimpleBold></PiShoppingCartSimpleBold>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </li>
        </NavLink>

        {
            user ? <>
                <button onClick={handleLogout} className=""><li>Sign out</li></button>
            </> :
                <>
                    <NavLink to={'/login'}
                        className={({ isActive }) =>
                            isActive ?
                                ' bg-none text-[#EEFF25] font-bold'
                                : ''}
                    >
                        <li className="mr-5">Log in</li>
                    </NavLink>
                </>
        }
    </>



    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40  bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 lg:text-white shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </div>
                    </div>
                    <a className=" normal-case text-xl text-center text-white"><span className="lg:text-2xl font-black">Bistro Boss</span> <br /> <span className="lg:text-xl font-bold">Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 lg:text-white text-center">
                        {navLinks}
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;