import React from 'react';
import CountUp from 'react-countup';
import * as C from "@/components/index";
import G from "@/constants/index";
import { FaArrowDownLong } from 'react-icons/fa6';

const Hero: React.FC = () => {
    return (
        <C.Section className='py-8 md:py-20'>
            <h1 className='font-semibold text-6xl md:text-9xl ' >
                Numan Hussain
                <br />
                <span className='hidden md:block mt-3' >
                    Graphic Designer
                </span>
            </h1>
            <div className='flex flex-wrap items-center gap-4 py-8 md:py-20'>
                <div className='font-bold' >
                    <h1 className='text-6xl' >
                        <sup>
                            #
                        </sup>
                        <CountUp
                            start={1}
                            duration={3}
                            end={100}
                        />
                        <sub>
                            +
                        </sub>
                    </h1>
                    <p className='text-xl mt-2' >
                        Successful Project
                    </p>
                </div>
                <i className='border-0 border-l-2 border-black py-16 opacity-0 md:opacity-80' ></i>
                <p className='text-xs md:text-xl md:w-[70%] opacity-90' >
                    Eager and passionate user interface designer with a background in graphic design, web design and
                    digital marketing. Looking for next role within an web/app or product design space to utilize my
                    design/UI/UX skills and enhance user experiences within mobile, tablet and web-based devices.
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className='flex flex-wrap items-center  gap-8' >
                    <p className='text-xs' >
                        &copy;
                        {G.currentYear}
                    </p>
                    <a href="#skills">
                        <C.Button className='bg-transparent text-xs' >
                            Scroll down
                            <FaArrowDownLong />
                        </C.Button>
                    </a>
                </div>
                <ul className='flex flex-wrap items-center gap-7' >{G.socialLinks.map(v => <li key={v.title}>
                    <a href={v.url} className='flex items-center justify-center text-xl font-semibold gap-4' >
                        <v.Icon />
                        <p>{v.title}</p>
                    </a>
                </li>)}
                </ul>
            </div>
        </C.Section>
    )
}

export default Hero