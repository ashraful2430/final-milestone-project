import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <>
            <div>
                main layout
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;