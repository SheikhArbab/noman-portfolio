import React from 'react';
import * as C from "@/components/index";
import G from "@/constants/index";

interface CardProps {
    date: string;
    title: string;
    about: string;
}

const Testimonial: React.FC = () => {
    return (
        <C.Section className='py-8 md:py-20' id='testimonials'>
            <div className='flex flex-wrap items-center justify-between gap-4'>
                <figure className='w-full md:w-1/2 overflow-hidden rounded-md' >
                    <img src="/imgs/work2.jpg" className='w-full h-full object-cover' />
                </figure>
                <h1 className="font-bold text-2xl md:text-7xl mb-5 md:mb-20 ">
                    Testimonials
                </h1>
            </div>
            {G.testimonialData.map(v => <Card key={v.title} about={v.about} date={v.date} title={v.title} />)}
        </C.Section>
    )
}

export default Testimonial


const Card: React.FC<CardProps> = ({ about, date, title }) => {
    return (
        <>
            <div className='w-full flex flex-wrap  justify-between gap-4 mb-4 py-8 md:py-20' >
                <div className='flex-1 text-sm font-semibold' >
                    <p>{date}</p>
                    <p>{title}</p>
                </div>
                <div className='w-full md:w-[70%]' >
                    <p className='mb-8 ' >{title}</p>
                    <p className='font-semibold text-sm md:text-2xl' >"{about}"</p>
                </div>
            </div>
            <hr className='border-0  border-b-2 border-black/90' />
        </>
    )
}