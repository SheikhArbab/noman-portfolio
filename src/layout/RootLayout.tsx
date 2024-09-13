import { Outlet } from "react-router-dom";
import * as C from "@/components/index";


const RootLayout = () => {
    return (
        <>
            <C.Header />
            <main className="min-h-screen w-full pt-20 text-4xl tracking-wider leading-relaxed bg-red-500">
                <Outlet />
            </main>
            <C.Footer />
        </>
    )
}

export default RootLayout