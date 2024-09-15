import React from 'react';
import * as C from "@/components/index";
import CountUp from 'react-countup';

const About: React.FC = () => {

    const progress: {
        title: string;
        count: number;
    }[] = [
            { count: 100, title: "Satisfied Clients" },
            { count: 8, title: "Years Experience" },
            { count: 94, title: "Work Collaboration" }
        ]

    return (
        <C.Section className='py-8 md:py-20 flex flex-wrap items-center justify-between gap-4 md:gap-14' id='about' >
            <div className='w-full lg:flex-1' >
                <div className='flex items-center gap-6 py-3 md:py-8' >
                    <div className='w-3 h-3 rounded-full bg-black/80 ' />
                    <p className='uppercase text-xs font-bold' >GET IN TOUCH WITH ME</p>
                </div>
                <p className='text-sm md:text-3xl font-semibold w-full sm:text-justify ' >
                    With over 3 years of experience as a creative <b>graphic designer</b>, I specialize in delivering visually compelling designs that elevate brands. My expertise spans a wide range of services, including social media content, logo design, and marketing materials. Having collaborated with leading real estate companies and educational institutions, I bring a unique blend of creativity and strategy to every project. Passionate about delivering impactful solutions, I am dedicated to helping clients stand out in competitive markets.
                </p>
                <hr className='border-0 border-b-2 border-black/90 my-4 md:my-16' />
                <ul className='flex flex-wrap items-center justify-between p-0 w-full ' >
                    {progress.map(v => <li key={v.title} className='font-semibold px-4 flex-1' >
                        <h1 className='tracking-tighter md:text-6xl mb-3' >
                            <CountUp
                                start={1}
                                duration={3}
                                end={v.count}
                            />
                            <sub>+</sub> </h1>
                        <p className='text-xs md:text-sm' >{v.title}</p>
                    </li>)}
                </ul>
            </div>
            <div className='relative  h-fit w-[30rem] z-10' >
                <img
                    className='grayscale-[1] object-contain md:w-[25rem] ms-auto'
                    src="/imgs/about.png"
                    alt="Numan Hussain"
                />
                <img
                    className='absolute bottom-0 right-0 -rotate-12'
                    src="/imgs/sign.png"
                    alt="Numan Hussain"
                />
                <div className='h-[55%] w-full bg-gray-400 p-20 absolute bottom-0 -z-10' >
                    <h6 className='uppercase font-bold absolute top-12 -left-4 opacity-80 text-sm -rotate-90' >about me</h6>
                </div>
            </div>
        </C.Section>
    )
}

export default About