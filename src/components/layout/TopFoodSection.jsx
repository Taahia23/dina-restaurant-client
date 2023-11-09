import { Link } from 'react-router-dom';
import TopFoodCard from './TopFoodCard';
import TopCardSpecial from './TopCardSpecial';

const TopFoodSection = ({ cards }) => {



    return (
        <div className='my-32 space-y-10 w-[390px] md:w-[740px] md:mx-auto lg:w-[1300px] lg::mx-auto'>


            <h1 className="text-3xl md:text-5xl font-serif font-bold text-center">Top Food items</h1>


            <div className=' mx-auto lg:gap-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    cards?.map(card => <TopCardSpecial key={card.foodName} card={card}></TopCardSpecial>)
                }
            </div>
            <div className='text-center'>
                <Link to={'/allFoods'}>
                    <button className='btn btn-wide  bg-slate-800 text-white font-bold hover:text-black '>See More</button>
                </Link>
            </div>

        </div>

    );
};

export default TopFoodSection;