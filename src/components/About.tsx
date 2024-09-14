import React from 'react';
import * as C from "@/components/index";

const About: React.FC = () => {
    return (
        <C.Section className='py-8 md:py-20 flex flex-wrap items-center justify-between' id='about' >
            <div>
                <p>
                    Hello, I’m Numan Hussain, a dedicated and innovative Graphic Designer based in Islamabad, Pakistan. With a strong foundation in graphic design, web design, and digital marketing, I specialize in crafting engaging and user-centric digital experiences across web, mobile, and tablet platforms. I am passionate about transforming ideas into visually appealing and functional designs that enhance user experiences and drive success.
                </p>
            </div>
            <div className='relative  h-fit w-96 z-10' >
                <img
                    className='grayscale-[1] object-contain md:w-[25rem]'
                    src="/imgs/about.png"
                    alt="Numan Hussain"
                />
                <img
                    className='absolute bottom-0 right-0 -rotate-12'
                    src="/imgs/sign.png"
                    alt="Numan Hussain"
                />
                <div className='h-[55%] w-full bg-gray-400 p-20 absolute bottom-0 -z-10' >
                </div>
            </div>
        </C.Section>
    )
}

export default About