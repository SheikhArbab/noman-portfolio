import * as C from "@/components/index";
import { useState } from "react";

export default function Header() {
    const links: { title: string; url: string }[] = [
        { title: 'About Me', url: '#about' },
        { title: 'What I Do?', url: '#what' },
        { title: 'My Skills', url: '#skills' },
        { title: 'Experience', url: '#experience' },
        { title: 'Portfolio', url: '#portfolio' },
        { title: 'Testimonials', url: '#testimonials' },
    ];

    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <header className=" bg-white fixed inset-x-0 top-0">
            <div className="mx-auto flex items-center justify-between flex-wrap container px-2 py-8 gap-8" >
                <figure className="w-40" >
                    <img src="/imgs/logo.png" className="w-full h-full object-contain" alt="noman" />
                </figure>
                <nav>
                    <ul className="hidden md:flex flex-wrap items-center space-x-10">
                        {links.map((link) => (
                            <li key={link.title} className="relative h-fit w-fit before:absolute before:w-[120%] before:h-[0.20rem] before:rounded-full before:bg-black/80 before:-translate-x-1/2 before:left-1/2  before:-bottom-2 before:opacity-0 hover:before:opacity-100 before:duration-300 before:transition-all">
                                <a href={link.url} className="capitalize text-black/80 font-semibold ">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="hidden md:block" >
                    <C.Button title="let's talk" />
                </a>
                {/* mobile nav start */}
                <label onChange={() => setIsChecked(!isChecked)} className="hamburger md:hidden">
                    <input type="checkbox" checked={isChecked} />
                    <svg viewBox="0 0 32 32">
                        <path
                            className="line line-top-bottom"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path className="line" d="M7 16 27 16" />
                    </svg>
                </label>
            </div>
            <nav className={`duration-300 transition-all overflow-hidden w-full ${isChecked ? "max-h-96" : "max-h-0"
                }`}
            >
                <ul className="bg-white py-8 flex flex-col gap-6 px-4">
                    {links.map((link) => (
                        <li key={link.title} className="relative h-fit w-fit before:absolute before:w-full before:h-[0.20rem] before:rounded-full before:bg-black/80  before:-bottom-2 before:opacity-0 hover:before:opacity-100 before:duration-300 before:transition-all">
                            <a href={link.url} className="capitalize text-black/80 font-bold text-xl ">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* mobile nav end */}


        </header>
    );
}
