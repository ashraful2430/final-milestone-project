import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";


const PopularMenue = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])

    return (
        <section>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-7 my-14">
                {
                    menu.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularMenue;