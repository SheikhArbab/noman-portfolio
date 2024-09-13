import React from 'react';

interface Props {
    className?: string;
    onClick?: () => void;
    title: string;
}

const Button: React.FC<Props> = ({ className = '', title, onClick }) => {
    return (
        <button
            className={`transition-all duration-300 uppercase border py-2 px-7
                 border-black rounded-full tracking-wider bg-gray-300 hover:bg-black/80 hover:scale-90 hover:text-white
          ${className}`}
            onClick={onClick}>
            {title}
        </button>
    )
}

export default Button;
