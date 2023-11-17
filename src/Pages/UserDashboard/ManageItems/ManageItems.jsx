import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxios();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your item has been deleted successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }
    });
  };
  const handleUpdate = (id) => {};

  return (
    <>
      <SectionTitle
        heading="manage all item"
        subHeading="---Hurry Up!---"
      ></SectionTitle>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] text-white ">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price </th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <>
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{item.name}</p>
                  </td>
                  <td>{item.price}$</td>
                  <th>
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="btn bg-[#D1A054] text-2xl text-white"
                    >
                      <IoMdCheckboxOutline />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-red-500 text-2xl text-white"
                    >
                      <MdDeleteForever />
                    </button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageItems;
