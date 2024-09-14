import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id = '' }) => <>
    <section id={id} className={`container px-2 mx-auto overflow-hidden ${className}`}>
        {children}
    </section>
    <hr className='border-0  border-b-2 border-black/90' />
</>

export default Section;
