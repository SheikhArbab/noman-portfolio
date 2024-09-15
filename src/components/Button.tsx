import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, className = '', onClick, type = "button" }) => {
    return (
        <button
            type={type}
            className={`transition-all duration-300 uppercase border py-2 px-7
                        border-black rounded-full tracking-wider flex items-center justify-center gap-4
                bg-gray-300 hover:bg-black/80 hover:scale-90 hover:text-white text-black/80
                ${className}`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
