import React from "react";
import G from "@/constants/index";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { UserState } from "@/types/index";
import { toggleButton } from "@/stores/features/toggleSlice";

const AdminNav: React.FC = () => {

    const dispatch = useDispatch();
    const { value: toggle } = useSelector((state: UserState) => state.toggle);
    const { user } = useSelector((state: UserState) => state.auth);

    return (
        <nav className="relative px-4 py-4 flex justify-between items-center bg-black  ">
            <Link to={"/"} className="text-3xl font-bold leading-none">
                <img width={"50px"} src={"https://raw.githubusercontent.com/SheikhArbab/portfolio-assets/main/logo/logo.webp"} alt="arbab" />
            </Link>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                {
                    G.adminNav.map(v => <li key={v.title} >
                        <NavLink
                            to={v.url}
                            className="text-sm text-gray-400 hover:text-white/80 duration-300 nav"
                        >
                            {v.title}
                        </NavLink>
                    </li>)
                }
            </ul>
            <span className="flex gap-2">
                <Link to={"/profile"}>
                    <img
                        className="  object-cover w-9 h-9  inline-block lg:ml-auto lg:mr-3   border-white border-3 bg-gray-50  text-sm text-gray-900 font-bold  rounded-full transition duration-200"
                        src={user ? user.avatar : ""}
                    />
                </Link>
                <label id="" className="hamburger md:hidden cursor-pointer">
                    <input
                        id=""
                        onClick={() => dispatch(toggleButton())}
                        type="checkbox"
                        className="hidden"
                        defaultChecked={!toggle}
                    />
                    <svg viewBox="0 0 32 32" className="h-8">
                        <path
                            className="line line-top-bottom menu"
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                        />
                        <path className="line menu" d="M7 16 27 16" />
                    </svg>
                </label>
            </span>
        </nav>
    );
};

export default AdminNav;