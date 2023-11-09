
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import Footer from "../Footer";


const MainLayout = ({ children }) => {
    return (
        <div>
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-black">
                   <Navbar></Navbar>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full bg-base-200">
                   <SideBar></SideBar>
                </div >
            </div>
            
        </div>

       
        
        <Footer></Footer>


        </div>
    );
};

export default MainLayout;