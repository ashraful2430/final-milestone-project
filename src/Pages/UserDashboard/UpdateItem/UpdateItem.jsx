import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { LuUtensils } from "react-icons/lu";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxios();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    console.log(imageFile);
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        price: parseFloat(data.price),
        recipe: data.recipe,
        category: data.category,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        // show a success message
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your item has been updated successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      }
      console.log(menuRes.data);
    }
  };
  return (
    <div>
      <SectionTitle
        heading="Update Item"
        subHeading="----update your item----"
      ></SectionTitle>

      <div className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* recipe Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          {/* category and price  */}

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* recipe details */}
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Recipe Details*</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-32"
                defaultValue={recipe}
                placeholder="Recipe Details"
                {...register("recipe", { required: true })}
              ></textarea>
            </div>
          </div>
          {/* file input */}
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs mt-7"
            />
          </div>
          <div>
            <button
              className="text-white py-3 px-5 rounded-md mt-5"
              style={{
                background: "linear-gradient(90deg, #835D23 0%, #B58130 100%)",
              }}
              type="submit"
            >
              <span className="flex justify-center items-center gap-2">
                Update Item <LuUtensils />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
