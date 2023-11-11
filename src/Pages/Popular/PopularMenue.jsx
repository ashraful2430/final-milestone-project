
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import useMenu from "../../Hooks/useMenu";


const PopularMenue = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-7 my-14">
                {
                    popular.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className="text-center ">
                <button className="btn btn-outline border-0 border-b-4 ">View Full menu</button>
            </div>
        </section>
    );
};

export default PopularMenue;