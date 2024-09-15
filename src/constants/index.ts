import { IconType } from 'react-icons';
import { LuPencil } from 'react-icons/lu';
import { CiMobile3 } from 'react-icons/ci';
import { CgWebsite } from 'react-icons/cg';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaBehance, FaDribbble, FaLinkedin, FaRegLightbulb } from 'react-icons/fa6';

class GenericClass {
    constructor() {

    }
    currentYear = new Date().getFullYear();

    socialLinks: {
        Icon: IconType;
        url: string;
        title: string
    }[] = [
            {
                Icon: FaBehance,
                title: "Behance",
                url: "#"
            },
            {
                Icon: FaDribbble,
                title: "DRIBBLE",
                url: "#"
            },
            {
                Icon: FaLinkedin,
                title: "Linkedin",
                url: "#"
            }
        ];

    skillsData: {
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

    cardData: { title: string; Icon: IconType }[] = [
        { title: "Graphic Design", Icon: LuPencil },
        { title: "UX/UI Design", Icon: SiMaterialdesignicons },
        { title: "Mobile App Design", Icon: CiMobile3 },
        { title: "Website Design", Icon: CgWebsite },
        { title: "Brand Design", Icon: FaRegLightbulb }
    ];

    projectData: {
        img: string;
        title: string;
        url: string;
    }[] = [
            {
                img: "/imgs/project/1.png",
                title: "project 1",
                url: "#"
            },
            {
                img: "/imgs/project/2.png",
                title: "project 2",
                url: "#"
            },
            {
                img: "/imgs/project/3.png",
                title: "project 3",
                url: "#"
            },
        ]

}

export default new GenericClass();
