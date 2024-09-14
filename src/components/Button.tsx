import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, className = '', onClick }) => {
    return (
        <button
            className={`transition-all duration-300 uppercase border py-2 px-7
                        border-black rounded-full tracking-wider flex items-center justify-center gap-4
                bg-gray-300 hover:bg-black/80 hover:scale-90 hover:text-white
                ${className}`}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
