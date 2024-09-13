export default function Header() {
    const links: { title: string; url: string }[] = [
        { title: 'About Me', url: '#about' },
        { title: 'What I Do?', url: '#what' },
        { title: 'My Skills', url: '#skills' },
        { title: 'Experience', url: '#experience' },
        { title: 'Portfolio', url: '#portfolio' },
        { title: 'Testimonials', url: '#testimonials' },
    ];

    return (
        <header className="bg-green-400 fixed inset-x-0 top-0 flex items-center justify-between">
            <figure>
                <img src="/imgs/logo.png" className="w-full h-full object-contain bg-gray-400" alt="noman" />
            </figure>

            <nav>
                <ul className="flex space-x-4">
                    {links.map((link) => (
                        <li key={link.title}>
                            <a href={link.url} className="text-white hover:text-gray-200">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <button></button>

        </header>
    );
}
