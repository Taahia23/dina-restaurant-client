import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SingleFoodPage = () => {

    const singleFoodItem = useLoaderData();
    const {user} = useContext(AuthContext)
    const { _id, foodName, foodImage, foodCategory, price, foodOrigin, shortDescrip } = singleFoodItem;
    console.log(_id);


   

    return (
        <div>
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Single Food ~ DINA</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            </div>
            <div key={_id} className="card  bg-base-100 shadow-xl p-24">
                <figure><img className="w-1/3" src={foodImage} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl">{foodName}</h2>
                    
                   
                    <p className=" my-5">{shortDescrip} Steaming hot bowl of pho, a Vietnamese noodle soup brimming with tender slices of beef, fresh herbs, and rice noodles in a fragrant and savory broth, served with a side of lime and bean sprouts. Steaming hot bowl of pho, a Vietnamese noodle soup brimming with tender slices of beef, fresh herbs, and rice noodles in a fragrant and savory broth, served with a side of lime and bean sprouts. Steaming hot bowl of pho, a Vietnamese noodle soup brimming with tender slices of beef, fresh herbs, and rice noodles in a fragrant and savory broth, served with a side of lime and bean sprouts.</p>
                    <h2 className="card-title text-lg">Cook Email: {user?.email}</h2>
                    <h2 className="card-title text-lg">Category : <span className="text-yellow-600">{foodCategory}</span></h2>
                    <h2 className="card-title text-lg">Food Origin : <span className="text-yellow-600"> {foodOrigin}</span> </h2>
                    <h1 className="card-title text-lg mb-7">Price : <span className="text-3xl font-extrabold text-red-700">${price}</span></h1>

                    <div className="card-actions justify-start">
                        {/* <button className="btn btn-primary font-extrabold">Add to Cart</button> */}
                        <Link to={`/foodPurchasePage/${_id}`}>
                            <button className="btn btn-warning font-extrabold btn-wide">Purchase</button>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleFoodPage;