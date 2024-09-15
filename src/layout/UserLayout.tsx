import { Outlet } from "react-router-dom";
import * as C from "@/components/index";
import React from "react";


const UserLayout: React.FC = () => <>
    <C.Header />
    <main className="min-h-screen w-full text-4xl tracking-wider leading-relaxed text-black/80">
        <Outlet />
    </main>
    <C.Footer />
</>

export default UserLayout