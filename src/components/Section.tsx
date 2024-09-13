import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`container px-2 mx-auto ${className}`}>
            {children}
        </section>
    );
}

export default Section;
