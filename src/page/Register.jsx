import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import register from '../assets/images/register.png'
import { Helmet } from "react-helmet";

const Register = () => {


    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        console.log(name, email, password, photo);

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/.test(password)) {
            setRegisterError('Your password should have one uppercase character and have special character');
            return;
        }

        // reset user

        setRegisterError("");
        setSuccess('')


        // create user


        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const createdAt = result.user?.metadata?.creationTime;
                const user = { name, email, photo, createdAt: createdAt };

                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {

                            Swal.fire({
                                title: 'Congrats!',
                                text: 'Registration successful',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })






            })
            .catch(error => {
                console.log(error);
            })

    }



    return (
        <div>
             <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Registration ~ DINA</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
            </div >
            <div className="max-w-5xl mx-auto mt-16 mb-32 ">

                <div className="flex gap-10 justify-around flex-row-reverse">
                    <div>
                        <img className="mt-20" src={register} alt="" />
                    </div>

                    <div className="ml-20">
                        <h1 className="text-5xl font-bold text-center mb-9">Register Here!</h1>
                        <form onSubmit={handleRegister} className="max-w-6xl mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Name</span>
                                </label>
                                <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt text-base link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-xl">PhotoURL</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt text-base link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-7">
                                <button className="btn btn-warning text-xl font-extrabold">Register</button>
                            </div>
                        </form>

                        {
                            registerError && <p className='text-center font-semibold  text-red-600'>{registerError}</p>
                        }
                        {
                            success && { success }
                        }

                        <p className="font-bold text-center p-5 text-md" >
                            Already have any account? Please <Link to={'/login'} className="text-blue-600 ">Login</Link>
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;