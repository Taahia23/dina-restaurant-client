import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import './CSS/Navbar.css'
// res
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (

        <div className="w-full max-w-[1100px] mx-auto">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
            </div>
            <div className="flex-1 px-2 mx-2">
                <img className="w-36 h-14" src="https://i.ibb.co/bmYPTvL/D-2.png" alt="" />
            </div>
            <div className="flex-none hidden lg:block">
                <div className="flex gap-10 justify-center">
                    {/* Navbar menu content here */}
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-outline  btn-warning text-black font-bold px-4 btn-sm' : 'bg-black text-white font-bold '}>Home</NavLink>

                    <NavLink to={'/allFoods'} className={({ isActive }) => isActive ? 'btn btn-outline  btn-warning text-black font-bold px-4 btn-sm' : ' bg-black text-white font-bold'}>All-Foods</NavLink>

                    <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'btn btn-outline  btn-warning text-black font-bold px-4 btn-sm' : ' bg-black text-white font-bold '}>Blog</NavLink>


                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator hidden md:block">

                            {/* {
                                user ? <img src={user.photoURL} alt="" />
                                    :
                                    <img className="rounded-full" src="https://i.ibb.co/hf6z4s9/user.png" alt="" />
                            } */}


                          
                           {
                            user &&  <div className="dropdown">
                            <button className="dropbtn "><img className="rounded-full" src="https://i.ibb.co/hf6z4s9/user.png" alt="" /></button>
                                <div className="dropdown-content">
                                    <Link to={'/addFood'}><button>Add foods</button></Link>
                                    <Link to={'/myAddedFood'}><button>Added foods</button></Link>
                                    <Link to={'/myOder'}><button>My Order</button></Link>
                                  
                                    
                                </div>
                            </div>
                           }
                        </div>
                    </label>


                    {
                        user && <span className="text-white">{user.email}</span>

                    }

                    {
                        user ?
                            // <button onClick={handleSignOut} className="btn">Sign Out</button>
                            <NavLink onClick={handleSignOut} className={({ isActive }) => isActive ? 'btn btn-outline  btn-warning text-black font-bold px-4 btn-sm' : ' bg-black text-white font-bold '}>Sign Out</NavLink>
                            :
                            <NavLink to={'/login'} className={({ isActive }) => isActive ? 'btn btn-outline  btn-warning text-black font-bold px-4 btn-sm' : ' bg-black text-white font-bold '}>Sign in</NavLink>
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;