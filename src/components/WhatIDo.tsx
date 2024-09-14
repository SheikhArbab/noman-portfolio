import React from 'react';
import * as C from "@/components/index";
import { IconType } from 'react-icons';
import { LuPencil } from 'react-icons/lu';
import { SiMaterialdesignicons } from 'react-icons/si';
import { CiMobile3 } from 'react-icons/ci';
import { CgWebsite } from 'react-icons/cg';
import { FaArrowRightLong, FaRegLightbulb } from 'react-icons/fa6';

const WhatIDo: React.FC = () => {

    const cardData: { title: string; Icon: IconType }[] = [
        { title: "Graphic Design", Icon: LuPencil },
        { title: "UX/UI Design", Icon: SiMaterialdesignicons },
        { title: "Mobile App Design", Icon: CiMobile3 },
        { title: "Website Design", Icon: CgWebsite },
        { title: "Brand Design", Icon: FaRegLightbulb }
    ]

    return (
        <C.Section className='py-8 md:py-20' id='what'>
            <h1 className="text-center font-bold text-2xl md:text-7xl ">What I Do ?</h1>
            <ul className='flex flex-wrap items-center justify- gap-3 md:gap-8 py-5 md:py-24' >
                {cardData.map(v => <li
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