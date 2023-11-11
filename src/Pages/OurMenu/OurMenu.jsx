import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/menu.jpeg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle'
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
const OurMenu = () => {
    const [menu] = useMenu();
    const pizza = menu.filter(item => item.category === 'pizza')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro || Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title='our menu' description='Would you like to try a dish?'></Cover>
            <SectionTitle heading='TODAYS OFFER' subHeading='---Do not miss---'></SectionTitle>
            {/* offered menu */}
            <MenuCategory items={offered}></MenuCategory>
            {/* deserts menu */}
            <MenuCategory items={dessert} title='DESSERTS' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={desertImg}></MenuCategory>
            {/* pizza menu */}
            <MenuCategory items={pizza} title='PIZZA' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={pizzaImg}></MenuCategory>
            {/* salad menu */}
            <MenuCategory items={salad} title='SALAD' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={saladImg}></MenuCategory>
            {/* soup menu */}
            <MenuCategory items={soup} title='soup' description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' coverImg={soupImg}></MenuCategory>
        </div>
    );
};

export default OurMenu;