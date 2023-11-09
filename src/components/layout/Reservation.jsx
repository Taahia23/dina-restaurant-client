

import bg1 from '../../assets/images/bg1.jpg'


const Reservation = () => {
    return (
        <div className='relative  '>
            <img className='h-[900px] md:h-[600px] w-full ' src={bg1} alt="" />

            {/* form */}
            <div className='left-0 absolute h-full bottom-16  right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]'>

                <div className='text-white text-center mt-10'>
                    <h1 className='font-bold text-5xl font-serif '>Book a Table</h1>
                    <p className='text-center'>You can Book a table online easily in just a  couple of minutes. </p>
                </div>
                <div className="card top-20 left-3  flex-shrink-0 w-full max-w-4xl mx-auto shadow-2xl bg-base-100 p-5">

                    <form className="card-body ">
                      
                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2 b-2 ">
                                
                                <select id="cars"  className='border-b-2 border-yellow-500 p-3'>
                                    <option value="volvo">2 People</option>
                                    <option value="saab">3 People</option>
                                    <option value="opel">4 People</option>
                                    <option value="audi">5 and more</option>
                                </select>
                            </div>

 
                            <div className="form-control md:w-1/2">
                               
                                <input type="date" name="" id="" className='border-b-2 border-yellow-500 p-3' />
                            </div>
                        </div>
                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2">
                               
                                <input type="text" placeholder='Name' className='border-b-2 border-yellow-500 p-3' name="" id="" />
                            </div>


                            <div className="form-control md:w-1/2">
                               
                                <input type="email" placeholder='Email' className='border-b-2 border-yellow-500 p-3' name="" id="" />
                            </div>
                        </div>

                        <div className="md:flex gap-5">
                            <div className="form-control md:w-1/2">
                               
                                <input type="text" placeholder='Phone Number' className='border-b-2 border-yellow-500 p-3' name="" id="" />
                            </div>


                            <div className="form-control md:w-1/2">
                               
                                <select id="cars" className='border-b-2 border-yellow-500 p-3'>
                                    <option value="volvo">8.00 PM</option>
                                    <option value="saab">9.00 PM</option>
                                    <option value="opel">10.00 PM</option>
                                    <option value="audi">11.00 PM</option>
                                </select>

                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-yellow-400 font-extrabold">Find Table</button>
                        </div>
                    </form>
                </div>
            </div>


            {/* form */}
        </div>
    );
};

export default Reservation;