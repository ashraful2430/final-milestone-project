
import PropTypes from 'prop-types';
import MenuItemCard from '../Shared/MenuItemCard/MenuItemCard';
import Cover from '../Shared/Cover/Cover';

const MenuCategory = ({ items, title, description, coverImg }) => {
    return (
        <div className='pt-10 mb-10'>
            {title && <Cover img={coverImg} title={title} description={description}></Cover>}
            <div className="grid md:grid-cols-2 gap-7 my-14 mt-20">
                {
                    items.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline border-0 border-b-4 text-[#1F2937]">ORDER YOUR FAVORITE FOOD</button>
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    coverImg: PropTypes.node,
};

export default MenuCategory;