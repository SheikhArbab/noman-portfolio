import React from "react";
import G from "@/constants/index";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUser } from "../stores/features/authSlice";
import { FaSignOutAlt } from "react-icons/fa";
import { UserState } from "@/types";

const Sidebar: React.FC = () => {

    const dispatch = useDispatch();
    const { value: toggle } = useSelector((state: UserState) => state.toggle);

    return (
        <>
            <aside
                id="default-sidebar"
                className={`
       group top-0 left-0 z-40 overflow-hidden w-full md:w-20 transition-all 
       md:hover:w-64 duration-300 glass absolute md:translate-x-0 h-full ${toggle && " -translate-x-full "
                    }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between pb-16">
                    <ul className="space-y-2 font-medium">

                        {G.adminNav.map(v => <li key={v.title} >
                            <NavLink
                                to={v.url}
                                className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-black/80 group w-full h-10 overflow-md:hidden text-nowrap"
                            >
                                <v.icon className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                                <span className="md:hidden group-hover:block">{v.title}</span>
                            </NavLink>
                        </li>)}

                    </ul>
                    <button
                        onClick={() => dispatch(currentUser({ user: null, token: null }))}
                        className="flex items-center duration-100 transition-all ps-4 gap-3 rounded-lg text-white hover:bg-black/80
                         group w-full h-10 overflow-md:hidden text-nowrap">
                        <FaSignOutAlt className="w-5 h-5 text-gray-300 duration-100 transition-all" />
                        <span className="md:hidden group-hover:block">Log Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;