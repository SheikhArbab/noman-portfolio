import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import * as C from "@/components/index";

const Skills: React.FC = () => {
    const skills: {
        title: string;
        count: number;
    }[] = [
            {
                title: "Figma",
                count: 93
            },
            {
                title: "Adobe XD",
                count: 96
            },
            {
                title: "Adobe Illustrator",
                count: 94
            },
            {
                title: "Adobe Photoshop",
                count: 92
            },
            {
                title: "Wondershare Filmora",
                count: 93
            },
            {
                title: "Adobe Premier Pro",
                count: 9
            }
        ]
    return (
        <C.Section className='py-8 md:py-20' id='skills'>
            {
                skills.map(v => <div key={v.title}>
                    <ProgressBar completed={v.count} bgColor='#000000c9' />
                </div>)
            }
        </C.Section>
    )
}

export default Skills