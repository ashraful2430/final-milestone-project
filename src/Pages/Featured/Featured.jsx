import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed py-10 my-24 ">
            <SectionTitle
                subHeading="---Check it out---"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-6 px-6 py-4 md:px-12 md:py-10 lg:px-36 lg:py-24">
                <img className="flex-1 md:w-[200px]" src={featuredImg} alt="" />
                <div className="flex-1 space-y-2">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;