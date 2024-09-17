import * as Yup from 'yup';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as C from "@/components/index";
import G from "@/constants/index";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast"



const Contact: React.FC = () => {

    const { toast } = useToast();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({

        initialValues: {
            name: "",
            email: "",
            message: "",

        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            message: Yup.string()
                .min(3).max(500)
                .required('Message is required'),
        }),
        onSubmit: async (formValues, { resetForm }) => {
            setIsLoading(true);
            try {

                emailjs
                    .send(
                        "service_loiw3ya",
                        "template_xxus1r9",
                        {
                            from_name: formValues.name,
                            from_email: formValues.email,
                            to_name: "JavaScript Mastery",
                            to_email: "jnuman99@gmail.com",
                            message: formValues.message,
                        },
                        "VnGa5n8caGIzrG3vV"
                    )
                    .then(
                        () => {
                            setIsLoading(false);
                            toast({ title: "Thank you. I will get back to you as soon as possible." })
                            resetForm();
                        },
                        (error) => {
                            setIsLoading(false);
                            console.error(error);
                            toast({ variant: "destructive", title: "Ahh, something went wrong. Please try again." })
                        }
                    );
            } catch (error: any) {
                console.log(error);

                toast({ variant: "destructive", title: "Something Went Wrong!" })
            }
        },

    });


    return (
        <C.Section className='py-8 md:py-20' id='contact'>
            <h1 className="text-center mb-20 font-bold text-2xl md:text-7xl ">
                Get In Touch With Me
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-wrap-reverse gap-8 bg-black/80 px-6 py-8 md:p-20 rounded-lg'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-white text-xl md:text-2xl font-semibold' >Contact Me</h1>
                    <ul className="flex flex-col gap-8 text-sm my-4 md:my-12" >
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >address</h6>
                            <a className="  text-white font-semibold" >Lahore, Pakistan</a>
                        </li>
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >EMAIL</h6>
                            <a href="mailto:jnuman99@gmail.com" className="  text-white font-semibold" >jnuman99@gmail.com
                            </a>
                        </li>
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >PHONE</h6>
                            <a href="tel:+92 306 451 0974" className="uppercase text-white font-semibold" >+92 306 451 0974
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-wrap items-center gap-7 text-gray-300' >{G.socialLinks.map(v => <li key={v.title}>
                        <a href={v.url} target='_blank' className='font-semibold rounded-full overflow-hidden h-12 w-12' >
                            <C.Button
                                className='px-2'
                            >
                                <v.Icon size={20} />
                            </C.Button>
                        </a>
                    </li>)}
                    </ul>
                </div>
                <div className='flex-1' >
                    <h1 className='text-white mb-4 text-xl md:text-2xl md:mb-12 font-semibold' >Send Me a Message</h1>
                    <div className="flex flex-col gap-8 ">
                        <input type="text"
                            value={values.name}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='name'
                            placeholder='Name'
                            className='w-full block text-sm rounded-md px-4 py-2 focus:outline-none' />
                        {touched.name && errors.name && (
                            <p className="text-red-500 text-xs ">{errors.name}</p>
                        )}
                        <input type="email"
                            value={values.email}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name='email'
                            placeholder='example@email.com'
                            className='w-full block text-sm rounded-md px-4 py-2 focus:outline-none' />
                        {touched.email && errors.email && (
                            <p className="text-red-500 text-xs ">{errors.email}</p>
                        )}
                        <textarea
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="message"
                            placeholder='Message'
                            className='w-full block text-sm rounded-md px-4 py-2 focus:outline-none'
                        >

                        </textarea>
                        {touched.message && errors.message && (
                            <p className="text-red-500 text-xs ">{errors.message}</p>
                        )}
                        <C.Button
                            isLoading={isLoading}
                            type="submit"
                            className="w-full  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5"
                        >
                            Send
                        </C.Button>
                    </div>
                </div>
            </form>
        </C.Section>
    )
}

export default Contact