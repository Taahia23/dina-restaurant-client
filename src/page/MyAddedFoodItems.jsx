import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import MyAddedFoodItemCard from "./MyAddedFoodItemCard";
import { useState } from "react";

const MyAddedFoodItems = () => {

    const LoadedFoods = useLoaderData();
    const [foods, setFoods] = useState(LoadedFoods)
    // const { _id, name, category, image, descriprion, origin, price } = foods;

   

    return (
        <div>
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Added Food Items ~ DINA</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div >
            <h1 className="text-6xl text-center font-bold font-serif my-32">My Added Foods</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {
                foods.map(food => <MyAddedFoodItemCard key={food._id} food={food} foods ={foods} setFoods ={setFoods}></MyAddedFoodItemCard>)
            }
          </div>
          

        </div>
    );
};

export default MyAddedFoodItems;