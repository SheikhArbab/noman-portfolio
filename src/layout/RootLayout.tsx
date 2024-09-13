import { Outlet } from "react-router-dom";
import * as C from "@/components/index";


const RootLayout = () => {
    return (
        <>
            <C.Header />
            <Outlet />
            <C.Footer />
        </>
    )
}

export default RootLayout