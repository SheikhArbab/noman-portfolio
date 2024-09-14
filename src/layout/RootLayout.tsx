import { Outlet } from "react-router-dom";
import * as C from "@/components/index";


const RootLayout = () => {
    return (
        <>
            <C.Header />
            <main className="min-h-screen w-full text-4xl tracking-wider leading-relaxed text-black/80">
                <Outlet />
            </main>
            <C.Footer />
        </>
    )
}

export default RootLayout