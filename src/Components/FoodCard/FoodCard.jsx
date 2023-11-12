
import PropTypes from 'prop-types';

const FoodCard = ({ item }) => {
    const { name, price, image, recipe } = item
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
                        <button className="btn btn-outline text-[#BB8506] border-0 border-b-4">Add to cart</button>
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