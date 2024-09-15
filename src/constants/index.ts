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
                date: "February 2023",
                title: "CEO Of Global Shopaholics",
                about: "Working with Muiz has been an absolute pleasure. His keen eye for detail and profound understanding of user behavior have consistently elevated our projects. Muiz’s ability to translate complex requirements into intuitive and engaging designs is remarkable. He always goes above and beyond to ensure that the user experience is seamless and delightful. His collaborative approach and innovative mindset make him an invaluable asset to any team."
            },
            {
                date: "November 2022",
                title: "CEO Of Carbonic IT Solutions",
                about: "Muiz's creativity and technical proficiency set him apart as a UX/UI designer. His designs not only meet the client's specifications but also exceed expectations in functionality and user engagement. During his time at Carbonic IT Solutions, Muiz demonstrated exceptional skills in user research and prototype development. His work consistently contributed to our clients' success, and his collaborative spirit made him a key player in our projects."
            },
            {
                date: "September 2019",
                title: "CEO Of DWizardz",
                about: "Muiz brings a unique blend of artistic vision and practical design to every project. His ability to understand user needs and translate them into beautiful, functional designs is exceptional. At DWizardz, Muiz played a crucial role in developing user-friendly interfaces that significantly improved our product offerings. He is a proactive problem solver, always ready to tackle challenges with innovative solutions. I highly recommend him for any UX/UI design role."
            },
        ]


    ExperienceCard: {
        title: string;
        date: string;
        role: string;
    }[] = [
            {
                title: "Global Shopaholics",
                role: "Lead UI/UX Designer",
                date: "August 2020 - February 2023"
            },
            {
                title: "Carbonic IT Solutions",
                role: "Senior UI/UX Designer",
                date: "August 2020 - November 2022"
            },
            {
                title: "DWizardz",
                role: "UI/UX Designer",
                date: "August 2018 - September 2019"
            }
        ]

}

export default new GenericClass();
