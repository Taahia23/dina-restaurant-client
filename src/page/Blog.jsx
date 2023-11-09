import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <div>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Blog ~ DINA</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div>
            <div className="relative">
                <img className="h-[500px] w-full" src="https://i.ibb.co/HV3wSjJ/blog.jpg" alt="" />

                <div className="absolute h-full flex justify-center gap-10  left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="mt-36 text-white text-center">
                        <h2 className="text-5xl md:text-5xl lg:text-7xl  font-extrabold  font-serif ">BLOG </h2>
                        <p className="my-5">View the latest articles</p>
                        <Link to={'/'}>
                            <button className="btn text-black font-extrabold bg-white">Back To Home</button>

                        </Link>

                    </div>
                </div>
            </div>

            <div className="flex gap-5 p-10">
                <div className="flex-1 p-32 space-y-5">
                    <h1 className="text-4xl font-bold ">What is one way data binding?</h1>
                    <hr className=" border-b-2 border-yellow-500" />
                    <p>
                        One-way data binding is a concept in web development and user interface frameworks that involves binding data from a data source (typically a model or variable) to the user interface elements, such as HTML elements. With one-way data binding, changes in the data source are reflected in the UI, but changes in the UI do not affect the data source. There are a few key characteristics of one-way data binding:

                        <ol className="mt-5">
                            <li><span className="text-yellow-500 font-semibold mr-4">1.</span>  Data Source to UI</li>
                            <li><span className="text-yellow-500 font-semibold mr-4">2.</span> Read-Only UI</li>
                            <li><span className="text-yellow-500 font-semibold mr-4">3.</span> Unidirectional Flow</li>
                        </ol>
                    </p>

                </div>
                <div>
                    <img className="w-96 mt-20" src="https://i.ibb.co/hRf6W6H/circle2.png" alt="" />
                </div>
            </div>
            <div className="flex flex-row-reverse gap-5 p-10">
                <div className="flex-1 p-32 space-y-5">
                    <h1 className="text-4xl font-bold ">What is NPM in node.js?</h1>
                    <hr className=" border-b-2 border-yellow-500" />
                    <p>
                        In Node.js, NPM stands for <span className="text-yellow-500 font-semibold">Node Package Manager</span>. It is a command-line tool and a package manager that is used for managing and distributing JavaScript packages or libraries. npm is the default package manager for Node.js and is widely used in the Node.js ecosystem for various purposes, including:

                        <ol className="mt-5">
                            <li><span className="text-yellow-500 font-semibold mr-4">1.</span>  Installing Packages</li>
                            <li><span className="text-yellow-500 font-semibold mr-4">2.</span> Managing Dependencies</li>
                            <li><span className="text-yellow-500 font-semibold mr-4">3.</span> Version Control</li>
                            <li><span className="text-yellow-500 font-semibold mr-4">4.</span>Script Execution</li>
                        </ol>
                    </p>

                </div>
                <div>
                    <img className="w-96 mt-20" src="https://i.ibb.co/hRf6W6H/circle2.png" alt="" />
                </div>
            </div>

            <div className="my-20">
                <h1 className="text-4xl font-bold text-center ">Different between MongoDB  and mySQL </h1>
                <div className="flex gap-5 p-14">
                    <div className="text-justify space-y-3 border-r-2 border-b-2 border-yellow-600 p-5">
                        <h1 className="text-2xl font-semibold text-yellow-500">Data Model:</h1>
                        <p><span className="font-medium">MongoDB</span> is a NoSQL database that uses a document-oriented data model.</p>
                        <p><span className="font-medium">MySQL</span> is a relational database management system (RDBMS) that uses structured tables with rows and columns.</p>
                    </div>

                    <div className="text-justify space-y-3 border-r-2 border-t-2 border-yellow-600 p-5">
                        <h1 className="text-2xl font-semibold text-yellow-500">Query Language:</h1>
                        <p><span className="font-medium">MongoDB</span> uses a query language that is similar to JSON and is designed for querying documents.</p>
                        <p><span className="font-medium">MySQL</span> ses SQL (Structured Query Language), which is a powerful language for working with structured data in a tabular format. </p>
                    </div>



                    <div className="text-justify space-y-3 border-r-2 border-b-2 border-yellow-600 p-5">
                        <h1 className="text-2xl font-semibold text-yellow-500">Use Cases:</h1>
                        <p><span className="font-medium">MongoDB</span> is often chosen for applications with rapidly changing data schemas and use cases where scalability is a concern.</p>
                        <p><span className="font-medium">MySQL</span> is commonly used in applications that rely on structured, relational data.</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Blog;