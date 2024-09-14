import React from 'react';
import * as C from "@/components/index";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface Progress {
    title: string;
    count: number;
}

const About: React.FC = () => {
    // `useInView` for the main section
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // List of progress items
    const progress: Progress[] = [
        { count: 100, title: "Satisfied Clients" },
        { count: 8, title: "Years Experience" },
        { count: 94, title: "Work Collaboration" }
    ];

    return (
        <C.Section className='py-8 md:py-20 flex flex-wrap items-center justify-between gap-4 md:gap-14' id='about' ref={sectionRef}>
            <div className='w-full lg:flex-1'>
                <div className='flex items-center gap-6 py-3 md:py-8'>
                    <div className='w-3 h-3 rounded-full bg-black/80' />
                    <p className='uppercase text-xs font-bold'>GET IN TOUCH WITH ME</p>
                </div>
                <p className='text-sm md:text-3xl font-semibold w-full sm:text-justify'>
                    Hello, I’m Numan Hussain, a dedicated and innovative <b>Graphic Designer</b> based in Islamabad, Pakistan. With a strong foundation in graphic design, web design, and digital marketing, I specialize in crafting engaging and user-centric digital experiences across web, mobile, and tablet platforms. I am passionate about transforming ideas into visually appealing and functional designs that enhance user experiences and drive success.
                </p>
                <hr className='border-0 border-b-2 border-black/90 my-4 md:my-16' />
                <ul className='flex flex-wrap items-center justify-between p-0 w-full'>
                    {progress.map((v) => {
                        const { ref: itemRef, inView: itemInView } = useInView({
                            triggerOnce: true,
                            threshold: 0.1,
                        });

                        return (
                            <li key={v.title} className='font-semibold px-4 flex-1' ref={itemRef}>
                                <h1 className='tracking-tighter md:text-6xl mb-3'>
                                    <CountUp
                                        start={itemInView ? 0 : 0}
                                        end={v.count}
                                        duration={3}
                                        preserveValue
                                    />
                                    <sub>+</sub>
                                </h1>
                                <p className='text-xs md:text-sm'>{v.title}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='relative h-fit w-[30rem] z-10'>
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
                <div className='h-[55%] w-full bg-gray-400 p-20 absolute bottom-0 -z-10'>
                    <h6 className='uppercase font-bold absolute top-12 -left-4 opacity-80 text-sm -rotate-90'>about me</h6>
                </div>
            </div>
        </C.Section>
    );
}

export default About;
