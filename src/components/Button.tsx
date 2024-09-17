import React, { ReactNode } from 'react';
import * as C from "@/components/index"

interface Props {
    children: ReactNode;
    className?: string;
    isLoading?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Button: React.FC<Props> = (
    {
        children,
        onClick,
        className = '',
        type = "button",
        isLoading = false
    }
) => <button
    disabled={isLoading}
    type={type}
    className={`transition-all duration-300 uppercase border py-2 px-7 disabled:cursor-not-allowed disabled:opacity-60 disabled:scale-100 disabled:bg-black/40
            border-black rounded-full tracking-wider flex items-center justify-center gap-4
    bg-gray-300 hover:bg-black/80 hover:scale-90 hover:text-white text-black/80
    ${className}`}
    onClick={onClick}>
        {isLoading ? <C.Spinner size='4' /> : children}
    </button>

export default Button;
