import { useLoaderData } from "react-router-dom";
import foodImage  from '../assets/images/foodPurchase.jpg'
import Swal from "sweetalert2";

const UpdateFood = () => {

    const food = useLoaderData();
    const { _id, name, category, image, origin, price, description } = food;


    const handleUpdateFood = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const image = form.image.value;
        const origin = form.origin.value;
        const price = form.price.value;
        const madeBy = form.madeBy.value;
        const description = form.description.value;

        const updatedFood = { name, category, image, origin, price, madeBy, description }

        console.log(updatedFood);

        // send data to the server
        fetch(`https://linquini-server.vercel.app/addFood/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedFood)

        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food  updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })





    }


    return (
        <div>
        <div>
            <img className='w-full' src={foodImage} alt="" />
        </div>
          <div className="pb-20 px-36">
            <h1 className="text-6xl font-extrabold text-center mb-10 text-black"><span className=' border-b-4 border-yellow-500 font-serif'>Update Food</span></h1>

            <form onSubmit={handleUpdateFood}>
                {/* form name and brand name row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input defaultValue={name} name="name" type="text" placeholder="Food Name" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input defaultValue={category} name="category" type="text" placeholder="Food Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form image and type row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input defaultValue={image} name="image" type="text" placeholder="Image" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Origin</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input defaultValue={origin} name="origin" type="text" placeholder="Food Origin" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form price and rating row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input defaultValue={price} name="price" type="text" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Made By</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input  name="madeBy" type="text" placeholder="Made By" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form short description row */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group input-group-vertical">

                            <input defaultValue={description} name="description" type="text" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>



                </div>
                <input className="mt-10 btn text-xl bg-yellow-600 text-black hover:text-black font-bold btn-block" type="submit" value="ADD FOOD" />


            </form>
        </div>
      </div>
    );
};

export default UpdateFood;