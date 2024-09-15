import { IconType } from 'react-icons';
import { LuPencil } from 'react-icons/lu';
import { CiMobile3 } from 'react-icons/ci';
import { CgWebsite } from 'react-icons/cg';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaBehance, FaFacebookF, FaLinkedin, FaRegLightbulb } from 'react-icons/fa6';

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
                url: "https://www.behance.net/numanhussain021"
            },
            {
                Icon: FaFacebookF,
                title: "facebook",
                url: "https://www.facebook.com/profile.php?id=61559672070345"
            },
            {
                Icon: FaLinkedin,
                title: "Linkedin",
                url: "https://www.linkedin.com/in/numan-hussain-9864b0209"
            }
        ];

    skillsData: {
        title: string;
        count: number;
    }[] = [
            { title: "Adobe Photoshop", count: 80 },
            { title: "Adobe Illustrator", count: 60 },
            { title: "Adobe Premier Pro", count: 20 },
            { title: "Capcut PC", count: 50 },
            { title: "Figma", count: 30 },
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

    testimonialData: {
        date: string;
        title: string;
        about: string;
    }[] = [
            {
                date: "(2019-2020)",
                title: "Muhammad Usman Arshad, CEO, Checkmate Consultancy",
                about: "During Numan's internship at Checkmate Consultancy, their creativity and dedication were clear from day one. They consistently demonstrated a strong work ethic and quickly adapted to our fast-paced environment. Their eye for design and passion for learning made them an asset to the team. I have no doubt they will continue to excel in their career."
            },
            {
                date: "(2021-2022)",
                title: "Shehab Gargash, CEO, Gargash Autos UAE",
                about: "Numan Hussain was an integral part of our design team at Gargash Autos. As Senior Graphic Designer, their innovative ideas and design expertise helped elevate our brand’s visual identity. Their attention to detail, professionalism, and ability to manage multiple projects efficiently made them a valuable team member. I highly recommend them for any creative role"
            },
            {
                date: "(2023- Till Now)",
                title: "Zeeshan Shoukat, CEO, HR Estate & Builders",
                about: "As a Creative Graphic Designer at HR Estate & Builders, Numan Hussain has consistently delivered exceptional design work that resonates with our brand. Their creativity and ability to translate complex ideas into visually appealing designs have been crucial to our marketing success."
            },
        ]


    ExperienceCard: {
        title: string;
        date: string;
        role: string;
    }[] = [
            {
                title: "Gargash Autos UAE",
                role: "Senior Graphic Designer",
                date: "(2021-2022)"
            },
            {
                title: "HR Estate & Builders",
                role: "Creative Lead Designer",
                date: "(2023- Till Now)"
            },
            {
                title: "Checkmate Consultancy",
                role: "Internee Designer",
                date: "(2019-2020)"
            }
        ]

}

export default new GenericClass();
