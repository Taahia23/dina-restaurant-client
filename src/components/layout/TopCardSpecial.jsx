
const TopCardSpecial = ({ card }) => {
    const { foodName, foodImage, foodCategory, price } = card;
    return (
        <div className="card md:w-72 lg:w-96 bg-base-100 shadow-xl">
            <figure><img className="h-72 md:w-72 lg:w-96" src={foodImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{foodName}</h2>
                <p>{foodCategory}</p>
                <p>$ {price}</p>
                <div>
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopCardSpecial;