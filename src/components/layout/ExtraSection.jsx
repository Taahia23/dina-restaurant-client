import bg1 from '../../assets/images/bg11.png'
import bg2 from '../../assets/images/bg2.png';
import bg3 from '../../assets/images/bg3.png';
import bg4 from '../../assets/images/bg4.png';



const ExtraSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-12 my-36'>

            {/* <div className="card w-96 bg-base-100 ">
                <figure><img  src={bg1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">LOCAL INGREDIENTS!</h2>
                </div>
            </div>
            <div className="card w-96 bg-base-100 ">
                <figure><img  src={bg2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">LOCAL INGREDIENTS!</h2>
                </div>
            </div>
            <div className="card w-96 bg-base-100 ">
                <figure><img src={bg3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">LOCAL INGREDIENTS!</h2>
                </div>
            </div>
            <div className="card w-96 bg-base-100 ">
                <figure><img src={bg4} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">LOCAL INGREDIENTS!</h2>
                </div>
            </div> */}

            <div className="card w-96 bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src={bg1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">LOCAL INGREDIENTS</h2>
                   
                </div>
            </div>
            <div className="card w-96 bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src={bg2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">HAUTE CUISINE</h2>
                   
                </div>
            </div>
            <div className="card w-96 bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src={bg3} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">GREATEST CHEFS</h2>
                   
                </div>
            </div>
            <div className="card w-96 bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src={bg4} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">HAPPY CLIENTS</h2>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;