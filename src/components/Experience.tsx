import React from 'react';
import * as C from "@/components/index";

const Experience: React.FC = () => {
    return (
        <C.Section className='py-8 md:py-20' id='experience'>
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
        </C.Section>
    )
}

export default Experience