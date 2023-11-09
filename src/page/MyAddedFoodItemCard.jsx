
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyAddedFoodItemCard = ({ food, foods, setFoods }) => {
    const { _id, name, category, image, origin, price } = food;

    const handleDelete = _id => {
        console.log(_id);
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


                console.log('delete confirm');

                fetch(`https://linquini-server.vercel.app/addFood/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = foods.filter(f => f._id !== _id);
                            setFoods(remaining)
                        }
                        
                    })
            }
        });

    }

    return (
        <div className="card md:w-72 lg:w-80 bg-base-100 shadow-xl mb-20">
            <figure><img className="h-72 md:w-72 lg:w-96" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> Category : {category}</p>
                <p>Origin : {origin}</p>
                <p>price : $ {price}</p>

                <div className="card-actions w-full flex">
                    <Link to={`/updateFood/${_id}`}> <button className="btn btn-warning btn-block">Update</button></Link>
                    <Link to={''}> <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-block">Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyAddedFoodItemCard;