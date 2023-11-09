import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="flex flex-col gap-10 justify-center">
        {/* Navbar menu content here */}
        <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn   btn-warning text-black font-bold px-4 ' : ' text-white font-bold   btn btn-neutral'}>Home</NavLink>

        <NavLink to={'/allFoods'} className={({ isActive }) => isActive ? 'btn   btn-warning text-black font-bold px-4 ' : '  text-white font-bold btn btn-neutral'}>All-Foods</NavLink>

        <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'btn   btn-warning text-black font-bold px-4 ' : '  text-white font-bold btn btn-neutral '}>Blog</NavLink>
    </div>
    );
};

export default SideBar;