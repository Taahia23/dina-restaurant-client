import { NavLink } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Banner = () => {

    useEffect(() => {
        Aos.init();
      }, [])
    
  
      

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src="https://i.ibb.co/8mGLtSX/b22.jpg" className="w-full h-screen" />
                <div className="absolute h-full flex justify-center gap-10  left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="mt-36">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl  font-extrabold text-center text-white" data-aos ="fade-up">ELEGANT </h2>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white text-center" data-aos ="fade-down">RESTAURANT</h2>
                        <p className="text-center text-sm text-white font-semibold  mt-10">Discover and Experience fine selection of international tests </p>

                        <NavLink to={'/allFoods'} className="flex justify-center"><button className="btn mt-10 md:mt-5 lg:mt-5 btn-warning font-extrabold" data-aos ="zoom-in">Explore Menu</button></NavLink>
                        {/* <h2 className="text-7xl font-extrabold text-white">The Best Testing Experience ! </h2> */}
                    </div>
                </div>
                <div className="absolute flex justify-center gap-10  left-5 right-5 bottom-7">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/rmgJqCS/b33.jpg" className="w-full h-screen" />
                <div className="absolute h-full flex justify-center gap-10  left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="mt-36">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl  font-extrabold text-center text-white">ELEGANT </h2>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white text-center">RESTAURANT</h2>
                        <p className="text-center text-white font-semibold  mt-10">Discover and Experience fine selection of international tests </p>

                        <NavLink to={'/allFoods'} className="flex justify-center"><button className="btn mt-10 md:mt-5 lg:mt-5 btn-warning font-extrabold">Explore Menu</button></NavLink>
                        {/* <h2 className="text-7xl font-extrabold text-white">The Best Testing Experience ! </h2> */}
                    </div>
                </div>
                <div className="absolute flex justify-center gap-10  left-5 right-5 bottom-7">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-screen">
                <img src="https://i.ibb.co/PhnSXby/pexels-yente-van-eynde-2403392.jpg" className="w-full" />
                <div className="absolute h-full flex justify-center gap-10  left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="mt-36">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl   font-extrabold text-center text-white">ELEGANT </h2>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl  font-extrabold text-white text-center">RESTAURANT</h2>
                        <p className="text-center text-white font-semibold  mt-10">Discover and Experience fine selection of international tests </p>

                        <NavLink to={'/allFoods'} className="flex justify-center"><button className="btn mt-10 md:mt-5 lg:mt-5 btn-warning font-extrabold">Explore Menu</button></NavLink>
                        {/* <h2 className="text-7xl font-extrabold text-white">The Best Testing Experience ! </h2> */}
                    </div>
                </div>
                <div className="absolute flex justify-center gap-10  left-5 right-5 bottom-7">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;