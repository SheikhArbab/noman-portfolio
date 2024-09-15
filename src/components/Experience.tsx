import React from 'react';
import G from "@/constants/index";
import * as C from "@/components/index";
import { FaDownload } from "react-icons/fa6";


interface ExperienceCardProps {
    title: string;
    date: string;
    role: string;
}


const Experience: React.FC = () => {
    return (
        <C.Section className='py-8 md:py-20 ' id='experience'>
            <div className='flex flex-wrap-reverse items-center justify-between gap-12' >
                <div className='flex-1' >
                    {G.ExperienceCard.map(v => <ExperienceCard key={v.title} date={v.date} title={v.title} role={v.role} />)}
                </div>
                <div className='w-full md:w-1/2' >
                    <h1 className="font-bold text-2xl md:text-7xl mb-5 md:mb-20 ">
                        My Experiences
                    </h1>
                    <div>
                        <h6 className='font-semibold text-sm md:text-xl mb-4' >Let's work together, I'm open for part time / freelance</h6>
                        <p className='text-sm md:text-xl' >My journey has been marked by a commitment to creating intuitive, engaging, and technically feasible designs that enhance user experiences and drive business success.</p>
                    </div>
                    <a href="/cv.pdf">
                        <C.Button className='text-sm md:text-xl md:mt-6 mt-8' >
                            download Cv <FaDownload />
                        </C.Button>
                    </a>
                </div>
            </div>
        </C.Section>
    )
}

export default Experience


const ExperienceCard: React.FC<ExperienceCardProps> = ({ date, role, title }) => {
    return (
        <div className='font-bold py-3 md:py-6 border-0 border-b-2 border-black/80' >
            <h6 className='text-sm mb-1' >{title}</h6>
            <div className='w-full flex flex-wrap items-center justify-between gap-4 capitalize' >
                <h1 className='text-sm md:text-2xl ' >{role}</h1>
                <p className='text-xs' >{date}</p>
            </div>
        </div>
    )
}