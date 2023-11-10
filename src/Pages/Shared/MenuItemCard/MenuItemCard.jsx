
import PropTypes from 'prop-types';

const MenuItemCard = ({ item }) => {
    const { name, price, image, recipe } = item
    return (
        <div className='flex space-x-3'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-28 object-center' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}---------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

MenuItemCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default MenuItemCard;