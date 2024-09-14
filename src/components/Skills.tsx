import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import * as C from "@/components/index";

const Skills: React.FC = () => {
    const skills: {
        title: string;
        count: number;
    }[] = [
            { title: "Figma", count: 93 },
            { title: "Adobe XD", count: 96 },
            { title: "Adobe Illustrator", count: 94 },
            { title: "Adobe Photoshop", count: 92 },
            { title: "Wondershare Filmora", count: 93 },
            { title: "Adobe Premier Pro", count: 9 }
        ];
    return (
        <C.Section
            className='py-8 md:py-20'
            id='skills'
            overflowhidden={false}
        >
            <div className='flex flex-wrap gap-5 relative'>
                <div className='lg:sticky top-4 left-0 h-fit md:w-[50%] '>
                    <h1 className="font-bold text-2xl md:text-7xl mb-5 md:mb-20 ">
                        Special Skills
                    </h1>
                    <p className='text-xs md:text-xl md:w-[70%] opacity-90'>
                        My skill set is complemented by a strong command of industry-standard tools such as Adobe XD, Figma, Sketch, Adobe Photoshop, and Adobe Illustrator. Whether it’s refining the finer details of a visual design or executing complex graphics, I leverage these tools to deliver polished and professional outcomes. Additionally, my capabilities extend to Graphic Design, where I blend creativity with strategic thinking to produce visually compelling designs that align with business objectives.
                    </p>
                </div>
                <div className='flex-1 space-y-20 font-semibold p-5'>
                    {skills.map(v => (
                        <div key={v.title}>
                            <p className='mb-2 text-sm md:text-2xl'>{v.title}</p>
                            <div className='relative'>
                                <sup className='absolute right-0 -top-10 text-sm md:text-2xl'>{v.count}%</sup>
                                <ProgressBar height='6px' labelClassName="text-transparent" completed={v.count} bgColor='#000000c9' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </C.Section>
    );
};

export default Skills;
