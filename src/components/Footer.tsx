

export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black/80" >
            <div className="mx-auto container px-2 py-20" >
                <div className="flex items-center justify-between gap-4 flex-wrap "  >
                    <div>
                        <h6 className="text-white font-bold" >HAVE PROJECT IN MIND ?</h6>
                        <h1 className="text-white font-bold text-5xl md:text-8xl" >Let's Talk !</h1>
                    </div>
                    <div className="flex items-center gap-7 bg-red-400 md:w-[50%]" >
                        <p>IT’S TIME TO START MAKING SOMETHING AMAZING TOGETHER.</p>
                        <a href="#" className="transition-all duration-300 uppercase border flex items-center justify-center
                           tracking-wider bg-gray-300 hover:bg-white  rounded-[80%]  w-64 h-64">
                            start a project
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-48 py-20" >
                    <hr className="opacity-30" />
                    <hr className="opacity-30" />
                </div>
                <div className="flex items-center justify-between gap-4 flex-wrap" >
                    <ul className="flex items-center gap-14 flex-wrap" >
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >address</h6>
                            <a className="uppercase text-white font-semibold" >Islamabad, Pakistan</a>
                        </li>
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >EMAIL</h6>
                            <a href="mailto:numan99@gmail.com" className="uppercase text-white font-semibold" >numan99@gmail.com
                            </a>
                        </li>
                        <li>
                            <h6 className="uppercase text-white/40 font-semibold" >PHONE</h6>
                            <a href="tel:+923064510974" className="uppercase text-white font-semibold" >03064510974
                            </a>
                        </li>
                    </ul>
                    <p className="text-white text-xs" >COPYRIGHT &copy; Numan Hussain {currentYear}. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    )
}
