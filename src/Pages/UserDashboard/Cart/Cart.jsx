import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../../Hooks/useAxios";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxios()


    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }



    return (
        <div className="bg-base-100 shadow-xl p-8">
            <div className="flex items-center justify-around">
                <h2 className="text-3xl">Total order :{cart.length} </h2>
                <h2 className="text-3xl">Total price :{totalPrice}$ </h2>
                <button className="btn bg-[#D1A054] text-white">Pay</button>
            </div>


            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#D1A054] text-white ">
                        <tr >
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <>
                                <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <p>{item.name}</p>
                                    </td>
                                    <td>{item.price}$</td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 text-2xl text-white"><MdDeleteForever /></button>
                                    </th>
                                </tr>
                            </>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Cart;