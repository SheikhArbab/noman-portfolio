import * as Yup from 'yup';
import * as C from "@/components/index";
import { useFormik } from 'formik';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { currentUser } from "@/stores/features/authSlice";
import * as R from "@/stores/services/auth";
import { useToast } from "@/hooks/use-toast"
import { FaEye, FaEyeSlash } from 'react-icons/fa6';




const Login: React.FC = () => {

    useEffect(() => {
        document.title = "Login | Noman"
    }, [])

    const { toast } = useToast()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [showPass, setShowPass] = useState<boolean>(true);

    const [loginUser, { isLoading }] = R.useSignInMutation()

    const { handleChange, handleSubmit, handleBlur, touched, errors, values } = useFormik({

        initialValues: {
            email: "",
            password: "",

        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(3).max(18)
                .required('Password is required'),
        }),
        onSubmit: async (formValues) => {

            try {

                const res: any = await loginUser(formValues)

                if (res && res.data && res.data.success) {

                    toast({ title: res.data.message })

                    const { token, rest } = res.data

                    dispatch(currentUser({ user: rest, token }))
                    setTimeout(() => {
                        navigate('/dashboard')
                    }, 1000);
                } else {
                    toast({ variant: "destructive", title: "Wrong credentials !" })
                }

            } catch (error: any) {
                console.log(error);

                toast({ variant: "destructive", title: "Something Went Wrong!" })
            }
        },

    });


    return (
        <section className=" bg-black/90">
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
                <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0  bg-black/10  border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl  text-white">
                            Sign in to your account
                        </h1>
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
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
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    id="email"
                                    className=" border rounded-lg   block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500  
                                    focus:border-blue-500"
                                    placeholder="name@company.com"
                                />
                                {touched.email && errors.email && (
                                    <p className="text-red-500 text-xs ">{errors.email}</p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium  text-white"
                                >
                                    Password
                                </label>
                                <div className='relative' >
                                    <input
                                        type={showPass ? "password" : "text"}
                                        name="password"
                                        id="password"
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        className=" border rounded-lg   block w-full p-2.5  bg-gray-700  border-gray-600  placeholder-gray-400  text-white  focus:ring-blue-500
                                    focus:border-blue-500"
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowPass(!showPass)} className='absolute right-5 top-1/2 -translate-y-1/2' >
                                        {showPass ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                                {touched.password && errors.password && (
                                    <p className="text-red-500 text-xs ">{errors.password}</p>
                                )}
                            </div>


                            <C.Button
                                isLoading={isLoading}
                                type="submit"
                                className="w-full  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Sign in
                            </C.Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Login