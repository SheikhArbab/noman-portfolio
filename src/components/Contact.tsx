import React from 'react';
import * as C from "@/components/index";
import G from "@/constants/index";

const Contact: React.FC = () => {
    return (
        <C.Section className='py-8 md:py-20' id='portfolio'>
            <h1 className="text-center mb-20 font-bold text-2xl md:text-7xl ">
                Get In Touch With Me
            </h1>
            <form className='flex flex-wrap-reverse gap-8 bg-black/80 px-6 py-8 md:p-20 rounded-lg'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-white text-xl md:text-2xl font-semibold' >Contact Me</h1>
                    <ul className="flex flex-col gap-8 text-sm my-4 md:my-12" >
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >address</h6>
                            <a className="uppercase text-white font-semibold" >Islamabad, Pakistan</a>
                        </li>
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >EMAIL</h6>
                            <a href="mailto:numan99@gmail.com" className="uppercase text-white font-semibold" >numan99@gmail.com
                            </a>
                        </li>
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >PHONE</h6>
                            <a href="tel:+923064510974" className="uppercase text-white font-semibold" >03064510974
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-wrap items-center gap-7 text-gray-300' >{G.socialLinks.map(v => <li key={v.title}>
                        <a href={v.url} className='font-semibold rounded-full overflow-hidden h-12 w-12' >
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
                            name='name'
                            placeholder='Name'
                            className='w-full block text-sm rounded-md px-4 py-2 focus:outline-none' />
                        <textarea
                            name="message"
                            placeholder='Message'
                            className='w-full block text-sm rounded-md px-4 py-2 focus:outline-none'
                        >

                        </textarea>
                        <C.Button
                            type='submit'
                            className='w-full text-sm rounded-md' >
                            send
                        </C.Button>
                    </div>
                </div>
            </form>
        </C.Section>
    )
}

export default Contact