import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to={'/'}>HOME</NavLink></li>
        <li><NavLink to={'/contact-us'}>CONTACT US</NavLink></li>
        <li><NavLink to={'/dashboard'}>DASHBOARD</NavLink></li>
        <li><NavLink to={'/menu'}>OUR MENU</NavLink></li>
        <li><NavLink to={'/shop'}>OUR SHOP</NavLink></li>
    </>



    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-40  bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 lg:text-white shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </div>
                    </div>
                    <a className=" normal-case text-xl text-center text-white"><span className="lg:text-2xl font-black">Bistro Boss</span> <br /> <span className="lg:text-xl font-bold">Restaurant</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 lg:text-white">
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