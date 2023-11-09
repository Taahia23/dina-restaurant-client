import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyOrderRow from "./MyOrderRow";
import { Helmet } from "react-helmet";
import axios from "axios";

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])

    const url = (`http://localhost:5000/purchaseFood?email=${user?.email}`)
   

    useEffect(() => {
        axios.get(url, {withCredentials:true})
        .then(res => {
            setOrders(res.data);
        })


        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setOrders(data)
        //     })
    }, [url])
    return (
        <div>
              <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Order ~ DINA</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>
            <h1 className="text-5xl text-center">My Ordered Foods : {orders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                          
                            <th>Delete</th>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th> Order Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orders.map(order => <MyOrderRow 
                                key={order._id}
                                order = {order}
                                orders = {orders}
                                setOrders = {setOrders}

                                
                                
                                ></MyOrderRow>)
                        }
                      
                    </tbody>
                   

                </table>
            </div>
        </div>
    );
};

export default MyOrder;