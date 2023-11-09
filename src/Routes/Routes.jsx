import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../page/Blog";
import AllFood from "../page/AllFood";
import Register from "../page/Register";
import Login from "../page/Login";
import ErrorPage from "../page/ErrorPage";
import Home from "../page/Home/Home";
import SingleFoodPage from "../page/SingleFoodPage";
import FoodPurchasePage from "../page/FoodPurchasePage";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../components/layout/Navbar";
import AddFood from "../page/AddFood";
import MyAddedFoodItems from "../page/MyAddedFoodItems";
import MyOrder from "../page/MyOrder";
import UpdateFood from "../page/UpdateFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/fakeData.json')
            },
            {
                path: '/nav',
                element: <Navbar></Navbar>,
                loader : () => fetch('http://localhost:5000/user')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/addFood',
                element: <AddFood></AddFood>
            },
            {
                path: '/updateFood/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({params}) => fetch(`http://localhost:5000/addFood/${params.id}`)
            },
            {
                path: '/myAddedFood',
                element: <MyAddedFoodItems></MyAddedFoodItems>,
                loader : () => fetch('http://localhost:5000/addFood')
            },
            {
                path: '/myOder',
                element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            },
            {
                path: '/foodPurchasePage/:id',
                element: <FoodPurchasePage></FoodPurchasePage>,
                loader : ({params}) => fetch(`http://localhost:5000/foodItems/${params.id}`)
            },
            {
                path: '/singleFoodPage/:id',
                element: <PrivateRoute><SingleFoodPage></SingleFoodPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/foodItems/${params.id}`)
            },

            {
                path: '/allFoods',
                element: <AllFood></AllFood>,
                loader: () => fetch('http://localhost:5000/foodItemsCount')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },

]);

export default router;