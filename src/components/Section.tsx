import React, { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    overflowhidden?: boolean;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id = '', overflowhidden = true }) => <>
    <section id={id} className={`relative container px-2 mx-auto ${overflowhidden && 'overflow-hidden'} ${className}`}>
        {children}
    </section>
    <hr className='border-0  border-b-2 border-black/90' />
</>

export default Section;
