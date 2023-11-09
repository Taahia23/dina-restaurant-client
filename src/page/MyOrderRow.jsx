import Swal from "sweetalert2";

const MyOrderRow = ({ order , orders, setOrders }) => {
    const {_id, email, date, foodName, foodImage, price } = order;

    const handleDelete = id => {Swal.fire({
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

            fetch(`https://linquini-server.vercel.app/purchaseFood/${id}`, {
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

                        const remaining = orders.filter(f => f._id !== _id);
                        setOrders(remaining)
                    }
                    
                })
        }
    });

}
 

    return (
        <tr>
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {foodImage && <img src={foodImage} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>


            </td>
            <td>
                {foodName}

            </td>
            <td>{email}</td>
            <td>$ {price}</td>
            <td> {date}</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyOrderRow;