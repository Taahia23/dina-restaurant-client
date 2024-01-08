


const FAQ = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h1 className="text-6xl text-center py-20 font-bold font-mono ">FAQ</h1>
            </div>
            <div className="space-y-5">
                <div className="collapse collapse-arrow bg-base-200 p-5">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    How can I place an order online?
                    </div>
                    <div className="collapse-content">
                        <p>Placing an order is easy! Simply visit our website, browse the menu, select your items, and proceed to checkout. You can also use our mobile app for a convenient ordering experience.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 p-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Do you offer delivery services?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we provide delivery services. During the checkout process, you can choose delivery and enter your address to see if you are within our delivery radius.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 p-5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    What cuisines do you offer at your restaurant?
                    </div>
                    <div className="collapse-content">
                        <p>We offer a diverse menu that includes a variety of cuisines. Explore our menu to discover delicious options for every taste.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;