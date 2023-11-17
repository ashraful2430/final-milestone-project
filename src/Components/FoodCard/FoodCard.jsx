
import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../Hooks/useAxios';
import useCart from '../../Hooks/useCart';

const FoodCard = ({ item }) => {
    const { name, price, image, recipe, _id } = item;
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxios();

    const [, refetch] = useCart()

    const handleAddToCart = () => {
        if (user && user.email) {
            // add item to cart
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Good job!",
                            text: `${name} added successfully`,
                            icon: "success"
                        });
                        refetch()
                    }
                })
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "You cant add with out logging in",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to log in page"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="w-full">
                    <img src={image} alt="Shoes" className="w-full" />
                </figure>
                <p className='absolute bg-[#111827] text-white right-0 p-3 rounded-lg mt-3 mr-3'>${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe.slice(0, 60)}</p>
                    <div className="card-actions">
                        <button
                            onClick={handleAddToCart}
                            className="btn btn-outline text-[#BB8506] border-0 border-b-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodCard.propTypes = {
    item: PropTypes.object
};

export default FoodCard;