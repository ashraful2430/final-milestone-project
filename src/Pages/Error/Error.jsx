import { Link } from "react-router-dom";
import error from "../../assets/404.gif"

const Error = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="text-center">
                <img src={error} alt="" />
                <Link to={'/'}>
                    <button className="btn btn-outline">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;