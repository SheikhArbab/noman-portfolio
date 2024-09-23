import { IconType } from 'react-icons';
import { LuPencil } from 'react-icons/lu';
import { CiMobile3 } from 'react-icons/ci';
import { CgWebsite } from 'react-icons/cg';
import { SiMaterialdesignicons } from 'react-icons/si';
import {
    FaChartPie,
    FaCode,
    FaHandsHelping,
} from "react-icons/fa";
import { MdWork, MdReviews } from "react-icons/md";
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
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/463c18164060365.63f00a86bfdf8.jpg",
                title: "Logo Folio",
                url: "https://www.behance.net/gallery/164060365/MY-LOGO-FOLIO"
            },
            {
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0f52af158276863.63887859b2c3a.jpg",
                title: "My Portfolio",
                url: "https://www.behance.net/gallery/158276863/My-Graphic-Designing-Portfolio"
            },
            {
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5d84cc171535451.64701a5b0053e.jpg",
                title: "Social Media Post Design",
                url: "https://www.behance.net/gallery/171535451/Real-Estate-Social-Media-Posts"
            },
            {
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f1fef1171075719.6468a62d959ae.jpg",
                title: "Soul Swami Client",
                url: "https://www.behance.net/gallery/171075719/Project-Soul-swami"
            },
            {
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f2bd65126452763.612df5b67a7b4.jpg",
                title: "Social Media Post 2",
                url: "https://www.behance.net/gallery/126452763/SOCIAL-MEDIA-POSTS"
            },
            {
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5b6968185443119.656465fb066d6.jpg",
                title: "New Metro City Lahore Branding",
                url: "https://www.behance.net/gallery/185443119/Revealing-Something-Big-in-Lahore"
            },
            {
                img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c31133170619375.64617dcf7c155.jpg",
                title: "Gaming Logos",
                url: "https://www.behance.net/gallery/170619375/Gaming-Concepts-Logos"
            }
        ];

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

    adminNav: {
        icon: IconType;
        title: string;
        url: string;
    }[] = [
            {
                icon: FaChartPie,
                title: "Dashboard",
                url: "/admin/dashboard"
            },
            {
                icon: FaCode,
                title: "Skills",
                url: "/admin/skills"
            },
            {
                icon: MdWork,
                title: "Projects",
                url: "/admin/projects"
            },
            {
                icon: MdReviews,
                title: "Testimonial",
                url: "/admin/testimonial"
            },
            {
                icon: FaHandsHelping,
                title: "Contact",
                url: "/admin/contact"
            },
        ]

}

export default new GenericClass();
