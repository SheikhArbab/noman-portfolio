import React from 'react';
import * as C from "@/components/index";
import G from "@/constants/index";
import { FaArrowRightLong } from 'react-icons/fa6';

const WhatIDo: React.FC = () => {

    return (
        <C.Section className='py-8 md:py-20' id='what'>
            <h1 className="text-center font-bold text-2xl md:text-7xl ">What I Do ?</h1>
            <ul className='flex flex-wrap items-center justify-center gap-3 md:gap-8 py-5 md:py-24' >
                {G.cardData.map(v => <li
                    key={v.title}
                    className='border border-black/90 h-40 w-full lg:w-[25rem] p-8 flex flex-col items-start gap-4 duration-300 transition-all
                    group overflow-hidden hover:rotate-12 hover:bg-gray-200'
                >
                    <v.Icon size={50} className='group-hover:-translate-y-10 group-hover:opacity-0 duration-500 transition-all' />
                    <h1 className='capitalize font-semibold text-sm md:text-2xl' > {v.title}</h1>
                </li>)}
                <li className='  h-40 w-full lg:w-[25rem] p-8 flex flex-col items-start gap-4 duration-300 transition-all
                    group overflow-hidden   bg-gray-300' >
                    <h6 className='text-xs md:text-2xl font-semibold' >Let's create something amazing together!</h6>
                    <a href="#contact">
                        <C.Button className='text-xs sm:text-sm' >
                            contact now <FaArrowRightLong />
                        </C.Button>
                    </a>
                </li>
            </ul>
        </C.Section>
    )
}

export default WhatIDo