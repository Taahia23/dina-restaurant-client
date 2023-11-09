
import { Helmet } from 'react-helmet';
import foodPurchase from '../assets/images/foodPurchase.jpg'
import { useLoaderData } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const FoodPurchasePage = () => {



    const foods = useLoaderData();
    const { _id, foodName, price, foodImage} = foods;
    const { user } = useContext(AuthContext);

    const handleFoodOrder = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const foodName = form.foodName.value;
        const date = form.date.value;

        const number = form.number.value;
        const address = form.address.value;

        const price = form.price.value;


        const orderedFood = {
            customerName: name,
            email,
            date,
            foodName: foodName,
            foodImage: foodImage,
            foodId: _id,
            price: price,
            number: number,
            address: address,


        }

        console.log(orderedFood);

        fetch('https://linquini-server.vercel.app/purchaseFood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orderedFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Purchase Food ~ DINA</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>

            <div>
                <img className='w-full h-[400px]' src={foodPurchase} alt="" />
            </div>
            <h1 className="text-5xl text-center font-extrabold font-serif "> <span className='border-b-4 border-yellow-500 pb-5'> Food Order Form</span></h1>
            {foodName}

            {/* form */}

            <div className='mb-40 '>

                <div className="card top-20 left-3  flex-shrink-0 w-full max-w-4xl mx-auto shadow-2xl bg-base-100 p-5">

                    <form onSubmit={handleFoodOrder} className="card-body ">

                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2 b-2 ">

                                <select id="cars" name='quantity' className='border-b-2 border-yellow-500 p-3'>
                                    <option value="volvo">Quantity</option>
                                    <option value="saab">1</option>
                                    <option value="opel">2</option>
                                    <option value="audi">3</option>
                                    <option value="audi">4</option>
                                    <option value="audi">5 and more</option>
                                </select>
                            </div>


                            <div className="form-control md:w-1/2">

                                <input type="date" name="date" id="" className='border-b-2 border-yellow-500 p-3' />
                            </div>
                        </div>


                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2">

                                <input type="text" placeholder='Food Name' defaultValue={foodName} className='border-b-2 border-yellow-500 p-3' name="foodName" id="" />
                            </div>


                            <div className="form-control md:w-1/2">

                                <input type="text" placeholder='Price' className='border-b-2 border-yellow-500 p-3' defaultValue={'$' + price} name="price" id="" />
                            </div>
                        </div>



                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2">

                                <input type="text" defaultValue={user?.displayName} placeholder='Name' className='border-b-2 border-yellow-500 p-3' name="name" id="" />
                            </div>


                            <div className="form-control md:w-1/2">

                                <input type="email" placeholder='Email' defaultValue={user?.email} className='border-b-2 border-yellow-500 p-3' name="email" id="" />
                            </div>
                        </div>

                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2">

                                <input type="number" placeholder='Phone Number' className='border-b-2 border-yellow-500 p-3' name="number" id="" />
                            </div>


                            <div className="form-control md:w-1/2">

                                <input type="text" placeholder='Address' className='border-b-2 border-yellow-500 p-3' name="address" id="" />

                            </div>
                        </div>
                        <div className="md:flex gap-5">
                            <div className="form-control md:w-full">

                                <input type="text" placeholder='Photo' className='border-b-2 border-yellow-500 p-3' name="image" defaultValue={foodImage} id="" />
                            </div>


                            
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-400 font-extrabold">Confirm Order</button>
                        </div>
                    </form>
                </div>
            </div>


            {/* form */}
        </div>
    );
};

export default FoodPurchasePage;