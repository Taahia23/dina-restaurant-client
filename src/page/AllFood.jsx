import { useEffect, useState } from "react";
import TopFoodCard from "../components/layout/TopFoodCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const AllFood = () => {
    const [cards, setCards] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0)
    const { count } = useLoaderData();
    console.log(count);

    const numberOfPages = Math.ceil(count / itemsPerPage) ;

    // for (let i = 0; i < numberOfPages; i++) {
    //     pages.push(i)
    // }

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    useEffect(() => {
        fetch(`https://linquini-server.vercel.app/foodItems?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setCards(data))
    }, [currentPage, itemsPerPage]);


    const handleItemsPerPage = e => {

        const val = parseInt(e.target.value)
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0)
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }



    return (
        <div>
             <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Food ~ DINA</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:w-[1300px] lg:mx-auto">
                {
                    cards.map(card => <TopFoodCard key={card._id} card={card}></TopFoodCard>)
                }
            </div>

            <div className="text-center my-20">
                <p>current page {currentPage}</p>
                <button onClick={handlePrevPage} className="btn mx-5">Prev</button>
                {

                    pages.map(page => <button
                        onClick={() => setCurrentPage(page)}
                        className={currentPage == page && 'btn btn-warning mr-5' || 'btn mr-5'} key={page} >{page}</button>)
                }
                <button onClick={handleNextPage} className="btn mx-5">Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} className='border-b-2 border-yellow-500 p-3'>
                    <option value="5">5</option>
                    <option value="20">20</option>
                    <option value="30">30</option>

                </select>
            </div>
        </div>
    );
};

export default AllFood;