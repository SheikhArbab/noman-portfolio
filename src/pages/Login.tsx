import React, { useEffect } from "react";
import { Link } from "react-router-dom";



const Login: React.FC = () => {

    useEffect(() => {
        document.title = "Login | Noman"
    }, [])

    return (
        <section className=" bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <Link
                    to="/"
                    className="flex items-center mb-6 text-2xl font-semibold text-white"
                >
                    <img
                        className="w-40 object-contain"
                        src="/imgs/logo.png"
                        alt="logo"
                    />
                </Link>
                <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  bg-gray-800  border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl  text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium  text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className=" border rounded-lg   block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  
                                    focus:border-blue-500"
                                    placeholder="name@company.com"

                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium  text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className=" border rounded-lg   block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  
                                    focus:border-blue-500"

                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white   hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 dark:hover:bg-blue-700  focus:ring-blue-800"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Login