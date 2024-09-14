import React from 'react';
import * as C from "@/components/index";
import { IconType } from 'react-icons';
import { LuPencil } from 'react-icons/lu';
import { SiMaterialdesignicons } from 'react-icons/si';
import { CiMobile3 } from 'react-icons/ci';
import { CgWebsite } from 'react-icons/cg';
import { FaRegLightbulb } from 'react-icons/fa6';

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
            <ul className='flex flex-wrap items-center justify-between gap-8 py-5 md:py-24' >
                {cardData.map(v => <li key={v.title} className='border border-black/90 h-40 w-96 p-8' >
                    <v.Icon size={50} />
                    <h1 className='capitalize font-semibold text-2xl' > {v.title}</h1>
                </li>)}
                <li></li>
            </ul>
        </C.Section>
    )
}

export default WhatIDo