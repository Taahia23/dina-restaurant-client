import { Link } from "react-router-dom";

const TopFoodCard = ({ card }) => {

    const {_id, foodName, foodImage, foodCategory, price } = card;



    return (
        <div className="card md:w-72 lg:w-96 bg-base-100 shadow-xl">
            <figure><img className="h-72 md:w-72 lg:w-96" src={foodImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p>{foodCategory}</p>
                <p>$ {price}</p>

                <div className="card-actions w-full">
                   <Link to={`/singleFoodPage/${_id}`}> <button className="btn btn-warning btn-block">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopFoodCard;