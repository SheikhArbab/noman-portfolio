import React from "react";
import * as C from "@/components/index";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";


const RootLayout: React.FC = () => <><C.ScrollTop /> <Outlet /> <Toaster /></>

export default RootLayout